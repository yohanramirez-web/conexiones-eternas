import type { VercelRequest, VercelResponse } from '@vercel/node';

export interface PropheticPair {
  passage: string;
  text: string;
}

export interface LocalizedMeditationContent {
  title: string;
  otProphecy: PropheticPair;
  ntFulfillment: PropheticPair;
  guidedReflection: string;
  meditationPrompt: string;
}

export interface DailyMeditationRecord {
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

export const FALLBACK_MEDITATION: DailyMeditationRecord = {
  date: new Date().toISOString(),
  title: "The Suffering Servant and Our Peace",
  otProphecy: {
    passage: "Isaiah 53:4-5",
    text: "Surely He has borne our griefs and carried our sorrows; yet we esteemed Him stricken, smitten by God, and afflicted. But He was pierced for our transgressions, He was crushed for our iniquities; upon Him was the chastisement that brought us peace, and with His wounds we are healed."
  },
  ntFulfillment: {
    passage: "1 Peter 2:24",
    text: "He Himself bore our sins in His body on the tree, that we might die to sin and live to righteousness. By His wounds you have been healed."
  },
  guidedReflection: [
    "Seven centuries before the Roman Empire perfected the brutality of crucifixion, the prophet Isaiah gazed across time to perceive the holy mystery of divine redemption. He did not describe a conqueror ascending on an earthly throne of gold, but an innocent Servant willingly absorbing the sorrows, griefs, and moral rebellion of a broken world.",
    "On Golgotha, this ancient prophetic scroll met history with staggering precision. Yeshua of Nazareth did not retreat from the piercing thorns, the nails, or the spear that cleaved His side. In that sacred moment of supreme surrender, the cosmic penalty that separated humanity from its Creator was fully satisfied, turning an instrument of imperial execution into the fountainhead of everlasting peace.",
    "For the believer today, this is not merely an ancient historical record; it is our present refuge and anchor of hope. Whatever weight of guilt, exhaustion, or anxiety you face in this hour, know with unshakable confidence that the chastisement for your peace has already been paid in full. You are invited to cease striving, lay down your burdens, and walk today in the restorative wholeness of His triumphant grace."
  ].join("\n\n"),
  meditationPrompt: "How does resting in the finished, victorious wounds of Yeshua transform the anxiety or burden you are carrying right now?",
  translations: {
    en: {
      title: "The Suffering Servant and Our Peace",
      otProphecy: {
        passage: "Isaiah 53:4-5",
        text: "Surely He has borne our griefs and carried our sorrows; yet we esteemed Him stricken, smitten by God, and afflicted. But He was pierced for our transgressions, He was crushed for our iniquities; upon Him was the chastisement that brought us peace, and with His wounds we are healed."
      },
      ntFulfillment: {
        passage: "1 Peter 2:24",
        text: "He Himself bore our sins in His body on the tree, that we might die to sin and live to righteousness. By His wounds you have been healed."
      },
      guidedReflection: [
        "Seven centuries before the Roman Empire perfected the brutality of crucifixion, the prophet Isaiah gazed across time to perceive the holy mystery of divine redemption. He did not describe a conqueror ascending on an earthly throne of gold, but an innocent Servant willingly absorbing the sorrows, griefs, and moral rebellion of a broken world.",
        "On Golgotha, this ancient prophetic scroll met history with staggering precision. Yeshua of Nazareth did not retreat from the piercing thorns, the nails, or the spear that cleaved His side. In that sacred moment of supreme surrender, the cosmic penalty that separated humanity from its Creator was fully satisfied, turning an instrument of imperial execution into the fountainhead of everlasting peace.",
        "For the believer today, this is not merely an ancient historical record; it is our present refuge and anchor of hope. Whatever weight of guilt, exhaustion, or anxiety you face in this hour, know with unshakable confidence that the chastisement for your peace has already been paid in full. You are invited to cease striving, lay down your burdens, and walk today in the restorative wholeness of His triumphant grace."
      ].join("\n\n"),
      meditationPrompt: "How does resting in the finished, victorious wounds of Yeshua transform the anxiety or burden you are carrying right now?"
    },
    es: {
      title: "El Siervo Sufriente y Nuestra Paz",
      otProphecy: {
        passage: "Isaías 53:4-5",
        text: "«Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.»"
      },
      ntFulfillment: {
        passage: "1 Pedro 2:24",
        text: "«Quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados.»"
      },
      guidedReflection: [
        "Siete siglos antes de que el Imperio Romano perfeccionara la crueldad de la crucifixión, el profeta Isaías contempló a través del tiempo el misterio sagrado de la redención divina. No describió a un conquistador que ascendía a un trono terrenal de oro, sino a un Siervo inocente que absorbió voluntariamente las penas, dolores y la rebelión de una creación quebrantada.",
        "En el Gólgota, ese antiguo pergamino profético halló su cumplimiento con una precisión asombrosa. Yeshúa de Nazaret no rehuyó los azotes, la corona de espinas ni los clavos del madero. En aquel momento de entrega suprema, la deuda cósmica que separaba a la humanidad del Creador quedó cancelada para siempre, transformando un instrumento de castigo en el manantial de la paz eterna.",
        "Para el creyente de hoy, esto no es solo un registro histórico; es nuestro refugio presente y ancla del alma. Cualquiera que sea la carga de culpa, ansiedad o cansancio que enfrentes en esta hora, descansa en la certeza inquebrantable de que el precio de tu paz ya fue pagado. Ríndele hoy tus preocupaciones y camina en la plenitud sanadora de Su gracia triunfante."
      ].join("\n\n"),
      meditationPrompt: "¿De qué manera descansar en las llagas victoriosas y consumadas de Cristo transforma hoy la angustia o inquietud específica que llevas en tu corazón?"
    }
  }
};

async function getStoredMeditation(): Promise<DailyMeditationRecord | null> {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  try {
    const res = await fetch(`${url.replace(/\/+$/, '')}/get/latest_daily_meditation`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json() as { result?: any };
    if (!data || data.result === null || data.result === undefined) {
      return null;
    }

    let parsed = data.result;
    if (typeof parsed === 'string') {
      try {
        parsed = JSON.parse(parsed);
      } catch {
        // Return raw if not JSON
      }
    }

    if (parsed && typeof parsed === 'object' && parsed.title && parsed.otProphecy) {
      return parsed as DailyMeditationRecord;
    }
    return null;
  } catch (err) {
    console.warn('[Storage Error] Could not retrieve meditation from KV:', err);
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(200).end();
  }

  // Set 24-hour cache header with stale-while-revalidate as requested
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  try {
    const stored = await getStoredMeditation();
    if (stored) {
      return res.status(200).json(stored);
    }
  } catch (e) {
    console.warn('[Meditation Read Exception]:', e);
  }

  // Graceful Fallback if KV is empty or unreachable
  const fallback = {
    ...FALLBACK_MEDITATION,
    date: new Date().toISOString()
  };

  return res.status(200).json(fallback);
}
