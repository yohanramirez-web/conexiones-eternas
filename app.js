/**
 * ============================================================================
 * ETERNAL CONNECTIONS - CORE ENGINE, BILINGUAL SUITE & HOLY BIBLE EXPLORER
 * ============================================================================
 */

// --- 1. DATA: 14 ESSENTIAL MESSIANIC PROPHECIES (BILINGUAL EN & ES) ---
const propheciesData = [
  {
    id: 1,
    category: "nacimiento",
    categoryName: {
      en: "Birth & Royal Lineage",
      es: "Nacimiento y Linaje"
    },
    title: {
      en: "The Exact Birthplace: Bethlehem Ephrathah",
      es: "El Lugar Exacto del Nacimiento: Belén Efrata"
    },
    gapYears: {
      en: "700 years before Christ",
      es: "700 años antes de Cristo"
    },
    antiquityYear: 700,
    otBook: {
      en: "Micah 5:2",
      es: "Miqueas 5:2"
    },
    otDate: {
      en: "~700 BC",
      es: "~700 a.C."
    },
    otText: {
      en: "“But you, Bethlehem Ephrathah, though you are little among the thousands of Judah, yet out of you shall come forth to Me the One to be Ruler in Israel, whose goings forth are from of old, from everlasting.”",
      es: "«Pero tú, Belén Efrata, pequeña para estar entre las familias de Judá, de ti me saldrá el que será Señor en Israel; y sus salidas son desde el principio, desde los días de la eternidad.»"
    },
    ntBook: {
      en: "Matthew 2:1 & Luke 2:4-6",
      es: "Mateo 2:1 y Lucas 2:4-6"
    },
    ntDate: {
      en: "~4 BC - 1 AD",
      es: "~4 a.C. - 1 d.C."
    },
    ntText: {
      en: "“Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the East came to Jerusalem... And Joseph also went up from Galilee... to the city of David, which is called Bethlehem... and while they were there, the days were completed for her to be delivered.”",
      es: "«Cuando Jesús nació en Belén de Judea en días del rey Herodes, vinieron del oriente a Jerusalén unos magos... Y José subió de Galilea... a la ciudad de David, que se llama Belén... y aconteció que estando ellos allí, se cumplieron los días de su alumbramiento.»"
    },
    insight: {
      en: "Micah specifically named 'Bethlehem Ephrathah' to distinguish it from another town named Bethlehem in the northern tribal region of Zebulun. Jesus was not born in Bethlehem by human planning: an imperial decree from Caesar Augustus required Joseph and Mary to travel there at the exact moment of her labor. No human can choose before being born the exact village of their arrival into the world.",
      es: "Miqueas especificó el nombre antiguo 'Belén Efrata' para no confundirla con otra Belén en el norte de Israel. Jesús no nació allí por plan humano: un decreto imperial de César Augusto obligó a María y José a viajar a esa aldea justo en los días del parto. Ningún hombre elige el pueblo donde va a nacer."
    }
  },
  {
    id: 2,
    category: "nacimiento",
    categoryName: {
      en: "Birth & Royal Lineage",
      es: "Nacimiento y Linaje"
    },
    title: {
      en: "The Miraculous Sign: The Virgin & Immanuel",
      es: "La Señal Milagrosa: La Virgen y Emanuel"
    },
    gapYears: {
      en: "735 years before Christ",
      es: "735 años antes de Cristo"
    },
    antiquityYear: 735,
    otBook: {
      en: "Isaiah 7:14",
      es: "Isaías 7:14"
    },
    otDate: {
      en: "~735 BC",
      es: "~735 a.C."
    },
    otText: {
      en: "“Therefore the Lord Himself will give you a sign: Behold, the virgin shall conceive and bear a Son, and shall call His name Immanuel.”",
      es: "«Por tanto, el Señor mismo os dará señal: He aquí que la virgen concebirá, y dará a luz un hijo, y llamará su nombre Emanuel.»"
    },
    ntBook: {
      en: "Matthew 1:22-23 & Luke 1:34-35",
      es: "Mateo 1:22-23 y Lucas 1:34-35"
    },
    ntDate: {
      en: "~1 AD",
      es: "~1 d.C."
    },
    ntText: {
      en: "“So all this was done that it might be fulfilled which was spoken by the Lord through the prophet, saying: ‘Behold, the virgin shall be with child, and bear a Son, and they shall call His name Immanuel,’ which is translated, ‘God with us.’”",
      es: "«Todo esto aconteció para que se cumpliese lo dicho por el Señor por medio del profeta: He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel, que traducido es: Dios con nosotros.»"
    },
    insight: {
      en: "The Hebrew word 'Almah' signified an extraordinary miracle for the royal house of David. Christ did not inherit the fallen sinful nature of Adam through human seed, fulfilling also Genesis 3:15 regarding 'the seed of the woman' who would crush the serpent's head.",
      es: "El término hebreo 'Almah' señaló un milagro sin precedentes en la dinastía de David. Cristo no heredó la naturaleza caída de Adán por simiente humana, cumpliendo también Génesis 3:15 sobre 'la simiente de la mujer'."
    }
  },
  {
    id: 3,
    category: "nacimiento",
    categoryName: {
      en: "Birth & Royal Lineage",
      es: "Nacimiento y Linaje"
    },
    title: {
      en: "The Promised Royal Lineage: Seed of Abraham & David",
      es: "El Linaje Real Prometido: De Abraham y David"
    },
    gapYears: {
      en: "1,000 to 2,000 years",
      es: "1,000 a 2,000 años"
    },
    antiquityYear: 2000,
    otBook: {
      en: "Genesis 12:3 & 2 Samuel 7:12-13",
      es: "Génesis 12:3 y 2 Samuel 7:12-13"
    },
    otDate: {
      en: "~2000 BC & ~1000 BC",
      es: "~2000 a.C. y ~1000 a.C."
    },
    otText: {
      en: "“In you all the families of the earth shall be blessed.” / “When your days are fulfilled... I will set up your seed after you... and I will establish the throne of his kingdom forever.”",
      es: "«En ti serán benditas todas las familias de la tierra.» / «Yo levantaré después de ti a uno de tu linaje... y afirmaré para siempre el trono de su reino.»"
    },
    ntBook: {
      en: "Matthew 1:1 & Luke 1:32-33",
      es: "Mateo 1:1 y Lucas 1:32-33"
    },
    ntDate: {
      en: "~1 AD",
      es: "~1 d.C."
    },
    ntText: {
      en: "“The book of the genealogy of Jesus Christ, the Son of David, the Son of Abraham... He will be great, and will be called the Son of the Highest; and the Lord God will give Him the throne of His father David. And He will reign over the house of Jacob forever, and of His kingdom there will be no end.”",
      es: "«Libro de la genealogía de Jesucristo, hijo de David, hijo de Abraham... Éste será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre; y su reino no tendrá fin.»"
    },
    insight: {
      en: "The Messianic genealogy narrowed progressively across 20 centuries: from all humanity → to Abraham → to the tribe of Judah → to the royal lineage of David. In 70 AD, the Roman army burned the Temple in Jerusalem along with all Jewish public genealogical archives; no one after Jesus could ever prove descent from King David.",
      es: "El linaje mesiánico se fue estrechando progresivamente a lo largo de 20 siglos. En el año 70 d.C., los romanos destruyeron el Templo de Jerusalén quemando todos los archivos genealógicos de Israel. Nadie después de Jesús podría jamás demostrar descender de David."
    }
  },
  {
    id: 4,
    category: "nacimiento",
    categoryName: {
      en: "Birth & Royal Lineage",
      es: "Nacimiento y Linaje"
    },
    title: {
      en: "The Child Born: Mighty God & Prince of Peace",
      es: "El Niño Nacido: Dios Fuerte y Príncipe de Paz"
    },
    gapYears: {
      en: "720 years before Christ",
      es: "720 años antes de Cristo"
    },
    antiquityYear: 720,
    otBook: {
      en: "Isaiah 9:6-7",
      es: "Isaías 9:6-7"
    },
    otDate: {
      en: "~720 BC",
      es: "~720 a.C."
    },
    otText: {
      en: "“For unto us a Child is born, unto us a Son is given; and the government will be upon His shoulder. And His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace. Of the increase of His government and peace there will be no end...”",
      es: "«Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz. Lo dilatado de su imperio y la paz no tendrán límite...»"
    },
    ntBook: {
      en: "Luke 2:11 & John 1:1,14",
      es: "Lucas 2:11 y Juan 1:1,14"
    },
    ntDate: {
      en: "~1 - 30 AD",
      es: "~1 - 30 d.C."
    },
    ntText: {
      en: "“For there is born to you this day in the city of David a Savior, who is Christ the Lord... And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth.”",
      es: "«Que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor... Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.»"
    },
    insight: {
      en: "One of the most awe-inspiring declarations in the Old Testament: an entity born as a human 'Child' would simultaneously be called 'Mighty God' (El Gibbor) and 'Everlasting Father'. The full incarnation of Deity into human history prophesied more than seven centuries in advance.",
      es: "Una de las declaraciones más asombrosas del Antiguo Testamento: un ser que nacería como 'niño' humano sería al mismo tiempo llamado 'Dios Fuerte' y 'Padre Eterno'. La encarnación de la Deidad en carne humana profetizada siete siglos antes."
    }
  },
  {
    id: 5,
    category: "ministerio",
    categoryName: {
      en: "Ministry & Life",
      es: "Ministerio y Vida"
    },
    title: {
      en: "Triumphal Entry: The Humble King on a Colt",
      es: "Entrada Triunfal: El Rey Justo sobre un Pollino"
    },
    gapYears: {
      en: "520 years before Christ",
      es: "520 años antes de Cristo"
    },
    antiquityYear: 520,
    otBook: {
      en: "Zechariah 9:9",
      es: "Zacarías 9:9"
    },
    otDate: {
      en: "~520 BC",
      es: "~520 a.C."
    },
    otText: {
      en: "“Rejoice greatly, O daughter of Zion! Shout, O daughter of Jerusalem! Behold, your King is coming to you; He is just and having salvation, lowly and riding on a donkey, a colt, the foal of a donkey.”",
      es: "«Alégrate mucho, hija de Sion; da voces de júbilo, hija de Jerusalén; he aquí tu rey vendrá a ti, justo y salvador, humilde, y cabalgando sobre un asno, sobre un pollino hijo de asna.»"
    },
    ntBook: {
      en: "Matthew 21:4-9 & John 12:14-15",
      es: "Mateo 21:4-9 y Juan 12:14-15"
    },
    ntDate: {
      en: "~33 AD",
      es: "~33 d.C."
    },
    ntText: {
      en: "“All this was done that it might be fulfilled which was spoken by the prophet, saying: ‘Tell the daughter of Zion, Behold, your King is coming to you, lowly, and sitting on a donkey, a colt, the foal of a donkey.’... And the multitudes cried out: ‘Hosanna to the Son of David! Blessed is He who comes in the name of the Lord!’”",
      es: "«Todo esto aconteció para que se cumpliese lo dicho por el profeta... He aquí, tu Rey viene a ti, manso, y sentado sobre una asna, sobre un pollino... Y las multitudes clamaban: ¡Hosanna al Hijo de David! ¡Bendito el que viene en el nombre del Señor!»"
    },
    insight: {
      en: "While worldly conquerors of antiquity rode into conquered capitals atop war stallions and golden chariots, Jesus entered the Holy City of Jerusalem as the King of Peace on a humble donkey's colt, exactly as Zechariah had foreseen half a millennium earlier.",
      es: "Mientras los conquistadores de la época entraban sobre caballos de guerra y carruajes dorados sembrando terror, Jesús entró en Jerusalén como Rey de Paz en un humilde pollino, exactamente como Zacarías había escrito."
    }
  },
  {
    id: 6,
    category: "ministerio",
    categoryName: {
      en: "Ministry & Life",
      es: "Ministerio y Vida"
    },
    title: {
      en: "Betrayal by a Close and Trusted Friend",
      es: "Traición por un Íntimo y Amigo Cercano"
    },
    gapYears: {
      en: "1,000 years before Christ",
      es: "1,000 años antes de Cristo"
    },
    antiquityYear: 1000,
    otBook: {
      en: "Psalm 41:9",
      es: "Salmo 41:9"
    },
    otDate: {
      en: "~1000 BC",
      es: "~1000 a.C."
    },
    otText: {
      en: "“Even my own familiar friend in whom I trusted, who ate my bread, has lifted up his heel against me.”",
      es: "«Aun el hombre de mi paz, en quien yo confiaba, el que de mi pan comía, alzó contra mí el calcañar.»"
    },
    ntBook: {
      en: "John 13:18,21 & Matthew 26:21-25",
      es: "Juan 13:18,21 y Mateo 26:21-25"
    },
    ntDate: {
      en: "~33 AD",
      es: "~33 d.C."
    },
    ntText: {
      en: "“I do not speak concerning all of you. I know whom I have chosen; but that the Scripture may be fulfilled: ‘He who eats bread with Me has lifted up his heel against Me.’... Most assuredly, I say to you, one of you will betray Me.”",
      es: "«No hablo de todos vosotros; yo sé a quiénes he elegido; mas para que se cumpla la Escritura: El que come pan conmigo, alzó contra mí su calcañar... De cierto os digo, que uno de vosotros me va a entregar.»"
    },
    insight: {
      en: "Jesus directly cited this Psalm at the Last Supper. The Messiah was not captured through open battle with Roman legions or temple guards, but betrayed by one of His closest disciples who dipped bread into the same dish with Him.",
      es: "Jesús mismo citó este Salmo durante la Última Cena. No fue entregado por un enemigo visible de Roma o el Sanedrín, sino por uno de sus doce apóstoles que comía de su mismo plato."
    }
  },
  {
    id: 7,
    category: "pasion",
    categoryName: {
      en: "Passion & Sacrifice",
      es: "Pasión y Sacrificio"
    },
    title: {
      en: "The Price of Betrayal: 30 Pieces of Silver & The Potter",
      es: "El Precio de la Traición: 30 Monedas y el Alfarero"
    },
    gapYears: {
      en: "520 years before Christ",
      es: "520 años antes de Cristo"
    },
    antiquityYear: 520,
    otBook: {
      en: "Zechariah 11:12-13",
      es: "Zacarías 11:12-13"
    },
    otDate: {
      en: "~520 BC",
      es: "~520 a.C."
    },
    otText: {
      en: "“Then I said to them, ‘If it is agreeable to you, give me my wages; and if not, refrain.’ So they weighed out for my wages thirty pieces of silver. And the Lord said to me, ‘Throw it to the potter’—that princely price they set on me. So I took the thirty pieces of silver and threw them into the house of the Lord for the potter.”",
      es: "«Y pesaron por mi salario treinta piezas de plata. Y me dijo Jehová: Échalo al tesoro; ¡hermoso precio con que me han apreciado! Y tomé las treinta piezas de plata, y las eché en la casa de Jehová al alfarero.»"
    },
    ntBook: {
      en: "Matthew 26:15 & 27:3-7",
      es: "Mateo 26:15 y 27:3-7"
    },
    ntDate: {
      en: "~33 AD",
      es: "~33 d.C."
    },
    ntText: {
      en: "“And they counted out to him thirty pieces of silver... Then Judas, seeing that He had been condemned, was remorseful and brought back the thirty pieces of silver to the chief priests... And he threw down the pieces of silver in the temple and departed... And the chief priests took counsel and bought with them the potter’s field, to bury strangers in.”",
      es: "«Y ellos le asignaron treinta piezas de plata... Y Judas, arrojando las piezas de plata en el templo, salió y se ahorcó. Los principales sacerdotes dijeron: No es lícito echarlas en el tesoro... y compraron con ellas el campo del alfarero.»"
    },
    insight: {
      en: "Three astonishingly precise details impossible to conspire humanly: 1) The exact valuation (30 silver coins, the legal price of a gored slave in Exodus 21), 2) That the money would be thrown onto the floor inside the Temple, and 3) That it would ultimately purchase a potter's field.",
      es: "Tres detalles precisos imposibles de coordinar humanamente: 1) La suma exacta (30 monedas de plata), 2) Que el dinero sería lanzado dentro del Templo, y 3) Que terminaría comprando el terreno de un alfarero."
    }
  },
  {
    id: 8,
    category: "pasion",
    categoryName: {
      en: "Passion & Sacrifice",
      es: "Pasión y Sacrificio"
    },
    title: {
      en: "Silent & Meek Before Accusers and Shearers",
      es: "Silencioso y Manso ante sus Acusadores"
    },
    gapYears: {
      en: "700 years before Christ",
      es: "700 años antes de Cristo"
    },
    antiquityYear: 700,
    otBook: {
      en: "Isaiah 53:7",
      es: "Isaías 53:7"
    },
    otDate: {
      en: "~700 BC",
      es: "~700 a.C."
    },
    otText: {
      en: "“He was oppressed and He was afflicted, yet He opened not His mouth; He was led as a lamb to the slaughter, and as a sheep before its shearers is silent, so He opened not His mouth.”",
      es: "«Angustiado él, y afligido, no abrió su boca; como cordero fue llevado al matadero; y como oveja delante de sus trasquiladores, enmudeció, y no abrió su boca.»"
    },
    ntBook: {
      en: "Matthew 27:12-14 & 1 Peter 2:23",
      es: "Mateo 27:12-14 y 1 Pedro 2:23"
    },
    ntDate: {
      en: "~33 AD",
      es: "~33 d.C."
    },
    ntText: {
      en: "“And while He was being accused by the chief priests and elders, He answered nothing. Then Pilate said to Him, ‘Do You not hear how many things they testify against You?’ But He answered him not one word, so that the governor marveled greatly.”",
      es: "«Y siendo acusado por los principales sacerdotes y por los ancianos, nada respondió. Pilato entonces le dijo: ¿No oyes cuántas cosas testifican contra ti? Pero Jesús no le respondió ni una palabra; de tal manera que el gobernador se maravillaba en gran manera.»"
    },
    insight: {
      en: "Facing false accusations carrying the death penalty, every human defendant frantically pleads their innocence. The voluntary silence of Jesus bewildered Roman Governor Pontius Pilate, fulfilling the prophecy of the innocent Lamb submitting willingly to the altar.",
      es: "Ante acusaciones que conllevaban la crucifixión, cualquier reo defendía su vida desesperadamente. El silencio voluntario de Jesús asombró al gobernador romano Poncio Pilato, cumpliendo la profecía del Cordero de Dios."
    }
  },
  {
    id: 9,
    category: "pasion",
    categoryName: {
      en: "Passion & Sacrifice",
      es: "Pasión y Sacrificio"
    },
    title: {
      en: "Crucifixion: Pierced Hands and Feet & Cast Lots for Garments",
      es: "Crucifixión: Manos y Pies Traspasados y Ropas Sorteadas"
    },
    gapYears: {
      en: "1,000 years before Christ",
      es: "1,000 años antes de Cristo"
    },
    antiquityYear: 1000,
    otBook: {
      en: "Psalm 22:1, 16-18",
      es: "Salmo 22:1, 16-18"
    },
    otDate: {
      en: "~1000 BC",
      es: "~1000 a.C."
    },
    otText: {
      en: "“My God, My God, why have You forsaken Me?... For dogs have surrounded Me; the congregation of the wicked has enclosed Me. They pierced My hands and My feet; I can count all My bones. They look and stare at Me. They divide My garments among them, and for My clothing they cast lots.”",
      es: "«Dios mío, Dios mío, ¿por qué me has desamparado?... Horadaron mis manos y mis pies. Contar puedo todos mis huesos; ellos me miran y me observan. Repartieron entre sí mis vestidos, y sobre mi ropa echaron suertes.»"
    },
    ntBook: {
      en: "John 19:23-24 & 20:25",
      es: "Juan 19:23-24 y 20:25"
    },
    ntDate: {
      en: "~33 AD",
      es: "~33 d.C."
    },
    ntText: {
      en: "“Then the soldiers, when they had crucified Jesus, took His garments and made four parts... They said therefore among themselves, ‘Let us not tear it, but cast lots for it, whose it shall be,’ that the Scripture might be fulfilled... ‘Unless I see in His hands the print of the nails... I will not believe.’”",
      es: "«Los soldados tomaron sus vestidos e hicieron cuatro partes... Dijeron entre sí: No la partamos, sino echemos suertes sobre ella, a ver de quién será. Esto fue para que se cumpliese la Escritura... 'Si no viere en sus manos la señal de los clavos... no creeré.'»"
    },
    insight: {
      en: "King David penned this Psalm a thousand years before Jesus. In David's era, capital punishment in Israel was stoning; Roman crucifixion had not yet been invented. David portrayed crucifixion in excruciating detail: the pierced extremities, dehydrated fever, and the soldiers casting dice for His seamless tunic.",
      es: "El rey David compuso este Salmo diez siglos antes de Cristo. En tiempos de David, la pena de muerte en Israel era el apedreamiento. La crucifixión romana ni siquiera existía en el mundo mediterráneo. David describió con precisión los clavos, la asfixia y el sorteo de vestiduras."
    }
  },
  {
    id: 10,
    category: "pasion",
    categoryName: {
      en: "Passion & Sacrifice",
      es: "Pasión y Sacrificio"
    },
    title: {
      en: "Not One of His Bones Broken: The True Passover Lamb",
      es: "Ni Uno de sus Huesos Quebrantado: El Cordero Pascual"
    },
    gapYears: {
      en: "1,400 years before Christ",
      es: "1,400 años antes de Cristo"
    },
    antiquityYear: 1400,
    otBook: {
      en: "Exodus 12:46 & Psalm 34:20",
      es: "Éxodo 12:46 y Salmo 34:20"
    },
    otDate: {
      en: "~1440 BC & ~1000 BC",
      es: "~1440 a.C. y ~1000 a.C."
    },
    otText: {
      en: "“Nor shall you break one of its bones.” (Statute of the Passover Lamb) / “He guards all his bones; not one of them is broken.”",
      es: "«Ni quebraréis hueso suyo.» (Estatuto del Cordero Pascual) / «Él guarda todos sus huesos; ni uno de ellos será quebrantado.»"
    },
    ntBook: {
      en: "John 19:32-36",
      es: "Juan 19:32-36"
    },
    ntDate: {
      en: "~33 AD",
      es: "~33 d.C."
    },
    ntText: {
      en: "“Then the soldiers came and broke the legs of the first and of the other who was crucified with Him. But when they came to Jesus and saw that He was already dead, they did not break His legs... For these things were done that the Scripture should be fulfilled, ‘Not one of His bones shall be broken.’”",
      es: "«Fueron, pues, los soldados, y quebraron las piernas al primero, y asimismo al otro... Mas cuando llegaron a Jesús, como le vieron ya muerto, no le quebraron las piernas... Porque estas cosas acontecieron para que se cumpliese la Escritura: No será quebrado hueso suyo.»"
    },
    insight: {
      en: "Standard Roman crucifixion protocol was to smash the victims' shins with iron mallets (crurifragium) to hasten suffocation before sundown. The soldiers broke the legs of both thieves; but seeing Jesus had already yielded His spirit, a soldier merely pierced His side, preserving the Passover archetype intact.",
      es: "La costumbre militar de Roma era quebrar las piernas con mazas de hierro para acelerar la asfixia. Los dos malhechores sufrieron la fractura de piernas, pero al llegar a Jesús vieron que ya había muerto, cumpliendo el tipo exacto del Cordero Pascual ileso."
    }
  },
  {
    id: 11,
    category: "pasion",
    categoryName: {
      en: "Passion & Sacrifice",
      es: "Pasión y Sacrificio"
    },
    title: {
      en: "The Suffering Servant: Crushed for Our Iniquities",
      es: "El Siervo Sufriente: Molido por Nuestras Rebeliones"
    },
    gapYears: {
      en: "700 years before Christ",
      es: "700 años antes de Cristo"
    },
    antiquityYear: 700,
    otBook: {
      en: "Isaiah 53:4-6",
      es: "Isaías 53:4-6"
    },
    otDate: {
      en: "~700 BC",
      es: "~700 a.C."
    },
    otText: {
      en: "“Surely He has borne our griefs and carried our sorrows; yet we esteemed Him stricken, smitten by God, and afflicted. But He was wounded for our transgressions, He was bruised for our iniquities; the chastisement for our peace was upon Him, and by His stripes we are healed... And the Lord has laid on Him the iniquity of us all.”",
      es: "«Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores... Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados... Jehová cargó en él el pecado de todos nosotros.»"
    },
    ntBook: {
      en: "1 Peter 2:24 & Romans 5:8",
      es: "1 Pedro 2:24 y Romanos 5:8"
    },
    ntDate: {
      en: "~33 - 64 AD",
      es: "~33 - 64 d.C."
    },
    ntText: {
      en: "“who Himself bore our sins in His own body on the tree, that we, having died to sins, might live for righteousness—by whose stripes you were healed... But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us.”",
      es: "«quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados... Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.»"
    },
    insight: {
      en: "The core of the Gospel: substitutionary atonement. The Messiah bore the legal penalty due to fallen humanity. The Great Isaiah Scroll found at Qumran near the Dead Sea (dated to ~150 BC) contains this exact chapter intact word for word.",
      es: "El corazón del Evangelio: expiación sustitutoria. El Salvador cargó la condena judicial que merecía el pecador. El Gran Rollo de Isaías hallado en las cuevas del Mar Muerto (datado en el 150 a.C.) contiene este pasaje íntegro y sin alteraciones."
    }
  },
  {
    id: 12,
    category: "pasion",
    categoryName: {
      en: "Passion & Sacrifice",
      es: "Pasión y Sacrificio"
    },
    title: {
      en: "An Honorable Burial in the Tomb of a Wealthy Man",
      es: "Sepultura de Honor en la Tumba de un Hombre Rico"
    },
    gapYears: {
      en: "700 years before Christ",
      es: "700 años antes de Cristo"
    },
    antiquityYear: 700,
    otBook: {
      en: "Isaiah 53:9",
      es: "Isaías 53:9"
    },
    otDate: {
      en: "~700 BC",
      es: "~700 a.C."
    },
    otText: {
      en: "“And they made His grave with the wicked—but with the rich at His death, because He had done no violence, nor was any deceit in His mouth.”",
      es: "«Y se dispuso con los impíos su sepultura, mas con los ricos fue en su muerte; aunque nunca hizo maldad, ni hubo engaño en su boca.»"
    },
    ntBook: {
      en: "Matthew 27:57-60",
      es: "Mateo 27:57-60"
    },
    ntDate: {
      en: "~33 AD",
      es: "~33 d.C."
    },
    ntText: {
      en: "“Now when evening had come, there came a rich man from Arimathea, named Joseph, who himself had also become a disciple of Jesus... He went to Pilate and asked for the body of Jesus... When Joseph had taken the body, he wrapped it in a clean linen cloth, and laid it in his new tomb which he had hewn out of the rock.”",
      es: "«Cuando llegó la noche, vino un hombre rico de Arimatea, llamado José, que también había sido discípulo de Jesús... y pidió el cuerpo de Jesús... Y tomando José el cuerpo, lo envolvió en una sábana limpia, y lo puso en su sepulcro nuevo, que había labrado en la peña.»"
    },
    insight: {
      en: "The customary Roman fate for executed criminals was discarding their corpses into mass trenches or the fires of Gehenna. Yet Isaiah predicted that while He would die alongside outlaws ('with the wicked'), His final burial would be with the wealthy. Joseph of Arimathea fulfilled this without human orchestration.",
      es: "A los criminales crucificados se les arrojaba a fosas comunes o a los basureros extramuros. Isaías predijo que aunque moriría con los criminales, su sepulcro final pertenecería a un hombre rico. José de Arimatea cumplió esto sin proponérselo."
    }
  },
  {
    id: 13,
    category: "resurreccion",
    categoryName: {
      en: "Resurrection & Glory",
      es: "Resurrección y Gloria"
    },
    title: {
      en: "The Resurrection: His Flesh Did Not See Corruption",
      es: "La Resurrección: Su Carne no Vio Corrupción"
    },
    gapYears: {
      en: "1,000 years before Christ",
      es: "1,000 años antes de Cristo"
    },
    antiquityYear: 1000,
    otBook: {
      en: "Psalm 16:10 & Isaiah 53:10-11",
      es: "Salmo 16:10 e Isaías 53:10-11"
    },
    otDate: {
      en: "~1000 BC",
      es: "~1000 a.C."
    },
    otText: {
      en: "“For You will not leave my soul in Sheol, nor will You allow Your Holy One to see corruption... When You make His soul an offering for sin, He shall see His seed, He shall prolong His days... He shall see the labor of His soul, and be satisfied.”",
      es: "«Porque no dejarás mi alma en el Seol, ni permitirás que tu santo vea corrupción... Cuando haya puesto su vida en expiación por el pecado, verá linaje, vivirá por largos días...»"
    },
    ntBook: {
      en: "Acts 2:31-32 & Luke 24:5-6",
      es: "Hechos 2:31-32 y Lucas 24:5-6"
    },
    ntDate: {
      en: "~33 AD",
      es: "~33 d.C."
    },
    ntText: {
      en: "“He, foreseeing this, spoke concerning the resurrection of the Christ, that His soul was not left in Hades, nor did His flesh see corruption. This Jesus God has raised up, of which we are all witnesses... ‘Why do you seek the living among the dead? He is not here, but is risen!’”",
      es: "«Viéndolo antes, David habló de la resurrección de Cristo, que su alma no fue dejada en el Hades, ni su carne vio corrupción. A este Jesús resucitó Dios, de lo cual todos nosotros somos testigos... ¿Por qué buscáis entre los muertos al que vive? No está aquí, sino que ha resucitado.»"
    },
    insight: {
      en: "The empty tomb. King David died and was buried, his tomb remaining in Jerusalem; therefore, he prophesied of another. Jesus rose on the third day before biological decay set in, inaugurating eternal life and triumph over death.",
      es: "La tumba vacía. David murió y su sepulcro permanecía en Jerusalén, pero Jesús resucitó al tercer día antes de que su cuerpo experimentara descomposición orgánica, sellando su victoria sobre el pecado y la muerte."
    }
  },
  {
    id: 14,
    category: "resurreccion",
    categoryName: {
      en: "Resurrection & Glory",
      es: "Resurrección y Gloria"
    },
    title: {
      en: "Ascension & Everlasting Dominion at the Right Hand of God",
      es: "Ascensión y Reino Eterno a la Diestra de Dios"
    },
    gapYears: {
      en: "1,000 & 550 years before Christ",
      es: "1,000 y 550 años antes de Cristo"
    },
    antiquityYear: 1000,
    otBook: {
      en: "Psalm 110:1 & Daniel 7:13-14",
      es: "Salmo 110:1 y Daniel 7:13-14"
    },
    otDate: {
      en: "~1000 BC & ~550 BC",
      es: "~1000 a.C. y ~550 a.C."
    },
    otText: {
      en: "“The Lord said to my Lord, ‘Sit at My right hand, till I make Your enemies Your footstool.’” / “Then to Him was given dominion and glory and a kingdom, that all peoples, nations, and languages should serve Him. His dominion is an everlasting dominion.”",
      es: "«Jehová dijo a mi Señor: Siéntate a mi diestra, hasta que ponga a tus enemigos por estrado de tus pies.» / «Y le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran; su dominio es eterno.»"
    },
    ntBook: {
      en: "Mark 16:19, Acts 1:9 & Hebrews 1:3",
      es: "Marcos 16:19, Hechos 1:9 y Hebreos 1:3"
    },
    ntDate: {
      en: "~33 - 65 AD",
      es: "~33 - 65 d.C."
    },
    ntText: {
      en: "“So then, after the Lord had spoken to them, He was received up into heaven, and sat down at the right hand of God... who being the brightness of His glory... when He had by Himself purged our sins, sat down at the right hand of the Majesty on high.”",
      es: "«Y el Señor, después que les habló, fue recibido arriba en el cielo, y se sentó a la diestra de Dios... habiendo efectuado la purificación de nuestros pecados por medio de sí mismo, se sentó a la diestra de la Majestad en las alturas.»"
    },
    insight: {
      en: "Jesus quoted Psalm 110 directly before the Sanhedrin during His trial, identifying Himself as the Divine Son exalted at the right hand of the Almighty Father, whose everlasting kingdom shall never pass away.",
      es: "Jesús citó el Salmo 110 ante el Sanedrín al ser juzgado, identificándose como el Señor exaltado a la diestra del Padre Todopoderoso, cuyo reino no tendrá fin."
    }
  }
];

