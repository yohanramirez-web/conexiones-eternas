/**
 * ============================================================================
 * CONEXIONES ETERNAS - NÚCLEO INTERACTIVO Y MOTOR DE AUDIO SAGRADO
 * ============================================================================
 */

// --- 1. BANCO DE DATOS: 14 CONEXIONES MESIÁNICAS FUNDAMENTALES ---
const propheciesData = [
  {
    id: 1,
    title: "El Lugar Exacto del Nacimiento: Belén Efrata",
    category: "nacimiento",
    categoryName: "Nacimiento y Linaje",
    gapYears: "700 años antes de Cristo",
    antiquityYear: 700,
    otBook: "Miqueas 5:2",
    otDate: "~700 a.C.",
    otText: "«Pero tú, Belén Efrata, pequeña para estar entre las familias de Judá, de ti me saldrá el que será Señor en Israel; y sus salidas son desde el principio, desde los días de la eternidad.»",
    ntBook: "Mateo 2:1 & Lucas 2:4-6",
    ntDate: "~4 a.C. - 1 d.C.",
    ntText: "«Cuando Jesús nació en Belén de Judea en días del rey Herodes, vinieron del oriente a Jerusalén unos magos... Y José subió de Galilea... a Judea, a la ciudad de David, que se llama Belén... y se cumplieron los días de su alumbramiento.»",
    insight: "Miqueas especificó el nombre antiguo 'Belén Efrata' para no confundirla con otra Belén en el norte de Israel. Jesús no nació allí por plan humano: un decreto imperial de César Augusto obligó a María y José a viajar a esa aldea justo en los días del parto. Ningún hombre elige el pueblo donde va a nacer."
  },
  {
    id: 2,
    title: "La Señal Milagrosa: La Virgen y Emanuel",
    category: "nacimiento",
    categoryName: "Nacimiento y Linaje",
    gapYears: "735 años antes de Cristo",
    antiquityYear: 735,
    otBook: "Isaías 7:14",
    otDate: "~735 a.C.",
    otText: "«Por tanto, el Señor mismo os dará señal: He aquí que la virgen concebirá, y dará a luz un hijo, y llamará su nombre Emanuel.»",
    ntBook: "Mateo 1:22-23 & Lucas 1:34-35",
    ntDate: "~1 d.C.",
    ntText: "«Todo esto aconteció para que se cumpliese lo dicho por el Señor por medio del profeta: He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel, que traducido es: Dios con nosotros.»",
    insight: "El término hebreo 'Almah' señaló un milagro sin precedentes en la dinastía de David. Cristo no heredó la naturaleza caída de Adán por simiente humana, cumpliendo también Génesis 3:15 sobre 'la simiente de la mujer'."
  },
  {
    id: 3,
    title: "El Linaje Real Prometido: De Abraham y David",
    category: "nacimiento",
    categoryName: "Nacimiento y Linaje",
    gapYears: "1,000 a 2,000 años",
    antiquityYear: 2000,
    otBook: "Génesis 12:3 & 2 Samuel 7:12-13",
    otDate: "~2000 a.C. y ~1000 a.C.",
    otText: "«En ti serán benditas todas las familias de la tierra.» / «Yo levantaré después de ti a uno de tu linaje... y afirmaré para siempre el trono de su reino.»",
    ntBook: "Mateo 1:1 & Lucas 1:32-33",
    ntDate: "~1 d.C.",
    ntText: "«Libro de la genealogía de Jesucristo, hijo de David, hijo de Abraham... Éste será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre; y su reino no tendrá fin.»",
    insight: "El linaje mesiánico se fue estrechando progresivamente a lo largo de 20 siglos. En el año 70 d.C., los romanos destruyeron el Templo de Jerusalén quemando todos los archivos genealógicos de Israel. Nadie después de Jesús podría jamás demostrar descender de David."
  },
  {
    id: 4,
    title: "El Niño Nacido: Dios Fuerte y Príncipe de Paz",
    category: "nacimiento",
    categoryName: "Nacimiento y Linaje",
    gapYears: "720 años antes de Cristo",
    antiquityYear: 720,
    otBook: "Isaías 9:6-7",
    otDate: "~720 a.C.",
    otText: "«Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz. Lo dilatado de su imperio y la paz no tendrán límite...»",
    ntBook: "Lucas 2:11 & Juan 1:1,14",
    ntDate: "~1 - 30 d.C.",
    ntText: "«Que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor... Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.»",
    insight: "Una de las declaraciones más asombrosas del Antiguo Testamento: un ser que nacería como 'niño' humano sería al mismo tiempo llamado 'Dios Fuerte' y 'Padre Eterno'. La encarnación de la Deidad en carne humana profetizada siete siglos antes."
  },
  {
    id: 5,
    title: "Entrada Triunfal: El Rey Justo sobre un Pollino",
    category: "ministerio",
    categoryName: "Ministerio y Vida",
    gapYears: "520 años antes de Cristo",
    antiquityYear: 520,
    otBook: "Zacarías 9:9",
    otDate: "~520 a.C.",
    otText: "«Alégrate mucho, hija de Sion; da voces de júbilo, hija de Jerusalén; he aquí tu rey vendrá a ti, justo y salvador, humilde, y cabalgando sobre un asno, sobre un pollino hijo de asna.»",
    ntBook: "Mateo 21:4-9 & Juan 12:14-15",
    ntDate: "~33 d.C.",
    ntText: "«Todo esto aconteció para que se cumpliese lo dicho por el profeta... He aquí, tu Rey viene a ti, manso, y sentado sobre una asna, sobre un pollino... Y las multitudes clamaban: ¡Hosanna al Hijo de David! ¡Bendito el que viene en el nombre del Señor!»",
    insight: "Mientras los conquistadores de la época entraban sobre caballos de guerra y carruajes dorados sembrando terror, Jesús entró en Jerusalén como Rey de Paz en un humilde pollino, exactamente como Zacarías había escrito."
  },
  {
    id: 6,
    title: "Traición por un Íntimo y Amigo Cercano",
    category: "ministerio",
    categoryName: "Ministerio y Vida",
    gapYears: "1,000 años antes de Cristo",
    antiquityYear: 1000,
    otBook: "Salmo 41:9",
    otDate: "~1000 a.C.",
    otText: "«Aun el hombre de mi paz, en quien yo confiaba, el que de mi pan comía, alzó contra mí el calcañar.»",
    ntBook: "Juan 13:18,21 & Mateo 26:21-25",
    ntDate: "~33 d.C.",
    ntText: "«No hablo de todos vosotros; yo sé a quiénes he elegido; mas para que se cumpla la Escritura: El que come pan conmigo, alzó contra mí su calcañar... De cierto os digo, que uno de vosotros me va a entregar.»",
    insight: "Jesús mismo citó este Salmo durante la Última Cena. No fue entregado por un enemigo visible de Roma o el Sanedrín, sino por uno de sus doce apóstoles que comía de su mismo plato."
  },
  {
    id: 7,
    title: "El Precio de la Traición: 30 Monedas y el Alfarero",
    category: "pasion",
    categoryName: "Pasión y Sacrificio",
    gapYears: "520 años antes de Cristo",
    antiquityYear: 520,
    otBook: "Zacarías 11:12-13",
    otDate: "~520 a.C.",
    otText: "«Y pesaron por mi salario treinta piezas de plata. Y me dijo Jehová: Échalo al tesoro; ¡hermoso precio con que me han apreciado! Y tomé las treinta piezas de plata, y las eché en la casa de Jehová al alfarero.»",
    ntBook: "Mateo 26:15 & 27:3-7",
    ntDate: "~33 d.C.",
    ntText: "«Y ellos le asignaron treinta piezas de plata... Y Judas, arrojando las piezas de plata en el templo, salió y se ahorcó. Los principales sacerdotes dijeron: No es lícito echarlas en el tesoro... y compraron con ellas el campo del alfarero.»",
    insight: "Tres detalles precisos imposibles de coordinar humanamente: 1) La suma exacta (30 monedas de plata), 2) Que el dinero sería lanzado dentro del Templo, y 3) Que terminaría comprando el terreno de un alfarero."
  },
  {
    id: 8,
    title: "Silencioso y Manso ante sus Acusadores",
    category: "pasion",
    categoryName: "Pasión y Sacrificio",
    gapYears: "700 años antes de Cristo",
    antiquityYear: 700,
    otBook: "Isaías 53:7",
    otDate: "~700 a.C.",
    otText: "«Angustiado él, y afligido, no abrió su boca; como cordero fue llevado al matadero; y como oveja delante de sus trasquiladores, enmudeció, y no abrió su boca.»",
    ntBook: "Mateo 27:12-14 & 1 Pedro 2:23",
    ntDate: "~33 d.C.",
    ntText: "«Y siendo acusado por los principales sacerdotes y por los ancianos, nada respondió. Pilato entonces le dijo: ¿No oyes cuántas cosas testifican contra ti? Pero Jesús no le respondió ni una palabra; de tal manera que el gobernador se maravillaba en gran manera.»",
    insight: "Ante acusaciones que conllevaban la crucifixión, cualquier reo defendía su vida desesperadamente. El silencio voluntario de Jesús asombró al gobernador romano Poncio Pilato, cumpliendo la profecía del Cordero de Dios."
  },
  {
    id: 9,
    title: "Crucifixión: Manos y Pies Traspasados y Ropas Sorteadas",
    category: "pasion",
    categoryName: "Pasión y Sacrificio",
    gapYears: "1,000 años antes de Cristo",
    antiquityYear: 1000,
    otBook: "Salmo 22:1, 16-18",
    otDate: "~1000 a.C.",
    otText: "«Dios mío, Dios mío, ¿por qué me has desamparado?... Horadaron mis manos y mis pies. Contar puedo todos mis huesos; ellos me miran y me observan. Repartieron entre sí mis vestidos, y sobre mi ropa echaron suertes.»",
    ntBook: "Juan 19:23-24 & 20:25",
    ntDate: "~33 d.C.",
    ntText: "«Los soldados tomaron sus vestidos e hicieron cuatro partes... Dijeron entre sí: No la partamos, sino echemos suertes sobre ella, a ver de quién será. Esto fue para que se cumpliese la Escritura... 'Si no viere en sus manos la señal de los clavos... no creeré.'»",
    insight: "El rey David compuso este Salmo diez siglos antes de Cristo. En tiempos de David, la pena de muerte en Israel era el apedreamiento. La crucifixión romana ni siquiera existía en el mundo mediterráneo. David describió con precisión los clavos, la asfixia y el sorteo de vestiduras."
  },
  {
    id: 10,
    title: "Ni Uno de sus Huesos Quebrantado: El Cordero Pascual",
    category: "pasion",
    categoryName: "Pasión y Sacrificio",
    gapYears: "1,400 años antes de Cristo",
    antiquityYear: 1400,
    otBook: "Éxodo 12:46 & Salmo 34:20",
    otDate: "~1440 a.C. y ~1000 a.C.",
    otText: "«Ni quebraréis hueso suyo.» (Estatuto del Cordero Pascual) / «Él guarda todos sus huesos; ni uno de ellos será quebrantado.»",
    ntBook: "Juan 19:32-36",
    ntDate: "~33 d.C.",
    ntText: "«Fueron, pues, los soldados, y quebraron las piernas al primero, y asimismo al otro... Mas cuando llegaron a Jesús, como le vieron ya muerto, no le quebraron las piernas... Porque estas cosas acontecieron para que se cumpliese la Escritura: No será quebrado hueso suyo.»",
    insight: "La costumbre militar de Roma era quebrar las piernas con mazas de hierro para acelerar la asfixia. Los dos malhechores sufrieron la fractura de piernas, pero al llegar a Jesús vieron que ya había muerto, cumpliendo el tipo exacto del Cordero Pascual ileso."
  },
  {
    id: 11,
    title: "El Siervo Sufriente: Molido por Nuestras Rebeliones",
    category: "pasion",
    categoryName: "Pasión y Sacrificio",
    gapYears: "700 años antes de Cristo",
    antiquityYear: 700,
    otBook: "Isaías 53:4-6",
    otDate: "~700 a.C.",
    otText: "«Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores... Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados... Jehová cargó en él el pecado de todos nosotros.»",
    ntBook: "1 Pedro 2:24 & Romanos 5:8",
    ntDate: "~33 - 64 d.C.",
    ntText: "«quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados... Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.»",
    insight: "El corazón del Evangelio: expiación sustitutoria. El Salvador cargó la condena judicial que merecía el pecador. El Gran Rollo de Isaías hallado en las cuevas del Mar Muerto (datado en el 150 a.C.) contiene este pasaje íntegro y sin alteraciones."
  },
  {
    id: 12,
    title: "Sepultura de Honor en la Tumba de un Hombre Rico",
    category: "pasion",
    categoryName: "Pasión y Sacrificio",
    gapYears: "700 años antes de Cristo",
    antiquityYear: 700,
    otBook: "Isaías 53:9",
    otDate: "~700 a.C.",
    otText: "«Y se dispuso con los impíos su sepultura, mas con los ricos fue en su muerte; aunque nunca hizo maldad, ni hubo engaño en su boca.»",
    ntBook: "Mateo 27:57-60",
    ntDate: "~33 d.C.",
    ntText: "«Cuando llegó la noche, vino un hombre rico de Arimatea, llamado José, que también había sido discípulo de Jesús... y pidió el cuerpo de Jesús... Y tomando José el cuerpo, lo envolvió en una sábana limpia, y lo puso en su sepulcro nuevo, que había labrado en la peña.»",
    insight: "A los criminales crucificados se les arrojaba a fosas comunes o a los basureros extramuros. Isaías predijo que aunque moriría con los criminales, su sepulcro final pertenecería a un hombre rico. José de Arimatea cumplió esto sin proponérselo."
  },
  {
    id: 13,
    title: "La Resurrección: Su Carne no Vio Corrupción",
    category: "resurreccion",
    categoryName: "Resurrección y Gloria",
    gapYears: "1,000 años antes de Cristo",
    antiquityYear: 1000,
    otBook: "Salmo 16:10 & Isaías 53:10-11",
    otDate: "~1000 a.C.",
    otText: "«Porque no dejarás mi alma en el Seol, ni permitirás que tu santo vea corrupción... Cuando haya puesto su vida en expiación por el pecado, verá linaje, vivirá por largos días...»",
    ntBook: "Hechos 2:31-32 & Lucas 24:5-6",
    ntDate: "~33 d.C.",
    ntText: "«Viéndolo antes, David habló de la resurrección de Cristo, que su alma no fue dejada en el Hades, ni su carne vio corrupción. A este Jesús resucitó Dios, de lo cual todos nosotros somos testigos... ¿Por qué buscáis entre los muertos al que vive? No está aquí, sino que ha resucitado.»",
    insight: "La tumba vacía. David murió y su sepulcro permanecía en Jerusalén, pero Jesús resucitó al tercer día antes de que su cuerpo experimentara descomposición orgánica, sellando su victoria sobre el pecado y la muerte."
  },
  {
    id: 14,
    title: "Ascensión y Reino Eterno a la Diestra de Dios",
    category: "resurreccion",
    categoryName: "Resurrección y Gloria",
    gapYears: "1,000 y 550 años antes de Cristo",
    antiquityYear: 1000,
    otBook: "Salmo 110:1 & Daniel 7:13-14",
    otDate: "~1000 a.C. y ~550 a.C.",
    otText: "«Jehová dijo a mi Señor: Siéntate a mi diestra, hasta que ponga a tus enemigos por estrado de tus pies.» / «Y le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran; su dominio es eterno.»",
    ntBook: "Marcos 16:19, Hechos 1:9 & Hebreos 1:3",
    ntDate: "~33 - 65 d.C.",
    ntText: "«Y el Señor, después que les habló, fue recibido arriba en el cielo, y se sentó a la diestra de Dios... habiendo efectuado la purificación de nuestros pecados por medio de sí mismo, se sentó a la diestra de la Majestad en las alturas.»",
    insight: "Jesús citó el Salmo 110 ante el Sanedrín al ser juzgado, identificándose como el Señor exaltado a la diestra del Padre Todopoderoso, cuyo reino no tendrá fin."
  }
];

