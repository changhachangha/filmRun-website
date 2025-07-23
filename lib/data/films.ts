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
    duration: '101min',
    country: 'Korea',
    synopsis:
      "MO Geum-san is a barber living in a rural area who once aspired to be a doctor. He starts to doubt his humdrum life after the village health center advises him to be examined at a larger hospital. He comes up with a plan to give a gift to his loved ones in the coming Christmas. The plan is to invite everyone to the local culture center and screen his self-made comedy movie based on his tragic life. For this, he brings over his son Stephan, an aspiring film director and his long-time lover Ye-won from Seoul. They wander around shooting a silent film with an 8mm camera, parodying Charlie Chaplin's silent movies. Meanwhile, as he follows his father, Stephan is seized with an ominous premonition and faces the worst truth he never dreamed of.",
    posterUrl: '/images/img20.jpg',
    festivals: [
      'The 21st Busan International Film Festival, NETPAC Award (2016, Korea)',
      'The 42nd Seoul Independent Film Festival (2016, Korea)',
      "The 52nd Karlovy Vary Int'l Film Festival (2017, Czech Republic)",
      "The 19th Buenos Aires Int'l Independent Film Festival (2017, Argentina)",
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
    duration: '106min',
    country: 'Korea',
    synopsis:
      "Sae-Bom is a high school student living with her mother Yun-Hee, who is in her 40s. After her recent divorce, Yun-Hee seems depressed, but she never shares her feelings with Sae-Bom. One day, Sae-Bom finds a mysterious love letter sent to Yun-Hee. The letter is from Hokkaido, Japan. This one letter makes Sae-Bom wonder about the past of Yun-Hee she has not known. Sae-Bom comes up with a secret plan to find the sender, thinking it'd be an opportunity for her to get to know Yun-Hee better and for Yun-Hee to overcome her post-divorce depression. After Sae-Bom's repeated asking, Yun-Hee finally agrees to go on a trip to Hokkaido with Sae-Bom without knowing what plan her daughter has in mind.",
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
      'Two worlds have always been known to have co-existed. Our universe is a world within the bounds of natural law where all things eventually fade away. Meanwhile, there is another where time has stopped completely. Being from the other side, every now and then, try to slip across to obtain the impossible, the body of a living. After two years of coma, Su-An wakes up to find the ghost of her dead sister asking for help but cannot understand what exactly she requires. Their mother, Geum-Ok, believed to have lost her firstborn child to suicide, searches for the truth behind the death as a centuries-old family curse slowly reveals itself. As the two collide in a quest to discover the past and present reality, they come across Jae-In, an exact look-alike of the deceased sister.',
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0018.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0018.jpg',
    ],
    budget: '1,000,000 USD',
    productionStatus: 'In Production',
    productionPeriod: '2025 4Q',
    note: [
      'Participant of Marché du Film (2021 Festival de Cannes)',
      "Actor LIM Soojung's First Film as a Producer",
    ],
    cast: [
      { name: 'LIM Soojung', role: 'Lead', image: '/images/image15.png' },
      { name: 'PARK Sol', role: 'Supporting', image: '/images/image16.png' },
      { name: 'Yuna', role: 'Supporting', image: '/images/image17.png' },
    ],
    directorStatement:
      "More than a decade ago, I came across a documentary on the subject of earthquakes in Japan, and it has never left my mind since. Amongst the footage was surviving family who has lost their child. The parents held onto the traces of their kid in their house as it was. As the interview kept rolling, another child was watching in the corner. It was the second child. The child's expression made me imagine all sorts of things. What would be the atmosphere of this family if the camera wasn't rolling? Alone in bed, looking at the empty space what would that child wish for? The constant presence of death roaming around the family, and the child growing up in that circumstances. It all felt like a tale as old as time, grounded yet with space for supernatural elements. And that sentiment was the inception of this film.",
    producerStatement:
      "Horror genre in general is perceived by the Korean public as scary films with no room for the inspection of its deeper themes. However, I wanted to show and expand on the definition of the adjective word 'scary' through the feature film <The Second Child>. Furthermore, I aim to revive the dry and colder aesthetic and popularity of early 2000s Korean horror films such as <A Tale of Two Sisters> (2003) and <Epitaph> (2007) with a modern twist that reflects the fast-changing society of our time.",
    directorProfile:
      'YU Eun-Jeong is a filmmaker and a screenwriter. Her short <Lights in the Dusk> (2012) was awarded the Best Film in Asian Short Competition at the 14th SIWFF. Since then, she has directed a number of short films and her feature debut, <Ghost Walk> (2018) won the Bucheon Choice: Audience Award at the 22nd BIFAN.',
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'something-about-us',
    title: 'Something About Us',
    titleKo: '우리는 서로에게',
    director: 'LIM Jung-Eun',
    year: 2025,
    status: 'upcoming',
    category: 'film',
    genre: ['Romance Comedy', 'Drama'],
    synopsis:
      "After ten years of dating and three years of marriage, Song-Yi and Jun have decided to end things: a divorce. Except for miscarriage incidents, the two always had each other's back and had no fault for divorce.\n\nA relationship that began in college. It all started by pure chance when they had to present a French artist's painting, 'The Garden' together. Sometime later, Jun drew his version of the garden painting for Song-Yi while asking for her hand in marriage. Since then, the two worked side by side at a publishing company as an editor and freelance penciler. And it was here that they came across the French artist's work again while starting on their first children's book.\n\nA total of three days. An intimate look into different stages of the couple's relationship. University 'graduation' ceremony filled with chaotic surprises and, even worse, the first time meeting each other's parents; Friend's 'wedding' ceremony during their divorce trial period, where they must pretend everything is fine; Trip to France after their divorce, where they must convince the French artist's family for publishing rights during his 'funeral' ceremony.",
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0024.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0024.jpg',
    ],
    budget: '2,200,000 USD',
    productionStatus: 'Casting Stage',
    productionPeriod: '2025 2Q',
    note: ['KB Award (2022 BIFF Asian Project Market)'],
    directorStatement:
      "We talk about love all the time. But love is not something we can see or hear. It is something we feel. A lot of love stories center on a couple getting together or ending up getting married but what about the other end of the spectrum, say for instance 'divorce'? Love transcends time and space, and divorce does not necessarily mean everything comes to a full halt.\nHere is a couple who have no liability to each other but want to end things due to their differences. Through the journey of these characters, I want to explore that love shines through even when people believe it to be over, and the realizations we have in life as time passes.",
    producerStatement:
      "Every relationship has a beginning and an end. It is a universal occurrence that all of us go through. However, up to this point in Korean film history, the representation of relationships has been narrowly restricted within the confines of the goal-oriented story focused on 'marriage' or 'divorce', without acknowledging all its colors at once. This film takes us behind three specific days, each from a different time of a couple's relationship.\nFrom there, the film will examine the ongoing journey of love closely or sometimes even from a distance. We hope to provide a new spectrum of interpretation regarding relationships and carry out the legacy of the Korean romance genre.",
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'folklore',
    title: 'Folklore',
    titleKo: '헤아비',
    director: 'JUNG Se-Um',
    year: 2025,
    status: 'upcoming',
    category: 'film',
    genre: ['Horror Romance', 'Drama'],
    synopsis:
      "Hae-ah, a funeral director, lives a completely different life after losing her husband in an unexpected accident on their wedding anniversary. One day, while returning from an out-of-town funeral preparation, she follows a funeral procession as if entranced and discovers a village where they perform a ritual to 'resurrect the dead using scarecrows.' The only thing needed is someone else's heart. Subsequently, Hae-ah successfully revives her husband using the heart of an 'unclaimed' corpse at the funeral home. She spends happy days with the long-dreamed resurrection of John, but it's short-lived—as time passes, John returns to being a scarecrow. To continue this happy dream, what's needed again is a heart.\n\nEventually, Hae-ah finds 'Sa-hyun', who unintentionally caused her husband's death, and induces and assists in his suicide. However, Hae-ah's workplace junior, 'Song', who finds her suspicious, steals the box containing Sa-hyun's heart and blackmails her for money. When the heart is almost destroyed in the process, an enraged Hae-ah gets into a physical altercation with Song, leading to Song's fatal fall. Frantically returning home with the heart, Hae-ah revives John again, but his reaction is not the same as before. Learning of Hae-ah's crimes, John coldly tells her not to resurrect him anymore. But Hae-ah begs him just to let her bring him back...",
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0028.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0028.jpg',
    ],
    budget: '1,500,000 USD',
    productionStatus: 'Casting Stage',
    productionPeriod: '2025 3Q',
    note: ['Korean Discovery Award (2024 BIFAN NAFF Project Market)'],
    directorStatement:
      "We experience 'loss' big and small throughout our lives, from losing simple physical belongings to precious relationships and our loved ones. Of all the losses we experience, 'death' is the most painful because it is inevitable. In time, every human being will experience and witness will pass away. Death and loss can affect us differently, as for how we grieve through the eyes of a young woman who lost her husband.",
    producerStatement:
      "Our project <Folklore> differentiates itself from the Korean occult films that came before in the sense that it will deal with 'village ritual' and 'folk ritual' in the place of 'shamanism' and 'exorcism.' With this in mind, I have faith in our ability to capture a unique visual palette that has not been shown to moviegoers.\n\nA concrete concept of a 'scarecrow' that is a living embodiment of the deceased' can bring forth bizarre atmosphere and invoke curiosity from both domestic and international audiences. In addition, by dealing with the universal theme of 'love' and 'death' that follows after losing a loved one, we believe it is possible to deliver a much richer horror drama that can elicit emotional empathy.",
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'stuck-in-the-middle',
    title: 'Stuck In the Middle',
    titleKo: '스물스물',
    director: 'BEFF (LEE BYUNG-YOON)',
    year: 2025,
    status: 'upcoming',
    category: 'film',
    genre: ['Teen Comedy', 'Musical'],
    synopsis:
      "Active Middle School is on the brink of transitioning into a prestigious International School status. The only problem is that it is full of sex-curious students running out of control! Wanting to complete her life goal of this transition, principal Sam-Jin tasks the school nurse Bora to start a new sex education curriculum to get these kids in line. As the 'Sexuality and Us: Mock Dating' program begins - a group of misfit students in detention help Bora proceed with the class. Here's the catch: these kids have never dated in their lives, nor do they know what sexuality is.\n\nThe group is led by Haru, a naive, energetic boy from Mongolia, who runs into a misunderstanding with Sam-Jin on his first day of school as a top-tier pervert and is forced into detention. As Haru fends off against the popular kids whom the 'Mock Dating' threatens - he discovers his interest in sexuality as he falls in love with Bora. Stuck in the middle of every possible school drama, can Haru survive in this adolescent jungle and get everyone's act together before it spirals out of control?",
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0032.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0032.jpg',
    ],
    budget: '4,000,000 USD',
    productionStatus: '3rd Draft',
    productionPeriod: '2025 4Q',
    note: ['Writer: BEFF & HAN Hye-In'],
    directorStatement:
      "A little while ago, I heard about the 'current generation' from a teenager. I was taken aback by how fast-moving their culture was, hypnotized by how trendy it was, and lastly, I felt confused. Kids grow and learn at their own unique speed, and how should adult members of society react to these changes? How should I? How about the older generation?\n\nAt a certain point in our youth, we instinctively grow attracted to the subject of human sexuality. But it never truly grows beyond the boundaries of personal curiosity to become a public shared study. The nature of desire without any guidance can swallow a person wholly or may even lead them to lose their way. Coming of age does not mean one has to walk blindfolded.\n\nEverything everywhere is moving fast... One has to wonder if the current state of sex education is doing its job. How much knowledge should be shared with the youth? How should we approach it? And what about free will?\n\nMaybe these questions aren't just about sexuality.",
    producerStatement:
      "Ever since the global success of the film <Parasite> (2019) and the Netflix original series <Squid Game> (2021), the world's view of Korean culture and content has changed rapidly. However, the familiar and already established K-Contents grammar alone will not be able to evolve past its repetitive nature into more diverse content. I am certain that a non-verbal musical will have its leg in Korea with all that is happening with the dancing culture and its universal theme of coming of age and adolescent sexuality will reach a worldwide audience.",
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'hellfire-academy',
    title: 'Hellfire Academy',
    titleKo: '저승사관학교',
    director: 'SHIN A-Ga',
    year: 2026,
    status: 'upcoming',
    category: 'film',
    genre: ['Fantasy', 'Romance', 'Thriller'],
    synopsis:
      'A fantasy romantic thriller where a powerless Grim Reaper and a human woman who gains reaper abilities join forces to defeat an absolute evil.',
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0036.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0036.jpg',
    ],
    budget: '2,200,000 USD',
    productionStatus: 'Script Development',
    productionPeriod: '2026 1Q',
    directorStatement:
      "This film began with the intention of exploring humanity from the perspective of evil, examining how evil manipulates and controls human beings. The initial inspiration came from Wim Wenders' <Wings of Desire>(1987). While watching the angels in the film instill goodness and hope in humans, I found myself imagining the opposite—what might the demons on the other side be doing? I wanted to create a story that views humanity through the lens of evil, making us consider the other side of the coin. I believe that the world hasn't completely fallen apart because of our capacity to love. Despite the harshness and overwhelming hatred in reality, it's love that keeps us going, and that's the message I want to convey through this film.",
    producerStatement:
      '<Hellfire Academy> is a film that deepens the originality and boldness of Korean cinema, weaving a powerful narrative that blurs the lines between humanity and demons, life and death. Set in a secret institution that trains reapers, the film explores how demons infiltrate and influence the human world, blending Eastern and Western sensibilities to reimagine familiar images of reapers and demons. More than just a romantic comedy, our film will reflect life, death and morality, delivering a fresh, intimate narrative experience that feels very grounded. Hellfire Academy showcases the strength of Korean genre cinema and will leave a lasting impact on its audience.',
    festivals: [],
    awards: [],
    trailerUrl: '',
  },
  {
    id: 'chun-hyang-dance',
    title: 'Chun Hyang Dance',
    titleKo: '춘향놀이',
    director: 'JUNG Se-Um',
    year: 2026,
    status: 'upcoming',
    category: 'film',
    genre: ['Occult Horror', 'Thriller'],
    synopsis:
      'A story of a young female protagonist who performs "Chun Hyang Dance" - a traditional superstitious ritual that shows the future - and is forced to face off ghostly presence threatening her present reality.',
    posterUrl: '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0040.jpg',
    stillImages: [
      '/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0040.jpg',
    ],
    budget: '4,000,000 USD',
    productionStatus: 'Script Development',
    productionPeriod: '2026 2Q',
    note: ['Co-Production: SHOWBOX'],
    producerStatement:
      "'Mishin' is a Korean concept referring to 'unscientific and irrational beliefs - a superstition.'\\n\\nIn the face of grim reality and an uneasy future, people would want to change their fate even if they lean on often frowned upon 'superstition.' But fate can sometimes be set in stone no matter how hard we try.\\n\\nThe film 'Chun Hyang Dance' aims to show the various desires of women in motion to change their future by leaning into 'Mishin.'\\n\\nEven if their effort ends up in fear and disaster.",
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
