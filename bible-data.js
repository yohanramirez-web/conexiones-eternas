/**
 * ============================================================================
 * ETERNAL CONNECTIONS - HOLY BIBLE ENGINE & 66 BOOKS REPOSITORY
 * ============================================================================
 * Complete Canon (Genesis to Revelation / Génesis a Apocalipsis)
 * Multilingual support: Reina Valera 1960 (ES), World English Bible (WEB), King James Version (KJV)
 */

const BIBLE_BOOKS = [
  // --- OLD TESTAMENT / ANTIGUO TESTAMENTO (39 Books) ---
  { id: 1,  testament: "OT", name: { en: "Genesis", es: "Génesis" }, chapters: 50 },
  { id: 2,  testament: "OT", name: { en: "Exodus", es: "Éxodo" }, chapters: 40 },
  { id: 3,  testament: "OT", name: { en: "Leviticus", es: "Levítico" }, chapters: 27 },
  { id: 4,  testament: "OT", name: { en: "Numbers", es: "Números" }, chapters: 36 },
  { id: 5,  testament: "OT", name: { en: "Deuteronomy", es: "Deuteronomio" }, chapters: 34 },
  { id: 6,  testament: "OT", name: { en: "Joshua", es: "Josué" }, chapters: 24 },
  { id: 7,  testament: "OT", name: { en: "Judges", es: "Jueces" }, chapters: 21 },
  { id: 8,  testament: "OT", name: { en: "Ruth", es: "Rut" }, chapters: 4 },
  { id: 9,  testament: "OT", name: { en: "1 Samuel", es: "1 Samuel" }, chapters: 31 },
  { id: 10, testament: "OT", name: { en: "2 Samuel", es: "2 Samuel" }, chapters: 24 },
  { id: 11, testament: "OT", name: { en: "1 Kings", es: "1 Reyes" }, chapters: 22 },
  { id: 12, testament: "OT", name: { en: "2 Kings", es: "2 Reyes" }, chapters: 25 },
  { id: 13, testament: "OT", name: { en: "1 Chronicles", es: "1 Crónicas" }, chapters: 29 },
  { id: 14, testament: "OT", name: { en: "2 Chronicles", es: "2 Crónicas" }, chapters: 36 },
  { id: 15, testament: "OT", name: { en: "Ezra", es: "Esdras" }, chapters: 10 },
  { id: 16, testament: "OT", name: { en: "Nehemiah", es: "Nehemías" }, chapters: 13 },
  { id: 17, testament: "OT", name: { en: "Esther", es: "Ester" }, chapters: 10 },
  { id: 18, testament: "OT", name: { en: "Job", es: "Job" }, chapters: 42 },
  { id: 19, testament: "OT", name: { en: "Psalms", es: "Salmos" }, chapters: 150 },
  { id: 20, testament: "OT", name: { en: "Proverbs", es: "Proverbios" }, chapters: 31 },
  { id: 21, testament: "OT", name: { en: "Ecclesiastes", es: "Eclesiastés" }, chapters: 12 },
  { id: 22, testament: "OT", name: { en: "Song of Solomon", es: "Cantares" }, chapters: 8 },
  { id: 23, testament: "OT", name: { en: "Isaiah", es: "Isaías" }, chapters: 66 },
  { id: 24, testament: "OT", name: { en: "Jeremiah", es: "Jeremías" }, chapters: 52 },
  { id: 25, testament: "OT", name: { en: "Lamentations", es: "Lamentaciones" }, chapters: 5 },
  { id: 26, testament: "OT", name: { en: "Ezekiel", es: "Ezequiel" }, chapters: 48 },
  { id: 27, testament: "OT", name: { en: "Daniel", es: "Daniel" }, chapters: 12 },
  { id: 28, testament: "OT", name: { en: "Hosea", es: "Oseas" }, chapters: 14 },
  { id: 29, testament: "OT", name: { en: "Joel", es: "Joel" }, chapters: 3 },
  { id: 30, testament: "OT", name: { en: "Amos", es: "Amós" }, chapters: 9 },
  { id: 31, testament: "OT", name: { en: "Obadiah", es: "Abdías" }, chapters: 1 },
  { id: 32, testament: "OT", name: { en: "Jonah", es: "Jonás" }, chapters: 4 },
  { id: 33, testament: "OT", name: { en: "Micah", es: "Miqueas" }, chapters: 7 },
  { id: 34, testament: "OT", name: { en: "Nahum", es: "Nahum" }, chapters: 3 },
  { id: 35, testament: "OT", name: { en: "Habakkuk", es: "Habacuc" }, chapters: 3 },
  { id: 36, testament: "OT", name: { en: "Zephaniah", es: "Sofonías" }, chapters: 3 },
  { id: 37, testament: "OT", name: { en: "Haggai", es: "Hageo" }, chapters: 2 },
  { id: 38, testament: "OT", name: { en: "Zechariah", es: "Zacarías" }, chapters: 14 },
  { id: 39, testament: "OT", name: { en: "Malachi", es: "Malaquías" }, chapters: 4 },

  // --- NEW TESTAMENT / NUEVO TESTAMENTO (27 Books) ---
  { id: 40, testament: "NT", name: { en: "Matthew", es: "Mateo" }, chapters: 28 },
  { id: 41, testament: "NT", name: { en: "Mark", es: "Marcos" }, chapters: 16 },
  { id: 42, testament: "NT", name: { en: "Luke", es: "Lucas" }, chapters: 24 },
  { id: 43, testament: "NT", name: { en: "John", es: "Juan" }, chapters: 21 },
  { id: 44, testament: "NT", name: { en: "Acts", es: "Hechos" }, chapters: 28 },
  { id: 45, testament: "NT", name: { en: "Romans", es: "Romanos" }, chapters: 16 },
  { id: 46, testament: "NT", name: { en: "1 Corinthians", es: "1 Corintios" }, chapters: 16 },
  { id: 47, testament: "NT", name: { en: "2 Corinthians", es: "2 Corintios" }, chapters: 13 },
  { id: 48, testament: "NT", name: { en: "Galatians", es: "Gálatas" }, chapters: 6 },
  { id: 49, testament: "NT", name: { en: "Ephesians", es: "Efesios" }, chapters: 6 },
  { id: 50, testament: "NT", name: { en: "Philippians", es: "Filipenses" }, chapters: 4 },
  { id: 51, testament: "NT", name: { en: "Colossians", es: "Colosenses" }, chapters: 4 },
  { id: 52, testament: "NT", name: { en: "1 Thessalonians", es: "1 Tesalonicenses" }, chapters: 5 },
  { id: 53, testament: "NT", name: { en: "2 Thessalonians", es: "2 Tesalonicenses" }, chapters: 3 },
  { id: 54, testament: "NT", name: { en: "1 Timothy", es: "1 Timoteo" }, chapters: 6 },
  { id: 55, testament: "NT", name: { en: "2 Timothy", es: "2 Timoteo" }, chapters: 4 },
  { id: 56, testament: "NT", name: { en: "Titus", es: "Tito" }, chapters: 3 },
  { id: 57, testament: "NT", name: { en: "Philemon", es: "Filemón" }, chapters: 1 },
  { id: 58, testament: "NT", name: { en: "Hebrews", es: "Hebreos" }, chapters: 13 },
  { id: 59, testament: "NT", name: { en: "James", es: "Santiago" }, chapters: 5 },
  { id: 60, testament: "NT", name: { en: "1 Peter", es: "1 Pedro" }, chapters: 5 },
  { id: 61, testament: "NT", name: { en: "2 Peter", es: "2 Pedro" }, chapters: 3 },
  { id: 62, testament: "NT", name: { en: "1 John", es: "1 Juan" }, chapters: 5 },
  { id: 63, testament: "NT", name: { en: "2 John", es: "2 Juan" }, chapters: 1 },
  { id: 64, testament: "NT", name: { en: "3 John", es: "3 Juan" }, chapters: 1 },
  { id: 65, testament: "NT", name: { en: "Jude", es: "Judas" }, chapters: 1 },
  { id: 66, testament: "NT", name: { en: "Revelation", es: "Apocalipsis" }, chapters: 22 }
];