// --- 2. MOTOR DE AUDIO SAGRADO (WEB AUDIO API SYNTHESIZER) ---
class SacredAudioEngine {
  constructor() {
    this.ctx = null;
    this.isAmbientPlaying = false;
    this.ambientGain = null;
    this.ambientOscillators = [];
    this.sfxEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Tono de campana celestial armónica al interactuar
  playHarpChime(frequency = 528) {
    if (!this.sfxEnabled) return;
    this.init();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, now + 0.8);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 1.2);
  }

  // Tono solemne de confirmación
  playSacredTone() {
    if (!this.sfxEnabled) return;
    this.init();
    const chord = [396, 528, 639]; // Frecuencias sagradas Solfeggio
    chord.forEach((freq, idx) => {
      setTimeout(() => {
        this.playHarpChime(freq);
      }, idx * 120);
    });
  }

  // Música ambiental sagrada: Acordes meditativos sostenidos con filtro suave
  toggleAmbientMusic() {
    this.init();
    if (this.isAmbientPlaying) {
      this.stopAmbientMusic();
      return false;
    } else {
      this.startAmbientMusic();
      return true;
    }
  }

  startAmbientMusic() {
    if (this.isAmbientPlaying) return;
    this.init();

    const now = this.ctx.currentTime;
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.001, now);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.07, now + 3); // Suave crescendo

    // Filtro paso-bajo cálido (tipo órgano etéreo)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);

    // Acorde Mayor Sagrado: C3, G3, C4, E4 (130.81Hz, 196.00Hz, 261.63Hz, 329.63Hz)
    const freqs = [130.81, 196.00, 261.63, 329.63];
    this.ambientOscillators = freqs.map((freq) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Sutil vibrato
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.4, now); // 0.4 Hz vibrato lento
      lfoGain.gain.setValueAtTime(1.5, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(now);

      osc.connect(filter);
      osc.start(now);
      return { osc, lfo };
    });

    filter.connect(this.ambientGain);
    this.ambientGain.connect(this.ctx.destination);
    this.isAmbientPlaying = true;
  }

  stopAmbientMusic() {
    if (!this.isAmbientPlaying || !this.ambientGain) return;
    const now = this.ctx.currentTime;
    this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
    setTimeout(() => {
      this.ambientOscillators.forEach(({ osc, lfo }) => {
        try {
          osc.stop();
          lfo.stop();
        } catch (e) {}
      });
      this.ambientOscillators = [];
      this.isAmbientPlaying = false;
    }, 1600);
  }
}