// Helper to get localized property from a prophecy object
function getLocalized(prophecy, field, lang = currentLanguage) {
  const val = prophecy[field];
  if (!val) return "";
  if (typeof val === 'object' && val[lang]) {
    return val[lang];
  }
  return val;
}

// --- 2. BILINGUAL I18N DICTIONARY ---
const I18N = {
  en: {
    pageTitle: "Eternal Connections | The Messianic Thread of the Scriptures",
    brandText: "ETERNAL CONNECTIONS",
    worshipPlay: "Hebrew Worship: PLAY",
    worshipPause: "Hebrew Worship: PAUSE",
    worshipNavLabel: "Hebrew Worship:",
    sfxNavLabel: "SFX:",
    sfxOn: "ON",
    sfxOff: "OFF",
    bibleBtn: "Holy Bible",
    aiScholar: "AI Scholar",
    themeParchment: "Parchment",
    themeCelestial: "Celestial",
    langBtn: "ESPAÑOL", // What is displayed on toggle button
    heroBadge: "HISTORICAL & SPIRITUAL EVIDENCE",
    heroTitle: "ETERNAL CONNECTIONS",
    heroSubtitle: "The golden thread weaving the <em>Old</em> and <em>New Testaments</em> across millennia. Discover how dozens of specific prophecies written centuries before Christ were fulfilled with astonishing historical, prophetic, and mathematical precision in Jesus.",
    studyJourneyTitle: "📖 Your Scripture Meditation & Study Journey",
    studyScoreText: (studied, total, pct) => `${studied} of ${total} prophecies studied (${pct}%)`,
    statProbValue: "1 in 10¹⁷",
    statProbDesc: "Mathematical probability of fulfilling just 8 prophecies by chance",
    statProbMore: "View Texas Illustration →",
    statYearsValue: "400 to 1,500",
    statYearsDesc: "Years between the written prophecy and its historical fulfillment",
    statQumranValue: "Qumran 1947",
    statQumranDesc: "Dead Sea Scrolls proving scriptures existed centuries before Christ",
    searchPlaceholder: "Search by prophet, keyword, book, or theme (e.g., Isaiah, Bethlehem, 30 silver coins, cross)...",
    catAll: "All Prophecies (14)",
    catNacimiento: "👶 Birth & Royal Lineage",
    catMinisterio: "🕊️ Ministry & Life",
    catPasion: "✝️ Passion & Sacrifice",
    catResurreccion: "👑 Resurrection & Glory",
    resultsCount: (count) => `Showing ${count} Messianic connections`,
    sortBy: "Sort by:",
    sortBiblical: "Biblical / Thematic Order",
    sortAntiquity: "Oldest First (BC)",
    sortTitle: "Alphabetical",
    examineCta: "Examine Sacred Connection",
    studiedBadge: "✓ Completed",
    markStudied: "Mark as Studied / Meditated",
    studiedCompleted: "✓ Completed",
    otRibbon: "📜 OLD TESTAMENT",
    ntRibbon: "✨ NEW TESTAMENT",
    otSeal: "Prophesied centuries before Christ",
    ntSeal: "Recorded by firsthand eyewitnesses",
    fulfilledCross: "FULFILLED",
    divineSealTitle: "The Divine Inspiration Seal",
    divineSealSub: "Why this historical connection could never be coincidence or man-made",
    listenBtn: "Listen",
    pauseBtn: "Pause",
    narratorStatus: "Scripture Voice Narration",
    narratorSub: "Listen to the prophecy, fulfillment, and guided theological reflection",
    prevBtn: "← Previous",
    nextBtn: "Next →",
    askAiAboutProphecy: "Ask AI Scholar about this prophecy",
    copyDevotionalBtn: "Copy Full Devotional",
    devotionalCopied: "Full devotional copied to clipboard!",
    studiedMarked: "Prophecy marked as completed! Progress updated.",
    studiedUnmarked: "Prophecy unmarked from your study record.",
    completionTitle: "✦ Prophetic Study Journey Completed! ✦",
    completionMessage: "“Well done, good and faithful servant... enter into the joy of your Lord.” (Matthew 25:21) You have meditated upon all 14 eternal connections that prove the absolute divine inspiration of the Word of God.",
    completionShareBtn: "Share Blessing",
    completionCopied: "Study completion testimony copied to clipboard!",
    probBadge: "MATHEMATICS & APOLOGETICS",
    probModalTitle: "The Texas Silver Dollar Illustration (8 Prophecies)",
    probAuthor: "Based on the probability research of Dr. Peter W. Stoner (Science Speaks)",
    probQuote: `“If you take silver dollars and cover the entire state of Texas (over 268,000 square miles) two feet deep... then mark one silver dollar with a red cross and stir the entire mass thoroughly... and blindfold a man, permitting him to travel wherever he wishes and dig as deep as he likes... what is the probability that he reaches down and picks up that exact marked coin on his very first attempt? <strong>1 in 10¹⁷</strong>.”`,
    probExplanation: `That is the exact same mathematical probability that any one individual could have fulfilled by blind chance <strong>just eight</strong> of the more than 300 Old Testament Messianic prophecies. Jesus did not merely fulfill eight—He fulfilled every single one of them!`,
    probButton: "Praise God! Understood",
    aiModelTag: "OpenRouter • Gemini 2.5 Flash",
    aiTitle: "Biblical Theological Scholar",
    aiDesc: "Ask questions about scripture, historical contexts, Hebrew & Greek root words, or Messianic themes.",
    aiWelcome: "<p><strong>Grace and peace to you.</strong> I am your scripture study consultant for <em>Eternal Connections</em>.</p><p>Connected to OpenRouter, I am here to help you unpack the deep prophetic patterns of the Bible, explore original Hebrew and Greek roots, and answer any theological inquiries. Which passage or prophecy would you like to examine today?</p>",
    aiSuggestionsLabel: "Suggested Questions:",
    aiSuggestions: [
      "Why does Psalm 22 describe crucifixion before Rome invented it?",
      "What is the prophetic significance of the Passover Lamb?",
      "What did 30 pieces of silver signify in ancient Hebrew law?",
      "Why did the Messiah have to descend from King David and be born in Bethlehem?"
    ],
    aiInputPlaceholder: "Ask any biblical or theological question...",
    aiKeyBtn: "🔑 Key",
    aiSystemPrompt: "You are a revered biblical scholar, Christian apologist, and spiritual guide for the Eternal Connections application. Your mission is to explain the deep prophetic patterns, historical contexts, linguistic roots in Biblical Hebrew and Greek, and Messianic fulfillment connecting the Old and New Testaments. Always respond with reverence, intellectual rigor, biblical grounding, and cite key scriptures. Provide well-structured, clear responses in English.",
    footerQuote: "“You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about Me.”",
    footerCite: "— John 5:39",
    footerCredits: "<strong>Eternal Connections</strong> • Built for deep scripture study, reflection, and edification",
    footerSub: "All of the Old Testament points forward to the Cross. All of the New Testament looks back to it.",
    // Bible Reader
    bibleModalTitle: "THE HOLY SCRIPTURES",
    bibleModalSubtitle: "The Word of the Living God • Old and New Testaments (66 Books)",
    bibleTestamentAll: "All (66)",
    bibleTestamentOT: "Old Testament (39)",
    bibleTestamentNT: "New Testament (27)",
    bibleBookLabel: "Book:",
    bibleChapterLabel: "Chapter:",
    biblePrevChapter: "← Previous",
    bibleNextChapter: "Next →",
    bibleLoading: "Opening the Sacred Scriptures...",
    bibleError: "Unable to load chapter. Please verify your internet connection.",
    bibleCopyChapter: "Copy Chapter",
    bibleChapterCopied: "Chapter text copied to clipboard!",
    bibleTransLabel: "Translation:",
    bibleProphecyBannerTitle: "Messianic Prophecy Found in this Chapter!",
    bibleProphecyBannerDesc: "Click to open parallel view comparing with New Testament fulfillment.",
    bibleProphecyBannerBtn: "Examine Fulfillment →",
    // Devotional Section & Admin Editor
    devoBadgeWeekly: "WEEKLY REFLECTION",
    devoBadgeDaily: "DAILY MEDITATION",
    devoFreqWeekly: "Weekly Devotional",
    devoFreqDaily: "Daily Devotional",
    devoReflectionHeading: "🕊️ Guided Theological Reflection:",
    devoLinkedProphecyCta: (title) => `Examine Linked Prophecy: ${title} →`,
    devoListenBtn: "Listen",
    devoCopyBtn: "Copy Message",
    devoCopiedToast: "Devotional message copied to clipboard!",
    passcodeTitle: "Admin Authentication",
    passcodeSubtitle: "Enter the secret passcode to access the Devotional Editor.",
    passcodePlaceholder: "Passcode (e.g. eternas2026)",
    passcodeSubmitBtn: "Unlock →",
    passcodeIncorrect: "Incorrect passcode. Please try again.",
    passcodeUnlockedToast: "Admin mode unlocked!",
    adminEditorBadge: "ADMINISTRATION & DEVOTIONAL EDITOR",
    adminEditorTitle: "Daily / Weekly Devotional Editor",
    adminEditorSubtitle: "Update the featured scripture meditation directly from your phone or desktop. Saves to client storage and updates in real-time.",
    adminFreqLabel: "Frequency / Categoría:",
    adminProphecyLabel: "Linked Prophecy / Profecía Vinculada:",
    adminOptWeekly: "Weekly Message / Mensaje Semanal",
    adminOptDaily: "Daily Message / Mensaje Diario",
    adminOptNone: "None / Ninguna",
    adminEditingLangLabel: "Editing language:",
    adminFieldTitleLabel: "Devotional Title / Título:",
    adminFieldRefLabel: "Scripture Passage Reference / Cita Bíblica:",
    adminFieldScriptureLabel: "Scripture Text / Texto Bíblico:",
    adminFieldReflectionLabel: "Theological Reflection / Reflexión Espiritual:",
    adminSaveBtn: "Save Message",
    adminSavedToast: "Devotional message saved and updated live!",
    adminResetBtn: "Reset to Default",
    adminResetToast: "Restored to default devotional.",
    adminExportBtn: "Export JSON",
    adminExportToast: "Devotional JSON copied to clipboard! Ready to paste into repo.",
    worshipMiniPill: "Hebrew Worship"
  },
  es: {
    pageTitle: "Conexiones Eternas | El Hilo Mesiánico de las Escrituras",
    brandText: "CONEXIONES ETERNAS",
    worshipPlay: "Música Mesiánica: REPRODUCIR",
    worshipPause: "Música Mesiánica: PAUSAR",
    worshipNavLabel: "Música Mesiánica:",
    sfxNavLabel: "Efectos:",
    sfxOn: "ACTIVADOS",
    sfxOff: "SILENCIADOS",
    bibleBtn: "Santa Biblia",
    aiScholar: "Erudito IA",
    themeParchment: "Pergamino",
    themeCelestial: "Celestial",
    langBtn: "ENGLISH", // What is displayed on toggle button
    heroBadge: "EVIDENCIA HISTÓRICA Y ESPIRITUAL",
    heroTitle: "CONEXIONES ETERNAS",
    heroSubtitle: "El hilo de oro que entrelaza el <em>Antiguo</em> y el <em>Nuevo Testamento</em> a través de milenios. Descubre cómo decenas de profecías específicas escritas siglos antes de Cristo se cumplieron con asombrosa precisión histórica, profética y matemática en Jesús.",
    studyJourneyTitle: "📖 Tu Progreso de Meditación y Estudio Bíblico",
    studyScoreText: (studied, total, pct) => `${studied} de ${total} profecías estudiadas (${pct}%)`,
    statProbValue: "1 en 10¹⁷",
    statProbDesc: "Probabilidad matemática de cumplir solo 8 profecías por puro azar",
    statProbMore: "Ver Ilustración de Texas →",
    statYearsValue: "400 a 1,500",
    statYearsDesc: "Años entre la profecía escrita y su cumplimiento histórico",
    statQumranValue: "Qumrán 1947",
    statQumranDesc: "Rollos del Mar Muerto que prueban la existencia de los textos antes de Cristo",
    searchPlaceholder: "Buscar por profeta, palabra clave, libro o tema (ej. Isaías, Belén, 30 monedas, cruz)...",
    catAll: "Todas las Profecías (14)",
    catNacimiento: "👶 Nacimiento y Linaje",
    catMinisterio: "🕊️ Ministerio y Vida",
    catPasion: "✝️ Pasión y Sacrificio",
    catResurreccion: "👑 Resurrección y Gloria",
    resultsCount: (count) => `Mostrando ${count} conexiones mesiánicas`,
    sortBy: "Ordenar por:",
    sortBiblical: "Orden Bíblico / Temático",
    sortAntiquity: "Más Antiguas Primero (a.C.)",
    sortTitle: "Alfabético",
    examineCta: "Examinar Conexión Sagrada",
    studiedBadge: "✓ Completado",
    markStudied: "Marcar como Meditado / Estudiado",
    studiedCompleted: "✓ Completado",
    otRibbon: "📜 ANTIGUO TESTAMENTO",
    ntRibbon: "✨ NUEVO TESTAMENTO",
    otSeal: "Profetizado siglos antes de Cristo",
    ntSeal: "Registrado por testigos presenciales",
    fulfilledCross: "CUMPLIDO",
    divineSealTitle: "El Sello de Inspiración Divina",
    divineSealSub: "Por qué esta conexión histórica jamás pudo ser casualidad o invención humana",
    listenBtn: "Escuchar",
    pauseBtn: "Pausar",
    narratorStatus: "Narración de las Escrituras",
    narratorSub: "Escucha la profecía, su cumplimiento y la reflexión teológica guiada",
    prevBtn: "← Anterior",
    nextBtn: "Siguiente →",
    askAiAboutProphecy: "Preguntar al Erudito IA sobre esta profecía",
    copyDevotionalBtn: "Copiar Devocional Completo",
    devotionalCopied: "¡Devocional completo copiado al portapapeles!",
    studiedMarked: "¡Profecía marcada como completada! Progreso actualizado.",
    studiedUnmarked: "Profecía desmarcada de tu registro de estudio.",
    completionTitle: "✦ ¡Camino de Meditación Mesiánica Completado! ✦",
    completionMessage: "«Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré; entra en el gozo de tu señor.» (Mateo 25:21) Has meditado las 14 conexiones eternas que demuestran la fidelidad inmutable de la Palabra de Dios.",
    completionShareBtn: "Compartir Bendición",
    completionCopied: "¡Testimonio de estudio completado copiado al portapapeles!",
    probBadge: "MATEMÁTICA Y APOLOGÉTICA",
    probModalTitle: "La Ilustración de los Dólares de Plata en Texas (8 Profecías)",
    probAuthor: "Basado en la investigación probabilística del Dr. Peter W. Stoner (Science Speaks)",
    probQuote: `«Si tomas monedas de plata y cubres todo el estado de Texas (más de 695,000 kilómetros cuadrados) con dos pies de profundidad (unos 60 centímetros)... luego marcas una sola moneda con una cruz roja y revuelves toda la masa... y vendando los ojos a un hombre, le permites viajar por donde quiera y cavar tan profundo como desee... ¿cuál es la probabilidad de que meta la mano y saque exactamente esa moneda marcada en su primer intento? <strong>1 en 10¹⁷</strong>.»`,
    probExplanation: `Esa es la misma probabilidad matemática de que un solo individuo pudiera haber cumplido por pura casualidad <strong>únicamente ocho</strong> de las más de 300 profecías mesiánicas del Antiguo Testamento. Jesús no cumplió solo ocho: ¡las cumplió todas!`,
    probButton: "¡Gloria a Dios! Entendido",
    aiModelTag: "OpenRouter • Gemini 2.5 Flash",
    aiTitle: "Erudito Teológico Bíblico",
    aiDesc: "Pregunta sobre pasajes bíblicos, contextos históricos, raíces en hebreo y griego, o temas mesiánicos.",
    aiWelcome: "<p><strong>Gracia y paz a ti.</strong> Soy tu consultor de estudio bíblico para <em>Conexiones Eternas</em>.</p><p>Conectado a OpenRouter, estoy aquí para ayudarte a profundizar en los patrones proféticos de la Biblia, explorar las raíces hebreas y griegas originales y responder cualquier consulta teológica. ¿Qué pasaje o profecía te gustaría examinar hoy?</p>",
    aiSuggestionsLabel: "Preguntas sugeridas:",
    aiSuggestions: [
      "¿Por qué el Salmo 22 describe la crucifixión antes de que Roma la inventara?",
      "¿Cuál es el significado profético del Cordero Pascual?",
      "¿Qué significaban 30 piezas de plata en la ley hebrea antigua?",
      "¿Por qué el Mesías debía descender de David y nacer en Belén?"
    ],
    aiInputPlaceholder: "Haz cualquier pregunta bíblica o teológica...",
    aiKeyBtn: "🔑 Clave",
    aiSystemPrompt: "Eres un erudito bíblico, teólogo respetuoso y guía espiritual sabio para la aplicación Conexiones Eternas. Tu propósito es explicar el significado profundo, el contexto histórico, el trasfondo lingüístico (hebreo y griego) y las conexiones proféticas entre el Antiguo y el Nuevo Testamento. Responde siempre con reverencia, gracia, claridad y rigor bíblico, citando pasajes clave. Responde en español con formato estructurado y amigable.",
    footerQuote: "«Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí.»",
    footerCite: "— Juan 5:39",
    footerCredits: "<strong>Conexiones Eternas</strong> • Creado para el estudio bíblico profundo, la reflexión y la edificación",
    footerSub: "Todo el Antiguo Testamento apunta hacia adelante hacia la Cruz. Todo el Nuevo Testamento mira hacia atrás hacia ella.",
    // Bible Reader
    bibleModalTitle: "LAS SAGRADAS ESCRITURAS",
    bibleModalSubtitle: "La Palabra del Dios Vivo • Antiguo y Nuevo Testamento (66 Libros)",
    bibleTestamentAll: "Todos (66)",
    bibleTestamentOT: "Antiguo Testamento (39)",
    bibleTestamentNT: "Nuevo Testamento (27)",
    bibleBookLabel: "Libro:",
    bibleChapterLabel: "Capítulo:",
    biblePrevChapter: "← Anterior",
    bibleNextChapter: "Siguiente →",
    bibleLoading: "Abriendo las Sagradas Escrituras...",
    bibleError: "No se pudo cargar el capítulo. Por favor verifica tu conexión a internet.",
    bibleCopyChapter: "Copiar Capítulo",
    bibleChapterCopied: "¡Texto del capítulo copiado al portapapeles!",
    bibleTransLabel: "Traducción:",
    bibleProphecyBannerTitle: "¡Profecía Mesiánica encontrada en este capítulo!",
    bibleProphecyBannerDesc: "Haz clic para abrir el análisis paralelo comparado con su cumplimiento en el Nuevo Testamento.",
    bibleProphecyBannerBtn: "Examinar Cumplimiento →",
    // Devotional Section & Admin Editor
    devoBadgeWeekly: "REFLEXIÓN SEMANAL",
    devoBadgeDaily: "MEDITACIÓN DIARIA",
    devoFreqWeekly: "Devocional Semanal",
    devoFreqDaily: "Devocional Diario",
    devoReflectionHeading: "🕊️ Reflexión Teológica y Espiritual:",
    devoLinkedProphecyCta: (title) => `Examinar Profecía Vinculada: ${title} →`,
    devoListenBtn: "Escuchar",
    devoCopyBtn: "Copiar Mensaje",
    devoCopiedToast: "¡Mensaje devocional copiado al portapapeles!",
    passcodeTitle: "Autenticación de Administrador",
    passcodeSubtitle: "Ingresa la clave secreta para acceder al Editor Devocional.",
    passcodePlaceholder: "Clave (ej. eternas2026)",
    passcodeSubmitBtn: "Desbloquear →",
    passcodeIncorrect: "Clave incorrecta. Inténtalo de nuevo.",
    passcodeUnlockedToast: "¡Modo administrador desbloqueado!",
    adminEditorBadge: "ADMINISTRACIÓN Y EDITOR DEVOCIONAL",
    adminEditorTitle: "Editor de Mensaje Diario / Semanal",
    adminEditorSubtitle: "Actualiza la reflexión bíblica directamente desde tu celular o computadora. Se guarda en el cliente y actualiza en tiempo real.",
    adminFreqLabel: "Frecuencia / Categoría:",
    adminProphecyLabel: "Profecía Vinculada:",
    adminOptWeekly: "Mensaje Semanal / Weekly Message",
    adminOptDaily: "Mensaje Diario / Daily Message",
    adminOptNone: "Ninguna / None",
    adminEditingLangLabel: "Idioma en edición:",
    adminFieldTitleLabel: "Título del Devocional:",
    adminFieldRefLabel: "Cita Bíblica del Pasaje:",
    adminFieldScriptureLabel: "Texto Bíblico:",
    adminFieldReflectionLabel: "Reflexión Teológica / Espiritual:",
    adminSaveBtn: "Guardar Mensaje",
    adminSavedToast: "¡Mensaje devocional guardado y actualizado en vivo!",
    adminResetBtn: "Restaurar por defecto",
    adminResetToast: "Restaurado al devocional por defecto.",
    adminExportBtn: "Exportar JSON",
    adminExportToast: "¡JSON del devocional copiado al portapapeles! Listo para pegar en el repositorio.",
    worshipMiniPill: "Alabanza Mesiánica"
  }
};