// Mapping to detect prophecies associated with specific chapters
const MESSIANIC_CHAPTER_MAP = {
  // Book ID : { chapterNumber : prophecyId }
  33: { 5: 1 },   // Micah 5 -> Bethlehem
  23: { 7: 2, 9: 4, 53: 11 }, // Isaiah 7, 9, 53
  1:  { 12: 3 },  // Genesis 12 -> Abrahamic covenant
  10: { 7: 3 },   // 2 Samuel 7 -> Davidic line
  38: { 9: 5, 11: 7 }, // Zechariah 9 (Triumphal entry), Zechariah 11 (30 silver coins)
  19: { 41: 6, 22: 9, 34: 10, 16: 13, 110: 14 }, // Psalms 41, 22, 34, 16, 110
  2:  { 12: 10 }, // Exodus 12 -> Passover Lamb
  27: { 7: 14 }   // Daniel 7 -> Everlasting kingdom
};

class BibleRepository {
  constructor() {
    this.cache = new Map();
    this.currentTranslation = 'RV1960'; // Default Spanish
  }

  getBooks() {
    return BIBLE_BOOKS;
  }

  getBookById(id) {
    return BIBLE_BOOKS.find(b => b.id === Number(id));
  }

  getBookByName(name, lang = 'en') {
    const q = name.toLowerCase().trim();
    return BIBLE_BOOKS.find(b => 
      b.name[lang].toLowerCase() === q ||
      b.name.en.toLowerCase() === q ||
      b.name.es.toLowerCase() === q
    );
  }

