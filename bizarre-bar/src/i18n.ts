export type Locale = 'pl' | 'en';

// nested messages object; keys may be accessed with dot paths in `t()` helper
export const messages: Record<Locale, Record<string, any>> = {
  pl: {
    meta: {
      title: 'Remigiusz Pisarski – Java Backend Developer',
      description:
        'Oficjalna strona Remigiusza Pisarskiego, Java backend developera z doświadczeniem w Spring, mikroserwisach i aplikacjach webowych.',
    },
    nav: {
      home: 'Główna',
      education: 'Wykształcenie',
      experience: 'Doświadczenie',
      skills: 'Umiejętności',
      portfolio: 'Portfolio',
      interests: 'Zainteresowania',
      awards: 'Certyfikaty',
    },
    about: {
      description:
        `Programista z ponad 3-letnim doświadczeniem w wytwarzaniu i utrzymywaniu aplikacji webowych. 
      Specjalizuję się w technologiach Java, Spring Boot oraz posiadam solidną wiedzę z zakresu baz danych
      (SQL, PostgreSQL) i środowisk chmurowych (AWS, Docker, Kubernetes). Biegły w pełnym cyklu wytwarzania
      oprogramowania — od projektowania architektury i implementacji funkcjonalności po testy. 
      Zmotywowany, skrupulatny i pasjonujący się dostarczaniem czystych, skalowalnych rozwiązań przy 
      efektywnej współpracy w zespołach Agile.`,
    },
    skills: {
      languagesHeading: 'Języki programowania i narzędzia',
      otherHeading: 'Ponadto',
    },
    interests: {
      p1: `Programowanie nie jest moim jedynym hobby. Latem często chodzę
      pływać, dzięki temu opanowałem trzy podstawowe style. Ponadto
      lubię jazdę na rowerze, siatkówkę i badminton. Nie przepadam za
      sportami zimowymi, zazwyczaj tę porę roku spędzam w domu.`,
      p2: `W domu również się nie nudzę. Jestem wielkim fanem Formuły 1 oraz
      innych motosportów. Obecnie zaciekawiły mnie technologie związane
      z tworzeniem i zarządzaniem stronami internetowymi.`,
    },
    awards: {
      intro: `Podczas studiów udało mi się zdoybć poniższe certyfikaty akademii
      Cisco. Obejmują one kurs CCNA 7. Dokładniej pierwsze dwa
      rozdziały.`,
      profIntro: `Ponadto napisałem testy na akademii Cisco tak dobrze że otrzymałem
        listy gratulacyjne, które przyznawane są od 75% w górę.`,
      ciscoSignatureHeading: 'Certyfikaty z podpisem akademii Cisco',
      profSignatureHeading: 'Certyfikaty z podpisem profesora Kamila Nowaka',
    },
    button: {
      switchToEnglish: 'EN',
      switchToPolish: 'PL',
    },
  },
  en: {
    meta: {
      title: 'Remigiusz Pisarski – Java Backend Developer',
      description:
        'Official website of Remigiusz Pisarski, a Java backend developer with experience in Spring, microservices and web applications.',
    },
    nav: {
      home: 'Home',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      portfolio: 'Portfolio',
      interests: 'Interests',
      awards: 'Certificates',
    },
    about: {
      description:
        `A developer with over 3 years of experience building and maintaining web applications.
      I specialize in Java and Spring Boot technologies and have solid knowledge of databases
      (SQL, PostgreSQL) and cloud environments (AWS, Docker, Kubernetes). Skilled in the full software
      development lifecycle—from architecture design and feature implementation to testing.
      Motivated, meticulous, and passionate about delivering clean, scalable solutions while
      collaborating effectively within Agile teams.`,
    },
    skills: {
      languagesHeading: 'Programming languages & tools',
      otherHeading: 'Additionally',
    },
    interests: {
      p1: `Programming is not my only hobby. In the summer I often go swimming, which helped me master three basic strokes. I also enjoy cycling, volleyball, and badminton. I'm not fond of winter sports, I usually spend that season indoors.`,
      p2: `I also stay busy at home. I'm a big fan of Formula 1 and other motorsports. Recently, I've become interested in technologies related to building and managing websites.`,
    },
    awards: {
      intro: `During my studies I managed to earn the following Cisco academy certificates. They cover the CCNA 7 course, specifically the first two chapters.`,
      profIntro: `I did so well on the Cisco academy tests that I received congratulatory letters, which are awarded for scores of 75% and above.`,
      ciscoSignatureHeading: 'Certificates signed by Cisco academy',
      profSignatureHeading: 'Certificates signed by Professor Kamil Nowak',
    },
    button: {
      switchToEnglish: 'EN',
      switchToPolish: 'PL',
    },
  },
};

export function t(locale: Locale, key: string): string {
  const parts = key.split('.');
  let current: any = messages[locale];
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return key; // fallback to key if not found
    }
  }
  return typeof current === 'string' ? current : key;
}