// --- 3. MOTOR DE NARRACIÓN POR VOZ (WEB SPEECH API) ---
class VoiceNarrator {
  constructor() {
    this.synth = window.speechSynthesis;
    this.currentUtterance = null;
    this.isPlaying = false;
    this.isPaused = false;
    this.onStateChange = null;
  }

  speak(text) {
    if (!this.synth) return;
    this.stop();

    this.currentUtterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance.lang = 'es-ES';
    this.currentUtterance.rate = 0.92; // Cadencia reflexiva y reverente
    this.currentUtterance.pitch = 0.98;

    // Buscar una voz en español de alta calidad
    const voices = this.synth.getVoices();
    const spanishVoice = voices.find(v => v.lang.startsWith('es') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Monica') || v.name.includes('Jorge') || v.name.includes('Paulina')));
    if (spanishVoice) {
      this.currentUtterance.voice = spanishVoice;
    }

    this.currentUtterance.onstart = () => {
      this.isPlaying = true;
      this.isPaused = false;
      if (this.onStateChange) this.onStateChange('playing');
    };

    this.currentUtterance.onend = () => {
      this.isPlaying = false;
      this.isPaused = false;
      if (this.onStateChange) this.onStateChange('stopped');
    };

    this.currentUtterance.onerror = () => {
      this.isPlaying = false;
      this.isPaused = false;
      if (this.onStateChange) this.onStateChange('stopped');
    };

    this.synth.speak(this.currentUtterance);
  }

  pause() {
    if (this.synth && this.isPlaying) {
      this.synth.pause();
      this.isPaused = true;
      if (this.onStateChange) this.onStateChange('paused');
    }
  }

  resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      if (this.onStateChange) this.onStateChange('playing');
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isPlaying = false;
      this.isPaused = false;
      if (this.onStateChange) this.onStateChange('stopped');
    }
  }
}