let currentLanguage = localStorage.getItem('conexiones_lang') || (navigator.language && navigator.language.startsWith('es') ? 'es' : 'en');

// --- 2.1 DEVOTIONAL STORE & PERSISTENCE ---
const DEFAULT_DEVOTIONAL = {
  frequency: "weekly",
  prophecyId: 11,
  title: {
    es: "El Siervo Sufriente y Nuestra Paz",
    en: "The Suffering Servant and Our Peace"
  },
  passageRef: {
    es: "Isaías 53:4-5",
    en: "Isaiah 53:4-5"
  },
  scriptureText: {
    es: "«Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.»",
    en: "“Surely He has borne our griefs and carried our sorrows; yet we esteemed Him stricken, smitten by God, and afflicted. But He was pierced for our transgressions, He was crushed for our iniquities; upon Him was the chastisement that brought us peace, and with His wounds we are healed.”"
  },
  reflectionText: {
    es: "Setecientos años antes de que Roma introdujera la crucifixión en Judea, el profeta Isaías contempló el corazón mismo de la redención. Cada herida y cada gota de sangre derramada por el Mesías en el madero no fueron una tragedia accidental, sino el cumplimiento exacto del plan eterno de Dios para reconciliar a la humanidad consigo mismo. Cuando las pruebas de este mundo intenten turbar tu espíritu, recuerda: el castigo de tu paz ya fue pagado en la Cruz. Descansa hoy en la suficiencia absoluta de Su gracia y amor eterno.",
    en: "Seven hundred years before Rome introduced crucifixion to Judea, the prophet Isaiah beheld the very heartbeat of redemption. Every wound and every drop of blood poured out by the Messiah on the tree was not an accidental tragedy, but the precise fulfillment of God's eternal blueprint to reconcile humanity to Himself. When the trials of this world seek to trouble your soul, remember: the punishment for your peace has already been paid in full at the Cross. Rest today in the absolute sufficiency of His grace and eternal love."
  },
  updatedAt: "2026-10-19"
};

let activeDevotional = null;
let hasCustomAdminDevo = false;
try {
  const storedDevo = localStorage.getItem('conexiones_active_devotional');
  if (storedDevo) {
    activeDevotional = JSON.parse(storedDevo);
    hasCustomAdminDevo = true;
  }
} catch (e) {
  console.warn("Could not load active devotional from localStorage:", e);
}
if (!activeDevotional) {
  activeDevotional = JSON.parse(JSON.stringify(DEFAULT_DEVOTIONAL));
}

function getDevotionalField(field, lang = currentLanguage) {
  if (!activeDevotional) return "";
  
  // 1. Check in translations object if present
  if (activeDevotional.translations && activeDevotional.translations[lang] && activeDevotional.translations[lang][field] !== undefined) {
    const tVal = activeDevotional.translations[lang][field];
    if (typeof tVal === 'object' && tVal !== null) {
      return tVal;
    }
    return String(tVal);
  }

  // 2. Fallback to alternative translation
  const altLang = lang === 'es' ? 'en' : 'es';
  if (activeDevotional.translations && activeDevotional.translations[altLang] && activeDevotional.translations[altLang][field] !== undefined && !activeDevotional[field]) {
    const tVal = activeDevotional.translations[altLang][field];
    if (typeof tVal === 'object' && tVal !== null) {
      return tVal;
    }
    return String(tVal);
  }

  // 3. Check direct field
  const val = activeDevotional[field];
  if (!val) return "";
  if (typeof val === 'object') {
    return val[lang] || val.es || val.en || "";
  }
  return String(val);
}

function getPropheticPassage(type = 'ot', lang = currentLanguage) {
  if (!activeDevotional) return "";
  if (type === 'ot') {
    if (activeDevotional.translations?.[lang]?.otProphecy?.passage) {
      return activeDevotional.translations[lang].otProphecy.passage;
    }
    if (activeDevotional.otProphecy?.passage) {
      const p = activeDevotional.otProphecy.passage;
      return typeof p === 'object' ? (p[lang] || p.es || p.en) : p;
    }
    return getDevotionalField('passageRef', lang);
  } else {
    if (activeDevotional.translations?.[lang]?.ntFulfillment?.passage) {
      return activeDevotional.translations[lang].ntFulfillment.passage;
    }
    if (activeDevotional.ntFulfillment?.passage) {
      const p = activeDevotional.ntFulfillment.passage;
      return typeof p === 'object' ? (p[lang] || p.es || p.en) : p;
    }
    return "";
  }
}

