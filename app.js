/**
 * ============================================================================
 * ETERNAL CONNECTIONS - CORE ENGINE & MESSIANIC HEBREW AUDIO SUITE
 * ============================================================================
 */

// --- 1. DATA: 14 ESSENTIAL MESSIANIC PROPHECIES & FULFILLMENTS ---
const propheciesData = [
  {
    id: 1,
    title: "The Exact Birthplace: Bethlehem Ephrathah",
    category: "nacimiento",
    categoryName: "Birth & Royal Lineage",
    gapYears: "700 years before Christ",
    antiquityYear: 700,
    otBook: "Micah 5:2",
    otDate: "~700 BC",
    otText: "“But you, Bethlehem Ephrathah, though you are little among the thousands of Judah, yet out of you shall come forth to Me the One to be Ruler in Israel, whose goings forth are from of old, from everlasting.”",
    ntBook: "Matthew 2:1 & Luke 2:4-6",
    ntDate: "~4 BC - 1 AD",
    ntText: "“Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the East came to Jerusalem... And Joseph also went up from Galilee... to the city of David, which is called Bethlehem... and while they were there, the days were completed for her to be delivered.”",
    insight: "Micah specifically named 'Bethlehem Ephrathah' to distinguish it from another town named Bethlehem in the northern tribal region of Zebulun. Jesus was not born in Bethlehem by human planning: an imperial decree from Caesar Augustus required Joseph and Mary to travel there at the exact moment of her labor. No human can choose before being born the exact village of their arrival into the world."
  },
  {
    id: 2,
    title: "The Miraculous Sign: The Virgin & Immanuel",
    category: "nacimiento",
    categoryName: "Birth & Royal Lineage",
    gapYears: "735 years before Christ",
    antiquityYear: 735,
    otBook: "Isaiah 7:14",
    otDate: "~735 BC",
    otText: "“Therefore the Lord Himself will give you a sign: Behold, the virgin shall conceive and bear a Son, and shall call His name Immanuel.”",
    ntBook: "Matthew 1:22-23 & Luke 1:34-35",
    ntDate: "~1 AD",
    ntText: "“So all this was done that it might be fulfilled which was spoken by the Lord through the prophet, saying: ‘Behold, the virgin shall be with child, and bear a Son, and they shall call His name Immanuel,’ which is translated, ‘God with us.’”",
    insight: "The Hebrew word 'Almah' signified an extraordinary miracle for the royal house of David. Christ did not inherit the fallen sinful nature of Adam through human seed, fulfilling also Genesis 3:15 regarding 'the seed of the woman' who would crush the serpent's head."
  },
  {
    id: 3,
    title: "The Promised Royal Lineage: Seed of Abraham & David",
    category: "nacimiento",
    categoryName: "Birth & Royal Lineage",
    gapYears: "1,000 to 2,000 years",
    antiquityYear: 2000,
    otBook: "Genesis 12:3 & 2 Samuel 7:12-13",
    otDate: "~2000 BC & ~1000 BC",
    otText: "“In you all the families of the earth shall be blessed.” / “When your days are fulfilled... I will set up your seed after you... and I will establish the throne of his kingdom forever.”",
    ntBook: "Matthew 1:1 & Luke 1:32-33",
    ntDate: "~1 AD",
    ntText: "“The book of the genealogy of Jesus Christ, the Son of David, the Son of Abraham... He will be great, and will be called the Son of the Highest; and the Lord God will give Him the throne of His father David. And He will reign over the house of Jacob forever, and of His kingdom there will be no end.”",
    insight: "The Messianic genealogy narrowed progressively across 20 centuries: from all humanity → to Abraham → to the tribe of Judah → to the royal lineage of David. In 70 AD, the Roman army burned the Temple in Jerusalem along with all Jewish public genealogical archives; no one after Jesus could ever prove descent from King David."
  },
  {
    id: 4,
    title: "The Child Born: Mighty God & Prince of Peace",
    category: "nacimiento",
    categoryName: "Birth & Royal Lineage",
    gapYears: "720 years before Christ",
    antiquityYear: 720,
    otBook: "Isaiah 9:6-7",
    otDate: "~720 BC",
    otText: "“For unto us a Child is born, unto us a Son is given; and the government will be upon His shoulder. And His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace. Of the increase of His government and peace there will be no end...”",
    ntBook: "Luke 2:11 & John 1:1,14",
    ntDate: "~1 - 30 AD",
    ntText: "“For there is born to you this day in the city of David a Savior, who is Christ the Lord... And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth.”",
    insight: "One of the most awe-inspiring declarations in the Old Testament: an entity born as a human 'Child' would simultaneously be called 'Mighty God' (El Gibbor) and 'Everlasting Father'. The full incarnation of Deity into human history prophesied more than seven centuries in advance."
  },
  {
    id: 5,
    title: "Triumphal Entry: The Humble King on a Colt",
    category: "ministerio",
    categoryName: "Ministry & Life",
    gapYears: "520 years before Christ",
    antiquityYear: 520,
    otBook: "Zechariah 9:9",
    otDate: "~520 BC",
    otText: "“Rejoice greatly, O daughter of Zion! Shout, O daughter of Jerusalem! Behold, your King is coming to you; He is just and having salvation, lowly and riding on a donkey, a colt, the foal of a donkey.”",
    ntBook: "Matthew 21:4-9 & John 12:14-15",
    ntDate: "~33 AD",
    ntText: "“All this was done that it might be fulfilled which was spoken by the prophet, saying: ‘Tell the daughter of Zion, Behold, your King is coming to you, lowly, and sitting on a donkey, a colt, the foal of a donkey.’... And the multitudes cried out: ‘Hosanna to the Son of David! Blessed is He who comes in the name of the Lord!’”",
    insight: "While worldly conquerors of antiquity rode into conquered capitals atop war stallions and golden chariots, Jesus entered the Holy City of Jerusalem as the King of Peace on a humble donkey's colt, exactly as Zechariah had foreseen half a millennium earlier."
  },
  {
    id: 6,
    title: "Betrayal by a Close and Trusted Friend",
    category: "ministerio",
    categoryName: "Ministry & Life",
    gapYears: "1,000 years before Christ",
    antiquityYear: 1000,
    otBook: "Psalm 41:9",
    otDate: "~1000 BC",
    otText: "“Even my own familiar friend in whom I trusted, who ate my bread, has lifted up his heel against me.”",
    ntBook: "John 13:18,21 & Matthew 26:21-25",
    ntDate: "~33 AD",
    ntText: "“I do not speak concerning all of you. I know whom I have chosen; but that the Scripture may be fulfilled: ‘He who eats bread with Me has lifted up his heel against Me.’... Most assuredly, I say to you, one of you will betray Me.”",
    insight: "Jesus directly cited this Psalm at the Last Supper. The Messiah was not captured through open battle with Roman legions or temple guards, but betrayed by one of His closest disciples who dipped bread into the same dish with Him."
  },
  {
    id: 7,
    title: "The Price of Betrayal: 30 Pieces of Silver & The Potter",
    category: "pasion",
    categoryName: "Passion & Sacrifice",
    gapYears: "520 years before Christ",
    antiquityYear: 520,
    otBook: "Zechariah 11:12-13",
    otDate: "~520 BC",
    otText: "“Then I said to them, ‘If it is agreeable to you, give me my wages; and if not, refrain.’ So they weighed out for my wages thirty pieces of silver. And the Lord said to me, ‘Throw it to the potter’—that princely price they set on me. So I took the thirty pieces of silver and threw them into the house of the Lord for the potter.”",
    ntBook: "Matthew 26:15 & 27:3-7",
    ntDate: "~33 AD",
    ntText: "“And they counted out to him thirty pieces of silver... Then Judas, seeing that He had been condemned, was remorseful and brought back the thirty pieces of silver to the chief priests... And he threw down the pieces of silver in the temple and departed... And the chief priests took counsel and bought with them the potter’s field, to bury strangers in.”",
    insight: "Three astonishingly precise details impossible to conspire humanly: 1) The exact valuation (30 silver coins, the legal price of a gored slave in Exodus 21), 2) That the money would be thrown onto the floor inside the Temple, and 3) That it would ultimately purchase a potter's field."
  },
  {
    id: 8,
    title: "Silent & Meek Before Accusers and Shearers",
    category: "pasion",
    categoryName: "Passion & Sacrifice",
    gapYears: "700 years before Christ",
    antiquityYear: 700,
    otBook: "Isaiah 53:7",
    otDate: "~700 BC",
    otText: "“He was oppressed and He was afflicted, yet He opened not His mouth; He was led as a lamb to the slaughter, and as a sheep before its shearers is silent, so He opened not His mouth.”",
    ntBook: "Matthew 27:12-14 & 1 Peter 2:23",
    ntDate: "~33 AD",
    ntText: "“And while He was being accused by the chief priests and elders, He answered nothing. Then Pilate said to Him, ‘Do You not hear how many things they testify against You?’ But He answered him not one word, so that the governor marveled greatly.”",
    insight: "Facing false accusations carrying the death penalty, every human defendant frantically pleads their innocence. The voluntary silence of Jesus bewildered Roman Governor Pontius Pilate, fulfilling the prophecy of the innocent Lamb submitting willingly to the altar."
  },
  {
    id: 9,
    title: "Crucifixion: Pierced Hands and Feet & Cast Lots for Garments",
    category: "pasion",
    categoryName: "Passion & Sacrifice",
    gapYears: "1,000 years before Christ",
    antiquityYear: 1000,
    otBook: "Psalm 22:1, 16-18",
    otDate: "~1000 BC",
    otText: "“My God, My God, why have You forsaken Me?... For dogs have surrounded Me; the congregation of the wicked has enclosed Me. They pierced My hands and My feet; I can count all My bones. They look and stare at Me. They divide My garments among them, and for My clothing they cast lots.”",
    ntBook: "John 19:23-24 & 20:25",
    ntDate: "~33 AD",
    ntText: "“Then the soldiers, when they had crucified Jesus, took His garments and made four parts... They said therefore among themselves, ‘Let us not tear it, but cast lots for it, whose it shall be,’ that the Scripture might be fulfilled... ‘Unless I see in His hands the print of the nails... I will not believe.’”",
    insight: "King David penned this Psalm a thousand years before Jesus. In David's era, capital punishment in Israel was stoning; Roman crucifixion had not yet been invented. David portrayed crucifixion in excruciating detail: the pierced extremities, dehydrated fever, and the soldiers casting dice for His seamless tunic."
  },
  {
    id: 10,
    title: "Not One of His Bones Broken: The True Passover Lamb",
    category: "pasion",
    categoryName: "Passion & Sacrifice",
    gapYears: "1,400 years before Christ",
    antiquityYear: 1400,
    otBook: "Exodus 12:46 & Psalm 34:20",
    otDate: "~1440 BC & ~1000 BC",
    otText: "“Nor shall you break one of its bones.” (Statute of the Passover Lamb) / “He guards all his bones; not one of them is broken.”",
    ntBook: "John 19:32-36",
    ntDate: "~33 AD",
    ntText: "“Then the soldiers came and broke the legs of the first and of the other who was crucified with Him. But when they came to Jesus and saw that He was already dead, they did not break His legs... For these things were done that the Scripture should be fulfilled, ‘Not one of His bones shall be broken.’”",
    insight: "Standard Roman crucifixion protocol was to smash the victims' shins with iron mallets (crurifragium) to hasten suffocation before sundown. The soldiers broke the legs of both thieves; but seeing Jesus had already yielded His spirit, a soldier merely pierced His side, preserving the Passover archetype intact."
  },
  {
    id: 11,
    title: "The Suffering Servant: Crushed for Our Iniquities",
    category: "pasion",
    categoryName: "Passion & Sacrifice",
    gapYears: "700 years before Christ",
    antiquityYear: 700,
    otBook: "Isaiah 53:4-6",
    otDate: "~700 BC",
    otText: "“Surely He has borne our griefs and carried our sorrows; yet we esteemed Him stricken, smitten by God, and afflicted. But He was wounded for our transgressions, He was bruised for our iniquities; the chastisement for our peace was upon Him, and by His stripes we are healed... And the Lord has laid on Him the iniquity of us all.”",
    ntBook: "1 Peter 2:24 & Romans 5:8",
    ntDate: "~33 - 64 AD",
    ntText: "“who Himself bore our sins in His own body on the tree, that we, having died to sins, might live for righteousness—by whose stripes you were healed... But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us.”",
    insight: "The core of the Gospel: substitutionary atonement. The Messiah bore the legal penalty due to fallen humanity. The Great Isaiah Scroll found at Qumran near the Dead Sea (dated to ~150 BC) contains this exact chapter intact word for word."
  },
  {
    id: 12,
    title: "An Honorable Burial in the Tomb of a Wealthy Man",
    category: "pasion",
    categoryName: "Passion & Sacrifice",
    gapYears: "700 years before Christ",
    antiquityYear: 700,
    otBook: "Isaiah 53:9",
    otDate: "~700 BC",
    otText: "“And they made His grave with the wicked—but with the rich at His death, because He had done no violence, nor was any deceit in His mouth.”",
    ntBook: "Matthew 27:57-60",
    ntDate: "~33 AD",
    ntText: "“Now when evening had come, there came a rich man from Arimathea, named Joseph, who himself had also become a disciple of Jesus... He went to Pilate and asked for the body of Jesus... When Joseph had taken the body, he wrapped it in a clean linen cloth, and laid it in his new tomb which he had hewn out of the rock.”",
    insight: "The customary Roman fate for executed criminals was discarding their corpses into mass trenches or the fires of Gehenna. Yet Isaiah predicted that while He would die alongside outlaws ('with the wicked'), His final burial would be with the wealthy. Joseph of Arimathea fulfilled this without human orchestration."
  },
  {
    id: 13,
    title: "The Resurrection: His Flesh Did Not See Corruption",
    category: "resurreccion",
    categoryName: "Resurrection & Glory",
    gapYears: "1,000 years before Christ",
    antiquityYear: 1000,
    otBook: "Psalm 16:10 & Isaiah 53:10-11",
    otDate: "~1000 BC",
    otText: "“For You will not leave my soul in Sheol, nor will You allow Your Holy One to see corruption... When You make His soul an offering for sin, He shall see His seed, He shall prolong His days... He shall see the labor of His soul, and be satisfied.”",
    ntBook: "Acts 2:31-32 & Luke 24:5-6",
    ntDate: "~33 AD",
    ntText: "“He, foreseeing this, spoke concerning the resurrection of the Christ, that His soul was not left in Hades, nor did His flesh see corruption. This Jesus God has raised up, of which we are all witnesses... ‘Why do you seek the living among the dead? He is not here, but is risen!’”",
    insight: "The empty tomb. King David died and was buried, his tomb remaining in Jerusalem; therefore, he prophesied of another. Jesus rose on the third day before biological decay set in, inaugurating eternal life and triumph over death."
  },
  {
    id: 14,
    title: "Ascension & Everlasting Dominion at the Right Hand of God",
    category: "resurreccion",
    categoryName: "Resurrection & Glory",
    gapYears: "1,000 & 550 years before Christ",
    antiquityYear: 1000,
    otBook: "Psalm 110:1 & Daniel 7:13-14",
    otDate: "~1000 BC & ~550 BC",
    otText: "“The Lord said to my Lord, ‘Sit at My right hand, till I make Your enemies Your footstool.’” / “Then to Him was given dominion and glory and a kingdom, that all peoples, nations, and languages should serve Him. His dominion is an everlasting dominion.”",
    ntBook: "Mark 16:19, Acts 1:9 & Hebrews 1:3",
    ntDate: "~33 - 65 AD",
    ntText: "“So then, after the Lord had spoken to them, He was received up into heaven, and sat down at the right hand of God... who being the brightness of His glory... when He had by Himself purged our sins, sat down at the right hand of the Majesty on high.”",
    insight: "Jesus quoted Psalm 110 directly before the Sanhedrin during His trial, identifying Himself as the Divine Son exalted at the right hand of the Almighty Father, whose everlasting kingdom shall never pass away."
  }
];

