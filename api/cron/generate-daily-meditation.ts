import type { VercelRequest, VercelResponse } from '@vercel/node';

interface PropheticPair {
  passage: string;
  text: string;
}

interface LocalizedMeditationContent {
  title: string;
  otProphecy: PropheticPair;
  ntFulfillment: PropheticPair;
  guidedReflection: string;
  meditationPrompt: string;
}

interface DailyMeditationRecord {
  date: string;
  title: string;
  otProphecy: PropheticPair;
  ntFulfillment: PropheticPair;
  guidedReflection: string;
  meditationPrompt: string;
  translations?: {
    es: LocalizedMeditationContent;
    en: LocalizedMeditationContent;
  };
}

async function saveToStore(data: DailyMeditationRecord): Promise<boolean> {
  let saved = false;

  // 1. Try Vercel Blob if configured
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { put } = await import('@vercel/blob');
      await put('latest_daily_meditation.json', JSON.stringify(data), {
        access: 'public',
        addRandomSuffix: false
      });
      saved = true;
    } catch (blobErr) {
      console.warn('[Blob Storage Error]:', blobErr);
    }
  }

  // 2. Try Upstash / Vercel KV if configured
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    try {
      const cleanUrl = url.replace(/\/+$/, '');
      const res = await fetch(`${cleanUrl}/set/latest_daily_meditation`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (res.ok) saved = true;
    } catch (err) {
      console.warn('[Storage Error] Could not persist meditation to KV/Redis:', err);
    }
  }

  return saved;
}