function getPropheticScripture(type = 'ot', lang = currentLanguage) {
  if (!activeDevotional) return "";
  if (type === 'ot') {
    if (activeDevotional.translations?.[lang]?.otProphecy?.text) {
      return activeDevotional.translations[lang].otProphecy.text;
    }
    if (activeDevotional.otProphecy?.text) {
      const t = activeDevotional.otProphecy.text;
      return typeof t === 'object' ? (t[lang] || t.es || t.en) : t;
    }
    return getDevotionalField('scriptureText', lang);
  } else {
    if (activeDevotional.translations?.[lang]?.ntFulfillment?.text) {
      return activeDevotional.translations[lang].ntFulfillment.text;
    }
    if (activeDevotional.ntFulfillment?.text) {
      const t = activeDevotional.ntFulfillment.text;
      return typeof t === 'object' ? (t[lang] || t.es || t.en) : t;
    }
    return "";
  }
}

function getPromptText(lang = currentLanguage) {
  if (!activeDevotional) return "";
  if (activeDevotional.translations?.[lang]?.meditationPrompt) {
    return activeDevotional.translations[lang].meditationPrompt;
  }
  if (activeDevotional.meditationPrompt) {
    const p = activeDevotional.meditationPrompt;
    return typeof p === 'object' ? (p[lang] || p.es || p.en) : p;
  }
  return "";
}

// --- 3. AUTHENTIC HEBREW WORSHIP STREAM (YESHUA HAMASHIACH - JERUSALEM PRAISE) ---
let ytWorshipPlayer = null;
let isWorshipReady = false;
let isWorshipPlaying = false;
let worshipVolumeLevel = 85;

// Load official YouTube IFrame API asynchronously
(function initYouTubeWorship() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

window.onYouTubeIframeAPIReady = function() {
  ytWorshipPlayer = new YT.Player('ytPlayerContainer', {
    height: '0',
    width: '0',
    videoId: 'oYsAm82I7MY', // YESHUA HAMASHIACH – Hebrew Worship from Jerusalem
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'playsinline': 1,
      'rel': 0,
      'loop': 1,
      'playlist': 'oYsAm82I7MY'
    },
    events: {
      'onReady': (event) => {
        isWorshipReady = true;
        event.target.setVolume(worshipVolumeLevel);
      },
      'onStateChange': (event) => {
        if (event.data === 1) {
          syncWorshipPlayerUI(true);
        } else if (event.data === 2 || event.data === 0) {
          syncWorshipPlayerUI(false);
        }
      }
    }
  });
};

function syncWorshipPlayerUI(playing) {
  isWorshipPlaying = playing;
  const bar = document.getElementById('messianicPlayerBar');
  const miniPill = document.getElementById('worshipMiniPill');
  const navBtn = document.getElementById('ambientSoundBtn');
  const ambientState = document.getElementById('ambientState');
  const btnIcon = document.getElementById('worshipBtnIcon');
  const btnLabel = document.getElementById('worshipBtnLabel');

  if (playing) {
    if (bar) bar.classList.add('playing');
    if (miniPill) miniPill.classList.add('playing');
    if (navBtn) navBtn.classList.add('active-worship');
    if (ambientState) ambientState.textContent = 'PAUSE';
    if (btnIcon) btnIcon.textContent = '⏸';
    if (btnLabel) btnLabel.textContent = currentLanguage === 'es' ? 'Pausar Alabanza' : 'Pause Worship';
  } else {
    if (bar) bar.classList.remove('playing');
    if (miniPill) miniPill.classList.remove('playing');
    if (navBtn) navBtn.classList.remove('active-worship');
    if (ambientState) ambientState.textContent = 'PLAY';
    if (btnIcon) btnIcon.textContent = '▶';
    if (btnLabel) btnLabel.textContent = currentLanguage === 'es' ? 'Reproducir Alabanza' : 'Play Worship';
  }
}

function toggleWorshipMusic() {
  if (!ytWorshipPlayer || !isWorshipReady) {
    if (ytWorshipPlayer && typeof ytWorshipPlayer.playVideo === 'function') {
      ytWorshipPlayer.playVideo();
      syncWorshipPlayerUI(true);
    }
    return;
  }
  if (isWorshipPlaying) {
    ytWorshipPlayer.pauseVideo();
    syncWorshipPlayerUI(false);
  } else {
    ytWorshipPlayer.playVideo();
    syncWorshipPlayerUI(true);
  }
}

// Gentle Sacred UI Chimes
class HarpSFXEngine {
  constructor() {
    this.ctx = null;
    this.sfxEnabled = true;
    this.scale = {
      C4: 261.63,
      D4: 293.66,
      E4: 329.63,
      F4: 349.23,
      G4: 392.00,
      A4: 440.00,
      B4: 493.88,
      C5: 523.25,
      D5: 587.33,
      E5: 659.25,
      A5: 880.00
    };
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch (_) {}
  }

  playHarpChime(freq = 528) {
    if (!this.sfxEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const targetFreq = (typeof freq === 'number' && !isNaN(freq)) ? freq : (this.scale?.D4 || 528);
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(targetFreq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.9);
    } catch (_) {}
  }

  playSacredChord() {
    if (!this.sfxEnabled) return;
    try {
      [528, 639, 741].forEach((f, i) => {
        setTimeout(() => this.playHarpChime(f), i * 110);
      });
    } catch (_) {}
  }
}

// --- 4. SCRIPTURE NARRATION VOICE (WEB SPEECH API) ---
class VoiceNarrator {
  constructor() {
    try {
      this.synth = window.speechSynthesis || null;
    } catch (_) {
      this.synth = null;
    }
    this.currentUtterance = null;
    this.isPlaying = false;
    this.isPaused = false;
    this.onStateChange = null;
  }

  speak(text, lang = currentLanguage) {
    if (!this.synth) return;
    try {
      this.stop();

      this.currentUtterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance.lang = lang === 'es' ? 'es-ES' : 'en-US';
      this.currentUtterance.rate = 0.93; // Reverent pace
      this.currentUtterance.pitch = 0.98;

      const voices = (typeof this.synth.getVoices === 'function') ? this.synth.getVoices() : [];
      const targetPrefix = lang === 'es' ? 'es' : 'en';
      const bestVoice = voices.find(v => v.lang && v.lang.startsWith(targetPrefix) && (
        v.name.includes('Natural') || 
        v.name.includes('Google') || 
        v.name.includes('Daniel') || 
        v.name.includes('Monica') || 
        v.name.includes('Paulina') || 
        v.name.includes('Samantha') || 
        v.name.includes('Serena') || 
        v.name.includes('Oliver')
      ));
      if (bestVoice) {
        this.currentUtterance.voice = bestVoice;
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
    } catch (_) {
      this.isPlaying = false;
      this.isPaused = false;
      if (this.onStateChange) this.onStateChange('stopped');
    }
  }

  pause() {
    if (this.synth && this.isPlaying) {
      try {
        this.synth.pause();
        this.isPaused = true;
        if (this.onStateChange) this.onStateChange('paused');
      } catch (_) {}
    }
  }

  resume() {
    if (this.synth && this.isPaused) {
      try {
        this.synth.resume();
        this.isPaused = false;
        if (this.onStateChange) this.onStateChange('playing');
      } catch (_) {}
    }
  }

  stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (_) {}
      this.isPlaying = false;
      this.isPaused = false;
      if (this.onStateChange) this.onStateChange('stopped');
    }
  }
}

// --- 5. PERSISTENT STUDY PROGRESS TRACKER ---
class StudyTracker {
  constructor() {
    this.storageKey = 'conexiones_studied_prophecies';
    let stored = [];
    try {
      const primary = localStorage.getItem(this.storageKey);
      if (primary) {
        stored = JSON.parse(primary);
      } else {
        const legacy = localStorage.getItem('eternal_connections_studied_v1');
        if (legacy) {
          stored = JSON.parse(legacy);
          localStorage.setItem(this.storageKey, legacy);
        }
      }
    } catch (_) {}
    this.studiedSet = new Set(Array.isArray(stored) ? stored.map(Number) : []);
  }

  isStudied(id) {
    return this.studiedSet.has(Number(id));
  }

  toggle(id) {
    const numId = Number(id);
    if (this.studiedSet.has(numId)) {
      this.studiedSet.delete(numId);
    } else {
      this.studiedSet.add(numId);
    }
    const arr = [...this.studiedSet];
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(arr));
    } catch (_) {}
    return this.studiedSet.has(numId);
  }

  getCount() {
    return this.studiedSet.size;
  }

  getAll() {
    return [...this.studiedSet];
  }
}

// --- 6. CELESTIAL BACKGROUND PARTICLES (CANVAS) ---
function initStarsCanvas() {
  const canvas = document.getElementById('starsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const isMobile = window.innerWidth < 768 || ('ontouchstart' in window);
  const count = isMobile ? 18 : 42;
  let animId = null;
  let lastTime = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.0 + 0.5,
      speedX: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.25),
      speedY: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.25),
      alpha: Math.random() * 0.7 + 0.3,
      alphaSpeed: Math.random() * 0.012 + 0.005,
      isGold: Math.random() > 0.4
    });
  }

  function render(now) {
    // Throttle frame rate to ~30fps on mobile to save battery and avoid thermal throttling
    if (isMobile) {
      if (now - lastTime < 32) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastTime = now;
    }

    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha += p.alphaSpeed;

      if (p.alpha > 0.95 || p.alpha < 0.2) p.alphaSpeed = -p.alphaSpeed;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.isGold 
        ? `rgba(230, 184, 92, ${p.alpha * 0.75})`
        : `rgba(255, 255, 255, ${p.alpha * 0.45})`;

      // Skip heavy shadow blur on mobile for high performance
      if (!isMobile) {
        ctx.shadowBlur = p.isGold ? 8 : 4;
        ctx.shadowColor = p.isGold ? 'rgba(230, 184, 92, 0.8)' : 'rgba(255, 255, 255, 0.5)';
      }
      ctx.fill();
    }

    if (!document.hidden) {
      animId = requestAnimationFrame(render);
    }
  }

  // Handle tab visibility to pause animation loop when backgrounded
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !animId) {
      lastTime = performance.now();
      animId = requestAnimationFrame(render);
    } else if (document.hidden && animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  });

  animId = requestAnimationFrame(render);
}

