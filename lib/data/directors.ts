export interface Director {
  id: string;
  name: string;
  nameKo: string;
  bio: string;
  photoUrl?: string;
  filmography: string[];
  awards?: string[];
  education?: string[];
  career?: string[];
  birthYear?: number;
  university?: string;
  status?: string;
}

export const directors: Director[] = [
  {
    id: 'lim-dae-hyung',
    name: 'LIM Dae-Hyung',
    nameKo: '임대형',
    bio: "Director LIM Dae-Hyung received a B.A. degree in Film from Hanyang University. After making an impression within the film industry with his series of short films focused on his unique sense of humor, he made his feature debut with 'Merry Christmas Mr. Mo' (2017). The film won the NETPAC Award at 21st Busan International Film Festival and went on to be invited to numerous festivals including 52th Karlovy Vary International Film Festival. His second film 'Moonlit Winter' (2019) was the closing film of the 24th Busan International Film Festival and went on to win the Best Director & Screenplay at the 41st Blue Dragon Film Award.",
    photoUrl: '/images/img165.jpg',
    filmography: ['Merry Christmas Mr. Mo', 'Moonlit Winter'],
    status: '작품 개발 단계',
    university: 'Hanyang University',
    education: ['B.A. degree in Film from Hanyang University'],
    awards: [
      'NETPAC Award - 21st Busan International Film Festival (2016)',
      'Best Director & Screenplay - 41st Blue Dragon Film Award (2020)',
    ],
  },
  {
    id: 'lee-won-young',
    name: 'LEE Won-Young',
    nameKo: '이원영',
    bio: "Director LEE Weon-Young graduated from Hanyang University's Department of Theater and Film, Yonsei University's Graduate School of Communication, and completed a Ph.D. in Film Studies at Hanyang University. His short films 'Blowing In the Wind' (2013), 'Drink in the middle of the day' (2015), 'Fur Elise' (2020), 'Dawn' (2021) have been screened and awarded at many film festivals. His feature debut 'Black Summer' (2017) was screened at the 22nd Busan International Film Festival. And his second feature film 'The Element of Hope' (2021) was screened at the 3rd Gangneung International Film Festival and is gearing for its theatrical release.",
    photoUrl: '/images/img177.jpg',
    filmography: [
      'Blowing In the Wind (2013)',
      'Drink in the middle of the day (2015)',
      'Black Summer (2017)',
      'Fur Elise (2020)',
      'Dawn (2021)',
      'The Element of Hope (2021)',
    ],
    status: '작품 개발 단계',
    university: 'Hanyang University, Yonsei University',
    education: [
      'Department of Theater and Film at Hanyang University',
      'Graduate School of Communication at Yonsei University',
      'Ph.D. in Film Studies at Hanyang University',
    ],
  },
  {
    id: 'han-dong-gyun',
    name: 'HAN Dong-Gyun',
    nameKo: '한동균',
    bio: "Director HAN Dong-Gyun was born in Busan in 1989. He received a BA in Film from Hanyang University and earned his Film MFA at Columbia University in the United States. Numerous short films of his were invited to both domestic and international film festivals, including the Uppsala International Short Film Festival and the New York International Short Film Festival, and he was also selected as a director trainee at the 2013 FLY (Film Leaders Incubator) hosted by the Busan Film Commission & Asian Film Commission Network. Currently, he is prepping his feature-length debut film 'HANA', which was selected at Talents Tokyo 2018, an event co-hosted by the Berlin International Film Festival and the Tokyo FILMeX International Film Festival.",
    photoUrl: '/images/img184.jpg',
    filmography: ['STRAWBERRIES', 'HANA (in development)'],
    status: '작품 개발 단계',
    birthYear: 1989,
    university: 'Hanyang University, Columbia University',
    education: [
      'BA in Film from Hanyang University',
      'Film MFA at Columbia University',
    ],
    career: [
      'Director trainee at 2013 FLY (Film Leaders Incubator)',
      'Selected at Talents Tokyo 2018',
    ],
    awards: [
      'Uppsala International Short Film Festival',
      'New York International Short Film Festival',
    ],
  },
  {
    id: 'han-in-mi',
    name: 'HAN In-Mi',
    nameKo: '한인미',
    bio: "Director HAN In-Mi graduated from Hanyang University's Department of Theater and Film and the Korean Film Academy. Her short films include 'Till the break of day' (2013), 'Permanent Snow' (2015), and 'Blossom' (2015). And 'Blossom' went on to win the 'Grand Prize' in the Korean Short Competition at the 16th Jeonju International Film Festival. Since then, she has written and directed her feature debut 'Nobody's Lover' (2021) and most recently wrote and directed the segment 'A New Mind' which is part of the omnibus film 'Citizen Pane' (2022).",
    photoUrl: '/images/img205.jpg',
    filmography: [
      'Till the break of day (2013)',
      'Permanent Snow (2015)',
      'Blossom (2015)',
      "Nobody's Lover (2021)",
      'A New Mind (2022)',
    ],
    status: '작품 개발 단계',
    university: 'Hanyang University',
    education: [
      'Department of Theater and Film at Hanyang University',
      'Korean Film Academy',
    ],
    awards: [
      'Grand Prize in Korean Short Competition - 16th Jeonju International Film Festival (Blossom)',
    ],
  },
  {
    id: 'park-si-young',
    name: 'PARK Si-Young',
    nameKo: '박시영',
    bio: "Director Park Si-Young was born in 1977 in Jinsang, South Jeolla Province, and spent his school days in Gumi. He moved to Seoul at 18 and had various jobs, including gas delivery and waiters, and founded a film poster design studio 'Bitnaneun' at 29. Starting with 'The City of Violence', he made terrific posters of mainstream films such as 'The Face Reader' and 'The Wailing' and low-budget indie 'House of Hummingbird'. He runs his design studio in Goheung, Jeollanam-do, and engages in farming and fishing.",
    photoUrl: '/images/img210.jpg',
    filmography: ['Stuck In the Middle'],
    status: '작품 개발 단계',
    birthYear: 1977,
    career: [
      "Founded film poster design studio 'Bitnaneun' at 29",
      'Created posters for mainstream films: The City of Violence, The Face Reader, The Wailing',
      'Created posters for indie films: House of Hummingbird',
      'Runs design studio in Goheung, Jeollanam-do',
      'Engages in farming and fishing',
    ],
  },
  {
    id: 'park-sun-joo',
    name: 'PARK Sun-Joo',
    nameKo: '박선주',
    bio: "Director PARK Sun-Joo graduated from Konkuk University's Department of Film and completed her Ph.D. at Hanyang University's Graduate School of Theater and Film. She directed a number of short films such as 'Im, Between You and Me' (2012) and 'Graduation Trip' (2012), and the short film 'Mild Fever' (2017) won the Grand Prize at the 19th Seoul International Women's Film Festival. Since then, her feature-length debut film 'Way Back Home' (2019) has been invited to and won at a number of film festivals, starting with the 24th Busan International Film Festival and won the Best Director award at the 15th Osaka Asian Film Festival.",
    photoUrl: '/images/img216.jpg',
    filmography: [
      'Im, Between You and Me (2012)',
      'Graduation Trip (2012)',
      'Mild Fever (2017)',
      'Way Back Home (2019)',
    ],
    status: '작품 개발 단계',
    university: 'Konkuk University, Hanyang University',
    education: [
      'Department of Film at Konkuk University',
      "Ph.D. at Hanyang University's Graduate School of Theater and Film",
    ],
    awards: [
      "Grand Prize - 19th Seoul International Women's Film Festival (Mild Fever)",
      'Best Director - 15th Osaka Asian Film Festival (Way Back Home)',
    ],
  },
  {
    id: 'jung-wook',
    name: 'JUNG Wook',
    nameKo: '정욱',
    bio: "Director JUNG Wook majored in film at Sejong University's Department of Film and Arts and the Korean Academy of Film. He has directed short films 'family' (2012), 'Audition' (2015), 'Driver license' (2015) which was screened at numerous domestic film festivals. Later, he made his feature debut with the film 'GOOD PERSON' (2020).",
    photoUrl: '/images/img222.jpg',
    filmography: [
      'family (2012)',
      'Audition (2015)',
      'Driver license (2015)',
      'GOOD PERSON (2020)',
    ],
    status: '작품 개발 단계',
    university: 'Sejong University',
    education: [
      "Sejong University's Department of Film and Arts",
      'Korean Academy of Film',
    ],
  },
  {
    id: 'lim-jung-eun',
    name: 'LIM Jung-Eun',
    nameKo: '임정은',
    bio: "LIM Jung-Eun is an award-winning film writer/director based in Seoul. She received a BA in Film from Konkuk University and earned her MFA at Dankook University Graduate School of Film. Her shorts had been screened and won at numerous domestic and international film festivals. The film 'Our Midnight' (2020), her feature debut, went on to be screened at the 25th Busan Film Festival (BIFF), and was released theatrically in 2021.",
    photoUrl: '/images/img90.jpg',
    filmography: ['Our Midnight (2020)'],
    status: '작품 개발 단계',
    university: 'Konkuk University, Dankook University',
    education: [
      'BA in Film from Konkuk University',
      'MFA at Dankook University Graduate School of Film',
    ],
    awards: [
      'Various awards at domestic and international film festivals for short films',
      'Screened at 25th Busan Film Festival (BIFF) - Our Midnight (2020)',
    ],
  },
  {
    id: 'jung-se-um',
    name: 'JUNG Se-Um',
    nameKo: '정세음',
    bio: "Director JUNG Se-Um is a graduate of the Department of Film at Seoul Institute of the Arts, she is a writer and director of many shorts - her most recent short film 'Baton Touch' (2022) has been invited to the 20th Gwanghamun International Short Film Festival and the 23rd Woodstock Film Festival. 'Made By' (2017) was screened at the 17th Seoul International New Media Festival and the dance experimental film 'PUPPET' (2016) has been invited to be screened in many countries through the Experimental Film Virginia program. A seasoned writer at this point, she also worked as an online journalist focusing on book reviews, as well as travel journals. And lastly published a series of horror/sci-fi short stories 'Pataphysique' (2019) on the web novel platform.",
    photoUrl: '/images/img106.jpg',
    filmography: [
      'Chun Hyang Dance',
      'Baton Touch (2022)',
      'Made By (2017)',
      'PUPPET (2016)',
    ],
    status: '작품 개발 단계',
    university: 'Seoul Institute of the Arts',
    education: ['Department of Film at Seoul Institute of the Arts'],
    career: [
      'Online journalist focusing on book reviews and travel journals',
      "Published horror/sci-fi short stories 'Pataphysique' (2019) on web novel platform",
    ],
    awards: [
      '20th Gwanghamun International Short Film Festival - Baton Touch (2022)',
      '23rd Woodstock Film Festival - Baton Touch (2022)',
      '17th Seoul International New Media Festival - Made By (2017)',
      'Experimental Film Virginia program - PUPPET (2016)',
    ],
  },
  {
    id: 'lee-byung-yoon',
    name: 'LEE Byung-Yoon',
    nameKo: '이병윤',
    bio: "LEE Byung-Yoon is a filmmaker and a screenwriter. His short 'Lights in the Dusk' (2012) was awarded the Best Film in Asian Short Competition at the 14th SIWFF. Since then, he has directed a number of short films and his feature debut, 'Ghost Walk' (2018) won the Bucheon Choice: Audience Award at the 22nd BIFAN.",
    photoUrl: '/images/img127.jpg',
    filmography: ['Lights in the Dusk (2012)', 'Ghost Walk (2018)'],
    status: '작품 개발 단계',
    awards: [
      'Best Film in Asian Short Competition (Lights in the Dusk) - 14th SIWFF (2012)',
      'Bucheon Choice: Audience Award (Ghost Walk) - 22nd BIFAN (2018)',
    ],
  },
  {
    id: 'shin-a-ga',
    name: 'SHIN A-Ga',
    nameKo: '신아가',
    bio: "Director SHIN Aga majored in fine arts in college and studied directing at the Korean Film Academy. She gained field experience by going back and forth between shorts, commercial features, and independent films, and made her feature debut with 'Jesus Hospital' (2012). In her second film, 'The Snob' (2019) she tried to objectively look at her worldly desires through the journey of an artist who lives hiding her true self. She is working with Film Run to develop 'Hellfire Academy' for the third and new project.",
    photoUrl: '/images/img143.jpg',
    filmography: [
      'Jesus Hospital (2012)',
      'The Snob (2019)',
      'Hellfire Academy',
    ],
    status: '작품 개발 단계',
    education: ['Fine arts in college', 'Korean Film Academy'],
  },
  {
    id: 'yu-eun-jeong',
    name: 'YU Eun-Jeong',
    nameKo: '유은정',
    bio: "YU Eun-Jeong is a filmmaker and a screenwriter. Her short 'Lights in the Dusk' (2012) was awarded the Best Film in Asian Short Competition at the 14th SIWFF. Since then, she has directed a number of short films and her feature debut, 'Ghost Walk' (2018) won the Bucheon Choice: Audience Award at the 22nd BIFAN.",
    photoUrl: '/images/image19.png',
    filmography: ['The Second Child', 'Something About Us'],
    status: '작품 개발 단계',
    awards: [
      'Best Film in Asian Short Competition (Lights in the Dusk) - 14th SIWFF (2012)',
      'Bucheon Choice: Audience Award (Ghost Walk) - 22nd BIFAN (2018)',
    ],
  },
];

export function getDirectorById(id: string): Director | undefined {
  return directors.find((director) => director.id === id);
}

export function getDirectorByName(name: string): Director | undefined {
  return directors.find(
    (director) =>
      director.name.toLowerCase() === name.toLowerCase() ||
      director.nameKo === name
  );
}