function cleanAndParseJson(raw: string): any {
  let cleaned = raw.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
  }
  return JSON.parse(cleaned);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Verify Authorization
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.authorization || req.headers['authorization'];
  const querySecret = typeof req.query?.secret === 'string' ? req.query.secret : null;

  if (cronSecret) {
    const isHeaderValid = authHeader === `Bearer ${cronSecret}`;
    const isQueryValid = querySecret === cronSecret;
    if (!isHeaderValid && !isQueryValid) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Invalid or missing Authorization header (Expected: Bearer <CRON_SECRET>).'
      });
    }
  } else if (process.env.NODE_ENV === 'production') {
    return res.status(500).json({
      error: 'Configuration Error',
      message: 'CRON_SECRET environment variable is missing on this deployment.'
    });
  }

  // 2. Verify OpenRouter API Key
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Missing Configuration',
      message: 'OPENROUTER_API_KEY environment variable is not defined.'
    });
  }

  const todayIso = new Date().toISOString();
  const daySeed = new Date().toISOString().split('T')[0];

  const systemPrompt = `You are a world-class senior Messianic theological scholar and devotional author for "Conexiones Eternas" (Eternal Connections).
Your ministry connects Old Testament Hebrew prophecies with their historical fulfillment in Yeshua HaMashiach (Jesus the Messiah), applying them deeply to daily Christian living.

Generate an original, deeply moving daily devotional meditation for date: ${daySeed}.
Select a profound Old Testament messianic prophecy (e.g. from Isaiah, Psalms, Zechariah, Micah, Genesis, Jeremiah, Daniel, Malachi) and its New Testament fulfillment in Christ.

You must respond with ONLY valid JSON (no markdown formatting, no commentary before or after).
The JSON object must strictly have this structure:
{
  "date": "${todayIso}",
  "title": "Contemplative Title in English",
  "otProphecy": {
    "passage": "Old Testament Scripture reference (e.g., Zechariah 12:10)",
    "text": "Full Old Testament scripture quote in English"
  },
  "ntFulfillment": {
    "passage": "New Testament fulfillment reference (e.g., John 19:34-37)",
    "text": "Full New Testament fulfillment scripture quote in English"
  },
  "guidedReflection": "Three rich theological paragraphs separated by double linebreaks (\\n\\n): Paragraph 1 connects prophetic anticipation. Paragraph 2 unpacks historical fulfillment in Yeshua. Paragraph 3 applies this directly to daily Christian living, faith, and peace.",
  "meditationPrompt": "A single closing contemplative question or sentence for prayerful reflection.",
  "translations": {
    "en": {
      "title": "Title in English",
      "otProphecy": { "passage": "Passage Ref", "text": "Quote in English" },
      "ntFulfillment": { "passage": "Passage Ref", "text": "Quote in English" },
      "guidedReflection": "Three paragraphs in English separated by \\n\\n",
      "meditationPrompt": "Closing question in English"
    },
    "es": {
      "title": "Título contemplativo en Español",
      "otProphecy": { "passage": "Referencia AT en Español", "text": "Cita en Español (Reina Valera 1960)" },
      "ntFulfillment": { "passage": "Referencia NT en Español", "text": "Cita en Español (Reina Valera 1960)" },
      "guidedReflection": "Tres párrafos teológicos ricos en Español separados por \\n\\n: Párrafo 1 sobre la anticipación profética. Párrafo 2 sobre el cumplimiento histórico en Yeshúa. Párrafo 3 sobre la aplicación práctica y paz en la vida cristiana diaria.",
      "meditationPrompt": "Una pregunta contemplativa de cierre para reflexionar y orar en Español."
    }
  }
}`;

  try {
    const openRouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://conexiones-eternas.vercel.app',
        'X-Title': 'Conexiones Eternas Daily Meditation Cron'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        models: ['google/gemini-2.5-flash', 'google/gemini-2.5-flash-lite'],
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Please generate today's Messianic prophecy daily meditation for ${daySeed}.` }
        ],
        temperature: 0.7,
        max_tokens: 2500
      })
    });

    if (!openRouterRes.ok) {
      const errorText = await openRouterRes.text();
      console.error('[OpenRouter Error]:', openRouterRes.status, errorText);
      return res.status(502).json({
        error: 'OpenRouter API Error',
        status: openRouterRes.status,
        details: errorText
      });
    }

    const aiData = await openRouterRes.json() as any;
    const rawContent = aiData.choices?.[0]?.message?.content;

    if (!rawContent) {
      return res.status(502).json({
        error: 'Invalid AI Response',
        message: 'No content was generated by OpenRouter.'
      });
    }

    const parsedJson = cleanAndParseJson(rawContent);

    // Validate required fields
    if (!parsedJson.title || !parsedJson.otProphecy || !parsedJson.ntFulfillment || !parsedJson.guidedReflection || !parsedJson.meditationPrompt) {
      return res.status(502).json({
        error: 'Schema Validation Error',
        message: 'AI response did not contain all required meditation fields.',
        raw: parsedJson
      });
    }

    const finalRecord: DailyMeditationRecord = {
      date: parsedJson.date || todayIso,
      title: parsedJson.title,
      otProphecy: {
        passage: parsedJson.otProphecy.passage,
        text: parsedJson.otProphecy.text
      },
      ntFulfillment: {
        passage: parsedJson.ntFulfillment.passage,
        text: parsedJson.ntFulfillment.text
      },
      guidedReflection: parsedJson.guidedReflection,
      meditationPrompt: parsedJson.meditationPrompt,
      translations: parsedJson.translations || {
        en: {
          title: parsedJson.title,
          otProphecy: parsedJson.otProphecy,
          ntFulfillment: parsedJson.ntFulfillment,
          guidedReflection: parsedJson.guidedReflection,
          meditationPrompt: parsedJson.meditationPrompt
        },
        es: {
          title: parsedJson.title,
          otProphecy: parsedJson.otProphecy,
          ntFulfillment: parsedJson.ntFulfillment,
          guidedReflection: parsedJson.guidedReflection,
          meditationPrompt: parsedJson.meditationPrompt
        }
      }
    };

    // Save to persistent storage if configured
    const storedSuccessfully = await saveToStore(finalRecord);

    return res.status(200).json({
      success: true,
      message: 'Daily meditation successfully generated.',
      persisted: storedSuccessfully,
      data: finalRecord
    });
  } catch (error: any) {
    console.error('[Cron Execution Error]:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error?.message || 'Failed to generate meditation'
    });
  }
}