// --- 7. MAIN APPLICATION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
  const audio = new HarpSFXEngine();
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

  // DOM Elements: Navigation & Controls
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langBtnText = document.getElementById('langBtnText');
  const bibleReaderToggleBtn = document.getElementById('bibleReaderToggleBtn');
  const bibleNavBtnText = document.getElementById('bibleNavBtnText');
  const ambientSoundBtn = document.getElementById('ambientSoundBtn');
  const worshipNavLabel = document.getElementById('worshipNavLabel');
  const ambientState = document.getElementById('ambientState');
  const soundFxBtn = document.getElementById('soundFxBtn');
  const sfxNavLabel = document.getElementById('sfxNavLabel');
  const sfxState = document.getElementById('sfxState');
  const aiChatToggleBtn = document.getElementById('aiChatToggleBtn');
  const aiNavBtnText = document.getElementById('aiNavBtnText');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  const navHamburgerBtn = document.getElementById('navHamburgerBtn');
  const navDrawerBackdrop = document.getElementById('navDrawerBackdrop');
  const navControls = document.getElementById('navControls');
  const langToggleBtnMobile = document.getElementById('langToggleBtnMobile');
  const langBtnTextMobile = document.getElementById('langBtnTextMobile');

  // Hero & Stats
  const heroBadgeText = document.getElementById('heroBadgeText');
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const progressTitle = document.getElementById('progressTitle');
  const progressScore = document.getElementById('progressScore');
  const progressFill = document.getElementById('progressFill');
  const statProbValue = document.getElementById('statProbValue');
  const statProbDesc = document.getElementById('statProbDesc');
  const statProbMore = document.getElementById('statProbMore');
  const statYearsValue = document.getElementById('statYearsValue');
  const statYearsDesc = document.getElementById('statYearsDesc');
  const statQumranValue = document.getElementById('statQumranValue');
  const statQumranDesc = document.getElementById('statQumranDesc');

  // Filters & Grid
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryContainer = document.getElementById('categoryContainer');
  const pillBtnAll = document.getElementById('pillBtnAll');
  const pillBtnNac = document.getElementById('pillBtnNac');
  const pillBtnMin = document.getElementById('pillBtnMin');
  const pillBtnPas = document.getElementById('pillBtnPas');
  const pillBtnRes = document.getElementById('pillBtnRes');
  const resultsCount = document.getElementById('resultsCount');
  const sortLabel = document.getElementById('sortLabel');
  const sortOrderSelect = document.getElementById('sortOrderSelect');
  const optBiblical = document.getElementById('optBiblical');
  const optAntiquity = document.getElementById('optAntiquity');
  const optTitle = document.getElementById('optTitle');
  const propheciesGrid = document.getElementById('propheciesGrid');

  // Detail Modal Elements
  const detailModal = document.getElementById('detailModal');
  const detailModalClose = document.getElementById('detailModalClose');
  const mCategoryTag = document.getElementById('mCategoryTag');
  const mGapBadge = document.getElementById('mGapBadge');
  const mTitle = document.getElementById('mTitle');
  const mOtBook = document.getElementById('mOtBook');
  const mOtDate = document.getElementById('mOtDate');
  const mOtText = document.getElementById('mOtText');
  const otRibbonText = document.getElementById('otRibbonText');
  const otSealText = document.getElementById('otSealText');
  const bridgeTagText = document.getElementById('bridgeTagText');
  const mNtBook = document.getElementById('mNtBook');
  const mNtDate = document.getElementById('mNtDate');
  const mNtText = document.getElementById('mNtText');
  const ntRibbonText = document.getElementById('ntRibbonText');
  const ntSealText = document.getElementById('ntSealText');
  const divineInsightTitle = document.getElementById('divineInsightTitle');
  const divineInsightSub = document.getElementById('divineInsightSub');
  const mInsightText = document.getElementById('mInsightText');
  const markStudiedBtn = document.getElementById('markStudiedBtn');
  const markStudiedText = document.getElementById('markStudiedText');
  const prevProphecyBtn = document.getElementById('prevProphecyBtn');
  const prevBtnText = document.getElementById('prevBtnText');
  const nextProphecyBtn = document.getElementById('nextProphecyBtn');
  const nextBtnText = document.getElementById('nextBtnText');
  const askAiAboutProphecyBtn = document.getElementById('askAiAboutProphecyBtn');
  const askAiBtnText = document.getElementById('askAiBtnText');
  const copyShareBtn = document.getElementById('copyShareBtn');
  const copyShareBtnText = document.getElementById('copyShareBtnText');
  const playAudioBtn = document.getElementById('playAudioBtn');
  const pauseAudioBtn = document.getElementById('pauseAudioBtn');
  const stopAudioBtn = document.getElementById('stopAudioBtn');
  const soundWaveAnim = document.getElementById('soundWaveAnim');
  const narratorStatus = document.getElementById('narratorStatus');
  const narratorSub = document.getElementById('narratorSub');

  // Texas Modal
  const statCardProb = document.getElementById('statCardProb');
  const probModal = document.getElementById('probModal');
  const probModalClose = document.getElementById('probModalClose');
  const probBadge = document.getElementById('probBadge');
  const probTitle = document.getElementById('probTitle');
  const probAuthor = document.getElementById('probAuthor');
  const probQuote = document.getElementById('probQuote');
  const probExplanation = document.getElementById('probExplanation');
  const probUnderstoodBtn = document.getElementById('probUnderstoodBtn');

  // AI Modal
  const aiModal = document.getElementById('aiModal');
  const aiModalClose = document.getElementById('aiModalClose');
  const aiModelTag = document.querySelector('.ai-model-tag');
  const aiTitle = document.querySelector('.ai-title');
  const aiDesc = document.querySelector('.ai-desc');
  const aiKeyConfigBtn = document.getElementById('aiKeyConfigBtn');
  const aiChatMessages = document.getElementById('aiChatMessages');
  const aiSuggestionsTray = document.getElementById('aiSuggestionsTray');
  const aiInputForm = document.getElementById('aiInputForm');
  const aiUserInput = document.getElementById('aiUserInput');
  const aiSendBtn = document.getElementById('aiSendBtn');

  // Bible Reader Modal Elements
  const bibleModal = document.getElementById('bibleModal');
  const bibleModalClose = document.getElementById('bibleModalClose');
  const bibleModalTitle = document.getElementById('bibleModalTitle');
  const bibleModalSubtitle = document.getElementById('bibleModalSubtitle');
  const bibleTransLabel = document.getElementById('bibleTransLabel');
  const bibleTranslationSelect = document.getElementById('bibleTranslationSelect');
  const testamentAllBtn = document.getElementById('testamentAllBtn');
  const testamentOtBtn = document.getElementById('testamentOtBtn');
  const testamentNtBtn = document.getElementById('testamentNtBtn');
  const bibleBookLabel = document.getElementById('bibleBookLabel');
  const bibleBookSelect = document.getElementById('bibleBookSelect');
  const bibleChapterLabel = document.getElementById('bibleChapterLabel');
  const bibleChapterSelect = document.getElementById('bibleChapterSelect');
  const bibleFontDecBtn = document.getElementById('bibleFontDecBtn');
  const bibleFontIncBtn = document.getElementById('bibleFontIncBtn');
  const bibleCurrentHeading = document.getElementById('bibleCurrentHeading');
  const bibleCurrentTransTag = document.getElementById('bibleCurrentTransTag');
  const biblePrevChapterBtn = document.getElementById('biblePrevChapterBtn');
  const bibleNextChapterBtn = document.getElementById('bibleNextChapterBtn');
  const bibleCopyChapterBtn = document.getElementById('bibleCopyChapterBtn');
  const bibleCopyBtnText = document.getElementById('bibleCopyBtnText');
  const bibleProphecyBanner = document.getElementById('bibleProphecyBanner');
  const bannerProphecyTitle = document.getElementById('bannerProphecyTitle');
  const bannerProphecyDesc = document.getElementById('bannerProphecyDesc');
  const bannerOpenProphecyBtn = document.getElementById('bannerOpenProphecyBtn');
  const bibleVersesStream = document.getElementById('bibleVersesStream');
  const bibleLoadingText = document.getElementById('bibleLoadingText');

  // Footer
  const footerVerseText = document.getElementById('footerVerseText');
  const footerCiteText = document.getElementById('footerCiteText');
  const footerCreditsText = document.getElementById('footerCreditsText');
  const footerSubText = document.getElementById('footerSubText');

  // Devotional Card DOM Elements
  const devotionalSection = document.getElementById('devotionalSection');
  const devotionalCard = document.getElementById('devotionalCard');
  const devoSkeleton = document.getElementById('devoSkeleton');
  const devoBadge = document.getElementById('devoBadge');
  const devoBadgeText = document.getElementById('devoBadgeText');
  const devoFreqPill = document.getElementById('devoFreqPill');
  const devoCrossTrigger = document.getElementById('devoCrossTrigger');
  const devoTitle = document.getElementById('devoTitle');
  const devoPassageRef = document.getElementById('devoPassageRef');
  const devoRefText = document.getElementById('devoRefText');
  const devoScriptureQuote = document.getElementById('devoScriptureQuote');
  const devoFulfillmentQuote = document.getElementById('devoFulfillmentQuote');
  const devoFulfillmentBadge = document.getElementById('devoFulfillmentBadge');
  const devoFulfillmentText = document.getElementById('devoFulfillmentText');
  const devoReflectionLabel = document.getElementById('devoReflectionLabel');
  const devoReflectionText = document.getElementById('devoReflectionText');
  const devoPromptBlock = document.getElementById('devoPromptBlock');
  const devoPromptLabel = document.getElementById('devoPromptLabel');
  const devoPromptText = document.getElementById('devoPromptText');
  const devoLinkedProphecyBtn = document.getElementById('devoLinkedProphecyBtn');
  const devoLinkedProphecyLabel = document.getElementById('devoLinkedProphecyLabel');
  const devoListenBtn = document.getElementById('devoListenBtn');
  const devoListenBtnText = document.getElementById('devoListenBtnText');
  const devoCopyBtn = document.getElementById('devoCopyBtn');
  const devoCopyBtnText = document.getElementById('devoCopyBtnText');

  // Admin Passcode Modal Elements
  const adminPasscodeModal = document.getElementById('adminPasscodeModal');
  const adminPasscodeClose = document.getElementById('adminPasscodeClose');
  const passcodeTitle = document.getElementById('passcodeTitle');
  const passcodeSubtitle = document.getElementById('passcodeSubtitle');
  const adminPasscodeForm = document.getElementById('adminPasscodeForm');
  const adminPasscodeInput = document.getElementById('adminPasscodeInput');
  const adminPasscodeSubmitBtn = document.getElementById('adminPasscodeSubmitBtn');
  const passcodeError = document.getElementById('passcodeError');

  // Admin Devotional Modal Elements
  const adminDevoModal = document.getElementById('adminDevoModal');
  const adminDevoClose = document.getElementById('adminDevoClose');
  const adminEditorBadgeText = document.getElementById('adminEditorBadgeText');
  const adminEditorTitle = document.getElementById('adminEditorTitle');
  const adminEditorSubtitle = document.getElementById('adminEditorSubtitle');
  const adminFreqLabel = document.getElementById('adminFreqLabel');
  const adminDevoFreq = document.getElementById('adminDevoFreq');
  const optWeekly = document.getElementById('optWeekly');
  const optDaily = document.getElementById('optDaily');
  const adminProphecyLabel = document.getElementById('adminProphecyLabel');
  const adminDevoProphecy = document.getElementById('adminDevoProphecy');
  const adminEditingLangLabel = document.getElementById('adminEditingLangLabel');
  const adminTabEs = document.getElementById('adminTabEs');
  const adminTabEn = document.getElementById('adminTabEn');
  const adminDevoForm = document.getElementById('adminDevoForm');
  const adminFieldTitleLabel = document.getElementById('adminFieldTitleLabel');
  const adminDevoTitle = document.getElementById('adminDevoTitle');
  const adminFieldRefLabel = document.getElementById('adminFieldRefLabel');
  const adminDevoPassageRef = document.getElementById('adminDevoPassageRef');
  const adminFieldScriptureLabel = document.getElementById('adminFieldScriptureLabel');
  const adminDevoScriptureText = document.getElementById('adminDevoScriptureText');
  const adminFieldReflectionLabel = document.getElementById('adminFieldReflectionLabel');
  const adminDevoReflectionText = document.getElementById('adminDevoReflectionText');
  const adminSaveBtn = document.getElementById('adminSaveBtn');
  const adminSaveBtnText = document.getElementById('adminSaveBtnText');
  const adminResetBtn = document.getElementById('adminResetBtn');
  const adminResetBtnText = document.getElementById('adminResetBtnText');
  const adminExportBtn = document.getElementById('adminExportBtn');
  const adminExportBtnText = document.getElementById('adminExportBtnText');
  const footerAdminLockBtn = document.getElementById('footerAdminLockBtn');

  // Study Completion Banner Elements
  const studyCompletionBanner = document.getElementById('studyCompletionBanner');
  const completionTitle = document.getElementById('completionTitle');
  const completionDesc = document.getElementById('completionDesc');
  const completionShareBtn = document.getElementById('completionShareBtn');
  const completionShareText = document.getElementById('completionShareText');
  const markStudiedIcon = document.getElementById('markStudiedIcon');

  // Toast
  const customToast = document.getElementById('customToast');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toastMessage || !customToast) return;
    toastMessage.textContent = msg;
    customToast.classList.add('show');
    setTimeout(() => {
      customToast.classList.remove('show');
    }, 2800);
  }

  // --- 8. BILINGUAL LOCALIZATION CONTROLLER ---
  function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('conexiones_lang', lang);
    const t = I18N[lang] || I18N.en;

    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    // Navigation
    if (langBtnText) langBtnText.textContent = t.langBtn;
    if (langBtnTextMobile) langBtnTextMobile.textContent = lang === 'es' ? 'EN' : 'ES';
    if (bibleNavBtnText) bibleNavBtnText.textContent = t.bibleBtn;
    if (worshipNavLabel) worshipNavLabel.textContent = t.worshipNavLabel;
    if (sfxNavLabel) sfxNavLabel.textContent = t.sfxNavLabel;
    if (sfxState) sfxState.textContent = audio.sfxEnabled ? t.sfxOn : t.sfxOff;
    if (aiNavBtnText) aiNavBtnText.textContent = t.aiScholar;
    if (miniPillLabel) miniPillLabel.textContent = t.worshipMiniPill;

    // Hero & Stats
    if (heroBadgeText) heroBadgeText.textContent = t.heroBadge;
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.innerHTML = t.heroSubtitle;
    if (progressTitle) progressTitle.textContent = t.studyJourneyTitle;
    if (statProbValue) statProbValue.textContent = t.statProbValue;
    if (statProbDesc) statProbDesc.textContent = t.statProbDesc;
    if (statProbMore) statProbMore.textContent = t.statProbMore;
    if (statYearsValue) statYearsValue.textContent = t.statYearsValue;
    if (statYearsDesc) statYearsDesc.textContent = t.statYearsDesc;
    if (statQumranValue) statQumranValue.textContent = t.statQumranValue;
    if (statQumranDesc) statQumranDesc.textContent = t.statQumranDesc;

    // Filter controls
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    if (pillBtnAll) pillBtnAll.textContent = t.catAll;
    if (pillBtnNac) pillBtnNac.textContent = t.catNacimiento;
    if (pillBtnMin) pillBtnMin.textContent = t.catMinisterio;
    if (pillBtnPas) pillBtnPas.textContent = t.catPasion;
    if (pillBtnRes) pillBtnRes.textContent = t.catResurreccion;
    if (sortLabel) sortLabel.textContent = t.sortBy;
    if (optBiblical) optBiblical.textContent = t.sortBiblical;
    if (optAntiquity) optAntiquity.textContent = t.sortAntiquity;
    if (optTitle) optTitle.textContent = t.sortTitle;

    // Main detail modal labels
    if (otRibbonText) otRibbonText.textContent = t.otRibbon;
    if (otSealText) otSealText.textContent = t.otSeal;
    if (bridgeTagText) bridgeTagText.textContent = t.fulfilledCross;
    if (ntRibbonText) ntRibbonText.textContent = t.ntRibbon;
    if (ntSealText) ntSealText.textContent = t.ntSeal;
    if (divineInsightTitle) divineInsightTitle.textContent = t.divineSealTitle;
    if (divineInsightSub) divineInsightSub.textContent = t.divineSealSub;
    if (prevBtnText) prevBtnText.textContent = t.prevBtn;
    if (nextBtnText) nextBtnText.textContent = t.nextBtn;
    if (askAiBtnText) askAiBtnText.textContent = t.askAiAboutProphecy;
    if (copyShareBtnText) copyShareBtnText.textContent = t.copyDevotionalBtn;
    if (narratorStatus) narratorStatus.textContent = t.narratorStatus;
    if (narratorSub) narratorSub.textContent = t.narratorSub;

    // Texas modal
    if (probBadge) probBadge.textContent = t.probBadge;
    if (probTitle) probTitle.textContent = t.probModalTitle;
    if (probAuthor) probAuthor.textContent = t.probAuthor;
    if (probQuote) probQuote.innerHTML = t.probQuote;
    if (probExplanation) probExplanation.innerHTML = t.probExplanation;
    if (probUnderstoodBtn) probUnderstoodBtn.textContent = t.probButton;

    // AI modal
    if (aiModelTag) aiModelTag.textContent = t.aiModelTag;
    if (aiTitle) aiTitle.textContent = t.aiTitle;
    if (aiDesc) aiDesc.textContent = t.aiDesc;
    if (aiKeyConfigBtn) aiKeyConfigBtn.textContent = t.aiKeyBtn;
    if (aiUserInput) aiUserInput.placeholder = t.aiInputPlaceholder;

    // Update AI suggestions tray
    if (aiSuggestionsTray) {
      const trayLabel = aiSuggestionsTray.querySelector('.tray-label');
      if (trayLabel) trayLabel.textContent = t.aiSuggestionsLabel;
      const chipsScroll = aiSuggestionsTray.querySelector('.chips-scroll');
      if (chipsScroll) {
        chipsScroll.innerHTML = '';
        t.aiSuggestions.forEach(q => {
          const chip = document.createElement('button');
          chip.className = 'ai-chip';
          chip.textContent = q;
          chip.addEventListener('click', () => sendAiQuery(q));
          chipsScroll.appendChild(chip);
        });
      }
    }

    // Bible modal labels
    if (bibleModalTitle) bibleModalTitle.textContent = t.bibleModalTitle;
    if (bibleModalSubtitle) bibleModalSubtitle.textContent = t.bibleModalSubtitle;
    if (bibleTransLabel) bibleTransLabel.textContent = t.bibleTransLabel;
    if (testamentAllBtn) testamentAllBtn.textContent = t.bibleTestamentAll;
    if (testamentOtBtn) testamentOtBtn.textContent = t.bibleTestamentOT;
    if (testamentNtBtn) testamentNtBtn.textContent = t.bibleTestamentNT;
    if (bibleBookLabel) bibleBookLabel.textContent = t.bibleBookLabel;
    if (bibleChapterLabel) bibleChapterLabel.textContent = t.bibleChapterLabel;
    if (biblePrevChapterBtn) biblePrevChapterBtn.textContent = t.biblePrevChapter;
    if (bibleNextChapterBtn) bibleNextChapterBtn.textContent = t.bibleNextChapter;
    if (bibleCopyBtnText) bibleCopyBtnText.textContent = t.bibleCopyChapter;
    if (bibleLoadingText) bibleLoadingText.textContent = t.bibleLoading;
    if (bannerProphecyTitle) bannerProphecyTitle.textContent = t.bibleProphecyBannerTitle;
    if (bannerProphecyDesc) bannerProphecyDesc.textContent = t.bibleProphecyBannerDesc;
    if (bannerOpenProphecyBtn) bannerOpenProphecyBtn.textContent = t.bibleProphecyBannerBtn;

    // Adjust default translation in dropdown if language changes
    if (bibleTranslationSelect) {
      if (lang === 'es' && bibleTranslationSelect.value !== 'RV1960') {
        bibleTranslationSelect.value = 'RV1960';
      } else if (lang === 'en' && bibleTranslationSelect.value === 'RV1960') {
        bibleTranslationSelect.value = 'WEB';
      }
    }

    // Footer
    if (footerVerseText) footerVerseText.textContent = t.footerQuote;
    if (footerCiteText) footerCiteText.textContent = t.footerCite;
    if (footerCreditsText) footerCreditsText.innerHTML = t.footerCredits;
    if (footerSubText) footerSubText.textContent = t.footerSub;

    // Refresh prophecies list & study progress
    updateProgress();
    renderGrid();

    // Refresh Devotional Card & Admin Editor UI
    renderDevotionalCard();
    if (adminEditorBadgeText) adminEditorBadgeText.textContent = t.adminEditorBadge;
    if (adminEditorTitle) adminEditorTitle.textContent = t.adminEditorTitle;
    if (adminEditorSubtitle) adminEditorSubtitle.textContent = t.adminEditorSubtitle;
    if (adminFreqLabel) adminFreqLabel.textContent = t.adminFreqLabel;
    if (adminProphecyLabel) adminProphecyLabel.textContent = t.adminProphecyLabel;
    if (optWeekly) optWeekly.textContent = t.adminOptWeekly;
    if (optDaily) optDaily.textContent = t.adminOptDaily;
    if (adminEditingLangLabel) adminEditingLangLabel.textContent = t.adminEditingLangLabel;
    if (adminFieldTitleLabel) adminFieldTitleLabel.textContent = t.adminFieldTitleLabel;
    if (adminFieldRefLabel) adminFieldRefLabel.textContent = t.adminFieldRefLabel;
    if (adminFieldScriptureLabel) adminFieldScriptureLabel.textContent = t.adminFieldScriptureLabel;
    if (adminFieldReflectionLabel) adminFieldReflectionLabel.textContent = t.adminFieldReflectionLabel;
    if (adminSaveBtnText) adminSaveBtnText.textContent = t.adminSaveBtn;
    if (adminResetBtnText) adminResetBtnText.textContent = t.adminResetBtn;
    if (adminExportBtnText) adminExportBtnText.textContent = t.adminExportBtn;
    if (passcodeTitle) passcodeTitle.textContent = t.passcodeTitle;
    if (passcodeSubtitle) passcodeSubtitle.textContent = t.passcodeSubtitle;
    if (adminPasscodeInput) adminPasscodeInput.placeholder = t.passcodePlaceholder;
    if (adminPasscodeSubmitBtn) adminPasscodeSubmitBtn.textContent = t.passcodeSubmitBtn;
    populateAdminProphecyDropdown();

    // If detail modal is open, refresh it in new language
    if (activeModalProphecy && detailModal.classList.contains('open')) {
      openDetailModal(activeModalProphecy.id);
    }

    // Refresh bible books dropdown with localized book names
    populateBibleBooks();
  }

  // Update Study Progress
  function updateProgress() {
    const total = propheciesData.length;
    const studiedCount = tracker.getCount();
    const percent = Math.round((studiedCount / total) * 100);
    if (progressFill) {
      progressFill.style.width = `${percent}%`;
      if (percent === 100) {
        progressFill.classList.add('completed-glow');
      } else {
        progressFill.classList.remove('completed-glow');
      }
    }
    const t = I18N[currentLanguage] || I18N.en;
    if (progressScore) progressScore.textContent = t.studyScoreText(studiedCount, total, percent);

    // Celebration banner when all prophecies are completed
    if (studyCompletionBanner) {
      if (studiedCount === total && total > 0) {
        studyCompletionBanner.style.display = 'flex';
        if (completionTitle) completionTitle.textContent = t.completionTitle;
        if (completionDesc) completionDesc.textContent = t.completionMessage;
        if (completionShareText) completionShareText.textContent = t.completionShareBtn;
      } else {
        studyCompletionBanner.style.display = 'none';
      }
    }
  }

  // Filter & Sort
  function getFilteredProphecies() {
    let list = propheciesData.filter(item => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const title = getLocalized(item, 'title').toLowerCase();
      const otBook = getLocalized(item, 'otBook').toLowerCase();
      const ntBook = getLocalized(item, 'ntBook').toLowerCase();
      const otText = getLocalized(item, 'otText').toLowerCase();
      const ntText = getLocalized(item, 'ntText').toLowerCase();
      const insight = getLocalized(item, 'insight').toLowerCase();

      const matchSearch = q === '' ||
        title.includes(q) ||
        otBook.includes(q) ||
        ntBook.includes(q) ||
        otText.includes(q) ||
        ntText.includes(q) ||
        insight.includes(q);
      return matchCat && matchSearch;
    });

    if (sortOrder === 'antiquity') {
      list.sort((a, b) => b.antiquityYear - a.antiquityYear);
    } else if (sortOrder === 'title') {
      list.sort((a, b) => getLocalized(a, 'title').localeCompare(getLocalized(b, 'title')));
    } else {
      list.sort((a, b) => a.id - b.id);
    }

    return list;
  }

  // Render Grid Cards
  function renderGrid() {
    displayList = getFilteredProphecies();
    propheciesGrid.innerHTML = '';
    const t = I18N[currentLanguage] || I18N.en;
    if (resultsCount) resultsCount.textContent = t.resultsCount(displayList.length);

    if (displayList.length === 0) {
      propheciesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-family: 'Cinzel', serif; font-size: 1.4rem; color: var(--text-main); margin-bottom: 0.5rem;">
            ${currentLanguage === 'es' ? 'No se encontraron profecías' : 'No prophecies found'}
          </h3>
          <p>${currentLanguage === 'es' 
            ? 'Prueba buscando términos como "Belén", "Isaías", "cruz", "David", o limpia los filtros activos.' 
            : 'Try searching for terms such as "Bethlehem", "Isaiah", "cross", "David", or clear active filters.'}</p>
        </div>
      `;
      return;
    }

    displayList.forEach((item) => {
      const isStudied = tracker.isStudied(item.id);
      const card = document.createElement('article');
      card.className = `prophecy-card ${isStudied ? 'studied' : ''}`;
      card.tabIndex = 0;
      card.dataset.id = item.id;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${getLocalized(item, 'title')}: ${getLocalized(item, 'otBook')} - ${getLocalized(item, 'ntBook')}`);

      card.innerHTML = `
        <div>
          <div class="card-top">
            <span class="card-tag">${getLocalized(item, 'categoryName')}</span>
            ${isStudied ? `<span class="card-studied-badge">${t.studiedBadge}</span>` : `<span class="card-time">⏳ ${getLocalized(item, 'gapYears')}</span>`}
          </div>
          <h3 class="card-title">${getLocalized(item, 'title')}</h3>
          <div class="card-scriptures-row">
            <div class="card-pill ot">
              <span class="pill-ref">📜 ${getLocalized(item, 'otBook')}</span>
              <span class="pill-label">${currentLanguage === 'es' ? 'Profecía' : 'Prophecy'}</span>
            </div>
            <div class="card-pill nt">
              <span class="pill-ref">✝️ ${getLocalized(item, 'ntBook')}</span>
              <span class="pill-label">${currentLanguage === 'es' ? 'Cumplimiento' : 'Fulfillment'}</span>
            </div>
          </div>
        </div>
        <div class="card-bottom-actions">
          <button class="card-study-btn ${isStudied ? 'studied' : ''}" data-prophecy-id="${item.id}" title="${isStudied ? t.studiedCompleted : t.markStudied}" aria-label="${isStudied ? t.studiedCompleted : t.markStudied}">
            <span class="study-btn-icon">${isStudied ? '✓' : '○'}</span>
            <span class="study-btn-text">${isStudied ? t.studiedCompleted : t.markStudied}</span>
          </button>
          <div class="card-cta-link">
            <span>${t.examineCta}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      `;

      // Interactive study completion toggle inside card
      const studyBtn = card.querySelector('.card-study-btn');
      if (studyBtn) {
        studyBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent opening modal
          const nowStudied = tracker.toggle(item.id);
          updateProgress();
          renderGrid();

          if (activeModalProphecy && activeModalProphecy.id === item.id) {
            updateStudiedButtonState(item.id);
          }

          if (nowStudied) {
            try { audio.playSacredChord(); } catch (_) {}
            showToast(t.studiedMarked);
          } else {
            showToast(t.studiedUnmarked);
          }
        });
      }

      card.addEventListener('click', (e) => {
        try { audio.playHarpChime(audio.scale.D4); } catch (_) {}
        openDetailModal(item.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          try { audio.playHarpChime(audio.scale.D4); } catch (_) {}
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

    mCategoryTag.textContent = getLocalized(item, 'categoryName');
    mGapBadge.textContent = `⏳ ${getLocalized(item, 'gapYears')}`;
    mTitle.textContent = getLocalized(item, 'title');

    mOtBook.textContent = getLocalized(item, 'otBook');
    mOtDate.textContent = getLocalized(item, 'otDate');
    mOtText.textContent = getLocalized(item, 'otText');

    mNtBook.textContent = getLocalized(item, 'ntBook');
    mNtDate.textContent = getLocalized(item, 'ntDate');
    mNtText.textContent = getLocalized(item, 'ntText');

    mInsightText.textContent = getLocalized(item, 'insight');

    updateStudiedButtonState(item.id);

    // Reset voice narrator state
    try { narrator.stop(); } catch (_) {}

    detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    try { narrator.stop(); } catch (_) {}
    detailModal.classList.remove('open');
    if (!aiModal.classList.contains('open') && !probModal.classList.contains('open') && !bibleModal.classList.contains('open')) {
      document.body.style.overflow = 'auto';
    }
  }

  function updateStudiedButtonState(id) {
    const isStudied = tracker.isStudied(id);
    const t = I18N[currentLanguage] || I18N.en;
    if (isStudied) {
      markStudiedBtn.classList.add('active');
      if (markStudiedIcon) markStudiedIcon.textContent = '✓';
      markStudiedText.textContent = t.studiedCompleted;
    } else {
      markStudiedBtn.classList.remove('active');
      if (markStudiedIcon) markStudiedIcon.textContent = '○';
      markStudiedText.textContent = t.markStudied;
    }
  }

  // Navigate next / previous inside modal
  function navigateModal(direction) {
    if (displayList.length === 0) return;
    try { narrator.stop(); } catch (_) {}
    try { audio.playHarpChime(audio.scale.A4); } catch (_) {}

    if (direction === 'next') {
      activeIndex = (activeIndex + 1) % displayList.length;
    } else {
      activeIndex = (activeIndex - 1 + displayList.length) % displayList.length;
    }
    openDetailModal(displayList[activeIndex].id);
  }

  // Voice Narrator Controls
  narrator.onStateChange = (state) => {
    const isEs = currentLanguage === 'es';
    if (state === 'playing') {
      playAudioBtn.style.display = 'none';
      pauseAudioBtn.style.display = 'inline-flex';
      stopAudioBtn.style.display = 'inline-flex';
      soundWaveAnim.classList.add('playing');
      narratorStatus.textContent = isEs ? 'Narrando las Sagradas Escrituras...' : 'Narrating Holy Scriptures...';
    } else if (state === 'paused') {
      playAudioBtn.style.display = 'inline-flex';
      pauseAudioBtn.style.display = 'none';
      soundWaveAnim.classList.remove('playing');
      narratorStatus.textContent = isEs ? 'Narración pausada' : 'Narration paused';
    } else {
      playAudioBtn.style.display = 'inline-flex';
      pauseAudioBtn.style.display = 'none';
      stopAudioBtn.style.display = 'none';
      soundWaveAnim.classList.remove('playing');
      narratorStatus.textContent = isEs ? 'Narración de las Escrituras' : 'Scripture Voice Narration';
    }
  };

  playAudioBtn.addEventListener('click', () => {
    if (!activeModalProphecy) return;
    if (narrator.isPaused) {
      narrator.resume();
    } else {
      const p = activeModalProphecy;
      const isEs = currentLanguage === 'es';
      const speechText = isEs
        ? `Profecía Mesiánica: ${getLocalized(p, 'title')}. En el Antiguo Testamento, en ${getLocalized(p, 'otBook')}: ${getLocalized(p, 'otText')}. En el Nuevo Testamento, en ${getLocalized(p, 'ntBook')}, Jesucristo la cumplió: ${getLocalized(p, 'ntText')}. El Sello de Inspiración Divina: ${getLocalized(p, 'insight')}`
        : `Messianic Prophecy: ${getLocalized(p, 'title')}. In the Old Testament, in ${getLocalized(p, 'otBook')}: ${getLocalized(p, 'otText')}. In the New Testament, in ${getLocalized(p, 'ntBook')}, Jesus Christ fulfilled it: ${getLocalized(p, 'ntText')}. The Divine Inspiration Seal: ${getLocalized(p, 'insight')}`;
      narrator.speak(speechText, currentLanguage);
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
    const t = I18N[currentLanguage] || I18N.en;

    if (nowStudied) {
      try { audio.playSacredChord(); } catch (_) {}
      showToast(t.studiedMarked);
    } else {
      showToast(t.studiedUnmarked);
    }
  });

  // Copy full devotional
  copyShareBtn.addEventListener('click', () => {
    if (!activeModalProphecy) return;
    const p = activeModalProphecy;
    const isEs = currentLanguage === 'es';
    const t = I18N[currentLanguage] || I18N.en;

    const devotional = isEs
      ? `✨ CONEXIONES ETERNAS: EL HILO MESIÁNICO DE LAS ESCRITURAS
═══════════════════════════════════
📖 ${getLocalized(p, 'title')}
⏳ Tiempo entre la profecía y el cumplimiento: ${getLocalized(p, 'gapYears')}

📜 LA PROFECÍA (${getLocalized(p, 'otBook')} - ${getLocalized(p, 'otDate')}):
${getLocalized(p, 'otText')}

✝️ EL CUMPLIMIENTO (${getLocalized(p, 'ntBook')} - ${getLocalized(p, 'ntDate')}):
${getLocalized(p, 'ntText')}

🕊️ EL SELLO DE INSPIRACIÓN DIVINA:
${getLocalized(p, 'insight')}
═══════════════════════════════════
«Porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.» (2 Pedro 1:21)`
      : `✨ ETERNAL CONNECTIONS: THE MESSIANIC THREAD OF THE SCRIPTURES
═══════════════════════════════════
📖 ${getLocalized(p, 'title')}
⏳ Time between prophecy and fulfillment: ${getLocalized(p, 'gapYears')}

📜 THE PROPHECY (${getLocalized(p, 'otBook')} - ${getLocalized(p, 'otDate')}):
${getLocalized(p, 'otText')}

✝️ THE FULFILLMENT (${getLocalized(p, 'ntBook')} - ${getLocalized(p, 'ntDate')}):
${getLocalized(p, 'ntText')}

🕊️ THE DIVINE INSPIRATION SEAL:
${getLocalized(p, 'insight')}
═══════════════════════════════════
“For prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.” (2 Peter 1:21)`;

    navigator.clipboard.writeText(devotional).then(() => {
      try { audio.playHarpChime(audio.scale.D5); } catch (_) {}
      showToast(t.devotionalCopied);
    }).catch(() => {
      showToast(isEs ? 'No se pudo copiar automáticamente.' : 'Unable to copy automatically.');
    });
  });

  // Share completion blessing button
  if (completionShareBtn) {
    completionShareBtn.addEventListener('click', () => {
      const isEs = currentLanguage === 'es';
      const t = I18N[currentLanguage] || I18N.en;
      const shareText = isEs
        ? `🕊️ CONEXIONES ETERNAS: He completado el estudio y meditación de las 14 profecías mesiánicas del Antiguo Testamento cumplidas en Jesucristo.\n«Bien, buen siervo y fiel... entra en el gozo de tu señor.» (Mateo 25:21)\nExplora las evidencias en: https://conexiones-eternas.vercel.app`
        : `🕊️ ETERNAL CONNECTIONS: I have completed the study and meditation of all 14 Messianic Old Testament prophecies fulfilled in Jesus Christ.\n“Well done, good and faithful servant... enter into the joy of your Lord.” (Matthew 25:21)\nExplore the evidences at: https://conexiones-eternas.vercel.app`;

      navigator.clipboard.writeText(shareText).then(() => {
        try { audio.playSacredChord(); } catch (_) {}
        showToast(t.completionCopied);
      }).catch(() => {
        showToast(isEs ? 'No se pudo copiar automáticamente.' : 'Unable to copy automatically.');
      });
    });
  }

  // Modal Navigation
  prevProphecyBtn.addEventListener('click', () => navigateModal('prev'));
  nextProphecyBtn.addEventListener('click', () => navigateModal('next'));
  detailModalClose.addEventListener('click', closeDetailModal);
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeDetailModal();
  });

  // Grid Event Delegation
  propheciesGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.prophecy-card');
    if (!card) return;
    const id = parseInt(card.dataset.id, 10);
    if (!isNaN(id)) {
      openDetailModal(id);
    }
  });

  // Texas Probability Modal
  statCardProb.addEventListener('click', () => {
    try { audio.playHarpChime(audio.scale.A4); } catch (_) {}
    probModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  probModalClose.addEventListener('click', () => {
    probModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  probUnderstoodBtn.addEventListener('click', () => {
    try { audio.playHarpChime(audio.scale.D5); } catch (_) {}
    probModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  probModal.addEventListener('click', (e) => {
    if (e.target === probModal) {
      probModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Mobile Navigation Drawer Controls
  function closeMobileDrawer() {
    if (navHamburgerBtn) {
      navHamburgerBtn.classList.remove('active');
      navHamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    if (navControls) navControls.classList.remove('drawer-open');
    if (navDrawerBackdrop) navDrawerBackdrop.classList.remove('active');
  }

  function toggleMobileDrawer() {
    if (!navHamburgerBtn || !navControls) return;
    const isOpen = navControls.classList.contains('drawer-open');
    if (isOpen) {
      closeMobileDrawer();
    } else {
      navHamburgerBtn.classList.add('active');
      navHamburgerBtn.setAttribute('aria-expanded', 'true');
      navControls.classList.add('drawer-open');
      if (navDrawerBackdrop) navDrawerBackdrop.classList.add('active');
    }
  }

  if (navHamburgerBtn) {
    navHamburgerBtn.addEventListener('click', toggleMobileDrawer);
  }
  if (navDrawerBackdrop) {
    navDrawerBackdrop.addEventListener('click', closeMobileDrawer);
  }
  if (navControls) {
    navControls.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.innerWidth <= 860) {
          closeMobileDrawer();
        }
      });
    });
  }

  // Mobile quick language switcher button
  if (langToggleBtnMobile) {
    langToggleBtnMobile.addEventListener('click', () => {
      const nextLang = currentLanguage === 'en' ? 'es' : 'en';
      try { audio.playHarpChime(audio.scale.G4); } catch (_) {}
      applyLanguage(nextLang);
      showToast(nextLang === 'es' ? 'Idioma cambiado a Español 🇪🇸' : 'Language switched to English 🇺🇸');
    });
  }

  // Automatically keep body.modal-open in sync with all modal backdrops
  const modalObserver = new MutationObserver(() => {
    const anyModalOpen = !!document.querySelector('.modal-backdrop.open');
    if (anyModalOpen) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
  });

  document.querySelectorAll('.modal-backdrop').forEach(modalEl => {
    modalObserver.observe(modalEl, { attributes: true, attributeFilter: ['class'] });
  });

  // Global Escape key listener: closes drawer or active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileDrawer();
    }
  });

  // Language Switcher Toggle
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLanguage === 'en' ? 'es' : 'en';
      try { audio.playHarpChime(audio.scale.G4); } catch (_) {}
      applyLanguage(nextLang);
      showToast(nextLang === 'es' ? 'Idioma cambiado a Español 🇪🇸' : 'Language switched to English 🇺🇸');
    });
  }

  // Category filters
  categoryContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (!btn) return;
    categoryContainer.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    try { audio.playHarpChime(audio.scale.G4); } catch (_) {}
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
    try { audio.playHarpChime(audio.scale.D4); } catch (_) {}
    renderGrid();
  });

  // Messianic Hebrew Worship Controls & Visibility Toggle
  const worshipMainBtn = document.getElementById('worshipMainBtn');
  const worshipVolumeSlider = document.getElementById('worshipVolumeSlider');
  const playerMinimizeBtn = document.getElementById('playerMinimizeBtn');
  const volMuteBtn = document.getElementById('volMuteBtn');
  const messianicPlayerBar = document.getElementById('messianicPlayerBar');
  const worshipMiniPill = document.getElementById('worshipMiniPill');
  const miniPillLabel = document.getElementById('miniPillLabel');
  const STORAGE_KEY_WORSHIP_VISIBLE = 'conexiones_worship_bar_visible';

  if (ambientSoundBtn) ambientSoundBtn.addEventListener('click', toggleWorshipMusic);
  if (worshipMainBtn) worshipMainBtn.addEventListener('click', toggleWorshipMusic);

  if (worshipVolumeSlider) {
    worshipVolumeSlider.addEventListener('input', (e) => {
      worshipVolumeLevel = parseInt(e.target.value, 10);
      if (ytWorshipPlayer && typeof ytWorshipPlayer.setVolume === 'function') {
        ytWorshipPlayer.setVolume(worshipVolumeLevel);
      }
    });
  }

  function setWorshipBarCollapsed(collapsed, save = true) {
    if (!messianicPlayerBar) return;
    if (collapsed) {
      messianicPlayerBar.classList.add('collapsed');
      if (worshipMiniPill) {
        worshipMiniPill.style.display = 'inline-flex';
        // Trigger reflow for smooth opacity/scale animation
        void worshipMiniPill.offsetWidth;
        worshipMiniPill.classList.remove('hidden-pill');
        if (isWorshipPlaying) {
          worshipMiniPill.classList.add('playing');
        } else {
          worshipMiniPill.classList.remove('playing');
        }
      }
      if (save) {
        try { localStorage.setItem(STORAGE_KEY_WORSHIP_VISIBLE, 'collapsed'); } catch (_) {}
      }
    } else {
      messianicPlayerBar.classList.remove('collapsed');
      if (worshipMiniPill) {
        worshipMiniPill.classList.add('hidden-pill');
        setTimeout(() => {
          if (!messianicPlayerBar.classList.contains('collapsed')) {
            worshipMiniPill.style.display = 'none';
          }
        }, 300);
      }
      if (save) {
        try { localStorage.setItem(STORAGE_KEY_WORSHIP_VISIBLE, 'expanded'); } catch (_) {}
      }
    }
  }

  // Toggle button on the player bar (chevron '⌄' minimizes downward)
  if (playerMinimizeBtn) {
    playerMinimizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      try { audio.playHarpChime(audio.scale.D4); } catch (_) {}
      setWorshipBarCollapsed(true, true);
    });
  }

  // Floating mini pill click (expands player back up)
  if (worshipMiniPill) {
    worshipMiniPill.addEventListener('click', () => {
      try { audio.playHarpChime(audio.scale.G4); } catch (_) {}
      setWorshipBarCollapsed(false, true);
    });
  }

  // Restore saved player visibility preference from localStorage
  try {
    const savedVisibility = localStorage.getItem(STORAGE_KEY_WORSHIP_VISIBLE);
    if (savedVisibility === 'collapsed') {
      setWorshipBarCollapsed(true, false);
    } else {
      setWorshipBarCollapsed(false, false);
    }
  } catch (_) {}

  if (volMuteBtn) {
    let isMuted = false;
    volMuteBtn.addEventListener('click', () => {
      if (!ytWorshipPlayer) return;
      isMuted = !isMuted;
      if (isMuted) {
        if (typeof ytWorshipPlayer.mute === 'function') ytWorshipPlayer.mute();
        volMuteBtn.textContent = '🔇';
      } else {
        if (typeof ytWorshipPlayer.unMute === 'function') ytWorshipPlayer.unMute();
        volMuteBtn.textContent = '🔊';
      }
    });
  }

  // Sound FX Button
  soundFxBtn.addEventListener('click', () => {
    audio.sfxEnabled = !audio.sfxEnabled;
    const t = I18N[currentLanguage] || I18N.en;
    if (audio.sfxEnabled) {
      sfxState.textContent = t.sfxOn;
      soundFxBtn.classList.add('active-fx');
      try { audio.playHarpChime(audio.scale.D4); } catch (_) {}
      showToast(currentLanguage === 'es' ? 'Efectos sonoros activados' : 'Sound effects enabled');
    } else {
      sfxState.textContent = t.sfxOff;
      soundFxBtn.classList.remove('active-fx');
      showToast(currentLanguage === 'es' ? 'Efectos sonoros silenciados' : 'Sound effects muted');
    }
  });

  // Theme Toggle (Dark Celestial vs Sacred Parchment)
  let currentTheme = localStorage.getItem('conexiones_theme') || 'dark';
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'parchment' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('conexiones_theme', currentTheme);
    try { audio.playHarpChime(audio.scale.A4); } catch (_) {}
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const t = I18N[currentLanguage] || I18N.en;
    if (theme === 'parchment') {
      themeIcon.textContent = '🌙';
      themeText.textContent = t.themeCelestial;
    } else {
      themeIcon.textContent = '☀️';
      themeText.textContent = t.themeParchment;
    }
  }

  // --- 9. THEOLOGICAL AI SCHOLAR (OPENROUTER INTEGRATION) ---
  function getOpenRouterKey() {
    return localStorage.getItem('conexiones_openrouter_key') || 
           window.APP_CONFIG?.OPENROUTER_API_KEY || 
           "";
  }
  const OPENROUTER_PRIMARY_MODEL = "google/gemini-2.5-flash";
  const OPENROUTER_FALLBACK_MODELS = [
    "google/gemini-2.5-flash",
    "google/gemini-2.5-flash-lite",
    "google/gemini-3.5-flash"
  ];

  let aiConversationHistory = [];

  function resetAiConversation() {
    const t = I18N[currentLanguage] || I18N.en;
    aiConversationHistory = [
      {
        role: "system",
        content: t.aiSystemPrompt
      }
    ];
  }
  resetAiConversation();

  function openAiModal() {
    try { audio.playHarpChime(audio.scale.D4); } catch (_) {}
    aiModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => aiUserInput.focus(), 200);
  }

  function closeAiModal() {
    aiModal.classList.remove('open');
    if (!detailModal.classList.contains('open') && !probModal.classList.contains('open') && !bibleModal.classList.contains('open')) {
      document.body.style.overflow = 'auto';
    }
  }

  function appendAiMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${role === 'user' ? 'user-message' : 'assistant-message'}`;

    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^[“«](.*?)[”»]/gm, '<blockquote>“$1”</blockquote>')
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
      const isEs = currentLanguage === 'es';
      const promptKey = prompt(isEs 
        ? "Para consultar al Erudito Bíblico IA, por favor ingresa tu clave de OpenRouter (comienza con sk-or-v1-...):"
        : "To consult the AI Biblical Scholar, please enter your OpenRouter API Key (starts with sk-or-v1-...):"
      );
      if (promptKey && promptKey.trim()) {
        localStorage.setItem('conexiones_openrouter_key', promptKey.trim());
      } else {
        appendAiMessage('assistant', isEs 
          ? "⚠️ Se requiere una clave de OpenRouter para habilitar la consulta teológica en vivo. Haz clic en el botón '🔑 Clave' arriba."
          : "⚠️ An OpenRouter API key is required to enable live theological research. Click the '🔑 Key' button above."
        );
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
          model: OPENROUTER_PRIMARY_MODEL,
          models: OPENROUTER_FALLBACK_MODELS,
          messages: aiConversationHistory,
          temperature: 0.7,
          max_tokens: 1000
        })
      });

      removeTypingIndicator();

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const detailedMsg = errData.error?.message || `OpenRouter server error (${response.status})`;
        throw new Error(detailedMsg);
      }

      const data = await response.json();
      const assistantReply = data.choices?.[0]?.message?.content || (currentLanguage === 'es' ? "No se recibió respuesta de la IA." : "No response received from AI.");
      
      aiConversationHistory.push({ role: 'assistant', content: assistantReply });
      appendAiMessage('assistant', assistantReply);
      try { audio.playHarpChime(audio.scale.D5); } catch (_) {}

    } catch (err) {
      removeTypingIndicator();
      let errorMsg = currentLanguage === 'es'
        ? `⚠️ **Disculpa, ocurrió un inconveniente al consultar OpenRouter:** ${err.message}.`
        : `⚠️ **Apologies, an issue occurred while querying OpenRouter:** ${err.message}.`;
      if (err.message.includes('credits') || err.message.includes('402')) {
        errorMsg += currentLanguage === 'es'
          ? `\n\n*Nota:* El saldo de tu cuenta de OpenRouter puede requerir recarga. Visita https://openrouter.ai/settings/credits.`
          : `\n\n*Note:* Your OpenRouter balance may require replenishment. Visit https://openrouter.ai/settings/credits.`;
      }
      appendAiMessage('assistant', errorMsg);
    }
  }

  aiChatToggleBtn.addEventListener('click', openAiModal);
  aiModalClose.addEventListener('click', closeAiModal);
  aiModal.addEventListener('click', (e) => {
    if (e.target === aiModal) closeAiModal();
  });

  if (aiKeyConfigBtn) {
    aiKeyConfigBtn.addEventListener('click', () => {
      const current = getOpenRouterKey();
      const masked = current ? `${current.substring(0, 10)}...${current.substring(current.length - 4)}` : 'None';
      const promptText = currentLanguage === 'es'
        ? `Clave OpenRouter actual: ${masked}\n\nIngresa una nueva clave (o deja en blanco para conservar la actual):`
        : `Current OpenRouter API Key: ${masked}\n\nEnter new key (or leave blank to keep current):`;
      const newKey = prompt(promptText, current);
      if (newKey !== null && newKey.trim() !== '') {
        localStorage.setItem('conexiones_openrouter_key', newKey.trim());
        showToast(currentLanguage === 'es' ? '¡Clave de OpenRouter guardada con éxito!' : 'OpenRouter API key updated successfully!');
      }
    });
  }

  aiInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendAiQuery(aiUserInput.value);
  });

  // "Ask AI Scholar about this prophecy" button inside prophecy modal
  if (askAiAboutProphecyBtn) {
    askAiAboutProphecyBtn.addEventListener('click', () => {
      if (!activeModalProphecy) return;
      const p = activeModalProphecy;
      openAiModal();
      const question = currentLanguage === 'es'
        ? `Por favor, bríndame un análisis teológico e histórico en profundidad sobre la profecía: "${getLocalized(p, 'title')}" (${getLocalized(p, 'otBook')} cumplida en ${getLocalized(p, 'ntBook')}). ¿Qué detalles revelan que solo Dios pudo haberlo coordinado?`
        : `Please provide an in-depth theological and historical analysis of the prophecy: "${getLocalized(p, 'title')}" (${getLocalized(p, 'otBook')} fulfilled in ${getLocalized(p, 'ntBook')}). What specific details demonstrate divine inspiration?`;
      sendAiQuery(question);
    });
  }

  // --- 10. COMPLETE HOLY BIBLE READER CONTROLLER (66 BOOKS) ---
  let bibleActiveBookId = 1;      // Genesis
  let bibleActiveChapter = 1;     // Chapter 1
  let bibleActiveTestament = 'all';
  let bibleFontSize = 1.15;       // rem
  let activeProphecyIdForBanner = null;

  function populateBibleBooks() {
    if (!bibleBookSelect || !window.BIBLE_REPO) return;
    const books = window.BIBLE_REPO.getBooks();
    const filtered = books.filter(b => bibleActiveTestament === 'all' || b.testament === bibleActiveTestament);

    bibleBookSelect.innerHTML = '';
    filtered.forEach(b => {
      const opt = document.createElement('option');
      opt.value = b.id;
      const bookName = b.name[currentLanguage] || b.name.es;
      const chLabel = currentLanguage === 'es' ? 'caps' : 'chs';
      opt.textContent = `${b.id}. ${bookName} (${b.chapters} ${chLabel})`;
      if (b.id === bibleActiveBookId) opt.selected = true;
      bibleBookSelect.appendChild(opt);
    });

    populateBibleChapters();
  }

  function populateBibleChapters() {
    if (!bibleChapterSelect || !window.BIBLE_REPO) return;
    const book = window.BIBLE_REPO.getBookById(bibleActiveBookId) || window.BIBLE_REPO.getBooks()[0];
    bibleChapterSelect.innerHTML = '';

    for (let c = 1; c <= book.chapters; c++) {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      if (c === bibleActiveChapter) opt.selected = true;
      bibleChapterSelect.appendChild(opt);
    }
  }

  async function loadBibleChapter(bookId, chapter) {
    if (!window.BIBLE_REPO) return;
    bibleActiveBookId = Number(bookId);
    bibleActiveChapter = Number(chapter);

    const book = window.BIBLE_REPO.getBookById(bibleActiveBookId);
    if (!book) return;

    const bookName = book.name[currentLanguage] || book.name.es;
    const translation = bibleTranslationSelect ? bibleTranslationSelect.value : 'RV1960';

    if (bibleCurrentHeading) bibleCurrentHeading.textContent = `${bookName} ${chapter}`;
    if (bibleCurrentTransTag) bibleCurrentTransTag.textContent = translation;

    // Loading state
    if (bibleVersesStream) {
      bibleVersesStream.innerHTML = `
        <div class="bible-loading-state">
          <div class="sacred-spinner"></div>
          <p>${currentLanguage === 'es' ? 'Abriendo las Sagradas Escrituras...' : 'Opening the Sacred Scriptures...'}</p>
        </div>
      `;
    }

    // Check Messianic Prophecy Connection in this chapter
    const matchedProphecyId = MESSIANIC_CHAPTER_MAP[bookId]?.[chapter];
    activeProphecyIdForBanner = matchedProphecyId || null;

    if (matchedProphecyId) {
      const p = propheciesData.find(item => item.id === matchedProphecyId);
      if (p && bibleProphecyBanner) {
        bibleProphecyBanner.style.display = 'flex';
        if (bannerProphecyTitle) bannerProphecyTitle.textContent = `✨ ${getLocalized(p, 'title')}`;
        if (bannerProphecyDesc) {
          bannerProphecyDesc.textContent = currentLanguage === 'es'
            ? `Este capítulo contiene la profecía cumplida en Jesucristo (${getLocalized(p, 'ntBook')}).`
            : `This chapter contains the prophecy fulfilled in Jesus Christ (${getLocalized(p, 'ntBook')}).`;
        }
      }
    } else {
      if (bibleProphecyBanner) bibleProphecyBanner.style.display = 'none';
    }

    try {
      const verses = await window.BIBLE_REPO.fetchChapter(bibleActiveBookId, bibleActiveChapter, translation);
      if (!verses || verses.length === 0) {
        throw new Error("No verses returned");
      }

      bibleVersesStream.innerHTML = '';
      verses.forEach(v => {
        const line = document.createElement('div');
        line.className = 'bible-verse-item';
        line.style.fontSize = `${bibleFontSize}rem`;
        line.dataset.verse = v.verse;
        line.innerHTML = `<sup class="verse-num">${v.verse}</sup><span>${v.text}</span>`;
        
        // Quick copy single verse on click
        line.title = currentLanguage === 'es' ? 'Clic para copiar este versículo' : 'Click to copy this verse';
        line.addEventListener('click', () => {
          const verseCitation = `${bookName} ${chapter}:${v.verse} (${translation}) - ${v.text}`;
          navigator.clipboard.writeText(verseCitation).then(() => {
            try { audio.playHarpChime(audio.scale.D4); } catch (_) {}
            showToast(currentLanguage === 'es' ? `Copiado: ${bookName} ${chapter}:${v.verse}` : `Copied: ${bookName} ${chapter}:${v.verse}`);
          });
        });

        bibleVersesStream.appendChild(line);
      });

      // Update Prev / Next buttons state
      if (biblePrevChapterBtn) {
        biblePrevChapterBtn.disabled = (bibleActiveBookId === 1 && bibleActiveChapter === 1);
      }
      if (bibleNextChapterBtn) {
        bibleNextChapterBtn.disabled = (bibleActiveBookId === 66 && bibleActiveChapter === book.chapters);
      }

    } catch (err) {
      if (bibleVersesStream) {
        bibleVersesStream.innerHTML = `
          <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
            <div style="font-size: 2.4rem; margin-bottom: 0.8rem;">⚠️</div>
            <p>${currentLanguage === 'es' 
              ? 'No se pudo conectar al servidor de la Biblia en este momento. Por favor verifica tu conexión a internet.' 
              : 'Could not connect to the Bible server at this moment. Please verify your internet connection.'}</p>
          </div>
        `;
      }
    }
  }

  function openBibleModal(bookId = null, chapter = null) {
    try { audio.playHarpChime(audio.scale.D4); } catch (_) {}
    bibleModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (bookId) bibleActiveBookId = Number(bookId);
    if (chapter) bibleActiveChapter = Number(chapter);

    populateBibleBooks();
    loadBibleChapter(bibleActiveBookId, bibleActiveChapter);
  }

  function closeBibleModal() {
    bibleModal.classList.remove('open');
    if (!detailModal.classList.contains('open') && !probModal.classList.contains('open') && !aiModal.classList.contains('open')) {
      document.body.style.overflow = 'auto';
    }
  }

  if (bibleReaderToggleBtn) {
    bibleReaderToggleBtn.addEventListener('click', () => openBibleModal());
  }
  if (bibleModalClose) {
    bibleModalClose.addEventListener('click', closeBibleModal);
  }
  if (bibleModal) {
    bibleModal.addEventListener('click', (e) => {
      if (e.target === bibleModal) closeBibleModal();
    });
  }

  // Testament filter tabs
  [testamentAllBtn, testamentOtBtn, testamentNtBtn].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      [testamentAllBtn, testamentOtBtn, testamentNtBtn].forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      bibleActiveTestament = btn.dataset.testament;
      populateBibleBooks();
    });
  });

  // Book select change
  if (bibleBookSelect) {
    bibleBookSelect.addEventListener('change', (e) => {
      bibleActiveBookId = Number(e.target.value);
      bibleActiveChapter = 1;
      populateBibleChapters();
      loadBibleChapter(bibleActiveBookId, bibleActiveChapter);
    });
  }

  // Chapter select change
  if (bibleChapterSelect) {
    bibleChapterSelect.addEventListener('change', (e) => {
      bibleActiveChapter = Number(e.target.value);
      loadBibleChapter(bibleActiveBookId, bibleActiveChapter);
    });
  }

  // Translation select change
  if (bibleTranslationSelect) {
    bibleTranslationSelect.addEventListener('change', () => {
      loadBibleChapter(bibleActiveBookId, bibleActiveChapter);
    });
  }

  // Prev / Next Chapter Buttons
  if (biblePrevChapterBtn) {
    biblePrevChapterBtn.addEventListener('click', () => {
      if (bibleActiveChapter > 1) {
        bibleActiveChapter--;
      } else if (bibleActiveBookId > 1) {
        bibleActiveBookId--;
        const prevBook = window.BIBLE_REPO.getBookById(bibleActiveBookId);
        bibleActiveChapter = prevBook.chapters;
        populateBibleBooks();
      }
      populateBibleChapters();
      loadBibleChapter(bibleActiveBookId, bibleActiveChapter);
    });
  }

  if (bibleNextChapterBtn) {
    bibleNextChapterBtn.addEventListener('click', () => {
      const currentBook = window.BIBLE_REPO.getBookById(bibleActiveBookId);
      if (bibleActiveChapter < currentBook.chapters) {
        bibleActiveChapter++;
      } else if (bibleActiveBookId < 66) {
        bibleActiveBookId++;
        bibleActiveChapter = 1;
        populateBibleBooks();
      }
      populateBibleChapters();
      loadBibleChapter(bibleActiveBookId, bibleActiveChapter);
    });
  }

  // Font size adjustment
  if (bibleFontIncBtn) {
    bibleFontIncBtn.addEventListener('click', () => {
      if (bibleFontSize < 1.55) {
        bibleFontSize += 0.08;
        document.querySelectorAll('.bible-verse-item').forEach(el => el.style.fontSize = `${bibleFontSize}rem`);
      }
    });
  }
  if (bibleFontDecBtn) {
    bibleFontDecBtn.addEventListener('click', () => {
      if (bibleFontSize > 0.95) {
        bibleFontSize -= 0.08;
        document.querySelectorAll('.bible-verse-item').forEach(el => el.style.fontSize = `${bibleFontSize}rem`);
      }
    });
  }

  // Copy Entire Chapter
  if (bibleCopyChapterBtn) {
    bibleCopyChapterBtn.addEventListener('click', () => {
      const book = window.BIBLE_REPO.getBookById(bibleActiveBookId);
      const bookName = book.name[currentLanguage] || book.name.es;
      const trans = bibleTranslationSelect ? bibleTranslationSelect.value : 'RV1960';
      const items = Array.from(document.querySelectorAll('.bible-verse-item'));
      if (items.length === 0) return;

      const chapterText = items.map(el => {
        const num = el.querySelector('.verse-num')?.textContent || '';
        const text = el.querySelector('span')?.textContent || '';
        return `${num} ${text}`;
      }).join('\n');

      const fullDevotional = `📖 ${bookName.toUpperCase()} ${bibleActiveChapter} (${trans})\n${'═'.repeat(40)}\n${chapterText}\n\n— Eternal Connections (conexiones-eternas.vercel.app)`;

      navigator.clipboard.writeText(fullDevotional).then(() => {
        try { audio.playHarpChime(audio.scale.D5); } catch (_) {}
        const t = I18N[currentLanguage] || I18N.en;
        showToast(t.bibleChapterCopied);
      });
    });
  }

  // Prophecy banner button to open parallel prophecy view
  if (bannerOpenProphecyBtn) {
    bannerOpenProphecyBtn.addEventListener('click', () => {
      if (!activeProphecyIdForBanner) return;
      closeBibleModal();
      openDetailModal(activeProphecyIdForBanner);
    });
  }

  // ============================================================================
  // --- 11. DEVOTIONAL & DAILY AI MEDITATION CONTROLLER ---
  // ============================================================================

  function detectLinkedProphecyId(data) {
    if (!data) return 11;
    const str = `${data.title || ''} ${data.otProphecy?.passage || ''} ${data.passageRef || ''} ${data.translations?.es?.title || ''} ${data.translations?.es?.otProphecy?.passage || ''}`.toLowerCase();
    if (str.includes('53') || str.includes('siervo') || str.includes('servant') || str.includes('herido') || str.includes('pierced')) return 11;
    if (str.includes('22') || str.includes('salmo 22') || str.includes('psalm 22') || str.includes('horadaron')) return 12;
    if (str.includes('miqueas') || str.includes('micah') || str.includes('belén') || str.includes('bethlehem')) return 3;
    if (str.includes('zacar') || str.includes('zechariah')) {
      if (str.includes('12')) return 13;
      if (str.includes('9')) return 7;
      if (str.includes('11')) return 9;
    }
    if (str.includes('génesis') || str.includes('genesis')) return 1;
    if (str.includes('isaías 7') || str.includes('isaiah 7') || str.includes('virgen') || str.includes('virgin')) return 4;
    if (str.includes('16:10') || str.includes('resurrec') || str.includes('corrupción')) return 14;
    if (str.includes('34:20') || str.includes('hueso') || str.includes('bone')) return 10;
    return 11;
  }

  // Render the visible devotional card
  function renderDevotionalCard() {
    if (!devotionalCard) return;
    const t = I18N[currentLanguage] || I18N.en;
    const isDaily = activeDevotional.frequency === 'daily';

    if (devoBadgeText) {
      devoBadgeText.textContent = isDaily ? t.devoBadgeDaily : t.devoBadgeWeekly;
    }
    if (devoFreqPill) {
      devoFreqPill.textContent = isDaily ? t.devoFreqDaily : t.devoFreqWeekly;
    }
    if (devoTitle) {
      devoTitle.textContent = getDevotionalField('title');
    }
    if (devoRefText) {
      devoRefText.textContent = getPropheticPassage('ot') || getDevotionalField('passageRef');
    }
    if (devoScriptureQuote) {
      devoScriptureQuote.textContent = getPropheticScripture('ot') || getDevotionalField('scriptureText');
    }

    // New Testament Fulfillment Quote (if provided)
    const ntPassage = getPropheticPassage('nt');
    const ntScripture = getPropheticScripture('nt');
    if (devoFulfillmentQuote && devoFulfillmentText) {
      if (ntPassage || ntScripture) {
        if (devoFulfillmentBadge) {
          devoFulfillmentBadge.textContent = `✝ ${currentLanguage === 'es' ? 'Cumplimiento en el Nuevo Testamento:' : 'New Testament Fulfillment:'} ${ntPassage}`;
        }
        devoFulfillmentText.textContent = ntScripture ? (currentLanguage === 'es' ? `«${ntScripture}»` : `“${ntScripture}”`) : '';
        devoFulfillmentQuote.style.display = 'block';
      } else {
        devoFulfillmentQuote.style.display = 'none';
      }
    }

    if (devoReflectionLabel) {
      devoReflectionLabel.textContent = t.devoReflectionHeading;
    }
    if (devoReflectionText) {
      const rawReflection = getDevotionalField('reflectionText');
      if (rawReflection && rawReflection.includes('\n\n')) {
        devoReflectionText.innerHTML = rawReflection
          .split(/\n\s*\n/)
          .filter(Boolean)
          .map(para => `<span style="display:block; margin-bottom: 0.95rem;">${para.trim()}</span>`)
          .join('');
      } else {
        devoReflectionText.textContent = rawReflection;
      }
    }

    // Closing Contemplation & Prayer Prompt
    const promptText = getPromptText();
    if (devoPromptBlock && devoPromptText) {
      if (promptText) {
        if (devoPromptLabel) {
          devoPromptLabel.textContent = currentLanguage === 'es'
            ? 'Pregunta de Cierre para Contemplación y Oración:'
            : 'Closing Contemplation & Prayer Prompt:';
        }
        devoPromptText.textContent = currentLanguage === 'es' ? `«${promptText}»` : `“${promptText}”`;
        devoPromptBlock.style.display = 'block';
      } else {
        devoPromptBlock.style.display = 'none';
      }
    }

    if (devoListenBtnText) {
      devoListenBtnText.textContent = t.devoListenBtn;
    }
    if (devoCopyBtnText) {
      devoCopyBtnText.textContent = t.devoCopyBtn;
    }

    // Linked Prophecy CTA
    if (devoLinkedProphecyBtn) {
      const pId = Number(activeDevotional.prophecyId) || detectLinkedProphecyId(activeDevotional);
      const targetProphecy = propheciesData.find(p => p.id === pId);
      if (targetProphecy) {
        const pTitle = getLocalized(targetProphecy, 'title');
        if (devoLinkedProphecyLabel) {
          devoLinkedProphecyLabel.textContent = t.devoLinkedProphecyCta(pTitle);
        }
        devoLinkedProphecyBtn.style.display = 'inline-flex';
        devoLinkedProphecyBtn.onclick = () => {
          try { audio.playHarpChime(audio.scale.D5); } catch (_) {}
          openDetailModal(targetProphecy.id);
        };
      } else {
        devoLinkedProphecyBtn.style.display = 'none';
        devoLinkedProphecyBtn.onclick = null;
      }
    }
  }

  // Fetch live daily meditation from serverless endpoint /api/meditation/today
  async function fetchTodayMeditation() {
    if (!devotionalCard) return;

    // Show shimmering golden skeleton while fetching if user hasn't created a custom admin devotional
    if (!hasCustomAdminDevo) {
      devotionalCard.classList.add('is-loading');
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7500);

      const res = await fetch('/api/meditation/today', {
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.title && data.otProphecy) {
          window._apiTodayMeditation = data;

          // If no custom admin override was set by user, update active devotional with today's meditation
          if (!hasCustomAdminDevo) {
            activeDevotional = {
              id: 'daily_ai_meditation',
              frequency: 'daily',
              title: data.title,
              otProphecy: data.otProphecy,
              ntFulfillment: data.ntFulfillment,
              passageRef: data.otProphecy.passage,
              scriptureText: data.otProphecy.text,
              reflectionText: data.guidedReflection,
              meditationPrompt: data.meditationPrompt,
              translations: data.translations,
              date: data.date,
              prophecyId: detectLinkedProphecyId(data)
            };
            renderDevotionalCard();
          }
        }
      }
    } catch (err) {
      console.info('[Daily Meditation API] Loaded default devotional view:', err.message);
    } finally {
      devotionalCard.classList.remove('is-loading');
    }
  }

  // Copy Devotional Button
  if (devoCopyBtn) {
    devoCopyBtn.addEventListener('click', () => {
      const isEs = currentLanguage === 'es';
      const t = I18N[currentLanguage] || I18N.en;
      const title = getDevotionalField('title');
      const otRef = getPropheticPassage('ot') || getDevotionalField('passageRef');
      const otScripture = getPropheticScripture('ot') || getDevotionalField('scriptureText');
      const ntRef = getPropheticPassage('nt');
      const ntScripture = getPropheticScripture('nt');
      const reflection = getDevotionalField('reflectionText');
      const prompt = getPromptText();

      let formatted = '';
      if (isEs) {
        formatted = `✨ CONEXIONES ETERNAS • ${activeDevotional.frequency === 'daily' ? 'MEDITACIÓN DIARIA' : 'MENSAJE SEMANAL'}\n═══════════════════════════════════\n📖 ${title} (${otRef})\n\n«${otScripture}»`;
        if (ntRef && ntScripture) {
          formatted += `\n\n✝ CUMPLIMIENTO EN EL NUEVO TESTAMENTO (${ntRef}):\n«${ntScripture}»`;
        }
        formatted += `\n\n🕊️ REFLEXIÓN ESPIRITUAL:\n${reflection}`;
        if (prompt) {
          formatted += `\n\n💡 PREGUNTA DE CIERRE & ORACIÓN:\n${prompt}`;
        }
        formatted += `\n\n— Conexiones Eternas (conexiones-eternas.vercel.app)`;
      } else {
        formatted = `✨ ETERNAL CONNECTIONS • ${activeDevotional.frequency === 'daily' ? 'DAILY MEDITATION' : 'WEEKLY MESSAGE'}\n═══════════════════════════════════\n📖 ${title} (${otRef})\n\n“${otScripture}”`;
        if (ntRef && ntScripture) {
          formatted += `\n\n✝ NEW TESTAMENT FULFILLMENT (${ntRef}):\n“${ntScripture}”`;
        }
        formatted += `\n\n🕊️ THEOLOGICAL REFLECTION:\n${reflection}`;
        if (prompt) {
          formatted += `\n\n💡 CLOSING CONTEMPLATION & PRAYER:\n${prompt}`;
        }
        formatted += `\n\n— Eternal Connections (conexiones-eternas.vercel.app)`;
      }

      navigator.clipboard.writeText(formatted).then(() => {
        try { audio.playHarpChime(audio.scale.D5); } catch (_) {}
        showToast(t.devoCopiedToast);
      }).catch(() => {
        showToast(isEs ? 'No se pudo copiar automáticamente.' : 'Unable to copy automatically.');
      });
    });
  }

  // Devotional Speech Voice (VoiceNarrator TTS)
  if (devoListenBtn) {
    let isDevoSpeaking = false;
    devoListenBtn.addEventListener('click', () => {
      if (!window.speechSynthesis) {
        showToast("TTS not supported in this browser");
        return;
      }
      if (isDevoSpeaking) {
        window.speechSynthesis.cancel();
        isDevoSpeaking = false;
        if (devoListenBtnText) devoListenBtnText.textContent = (I18N[currentLanguage] || I18N.en).devoListenBtn;
        return;
      }

      window.speechSynthesis.cancel();
      const title = getDevotionalField('title');
      const otRef = getPropheticPassage('ot') || getDevotionalField('passageRef');
      const otScripture = getPropheticScripture('ot') || getDevotionalField('scriptureText');
      const ntRef = getPropheticPassage('nt');
      const ntScripture = getPropheticScripture('nt');
      const reflection = getDevotionalField('reflectionText');
      const prompt = getPromptText();

      let fullText = `${title}. `;
      if (currentLanguage === 'es') {
        fullText += `Profecía en ${otRef}: ${otScripture}. `;
        if (ntRef && ntScripture) {
          fullText += `Cumplimiento en ${ntRef}: ${ntScripture}. `;
        }
        fullText += `Reflexión: ${reflection}. `;
        if (prompt) {
          fullText += `Pregunta de meditación: ${prompt}`;
        }
      } else {
        fullText += `Prophecy in ${otRef}: ${otScripture}. `;
        if (ntRef && ntScripture) {
          fullText += `Fulfillment in ${ntRef}: ${ntScripture}. `;
        }
        fullText += `Reflection: ${reflection}. `;
        if (prompt) {
          fullText += `Contemplation prompt: ${prompt}`;
        }
      }

      const utt = new SpeechSynthesisUtterance(fullText);
      utt.lang = currentLanguage === 'es' ? 'es-ES' : 'en-US';
      utt.rate = 0.93;
      utt.onend = () => {
        isDevoSpeaking = false;
        if (devoListenBtnText) devoListenBtnText.textContent = (I18N[currentLanguage] || I18N.en).devoListenBtn;
      };
      utt.onerror = () => {
        isDevoSpeaking = false;
        if (devoListenBtnText) devoListenBtnText.textContent = (I18N[currentLanguage] || I18N.en).devoListenBtn;
      };

      window.speechSynthesis.speak(utt);
      isDevoSpeaking = true;
      if (devoListenBtnText) devoListenBtnText.textContent = currentLanguage === 'es' ? 'Detener' : 'Stop';
    });
  }

  // --- Secret Admin Triggers ---
  let crossClickCount = 0;
  let crossClickTimeout = null;

  if (devoCrossTrigger) {
    devoCrossTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      crossClickCount++;
      try { audio.playHarpChime(audio.scale.C5); } catch (_) {}

      clearTimeout(crossClickTimeout);
      if (crossClickCount >= 3) {
        crossClickCount = 0;
        triggerAdminAccess();
      } else {
        crossClickTimeout = setTimeout(() => {
          crossClickCount = 0;
        }, 1400);
      }
    });
  }

  const brandSymbol = document.querySelector('.brand-symbol');
  if (brandSymbol) {
    brandSymbol.style.cursor = 'pointer';
    brandSymbol.title = "Christ is the center";
    brandSymbol.addEventListener('click', (e) => {
      e.preventDefault();
      crossClickCount++;
      try { audio.playHarpChime(audio.scale.C5); } catch (_) {}

      clearTimeout(crossClickTimeout);
      if (crossClickCount >= 3) {
        crossClickCount = 0;
        triggerAdminAccess();
      } else {
        crossClickTimeout = setTimeout(() => {
          crossClickCount = 0;
        }, 1400);
      }
    });
  }

  if (footerAdminLockBtn) {
    footerAdminLockBtn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerAdminAccess();
    });
  }

  function triggerAdminAccess() {
    if (sessionStorage.getItem('conexiones_admin_unlocked') === 'true') {
      openAdminDevoModal();
    } else {
      openPasscodeModal();
    }
  }

  function openPasscodeModal() {
    if (!adminPasscodeModal) return;
    if (passcodeError) passcodeError.style.display = 'none';
    if (adminPasscodeInput) adminPasscodeInput.value = '';
    adminPasscodeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (adminPasscodeInput) adminPasscodeInput.focus();
    }, 200);
  }

  function closePasscodeModal() {
    if (!adminPasscodeModal) return;
    adminPasscodeModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  if (adminPasscodeClose) {
    adminPasscodeClose.addEventListener('click', closePasscodeModal);
  }
  if (adminPasscodeModal) {
    adminPasscodeModal.addEventListener('click', (e) => {
      if (e.target === adminPasscodeModal) closePasscodeModal();
    });
  }

  if (adminPasscodeForm) {
    adminPasscodeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const entered = adminPasscodeInput ? adminPasscodeInput.value.trim() : '';
      const secret = window.ADMIN_PASSCODE || 'eternas2026';
      if (entered === secret) {
        sessionStorage.setItem('conexiones_admin_unlocked', 'true');
        closePasscodeModal();
        try { audio.playSacredChord(); } catch (_) {}
        const t = I18N[currentLanguage] || I18N.en;
        showToast(t.passcodeUnlockedToast);
        setTimeout(() => {
          openAdminDevoModal();
        }, 200);
      } else {
        if (passcodeError) {
          passcodeError.style.display = 'block';
          passcodeError.textContent = (I18N[currentLanguage] || I18N.en).passcodeIncorrect;
        }
        if (adminPasscodeInput) {
          adminPasscodeInput.select();
          adminPasscodeInput.focus();
        }
      }
    });
  }

  // --- Admin Devotional Editor Modal ---
  let adminEditingLang = 'es';
  let adminDraftDevo = null;

  function populateAdminProphecyDropdown() {
    if (!adminDevoProphecy) return;
    const currentVal = adminDevoProphecy.value;
    adminDevoProphecy.innerHTML = '';

    const noneOpt = document.createElement('option');
    noneOpt.value = '';
    noneOpt.textContent = (I18N[currentLanguage] || I18N.en).adminOptNone;
    adminDevoProphecy.appendChild(noneOpt);

    propheciesData.forEach(p => {
      const opt = document.createElement('option');
      opt.value = String(p.id);
      const pTitle = getLocalized(p, 'title');
      const pRef = getLocalized(p, 'otBook');
      opt.textContent = `${p.id}. ${pTitle} (${pRef})`;
      adminDevoProphecy.appendChild(opt);
    });

    if (currentVal) adminDevoProphecy.value = currentVal;
  }

  function syncDraftFromInputs() {
    if (!adminDraftDevo) return;
    if (!adminDraftDevo.title || typeof adminDraftDevo.title !== 'object') {
      adminDraftDevo.title = { es: "", en: "" };
    }
    if (!adminDraftDevo.passageRef || typeof adminDraftDevo.passageRef !== 'object') {
      adminDraftDevo.passageRef = { es: "", en: "" };
    }
    if (!adminDraftDevo.scriptureText || typeof adminDraftDevo.scriptureText !== 'object') {
      adminDraftDevo.scriptureText = { es: "", en: "" };
    }
    if (!adminDraftDevo.reflectionText || typeof adminDraftDevo.reflectionText !== 'object') {
      adminDraftDevo.reflectionText = { es: "", en: "" };
    }

    const lang = adminEditingLang;
    if (adminDevoTitle) adminDraftDevo.title[lang] = adminDevoTitle.value.trim();
    if (adminDevoPassageRef) adminDraftDevo.passageRef[lang] = adminDevoPassageRef.value.trim();
    if (adminDevoScriptureText) adminDraftDevo.scriptureText[lang] = adminDevoScriptureText.value.trim();
    if (adminDevoReflectionText) adminDraftDevo.reflectionText[lang] = adminDevoReflectionText.value.trim();
    if (adminDevoFreq) adminDraftDevo.frequency = adminDevoFreq.value;
    if (adminDevoProphecy) adminDraftDevo.prophecyId = adminDevoProphecy.value ? Number(adminDevoProphecy.value) : "";
  }

  function loadInputsFromDraft(lang) {
    if (!adminDraftDevo) return;
    adminEditingLang = lang;

    if (adminTabEs) adminTabEs.classList.toggle('active', lang === 'es');
    if (adminTabEn) adminTabEn.classList.toggle('active', lang === 'en');

    const titleVal = adminDraftDevo.title ? (adminDraftDevo.title[lang] || '') : '';
    const refVal = adminDraftDevo.passageRef ? (adminDraftDevo.passageRef[lang] || '') : '';
    const scriptureVal = adminDraftDevo.scriptureText ? (adminDraftDevo.scriptureText[lang] || '') : '';
    const reflectionVal = adminDraftDevo.reflectionText ? (adminDraftDevo.reflectionText[lang] || '') : '';

    if (adminDevoTitle) adminDevoTitle.value = titleVal;
    if (adminDevoPassageRef) adminDevoPassageRef.value = refVal;
    if (adminDevoScriptureText) adminDevoScriptureText.value = scriptureVal;
    if (adminDevoReflectionText) adminDevoReflectionText.value = reflectionVal;

    if (adminDevoFreq) adminDevoFreq.value = adminDraftDevo.frequency || 'weekly';
    if (adminDevoProphecy) adminDevoProphecy.value = adminDraftDevo.prophecyId ? String(adminDraftDevo.prophecyId) : '';
  }

  function openAdminDevoModal() {
    if (!adminDevoModal) return;
    adminDraftDevo = JSON.parse(JSON.stringify(activeDevotional));
    populateAdminProphecyDropdown();
    loadInputsFromDraft(currentLanguage);

    adminDevoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAdminDevoModal() {
    if (!adminDevoModal) return;
    adminDevoModal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  if (adminDevoClose) {
    adminDevoClose.addEventListener('click', closeAdminDevoModal);
  }
  if (adminDevoModal) {
    adminDevoModal.addEventListener('click', (e) => {
      if (e.target === adminDevoModal) closeAdminDevoModal();
    });
  }

  if (adminTabEs) {
    adminTabEs.addEventListener('click', () => {
      syncDraftFromInputs();
      loadInputsFromDraft('es');
    });
  }
  if (adminTabEn) {
    adminTabEn.addEventListener('click', () => {
      syncDraftFromInputs();
      loadInputsFromDraft('en');
    });
  }

  // Save Devotional Form Submit
  if (adminDevoForm) {
    adminDevoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      syncDraftFromInputs();

      // Graceful mirroring if only one language was updated
      if (!adminDraftDevo.title.en && adminDraftDevo.title.es) adminDraftDevo.title.en = adminDraftDevo.title.es;
      if (!adminDraftDevo.title.es && adminDraftDevo.title.en) adminDraftDevo.title.es = adminDraftDevo.title.en;

      if (!adminDraftDevo.passageRef.en && adminDraftDevo.passageRef.es) adminDraftDevo.passageRef.en = adminDraftDevo.passageRef.es;
      if (!adminDraftDevo.passageRef.es && adminDraftDevo.passageRef.en) adminDraftDevo.passageRef.es = adminDraftDevo.passageRef.en;

      if (!adminDraftDevo.scriptureText.en && adminDraftDevo.scriptureText.es) adminDraftDevo.scriptureText.en = adminDraftDevo.scriptureText.es;
      if (!adminDraftDevo.scriptureText.es && adminDraftDevo.scriptureText.en) adminDraftDevo.scriptureText.es = adminDraftDevo.scriptureText.en;

      if (!adminDraftDevo.reflectionText.en && adminDraftDevo.reflectionText.es) adminDraftDevo.reflectionText.en = adminDraftDevo.reflectionText.es;
      if (!adminDraftDevo.reflectionText.es && adminDraftDevo.reflectionText.en) adminDraftDevo.reflectionText.es = adminDraftDevo.reflectionText.en;

      adminDraftDevo.updatedAt = new Date().toISOString().split('T')[0];

      // Store in localStorage & active state
      activeDevotional = JSON.parse(JSON.stringify(adminDraftDevo));
      try {
        localStorage.setItem('conexiones_active_devotional', JSON.stringify(activeDevotional));
      } catch (err) {
        console.warn("Error storing devotional:", err);
      }

      // Live reactive update on screen immediately without page reload
      renderDevotionalCard();

      closeAdminDevoModal();
      try { audio.playSacredChord(); } catch (_) {}
      const t = I18N[currentLanguage] || I18N.en;
      showToast(t.adminSavedToast);
    });
  }

  // Reset Devotional Button
  if (adminResetBtn) {
    adminResetBtn.addEventListener('click', () => {
      const isEs = currentLanguage === 'es';
      const confirmMsg = isEs
        ? "¿Deseas restaurar la reflexión devocional original por defecto?"
        : "Do you want to restore the original default devotional reflection?";
      if (!confirm(confirmMsg)) return;

      try {
        localStorage.removeItem('conexiones_active_devotional');
      } catch (_) {}

      hasCustomAdminDevo = false;
      if (window._apiTodayMeditation) {
        const d = window._apiTodayMeditation;
        activeDevotional = {
          id: 'daily_ai_meditation',
          frequency: 'daily',
          title: d.title,
          otProphecy: d.otProphecy,
          ntFulfillment: d.ntFulfillment,
          passageRef: d.otProphecy?.passage,
          scriptureText: d.otProphecy?.text,
          reflectionText: d.guidedReflection,
          meditationPrompt: d.meditationPrompt,
          translations: d.translations,
          date: d.date,
          prophecyId: detectLinkedProphecyId(d)
        };
      } else {
        activeDevotional = JSON.parse(JSON.stringify(DEFAULT_DEVOTIONAL));
      }
      adminDraftDevo = JSON.parse(JSON.stringify(activeDevotional));
      loadInputsFromDraft(adminEditingLang);
      renderDevotionalCard();

      try { audio.playHarpChime(audio.scale.C4); } catch (_) {}
      const t = I18N[currentLanguage] || I18N.en;
      showToast(t.adminResetToast);
    });
  }

  // Export JSON Button
  if (adminExportBtn) {
    adminExportBtn.addEventListener('click', () => {
      syncDraftFromInputs();
      const jsonStr = JSON.stringify(adminDraftDevo || activeDevotional, null, 2);
      navigator.clipboard.writeText(jsonStr).then(() => {
        try { audio.playHarpChime(audio.scale.E5); } catch (_) {}
        const t = I18N[currentLanguage] || I18N.en;
        showToast(t.adminExportToast);
      }).catch(() => {
        showToast("Unable to copy JSON automatically.");
      });
    });
  }

  // Escape key global listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      closeAiModal();
      closeBibleModal();
      closePasscodeModal();
      closeAdminDevoModal();
      if (probModal) probModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });

  // Initial Boot with selected language & live daily meditation fetch
  applyLanguage(currentLanguage);
  fetchTodayMeditation();
});