// --- 2. AUTHENTIC MESSIANIC HEBREW AUDIO SUITE (SYNTHESIZED HARP & SEQUENCER) ---
class MessianicAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.sfxEnabled = true;
    this.sequenceTimer = null;
    this.masterGain = null;
    this.droneGain = null;
    this.droneOscs = [];
    this.stepIndex = 0;

    // Authentic Messianic / Ahava Rabbah (Freygish / Hebrew Minor Scale in D)
    // D, Eb, F#, G, A, Bb, C, D
    this.scale = {
      D2: 73.42,
      A2: 110.00,
      D3: 146.83,
      Eb3: 155.56,
      Fsharp3: 185.00,
      G3: 196.00,
      A3: 220.00,
      Bb3: 233.08,
      C4: 261.63,
      D4: 293.66,
      Eb4: 311.13,
      Fsharp4: 369.99,
      G4: 392.00,
      A4: 440.00,
      Bb4: 466.16,
      C5: 523.25,
      D5: 587.33
    };

    // Authentic Messianic Melodic Sequence (David's Harp / Jerusalem Theme in D Freygish)
    this.melodySequence = [
      { note: 'D4', dur: 1.2, vel: 0.8 },
      { note: 'Eb4', dur: 0.6, vel: 0.6 },
      { note: 'Fsharp4', dur: 1.0, vel: 0.85 },
      { note: 'Eb4', dur: 0.6, vel: 0.65 },
      { note: 'D4', dur: 1.4, vel: 0.75 },
      { note: 'A3', dur: 0.8, vel: 0.7 },
      { note: 'D4', dur: 1.2, vel: 0.8 },

      { note: 'Fsharp4', dur: 1.0, vel: 0.85 },
      { note: 'G4', dur: 0.6, vel: 0.7 },
      { note: 'A4', dur: 1.4, vel: 0.9 },
      { note: 'Bb4', dur: 0.8, vel: 0.85 },
      { note: 'A4', dur: 1.0, vel: 0.8 },
      { note: 'G4', dur: 0.6, vel: 0.7 },
      { note: 'Fsharp4', dur: 1.2, vel: 0.75 },

      { note: 'Eb4', dur: 0.8, vel: 0.7 },
      { note: 'Fsharp4', dur: 0.8, vel: 0.75 },
      { note: 'Eb4', dur: 0.8, vel: 0.7 },
      { note: 'D4', dur: 2.0, vel: 0.85 },

      // Ascending motif
      { note: 'G4', dur: 0.8, vel: 0.75 },
      { note: 'A4', dur: 0.8, vel: 0.8 },
      { note: 'Bb4', dur: 1.0, vel: 0.85 },
      { note: 'C5', dur: 0.6, vel: 0.9 },
      { note: 'D5', dur: 1.8, vel: 0.95 },
      { note: 'C5', dur: 0.8, vel: 0.8 },
      { note: 'Bb4', dur: 0.8, vel: 0.8 },
      { note: 'A4', dur: 1.2, vel: 0.85 },

      // Resolution
      { note: 'Fsharp4', dur: 1.0, vel: 0.8 },
      { note: 'G4', dur: 0.6, vel: 0.75 },
      { note: 'Eb4', dur: 1.0, vel: 0.7 },
      { note: 'Fsharp4', dur: 0.6, vel: 0.75 },
      { note: 'Eb4', dur: 0.8, vel: 0.7 },
      { note: 'D4', dur: 2.5, vel: 0.9 }
    ];
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

  // Plucked Harp Note Synthesis (Kinnor of David)
  playHarpString(freq, velocity = 0.7, duration = 1.5) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Dual oscillator with subtle detune for wooden harp string realism
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'triangle';
    osc2.type = 'sawtooth';

    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 1.002, now); // 2 cents detune

    // Bandpass filter to model wooden soundboard body
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 1.8, now);
    filter.Q.setValueAtTime(2.2, now);

    // Pluck attack & decay envelope
    const peak = 0.18 * velocity;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peak, now + 0.008); // Instant pluck
    gain.gain.exponentialRampToValueAtTime(peak * 0.35, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain || this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  // Solfeggio / Holy Chime SFX on UI click
  playHarpChime(freq = 528) {
    if (!this.sfxEnabled) return;
    this.init();
    this.playHarpString(freq, 0.75, 1.2);
  }

  playSacredChord() {
    if (!this.sfxEnabled) return;
    this.init();
    const arpeggio = [this.scale.D4, this.scale.Fsharp4, this.scale.A4, this.scale.D5];
    arpeggio.forEach((f, i) => {
      setTimeout(() => this.playHarpString(f, 0.8, 1.6), i * 110);
    });
  }

  // Continuous Messianic Hebrew Melodic Loop
  toggleMessianicMelody() {
    this.init();
    if (this.isPlaying) {
      this.stopMessianicMelody();
      return false;
    } else {
      this.startMessianicMelody();
      return true;
    }
  }

  startMessianicMelody() {
    if (this.isPlaying) return;
    this.init();

    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.linearRampToValueAtTime(0.75, now + 2); // Smooth fade in
    this.masterGain.connect(this.ctx.destination);

    // Warm Desert Drone in D (D2 & A2)
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.04, now);

    const droneFilter = this.ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(320, now);

    const d2 = this.ctx.createOscillator();
    const a2 = this.ctx.createOscillator();
    d2.type = 'triangle';
    a2.type = 'sine';
    d2.frequency.setValueAtTime(this.scale.D2, now);
    a2.frequency.setValueAtTime(this.scale.A2, now);

    d2.connect(droneFilter);
    a2.connect(droneFilter);
    droneFilter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);

    d2.start(now);
    a2.start(now);
    this.droneOscs = [d2, a2];

    this.isPlaying = true;
    this.stepIndex = 0;
    this.scheduleNextNote();
  }

  scheduleNextNote() {
    if (!this.isPlaying) return;

    const item = this.melodySequence[this.stepIndex];
    const freq = this.scale[item.note] || 293.66;
    this.playHarpString(freq, item.vel, item.dur);

    // Subtle bass harp accent on key beats
    if (this.stepIndex % 4 === 0) {
      this.playHarpString(this.scale.D3, 0.5, 2.0);
    }

    this.stepIndex = (this.stepIndex + 1) % this.melodySequence.length;
    const intervalMs = item.dur * 650; // Cadence timing

    this.sequenceTimer = setTimeout(() => {
      this.scheduleNextNote();
    }, intervalMs);
  }

  stopMessianicMelody() {
    if (!this.isPlaying) return;
    clearTimeout(this.sequenceTimer);

    if (this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.linearRampToValueAtTime(0.001, now + 1.2);
    }

    setTimeout(() => {
      this.droneOscs.forEach(o => {
        try { o.stop(); } catch (e) {}
      });
      this.droneOscs = [];
      this.isPlaying = false;
    }, 1300);
  }
}

