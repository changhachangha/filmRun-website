export interface Film {
  id: string;
  title: string;
  titleKo?: string;
  director: string;
  year: number;
  status: 'upcoming' | 'released' | 'in-production';
  category: 'filmography' | 'film';
  genre: string[];
  synopsis: string;
  posterUrl?: string;
  stillImages?: string[];
  awards?: string[];
  festivals?: string[];
  duration?: string;
  country?: string;
  trailerUrl?: string;
  budget?: string;
  productionStatus?: string;
  productionPeriod?: string;
  note?: string[];
  cast?: Array<{
    name: string;
    role: string;
    image?: string;
  }>;
  directorStatement?: string;
  producerStatement?: string;
  directorProfile?: string;
}

export const films: Film[] = [
  // Released Films
  {
    id: 'merry-christmas-mr-mo',
    title: 'Merry Christmas Mr. Mo',
    titleKo: '메리 크리스마스 미스터 모',
    director: 'LIM Dae-Hyung',
    year: 2017,
    status: 'released',
    category: 'filmography',
    genre: ['Drama', 'Black Comedy'],
    duration: "101min",
    country: 'Korea',
    synopsis:
      'MO Geum-san is a barber living in a rural area who once aspired to be a doctor. He starts to doubt his humdrum life after the village health center advises him to be examined at a larger hospital. He comes up with a plan to give a gift to his loved ones in the coming Christmas. The plan is to invite everyone to the local culture center and screen his self-made comedy movie based on his tragic life. For this, he brings over his son Stephan, an aspiring film director and his long-time lover Ye-won from Seoul. They wander around shooting a silent film with an 8mm camera, parodying Charlie Chaplin\'s silent movies. Meanwhile, as he follows his father, Stephan is seized with an ominous premonition and faces the worst truth he never dreamed of.',
    posterUrl: '/images/img20.jpg',
    festivals: [
      'The 21st Busan International Film Festival, NETPAC Award (2016, Korea)',
      'The 42nd Seoul Independent Film Festival (2016, Korea)',
      'The 52nd Karlovy Vary Int\'l Film Festival (2017, Czech Republic)',
      'The 19th Buenos Aires Int\'l Independent Film Festival (2017, Argentina)',
      'The 22nd Vilnius International Film Festival (2017, Lithuania)',
      'The 10th LICHTER Filmfest Frankfurt International (2017, Germany)',
      'The 12th Korean Film Festival in Paris (2017, France)',
      'The 12th London Korean Film Festival (2017, UK)',
      'The 5th Muju Film Festival (2017, Korea)',
      'The 1st Marianas International Film Festival, Best Original Music (2017, USA)',
      'The 5th Wildflower Film Awards, Best Actor & Best New Director (2018, Korea)',
    ],
    awards: [],
    trailerUrl: 'https://youtu.be/OuduUPJwqN8',
  },
  {
    id: 'moonlit-winter',
    title: 'Moonlit Winter',
    titleKo: '윤희에게',
    director: 'LIM Dae-Hyung',
    year: 2019,
    status: 'released',
    category: 'filmography',
    genre: ['Drama', 'Romance'],
    duration: "106min",
    country: 'Korea',
    synopsis:
      'Sae-Bom is a high school student living with her mother Yun-Hee, who is in her 40s. After her recent divorce, Yun-Hee seems depressed, but she never shares her feelings with Sae-Bom. One day, Sae-Bom finds a mysterious love letter sent to Yun-Hee. The letter is from Hokkaido, Japan. This one letter makes Sae-Bom wonder about the past of Yun-Hee she has not known. Sae-Bom comes up with a secret plan to find the sender, thinking it\'d be an opportunity for her to get to know Yun-Hee better and for Yun-Hee to overcome her post-divorce depression. After Sae-Bom\'s repeated asking, Yun-Hee finally agrees to go on a trip to Hokkaido with Sae-Bom without knowing what plan her daughter has in mind.',
    posterUrl: '/images/img26.jpg',
    festivals: [
      'The 24th Busan International Film Festival, Closing Film (2019, Korea)',
      'The 41st Blue Dragon Film Awards, Best Director & Best Screen Play (2020, Korea)',
      'The 40th Korean Film Critics Association Awards, Best Director & Best Original Screen Play & Best Music (2020, Korea)',
      'The 27th Febiofest - Prague International Film Festival (2020, Czech Republic)',
      'The 22nd Taipei Film Festival (2020, Taiwan)',
      'The 13th CinemAsia Film Festival (2020, Netherlands)',
      'The 18th Florence Korean Film Festival, Festival Critics Award (2020, Italy)',
      'The 15th Festival du Film Coreen a Paris (2020, France)',
      'The 7th Korean Film Producers Association Awards, Best Actress (2020, Korea)',
      'The 40th Golden Cinematography Awards, Rookie Actress of the Year (2020, Korea)',
    ],
    awards: [],
    trailerUrl: 'https://youtu.be/jMRNnTQ_P8g',
  },

  // Upcoming Films 2025
  {
    id: 'the-second-child',
    title: 'The Second Child',
    titleKo: '두번째 아이',
    director: 'YU Eun-Jeong',
    year: 2025,
    status: 'upcoming',
    category: 'filmography',
    genre: ['Mystery', 'Dark-Fantasy', 'Drama'],
    duration: 'TBA',
    country: 'Korea',
    synopsis:
      "Two worlds have always been known to have co-existed. Our universe is a world within the bounds of natural law where all things eventually fade away. Meanwhile, there is another where time has stopped completely. Being from the other side, every now and then, try to slip across to obtain the impossible, the body of a living. After two years of coma, Su-An wakes up to find the ghost of her dead sister asking for help but cannot understand what exactly she requires. Their mother, Geum-Ok, believed to have lost her firstborn child to suicide, searches for the truth behind the death as a centuries-old family curse slowly reveals itself. As the two collide in a quest to discover the past and present reality, they come across Jae-In, an exact look-alike of the deceased sister.",
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0018.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0018.jpg',
    ],
    budget: '1,000,000 USD',
    productionStatus: 'In Production',
    productionPeriod: '2025 4Q',
    note: [
      'Participant of Marché du Film (2021 Festival de Cannes)',
      "Actor LIM Soojung's First Film as a Producer"
    ],
    cast: [
      { name: 'LIM Soojung', role: 'Lead', image: '/images/image15.png' },
      { name: 'PARK Sol', role: 'Supporting', image: '/images/image16.png' },
      { name: 'Yuna', role: 'Supporting', image: '/images/image17.png' }
    ],
    directorStatement: "More than a decade ago, I came across a documentary on the subject of earthquakes in Japan, and it has never left my mind since. Amongst the footage was surviving family who has lost their child. The parents held onto the traces of their kid in their house as it was. As the interview kept rolling, another child was watching in the corner. It was the second child. The child's expression made me imagine all sorts of things. What would be the atmosphere of this family if the camera wasn't rolling? Alone in bed, looking at the empty space what would that child wish for? The constant presence of death roaming around the family, and the child growing up in that circumstances. It all felt like a tale as old as time, grounded yet with space for supernatural elements. And that sentiment was the inception of this film.",
    producerStatement: "Horror genre in general is perceived by the Korean public as scary films with no room for the inspection of its deeper themes. However, I wanted to show and expand on the definition of the adjective word 'scary' through the feature film <The Second Child>. Furthermore, I aim to revive the dry and colder aesthetic and popularity of early 2000s Korean horror films such as <A Tale of Two Sisters> (2003) and <Epitaph> (2007) with a modern twist that reflects the fast-changing society of our time.",
    directorProfile: "YU Eun-Jeong is a filmmaker and a screenwriter. Her short <Lights in the Dusk> (2012) was awarded the Best Film in Asian Short Competition at the 14th SIWFF. Since then, she has directed a number of short films and her feature debut, <Ghost Walk> (2018) won the Bucheon Choice: Audience Award at the 22nd BIFAN.",
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'something-about-us',
    title: 'Something About Us',
    director: 'YU Eun-Jeong',
    year: 2025,
    status: 'upcoming',
    category: 'film',
    genre: ['Romance', 'Drama'],
    synopsis: 'A tender story exploring the delicate connections between two individuals as they navigate the complexities of modern relationships and self-discovery.',
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0024.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0024.jpg',
    ],
    budget: '800,000 USD',
    productionStatus: 'Pre-Production',
    productionPeriod: '2025 3Q',
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'folklore',
    title: 'Folklore',
    director: 'KIM Min-Ho',
    year: 2025,
    status: 'upcoming',
    category: 'film',
    genre: ['Mystery', 'Thriller'],
    synopsis: 'A psychological thriller that delves into ancient legends and modern fears, blending folklore with contemporary storytelling.',
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0028.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0028.jpg',
    ],
    budget: '1,200,000 USD',
    productionStatus: 'Development',
    productionPeriod: '2025 4Q',
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'stuck-in-the-middle',
    title: 'Stuck In the Middle',
    director: 'LEE Sang-Woo',
    year: 2026,
    status: 'upcoming',
    category: 'film',
    genre: ['Comedy', 'Drama'],
    synopsis: 'A coming-of-age story about finding your place in the world when you feel caught between different expectations and desires.',
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0032.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0032.jpg',
    ],
    budget: '900,000 USD',
    productionStatus: 'Script Development',
    productionPeriod: '2026 1Q',
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'hellfire-academy',
    title: 'Hellfire Academy',
    director: 'SHIN A-Ga',
    year: 2026,
    status: 'upcoming',
    category: 'film',
    genre: ['Fantasy', 'Romance', 'Thriller'],
    synopsis: 'A fantasy romantic thriller where a powerless Grim Reaper and a human woman who gains reaper abilities join forces to defeat an absolute evil.',
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0036.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0036.jpg',
    ],
    budget: '2,200,000 USD',
    productionStatus: 'Script Development',
    productionPeriod: '2026 1Q',
    directorStatement: "This film began with the intention of exploring humanity from the perspective of soul, examining how evil manipulates and uses human beings. The initial inspiration came from Wim Wenders' Wings of Desire(1987). While watching the angels in the film with instill goodness and hope in humans, I found myself imagining the opposite—what might like demons do to stir desire to do evil? I wanted to create a story that views humanity through the lens of evil, making us consider the other side of the coin. Hearing that the world hasn't completely fallen apart because of our capacity to love. Despite the harshness and overwhelming hatred in reality, it's love that keeps us going, and that's the message I want to convey through this film.",
    producerStatement: "'Hellfire Academy' is a film that deepens the originality and boldness of Korean cinema, weaving a powerful narrative that blurs the lines between humanity and demons, life and death. Set in a secret institution that trains reapers, the film explores how demons infiltrate and influence the human world, blending Eastern and Western sensibilities to reimagine familiar images of reapers and demons. More than just a romantic comedy, our film will reflect life, death and morality, delivering a fresh, intimate narrative experience that feels very grounded. Hellfire Academy showcases the strength of Korean genre cinema and will leave a lasting impact on its audience.",
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'chun-hyang-dance',
    title: 'Chun Hyang Dance',
    director: 'JUNG Se-Um',
    year: 2025,
    status: 'upcoming',
    category: 'film',
    genre: ['Occult', 'Horror', 'Thriller'],
    synopsis: 'A story of a young female protagonist who performs "Chun Hyang Dance" - a traditional superstitious ritual that shows the future - and is forced to face off ghostly presence threatening her present reality.',
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0040.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0040.jpg',
    ],
    budget: '4,000,000 USD',
    productionStatus: 'Script Development',
    productionPeriod: '2025 2Q',
    directorStatement: "'Mulan' is a Korean concept referring to 'unscientific and irrational beliefs - a superstition'. In the face of grim reality and an uneasy future, people would want to change their fate even if they lean on often-frowned upon superstition. But fate can sometimes be set in stone no matter how hard we try. The film 'Chun Hyang Dance' aims to show the various desires of women in motion to change their future by leaning into 'Mulan'. Even if their effort ends up in fear and disaster.",
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
];

export function getFilmById(id: string): Film | undefined {
  return films.find((film) => film.id === id);
}

export function getFilmsByStatus(status: Film['status']): Film[] {
  return films.filter((film) => film.status === status);
}

export function getFilmsByDirector(director: string): Film[] {
  return films.filter((film) => film.director === director);
}