  cleanVerseText(rawText) {
    if (!rawText) return "";
    return rawText
      .replace(/<S>\d+<\/S>/g, '') // Remove Strong's concordance tags
      .replace(/<[^>]+>/g, '')      // Remove any HTML tags
      .replace(/\s+/g, ' ')         // Collapse whitespace
      .trim();
  }

  async fetchChapter(bookId, chapter, translation = null) {
    const trans = translation || this.currentTranslation;
    const cacheKey = `${trans}_${bookId}_${chapter}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Try reading from sessionStorage
    try {
      const stored = sessionStorage.getItem(`bible_${cacheKey}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.cache.set(cacheKey, parsed);
        return parsed;
      }
    } catch (_) {}

    try {
      const response = await fetch(`https://bolls.life/get-chapter/${trans}/${bookId}/${chapter}/`);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      const cleaned = data.map(v => ({
        verse: v.verse,
        text: this.cleanVerseText(v.text)
      }));

      this.cache.set(cacheKey, cleaned);
      try {
        sessionStorage.setItem(`bible_${cacheKey}`, JSON.stringify(cleaned));
      } catch (_) {}

      return cleaned;
    } catch (err) {
      console.warn(`Failed to fetch chapter from bolls.life (${trans} ${bookId}:${chapter}):`, err);
      // Fallback generator for foundational prophecy chapters if offline
      return this.getOfflineFallback(bookId, chapter, trans);
    }
  }

  getOfflineFallback(bookId, chapter, translation) {
    // Reverent offline fallback for Isaiah 53
    if (bookId === 23 && chapter === 53) {
      if (translation === 'RV1960') {
        return [
          { verse: 1, text: "¿Quién ha creído a nuestro anuncio? ¿y sobre quién se ha manifestado el brazo de Jehová?" },
          { verse: 3, text: "Despreciado y desechado entre los hombres, varón de dolores, experimentado en quebranto; y como que escondimos de él el rostro, fue menospreciado, y no lo estimamos." },
          { verse: 4, text: "Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido." },
          { verse: 5, text: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados." },
          { verse: 6, text: "Todos nosotros nos descarriamos como ovejas, cada cual se apartó por su camino; mas Jehová cargó en él el pecado de todos nosotros." },
          { verse: 7, text: "Angustiado él, y afligido, no abrió su boca; como cordero fue llevado al matadero; y como oveja delante de sus trasquiladores, enmudeció, y no abrió su boca." }
        ];
      } else {
        return [
          { verse: 1, text: "Who has believed our message? To whom has the arm of Yahweh been revealed?" },
          { verse: 3, text: "He was despised and rejected by men, a man of suffering and acquainted with grief. Like one from whom men hide their face he was despised, and we didn't respect him." },
          { verse: 4, text: "Surely he has borne our sickness and carried our suffering; yet we considered him plagued, struck by God, and afflicted." },
          { verse: 5, text: "But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed." },
          { verse: 6, text: "All we like sheep have gone astray. Everyone has turned to his own way; and Yahweh has laid on him the iniquity of us all." },
          { verse: 7, text: "He was oppressed, yet when he was afflicted he didn't open his mouth. As a lamb that is led to the slaughter, and as a sheep that before its shearers is silent, so he didn't open his mouth." }
        ];
      }
    }

    // John 3
    if (bookId === 43 && chapter === 3) {
      if (translation === 'RV1960') {
        return [
          { verse: 16, text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
          { verse: 17, text: "Porque no envió Dios a su Hijo al mundo para condenar al mundo, sino para que el mundo sea salvo por él." }
        ];
      } else {
        return [
          { verse: 16, text: "For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life." },
          { verse: 17, text: "For God didn't send his Son into the world to judge the world, but that the world should be saved through him." }
        ];
      }
    }

    return null;
  }
}

// Global instance accessible everywhere
window.BIBLE_REPO = new BibleRepository();