// --- 3. SCRIPTURE NARRATION VOICE (ENGLISH WEB SPEECH API) ---
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
    this.currentUtterance.lang = 'en-US';
    this.currentUtterance.rate = 0.93; // Reverent, solemn pace
    this.currentUtterance.pitch = 0.98;

    // Pick a high-quality natural English voice
    const voices = this.synth.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (
      v.name.includes('Natural') || 
      v.name.includes('Google') || 
      v.name.includes('Daniel') || 
      v.name.includes('Samantha') || 
      v.name.includes('Serena') || 
      v.name.includes('Oliver')
    ));
    if (englishVoice) {
      this.currentUtterance.voice = englishVoice;
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

// --- 4. PERSISTENT STUDY PROGRESS TRACKER ---
class StudyTracker {
  constructor() {
    this.storageKey = 'eternal_connections_studied_v1';
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

// --- 5. CELESTIAL BACKGROUND PARTICLES (CANVAS) ---
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

// --- 6. MAIN APPLICATION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
  const audio = new MessianicAudioEngine();
  const narrator = new VoiceNarrator();
  const tracker = new StudyTracker();

  initStarsCanvas();

  // App UI State
  let activeCategory = 'all';
  let searchQuery = '';
  let sortOrder = 'biblical';
  let activeModalProphecy = null;
  let activeIndex = 0;
  let displayList = [...propheciesData];

  // DOM Elements
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

  // Update Study Progress
  function updateProgress() {
    const total = propheciesData.length;
    const studiedCount = tracker.getCount();
    const percent = Math.round((studiedCount / total) * 100);
    progressFill.style.width = `${percent}%`;
    progressScore.textContent = `${studiedCount} of ${total} prophecies studied (${percent}%)`;
  }

  // Filter & Sort
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

  // Render Grid Cards
  function renderGrid() {
    displayList = getFilteredProphecies();
    propheciesGrid.innerHTML = '';
    resultsCount.textContent = `Showing ${displayList.length} Messianic connections`;

    if (displayList.length === 0) {
      propheciesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-family: 'Cinzel', serif; font-size: 1.4rem; color: var(--text-main); margin-bottom: 0.5rem;">No prophecies found</h3>
          <p>Try searching for terms such as "Bethlehem", "Isaiah", "cross", "David", or clear the active filters.</p>
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
            ${isStudied ? `<span class="card-studied-badge">✓ Studied</span>` : `<span class="card-time">⏳ ${item.gapYears}</span>`}
          </div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-scriptures-row">
            <div class="card-pill ot">
              <span class="pill-ref">📜 ${item.otBook}</span>
              <span class="pill-label">Prophecy</span>
            </div>
            <div class="card-pill nt">
              <span class="pill-ref">✝️ ${item.ntBook}</span>
              <span class="pill-label">Fulfillment</span>
            </div>
          </div>
        </div>
        <div class="card-bottom-cta">
          <span>Examine Sacred Connection</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      `;

      card.addEventListener('click', () => {
        audio.playHarpChime(audio.scale.D4);
        openDetailModal(item.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          audio.playHarpChime(audio.scale.D4);
          openDetailModal(item.id);
        }
      });

      propheciesGrid.appendChild(card);
    });
  }

  // Open Detail Modal
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

    // Reset voice narrator state
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
      markStudiedText.textContent = 'Studied (Completed)';
    } else {
      markStudiedBtn.classList.remove('active');
      markStudiedText.textContent = 'Mark as Studied';
    }
  }

  // Navigate next / previous inside modal
  function navigateModal(direction) {
    if (displayList.length === 0) return;
    narrator.stop();
    audio.playHarpChime(audio.scale.A4);

    if (direction === 'next') {
      activeIndex = (activeIndex + 1) % displayList.length;
    } else {
      activeIndex = (activeIndex - 1 + displayList.length) % displayList.length;
    }
    openDetailModal(displayList[activeIndex].id);
  }

  // Voice Narrator Controls
  narrator.onStateChange = (state) => {
    if (state === 'playing') {
      playAudioBtn.style.display = 'none';
      pauseAudioBtn.style.display = 'inline-flex';
      stopAudioBtn.style.display = 'inline-flex';
      soundWaveAnim.classList.add('playing');
      narratorStatus.textContent = 'Narrating Holy Scriptures...';
    } else if (state === 'paused') {
      playAudioBtn.style.display = 'inline-flex';
      pauseAudioBtn.style.display = 'none';
      soundWaveAnim.classList.remove('playing');
      narratorStatus.textContent = 'Narration paused';
    } else {
      playAudioBtn.style.display = 'inline-flex';
      pauseAudioBtn.style.display = 'none';
      stopAudioBtn.style.display = 'none';
      soundWaveAnim.classList.remove('playing');
      narratorStatus.textContent = 'Scripture Voice Narration';
    }
  };

  playAudioBtn.addEventListener('click', () => {
    if (!activeModalProphecy) return;
    if (narrator.isPaused) {
      narrator.resume();
    } else {
      const speechText = `Messianic Prophecy: ${activeModalProphecy.title}. 
      In the Old Testament, in ${activeModalProphecy.otBook}, it was prophesied: ${activeModalProphecy.otText}. 
      In the New Testament, in ${activeModalProphecy.ntBook}, Jesus Christ fulfilled it: ${activeModalProphecy.ntText}. 
      The Divine Inspiration Seal: ${activeModalProphecy.insight}`;
      narrator.speak(speechText);
    }
  });

  pauseAudioBtn.addEventListener('click', () => narrator.pause());
  stopAudioBtn.addEventListener('click', () => narrator.stop());

  // Mark as studied
  markStudiedBtn.addEventListener('click', () => {
    if (!activeModalProphecy) return;
    const nowStudied = tracker.toggle(activeModalProphecy.id);
    updateStudiedButtonState(activeModalProphecy.id);
    updateProgress();
    renderGrid();

    if (nowStudied) {
      audio.playSacredChord();
      showToast('Prophecy marked as studied! Progress updated.');
    } else {
      showToast('Prophecy unmarked from your study record.');
    }
  });

  // Copy full devotional in English
  copyShareBtn.addEventListener('click', () => {
    if (!activeModalProphecy) return;
    const p = activeModalProphecy;
    const devotional = `✨ ETERNAL CONNECTIONS: THE MESSIANIC THREAD
═══════════════════════════════════
📖 ${p.title}
⏳ Time between prophecy and fulfillment: ${p.gapYears}

📜 THE PROPHECY (${p.otBook} - ${p.otDate}):
${p.otText}

✝️ THE FULFILLMENT (${p.ntBook} - ${p.ntDate}):
${p.ntText}

🕊️ THE DIVINE INSPIRATION SEAL:
${p.insight}
═══════════════════════════════════
“For prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.” (2 Peter 1:21)`;

    navigator.clipboard.writeText(devotional).then(() => {
      audio.playHarpChime(audio.scale.D5);
      showToast('Full devotional copied to clipboard!');
    }).catch(() => {
      showToast('Unable to copy automatically.');
    });
  });

  // Modal Navigation
  prevProphecyBtn.addEventListener('click', () => navigateModal('prev'));
  nextProphecyBtn.addEventListener('click', () => navigateModal('next'));
  detailModalClose.addEventListener('click', closeDetailModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeDetailModal();
  });

  // Texas Probability Modal
  statCardProb.addEventListener('click', () => {
    audio.playHarpChime(audio.scale.A4);
    probModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  probModalClose.addEventListener('click', () => {
    probModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  probUnderstoodBtn.addEventListener('click', () => {
    audio.playHarpChime(audio.scale.D5);
    probModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  probModal.addEventListener('click', (e) => {
    if (e.target === probModal) {
      probModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Escape key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      probModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Category filters
  categoryContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    categoryContainer.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    audio.playHarpChime(audio.scale.G4);
    renderGrid();
  });

  // Search
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

  // Sort
  sortOrderSelect.addEventListener('change', (e) => {
    sortOrder = e.target.value;
    audio.playHarpChime(audio.scale.D4);
    renderGrid();
  });

  // Messianic Hebrew Music Button
  ambientSoundBtn.addEventListener('click', () => {
    const playing = audio.toggleMessianicMelody();
    if (playing) {
      ambientState.textContent = 'Playing 🕊️';
      ambientSoundBtn.classList.add('active-ambient');
      showToast('Ancient Messianic Hebrew melody playing');
    } else {
      ambientState.textContent = 'OFF';
      ambientSoundBtn.classList.remove('active-ambient');
      showToast('Messianic melody paused');
    }
  });

  // Sound FX Button
  soundFxBtn.addEventListener('click', () => {
    audio.sfxEnabled = !audio.sfxEnabled;
    if (audio.sfxEnabled) {
      sfxState.textContent = 'ON';
      soundFxBtn.classList.add('active-fx');
      audio.playHarpChime(audio.scale.D4);
      showToast('Sound effects enabled');
    } else {
      sfxState.textContent = 'OFF';
      soundFxBtn.classList.remove('active-fx');
      showToast('Sound effects muted');
    }
  });

  // Theme Toggle (Dark Celestial vs Sacred Parchment)
  let currentTheme = localStorage.getItem('conexiones_theme') || 'dark';
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'parchment' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('conexiones_theme', currentTheme);
    audio.playHarpChime(audio.scale.A4);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'parchment') {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Celestial';
    } else {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Parchment';
    }
  }

  // --- 7. THEOLOGICAL AI SCHOLAR (OPENROUTER INTEGRATION) ---
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

  // English Theological System Prompt
  let aiConversationHistory = [
    {
      role: "system",
      content: "You are a revered biblical scholar, Christian apologist, and spiritual guide for the Eternal Connections application. Your mission is to explain the deep prophetic patterns, historical contexts, linguistic roots in Biblical Hebrew and Greek, and Messianic fulfillment connecting the Old and New Testaments. Always respond with reverence, intellectual rigor, biblical grounding, and cite key scriptures. Provide well-structured, clear responses in English."
    }
  ];

  function openAiModal() {
    audio.playHarpChime(audio.scale.D4);
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
      .replace(/^“(.*?)”/gm, '<blockquote>“$1”</blockquote>')
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
      const promptKey = prompt("To consult the AI Biblical Scholar, please enter your OpenRouter API Key:");
      if (promptKey && promptKey.trim()) {
        localStorage.setItem('conexiones_openrouter_key', promptKey.trim());
      } else {
        appendAiMessage('assistant', "⚠️ An OpenRouter API key is required to enable live theological research.");
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
          'X-Title': 'Eternal Connections'
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
        throw new Error(errData.error?.message || `OpenRouter server error (${response.status})`);
      }

      const data = await response.json();
      const assistantReply = data.choices?.[0]?.message?.content || "No response received from AI.";
      
      aiConversationHistory.push({ role: 'assistant', content: assistantReply });
      appendAiMessage('assistant', assistantReply);
      audio.playHarpChime(audio.scale.D5);

    } catch (err) {
      removeTypingIndicator();
      appendAiMessage('assistant', `⚠️ *Apologies, an issue occurred while querying OpenRouter:* ${err.message}. Please verify your network connection.`);
    }
  }

  // AI Event Listeners
  aiChatToggleBtn.addEventListener('click', openAiModal);
  aiModalClose.addEventListener('click', closeAiModal);
  aiModal.addEventListener('click', (e) => {
    if (e.target === aiModal) closeAiModal();
  });

  aiInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendAiQuery(aiUserInput.value);
  });

  // Suggestion chips
  document.querySelectorAll('.ai-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sendAiQuery(chip.textContent);
    });
  });

  // "Ask AI Scholar about this prophecy" button inside prophecy modal
  if (askAiAboutProphecyBtn) {
    askAiAboutProphecyBtn.addEventListener('click', () => {
      if (!activeModalProphecy) return;
      const p = activeModalProphecy;
      openAiModal();
      const question = `Please provide an in-depth theological and historical analysis of the prophecy: "${p.title}" (${p.otBook} fulfilled in ${p.ntBook}). What specific details demonstrate divine inspiration?`;
      sendAiQuery(question);
    });
  }

  // Close AI modal on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aiModal.classList.contains('open')) {
      closeAiModal();
    }
  });

  // Initialize
  updateProgress();
  renderGrid();
});
