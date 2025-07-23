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
    id: "lim-dae-hyung",
    name: "LIM Dae-Hyung",
    nameKo: "임대형",
    bio: "Director LIM Dae-Hyung received a B.A. degree in Film from Hanyang University. After making an impression within the film industry with his series of short films focused on his unique sense of humor, he made his feature debut with 'Merry Christmas Mr. Mo' (2017). The film won the NETPAC Award at 21st Busan International Film Festival and went on to be invited to numerous festivals including 52th Karlovy Vary International Film Festival. His second film 'Moonlit Winter' (2019) was the closing film of the 24th Busan International Film Festival and went on to win the Best Director & Screenplay at the 41st Blue Dragon Film Award.",
    photoUrl: "/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0042.jpg",
    filmography: ["Merry Christmas Mr. Mo", "Moonlit Winter"],
    status: "작품 개발 단계",
    university: "Hanyang University",
    education: ["B.A. degree in Film from Hanyang University"],
    awards: [
      "NETPAC Award - 21st Busan International Film Festival (2016)",
      "Best Director & Screenplay - 41st Blue Dragon Film Award (2020)"
    ]
  },
  {
    id: "han-dong-gyun", 
    name: "HAN Dong-Gyun",
    nameKo: "한동균",
    bio: "Director HAN Dong-Gyun was born in Busan in 1989. He received a BA in Film from Hanyang University and earned his Film MFA at Columbia University in the United States. Numerous short films of his were invited to both domestic and international film festivals, including the Uppsala International Short Film Festival and the New York International Short Film Festival, and he was also selected as a director trainee at the 2013 FLY (Film Leaders Incubator) hosted by the Busan Film Commission & Asian Film Commission Network. Currently, he is prepping his feature-length debut film 'HANA', which was selected at Talents Tokyo 2018, an event co-hosted by the Berlin International Film Festival and the Tokyo FILMeX International Film Festival.",
    photoUrl: "/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0044.jpg",
    filmography: ["STRAWBERRIES", "HANA (in development)"],
    status: "작품 개발 단계",
    birthYear: 1989,
    university: "Hanyang University, Columbia University",
    education: [
      "BA in Film from Hanyang University",
      "Film MFA at Columbia University"
    ],
    career: [
      "Director trainee at 2013 FLY (Film Leaders Incubator)",
      "Selected at Talents Tokyo 2018"
    ],
    awards: [
      "Uppsala International Short Film Festival",
      "New York International Short Film Festival"
    ]
  },
  {
    id: "han-in-mi",
    name: "HAN In-Mi", 
    nameKo: "한인미",
    bio: "Director HAN In-Mi graduated from Hanyang University's Department of Theater and Film and the Korean Film Academy. Her short films include 'Till the break of day' (2013), 'Permanent Snow' (2015), and 'Blossom' (2015). And 'Blossom' went on to win the 'Grand Prize' in the Korean Short Competition at the 16th Jeonju International Film Festival. Since then, she has written and directed her feature debut 'Nobody's Lover' (2021) and most recently wrote and directed the segment 'A New Mind' which is part of the omnibus film 'Citizen Pane' (2022).",
    photoUrl: "/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0045.jpg",
    filmography: [
      "Till the break of day (2013)",
      "Permanent Snow (2015)", 
      "Blossom (2015)",
      "Nobody's Lover (2021)",
      "A New Mind (2022)"
    ],
    status: "작품 개발 단계",
    university: "Hanyang University",
    education: [
      "Department of Theater and Film at Hanyang University",
      "Korean Film Academy"
    ],
    awards: [
      "Grand Prize in Korean Short Competition - 16th Jeonju International Film Festival (Blossom)"
    ]
  },
  {
    id: "park-sun-joo",
    name: "PARK Sun-Joo",
    nameKo: "박선주", 
    bio: "Director PARK Sun-Joo graduated from Konkuk University's Department of Film and completed her Ph.D. at Hanyang University's Graduate School of Theater and Film. She directed a number of short films such as 'Im, Between You and Me' (2012) and 'Graduation Trip' (2012), and the short film 'Mild Fever' (2017) won the Grand Prize at the 19th Seoul International Women's Film Festival. Since then, her feature-length debut film 'Way Back Home' (2019) has been invited to and won at a number of film festivals, starting with the 24th Busan International Film Festival and won the Best Director award at the 15th Osaka Asian Film Festival.",
    photoUrl: "/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0047.jpg",
    filmography: [
      "Im, Between You and Me (2012)",
      "Graduation Trip (2012)", 
      "Mild Fever (2017)",
      "Way Back Home (2019)"
    ],
    status: "작품 개발 단계",
    university: "Konkuk University, Hanyang University",
    education: [
      "Department of Film at Konkuk University",
      "Ph.D. at Hanyang University's Graduate School of Theater and Film"
    ],
    awards: [
      "Grand Prize - 19th Seoul International Women's Film Festival (Mild Fever)",
      "Best Director - 15th Osaka Asian Film Festival (Way Back Home)"
    ]
  },
  {
    id: "jung-wook",
    name: "JUNG Wook",
    nameKo: "정욱",
    bio: "Director JUNG Wook majored in film at Sejong University's Department of Film and Arts and the Korean Academy of Film. He has directed short films 'family' (2012), 'Audition' (2015), 'Driver license' (2015) which was screened at numerous domestic film festivals. Later, he made his feature debut with the film 'GOOD PERSON' (2020).",
    photoUrl: "/pdf_images/달리기_라인업북2_215_135_영문_낱장_page-0048.jpg",
    filmography: [
      "family (2012)",
      "Audition (2015)",
      "Driver license (2015)", 
      "GOOD PERSON (2020)"
    ],
    status: "작품 개발 단계",
    university: "Sejong University",
    education: [
      "Sejong University's Department of Film and Arts",
      "Korean Academy of Film"
    ]
  }
];

export function getDirectorById(id: string): Director | undefined {
  return directors.find(director => director.id === id);
}

export function getDirectorByName(name: string): Director | undefined {
  return directors.find(director => 
    director.name.toLowerCase() === name.toLowerCase() ||
    director.nameKo === name
  );
}