// --- 4. GESTOR DE PROGRESO DE ESTUDIO (LOCALSTORAGE) ---
class StudyTracker {
  constructor() {
    this.storageKey = 'conexiones_eternas_studied_v1';
    this.studiedSet = new Set(JSON.parse(localStorage.getItem(this.storageKey) || '[]'));
  }

  isStudied(id) {
    return this.studiedSet.has(id);
  }

  toggle(id) {
    if (this.studiedSet.has(id)) {
      this.studiedSet.delete(id);
    } else {
      this.studiedSet.add(id);
    }
    localStorage.setItem(this.storageKey, JSON.stringify([...this.studiedSet]));
    return this.studiedSet.has(id);
  }

  getCount() {
    return this.studiedSet.size;
  }
}

// --- 5. ANIMACIÓN DE ESTRELLAS CELESTIALES (CANVAS) ---
function initStarsCanvas() {
  const canvas = document.getElementById('starsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const starsCount = Math.floor((width * height) / 10000);
  const stars = [];

  for (let i = 0; i < starsCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(s => {
      s.alpha += s.speed * s.direction;
      if (s.alpha > 0.9) { s.alpha = 0.9; s.direction = -1; }
      else if (s.alpha < 0.15) { s.alpha = 0.15; s.direction = 1; }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 200, 120, ${s.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(render);
  }

  render();
}

// --- 6. APLICACIÓN PRINCIPAL & CONTROLADORES DE EVENTOS ---
document.addEventListener('DOMContentLoaded', () => {
  const audio = new SacredAudioEngine();
  const narrator = new VoiceNarrator();
  const tracker = new StudyTracker();

  initStarsCanvas();

  // Estados UI
  let activeCategory = 'all';
  let searchQuery = '';
  let sortOrder = 'biblical';
  let activeModalProphecy = null;
  let activeIndex = 0;
  let displayList = [...propheciesData];

  // Elementos DOM
  const propheciesGrid = document.getElementById('propheciesGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryContainer = document.getElementById('categoryContainer');
  const sortOrderSelect = document.getElementById('sortOrderSelect');
  const resultsCount = document.getElementById('resultsCount');
  const progressFill = document.getElementById('progressFill');
  const progressScore = document.getElementById('progressScore');

  // Audio Buttons
  const ambientSoundBtn = document.getElementById('ambientSoundBtn');
  const ambientState = document.getElementById('ambientState');
  const soundFxBtn = document.getElementById('soundFxBtn');
  const sfxState = document.getElementById('sfxState');

  // Theme Toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  // Detail Modal Elements
  const detailModal = document.getElementById('detailModal');
  const detailModalClose = document.getElementById('detailModalClose');
  const mCategoryTag = document.getElementById('mCategoryTag');
  const mGapBadge = document.getElementById('mGapBadge');
  const mTitle = document.getElementById('mTitle');
  const mOtBook = document.getElementById('mOtBook');
  const mOtDate = document.getElementById('mOtDate');
  const mOtText = document.getElementById('mOtText');
  const mNtBook = document.getElementById('mNtBook');
  const mNtDate = document.getElementById('mNtDate');
  const mNtText = document.getElementById('mNtText');
  const mInsightText = document.getElementById('mInsightText');
  const markStudiedBtn = document.getElementById('markStudiedBtn');
  const markStudiedText = document.getElementById('markStudiedText');
  const prevProphecyBtn = document.getElementById('prevProphecyBtn');
  const nextProphecyBtn = document.getElementById('nextProphecyBtn');
  const copyShareBtn = document.getElementById('copyShareBtn');

  // Narrator Controls inside Modal
  const playAudioBtn = document.getElementById('playAudioBtn');
  const pauseAudioBtn = document.getElementById('pauseAudioBtn');
  const stopAudioBtn = document.getElementById('stopAudioBtn');
  const soundWaveAnim = document.getElementById('soundWaveAnim');
  const narratorStatus = document.getElementById('narratorStatus');

  // Texas Modal
  const statCardProb = document.getElementById('statCardProb');
  const probModal = document.getElementById('probModal');
  const probModalClose = document.getElementById('probModalClose');
  const probUnderstoodBtn = document.getElementById('probUnderstoodBtn');

  // Toast
  const customToast = document.getElementById('customToast');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    toastMessage.textContent = msg;
    customToast.classList.add('show');
    setTimeout(() => {
      customToast.classList.remove('show');
    }, 2800);
  }

  // Actualizar barra de progreso
  function updateProgress() {
    const total = propheciesData.length;
    const studiedCount = tracker.getCount();
    const percent = Math.round((studiedCount / total) * 100);
    progressFill.style.width = `${percent}%`;
    progressScore.textContent = `${studiedCount} de ${total} profecías meditadas (${percent}%)`;
  }

  // Filtrar y ordenar
  function getFilteredProphecies() {
    let list = propheciesData.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = q === '' ||
        item.title.toLowerCase().includes(q) ||
        item.otBook.toLowerCase().includes(q) ||
        item.ntBook.toLowerCase().includes(q) ||
        item.otText.toLowerCase().includes(q) ||
        item.ntText.toLowerCase().includes(q) ||
        item.insight.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (sortOrder === 'antiquity') {
      list.sort((a, b) => b.antiquityYear - a.antiquityYear);
    } else if (sortOrder === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      list.sort((a, b) => a.id - b.id);
    }

    return list;
  }

  // Renderizar tarjetas
  function renderGrid() {
    displayList = getFilteredProphecies();
    propheciesGrid.innerHTML = '';
    resultsCount.textContent = `Mostrando ${displayList.length} conexiones mesiánicas`;

    if (displayList.length === 0) {
      propheciesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-family: 'Cinzel', serif; font-size: 1.4rem; color: var(--text-main); margin-bottom: 0.5rem;">No se encontraron resultados</h3>
          <p>Prueba con términos como "Belén", "Isaías", "cruz", "David" o limpia los filtros.</p>
        </div>
      `;
      return;
    }

    displayList.forEach((item) => {
      const isStudied = tracker.isStudied(item.id);
      const card = document.createElement('article');
      card.className = `prophecy-card ${isStudied ? 'studied' : ''}`;
      card.tabIndex = 0;

      card.innerHTML = `
        <div>
          <div class="card-top">
            <span class="card-tag">${item.categoryName}</span>
            ${isStudied ? `<span class="card-studied-badge">✓ Meditada</span>` : `<span class="card-time">⏳ ${item.gapYears}</span>`}
          </div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-scriptures-row">
            <div class="card-pill ot">
              <span class="pill-ref">📜 ${item.otBook}</span>
              <span class="pill-label">Profecía</span>
            </div>
            <div class="card-pill nt">
              <span class="pill-ref">✝️ ${item.ntBook}</span>
              <span class="pill-label">Cumplimiento</span>
            </div>
          </div>
        </div>
        <div class="card-bottom-cta">
          <span>Abrir Conexión Sagrada</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      `;

      card.addEventListener('click', () => {
        audio.playHarpChime(639);
        openDetailModal(item.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          audio.playHarpChime(639);
          openDetailModal(item.id);
        }
      });

      propheciesGrid.appendChild(card);
    });
  }

  // Abrir Modal de Detalle
  function openDetailModal(id) {
    const item = propheciesData.find(p => p.id === id);
    if (!item) return;

    activeModalProphecy = item;
    activeIndex = displayList.findIndex(p => p.id === id);

    mCategoryTag.textContent = item.categoryName;
    mGapBadge.textContent = `⏳ ${item.gapYears}`;
    mTitle.textContent = item.title;

    mOtBook.textContent = item.otBook;
    mOtDate.textContent = item.otDate;
    mOtText.textContent = item.otText;

    mNtBook.textContent = item.ntBook;
    mNtDate.textContent = item.ntDate;
    mNtText.textContent = item.ntText;

    mInsightText.textContent = item.insight;

    updateStudiedButtonState(item.id);

    // Reset narrator state
    narrator.stop();

    detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    narrator.stop();
    detailModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  function updateStudiedButtonState(id) {
    const isStudied = tracker.isStudied(id);
    if (isStudied) {
      markStudiedBtn.classList.add('active');
      markStudiedText.textContent = 'Meditada (Completada)';
    } else {
      markStudiedBtn.classList.remove('active');
      markStudiedText.textContent = 'Marcar como meditada';
    }
  }

  // Navegar siguiente/anterior
  function navigateModal(direction) {
    if (displayList.length === 0) return;
    narrator.stop();
    audio.playHarpChime(528);

    if (direction === 'next') {
      activeIndex = (activeIndex + 1) % displayList.length;
    } else {
      activeIndex = (activeIndex - 1 + displayList.length) % displayList.length;
    }
    openDetailModal(displayList[activeIndex].id);
  }

  // Lógica de narración
  narrator.onStateChange = (state) => {
    if (state === 'playing') {
      playAudioBtn.style.display = 'none';
      pauseAudioBtn.style.display = 'inline-flex';
      stopAudioBtn.style.display = 'inline-flex';
      soundWaveAnim.classList.add('playing');
      narratorStatus.textContent = 'Narrando pasajes de la Escritura...';
    } else if (state === 'paused') {
      playAudioBtn.style.display = 'inline-flex';
      pauseAudioBtn.style.display = 'none';
      soundWaveAnim.classList.remove('playing');
      narratorStatus.textContent = 'Narración en pausa';
    } else {
      playAudioBtn.style.display = 'inline-flex';
      pauseAudioBtn.style.display = 'none';
      stopAudioBtn.style.display = 'none';
      soundWaveAnim.classList.remove('playing');
      narratorStatus.textContent = 'Narración por Voz de las Escrituras';
    }
  };

  playAudioBtn.addEventListener('click', () => {
    if (!activeModalProphecy) return;
    if (narrator.isPaused) {
      narrator.resume();
    } else {
      const speechText = `Profecía Mesiánica: ${activeModalProphecy.title}. 
      En el Antiguo Testamento, en ${activeModalProphecy.otBook}, se profetizó: ${activeModalProphecy.otText}. 
      En el Nuevo Testamento, en ${activeModalProphecy.ntBook}, Jesús la cumple exactamente: ${activeModalProphecy.ntText}. 
      El Sello de Inspiración Divina: ${activeModalProphecy.insight}`;
      narrator.speak(speechText);
    }
  });

  pauseAudioBtn.addEventListener('click', () => narrator.pause());
  stopAudioBtn.addEventListener('click', () => narrator.stop());

  // Marcar como meditada
  markStudiedBtn.addEventListener('click', () => {
    if (!activeModalProphecy) return;
    const nowStudied = tracker.toggle(activeModalProphecy.id);
    updateStudiedButtonState(activeModalProphecy.id);
    updateProgress();
    renderGrid();

    if (nowStudied) {
      audio.playSacredTone();
      showToast('¡Has meditado en esta profecía! Progreso actualizado.');
    } else {
      showToast('Profecía desmarcada de tu registro.');
    }
  });

  // Copiar devocional completo
  copyShareBtn.addEventListener('click', () => {
    if (!activeModalProphecy) return;
    const p = activeModalProphecy;
    const devotional = `✨ CONEXIONES ETERNAS: EL HILO MESIÁNICO
═══════════════════════════════════
📖 ${p.title}
⏳ Tiempo entre promesa y hecho: ${p.gapYears}

📜 LA PROFECÍA (${p.otBook} - ${p.otDate}):
${p.otText}

✝️ EL CUMPLIMIENTO (${p.ntBook} - ${p.ntDate}):
${p.ntText}

🕊️ EL SELLO DE INSPIRACIÓN DIVINA:
${p.insight}
═══════════════════════════════════
«Porque la profecía no vino en los tiempos pasados por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.» (2 Pedro 1:21)`;

    navigator.clipboard.writeText(devotional).then(() => {
      audio.playHarpChime(741);
      showToast('¡Devocional copiado listo para compartir!');
    }).catch(() => {
      showToast('Error al copiar. Selecciona manualmente.');
    });
  });

  // Navegación Modal
  prevProphecyBtn.addEventListener('click', () => navigateModal('prev'));
  nextProphecyBtn.addEventListener('click', () => navigateModal('next'));
  detailModalClose.addEventListener('click', closeDetailModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeDetailModal();
  });

  // Modal de Probabilidad (Texas)
  statCardProb.addEventListener('click', () => {
    audio.playHarpChime(528);
    probModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  probModalClose.addEventListener('click', () => {
    probModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  probUnderstoodBtn.addEventListener('click', () => {
    audio.playHarpChime(639);
    probModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  probModal.addEventListener('click', (e) => {
    if (e.target === probModal) {
      probModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Teclado Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      probModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Filtros de categoría
  categoryContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    categoryContainer.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    audio.playHarpChime(432);
    renderGrid();
  });

  // Búsqueda
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    renderGrid();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderGrid();
  });

  // Orden
  sortOrderSelect.addEventListener('change', (e) => {
    sortOrder = e.target.value;
    audio.playHarpChime(432);
    renderGrid();
  });

  // Botón Música Ambiental
  ambientSoundBtn.addEventListener('click', () => {
    const playing = audio.toggleAmbientMusic();
    if (playing) {
      ambientState.textContent = 'Sonando 🕊️';
      ambientSoundBtn.classList.add('active-ambient');
      showToast('Música ambiental sagrada activada');
    } else {
      ambientState.textContent = 'Apagado';
      ambientSoundBtn.classList.remove('active-ambient');
      showToast('Música ambiental pausada');
    }
  });

  // Botón Efectos de Sonido
  soundFxBtn.addEventListener('click', () => {
    audio.sfxEnabled = !audio.sfxEnabled;
    if (audio.sfxEnabled) {
      sfxState.textContent = 'ON';
      soundFxBtn.classList.add('active-fx');
      audio.playHarpChime(528);
      showToast('Efectos sonoros activados');
    } else {
      sfxState.textContent = 'OFF';
      soundFxBtn.classList.remove('active-fx');
      showToast('Efectos sonoros silenciados');
    }
  });

  // Cambio de Tema (Oscuro Celestial vs Pergamino Sagrado)
  let currentTheme = localStorage.getItem('conexiones_theme') || 'dark';
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'parchment' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('conexiones_theme', currentTheme);
    audio.playHarpChime(528);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'parchment') {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Celestial';
    } else {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Pergamino';
    }
  }

  // --- 7. CONSULTOR TEOLÓGICO IA CON OPENROUTER ---
  function getOpenRouterKey() {
    return localStorage.getItem('conexiones_openrouter_key') || 
           window.APP_CONFIG?.OPENROUTER_API_KEY || 
           "";
  }
  const OPENROUTER_MODEL = "google/gemini-2.0-flash-001";

  const aiChatToggleBtn = document.getElementById('aiChatToggleBtn');
  const aiModal = document.getElementById('aiModal');
  const aiModalClose = document.getElementById('aiModalClose');
  const aiChatMessages = document.getElementById('aiChatMessages');
  const aiSuggestionsTray = document.getElementById('aiSuggestionsTray');
  const aiInputForm = document.getElementById('aiInputForm');
  const aiUserInput = document.getElementById('aiUserInput');
  const aiSendBtn = document.getElementById('aiSendBtn');
  const askAiAboutProphecyBtn = document.getElementById('askAiAboutProphecyBtn');

  // Historial de conversación
  let aiConversationHistory = [
    {
      role: "system",
      content: "Eres un erudito bíblico, teólogo respetuoso y guía espiritual sabio para la aplicación Conexiones Eternas. Tu propósito es explicar el significado profundo, el contexto histórico, el trasfondo lingüístico (hebreo y griego) y las conexiones proféticas entre el Antiguo y el Nuevo Testamento. Responde siempre con reverencia, gracia, claridad y rigor bíblico, citando pasajes clave. Responde en español con formato estructurado y amigable."
    }
  ];

  function openAiModal() {
    audio.playHarpChime(528);
    aiModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => aiUserInput.focus(), 200);
  }

  function closeAiModal() {
    aiModal.classList.remove('open');
    if (!detailModal.classList.contains('open') && !probModal.classList.contains('open')) {
      document.body.style.overflow = 'auto';
    }
  }

  function appendAiMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${role === 'user' ? 'user-message' : 'assistant-message'}`;

    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^«(.*?)»/gm, '<blockquote>«$1»</blockquote>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');

    if (role === 'assistant') {
      msgDiv.innerHTML = `
        <div class="ai-avatar-small">🕊️</div>
        <div class="msg-bubble">
          <p>${formattedText}</p>
        </div>
      `;
    } else {
      msgDiv.innerHTML = `
        <div class="msg-bubble">
          <p>${formattedText}</p>
        </div>
      `;
    }

    aiChatMessages.appendChild(msgDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    return msgDiv;
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message assistant-message';
    typingDiv.id = 'aiTypingIndicator';
    typingDiv.innerHTML = `
      <div class="ai-avatar-small">🕊️</div>
      <div class="msg-bubble">
        <div class="ai-typing">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    aiChatMessages.appendChild(typingDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  }

  function removeTypingIndicator() {
    const typing = document.getElementById('aiTypingIndicator');
    if (typing) typing.remove();
  }

  async function sendAiQuery(userText) {
    if (!userText || !userText.trim()) return;
    const cleanText = userText.trim();

    const apiKey = getOpenRouterKey();
    if (!apiKey) {
      const promptKey = prompt("Para consultar al Teólogo IA, ingresa tu clave de OpenRouter:");
      if (promptKey && promptKey.trim()) {
        localStorage.setItem('conexiones_openrouter_key', promptKey.trim());
      } else {
        appendAiMessage('assistant', "⚠️ Se requiere una clave de API de OpenRouter para habilitar las consultas bíblicas en vivo.");
        return;
      }
    }

    appendAiMessage('user', cleanText);
    aiConversationHistory.push({ role: 'user', content: cleanText });
    aiUserInput.value = '';
    showTypingIndicator();

    try {
      const currentKey = getOpenRouterKey();
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentKey}`,
          'HTTP-Referer': window.location.href,
          'X-Title': 'Conexiones Eternas'
        },
        body: JSON.stringify({
          model: OPENROUTER_MODEL,
          messages: aiConversationHistory,
          temperature: 0.7,
          max_tokens: 1000
        })
      });

      removeTypingIndicator();

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error?.message || `Error del servidor OpenRouter (${response.status})`);
      }

      const data = await response.json();
      const assistantReply = data.choices?.[0]?.message?.content || "No se recibió respuesta de la IA.";
      
      aiConversationHistory.push({ role: 'assistant', content: assistantReply });
      appendAiMessage('assistant', assistantReply);
      audio.playHarpChime(639);

    } catch (err) {
      removeTypingIndicator();
      appendAiMessage('assistant', `⚠️ *Disculpa, ocurrió una dificultad técnica al consultar OpenRouter:* ${err.message}. Verifica tu conexión a internet o la disponibilidad del modelo.`);
    }
  }

  // Event Listeners AI
  aiChatToggleBtn.addEventListener('click', openAiModal);
  aiModalClose.addEventListener('click', closeAiModal);
  aiModal.addEventListener('click', (e) => {
    if (e.target === aiModal) closeAiModal();
  });

  aiInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendAiQuery(aiUserInput.value);
  });

  // Chips sugeridos
  document.querySelectorAll('.ai-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sendAiQuery(chip.textContent);
    });
  });

  // Botón "Preguntar a la IA sobre esta profecía" en el modal de detalle
  if (askAiAboutProphecyBtn) {
    askAiAboutProphecyBtn.addEventListener('click', () => {
      if (!activeModalProphecy) return;
      const p = activeModalProphecy;
      openAiModal();
      const question = `Por favor, explícame con mayor profundidad teológica e histórica la profecía: "${p.title}" (${p.otBook} cumplida en ${p.ntBook}). ¿Qué detalles revelan que solo Dios pudo haberlo coordinado?`;
      sendAiQuery(question);
    });
  }

  // Tecla escape para cerrar AI modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aiModal.classList.contains('open')) {
      closeAiModal();
    }
  });

  // Inicialización
  updateProgress();
  renderGrid();
});

