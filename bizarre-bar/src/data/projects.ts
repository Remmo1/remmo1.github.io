export type ProjectLink = {
  type: 'youtube' | 'github' | 'other';
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  stack: string;
  badge: string;
  links: ProjectLink[];
  description: string;
};

export const projects: Project[] = [
  {
    id: 'covidTracker',
    title: 'Covid Tracker App',
    stack: 'Spring, Java, HTML, CSS, JS',
    badge: 'App with GUI',
    links: [
      {
        type: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=ieCOQj9DlnE',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/Remmo1/Sars-Cov2-Tracker',
      },
    ],
    description:
      'Aplikacja stworzona w czasie trwania pandemii Covid-19, która podaje ilość dziennych zakażeń na świecie. Jest to tabela pokazująca poszczególne kraje w porządku alfabetycznym. Do jej napisania korzystałem ze Springa, a do pobierania danych wykorzystałem API z internetu, konkretniej z GitHub COVID‑19 data. Zachęcam do odwiedzenia githuba i zobaczenia kodu.',
  },
  {
    id: 'library',
    title: 'Library',
    stack: 'JavaFX, PostgresSQL',
    badge: 'App with GUI',
    links: [
      {
        type: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=XNJ8P8Qspes',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/Remmo1/LibraryJavaFx',
      },
    ],
    description:
      'Prosty model biblioteki, ze wszystkimi podstawowymi operacjami takimi jak: dodawanie książki do biblioteki, edytowanie jej własności oraz usuwanie ze zbioru. Jest to podstawowy model bazy danych, zamierzam go rozbudować o czytelników, którzy będą mogli wypożyczać i zwracać lubiane przez nich tytuły.',
  },
  {
    id: 'calculator',
    title: 'Kalkulator',
    stack: 'React',
    badge: 'App with GUI',
    links: [
      {
        type: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=ax-qTCsoXdg',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/Remmo1/Calculator',
      },
    ],
    description:
      'Jest to moja pierwsza użyteczna aplikacja stworzona z pomocą biblioteki React. Napisałem najprostszy kalkulator, który posiada wszystkie niezbędne operacje matematyczne, czyli dodawanie, odejmowanie, mnożenie oraz dzielenie. Ponadto sprawdza się przy dłuższych wyrażeniach takich jak np. 3*2+9-1.',
  },
  {
    id: 'hr-program',
    title: 'Program dla HR',
    stack: 'Spring, React, Full stack',
    badge: 'App with GUI',
    links: [
      {
        type: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=Q00S-dZWCSk',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/Remmo1/Employee_System_Backend',
      },
    ],
    description:
      'Moja pierwsza udana próba napisania działającej aplikacji full stack połączonej z bazą danych. Za logikę programu (backend) odpowiada Spring, natomiast za wygląd strony internetowej React. Ponadto aplikacja korzysta z bazy danych PostgresSQL. Jest to prosta w obsłudze aplikacja służąca do dodawania pracownika, edytowania jego danych oraz usuwania go z firmy.',
  },
  {
    id: 'snake-game',
    title: 'Gra Snake',
    stack: 'React',
    badge: 'App with GUI',
    links: [
      {
        type: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=-ob86GGyONk',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/Remmo1/snake-game',
      },
    ],
    description:
      'Czy ktoś jeszcze pamięta grę w której wąż miał zjadać małe obiekty, rosnąć i przy tym unikać barier? Tak to wspomnienia ze starszych telefonów. Dzięki React udało się te wspomnienia przywrócić, tworząc w bardzo krótkim czasie klona wspomnianej gry. Zasady są identyczne co z nieśmiertelenej produkcji: kieruj wężem tak aby nie uderzył w bandę a przy tym urósł do jak największych rozmiarów.',
  },
  {
    id: 'dining-philosophers',
    title: 'Problem ucztujących filozofów: aplikacja wielowątkowa',
    stack: 'Scala',
    badge: 'Console application',
    links: [
      {
        type: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=vHdBs39LQ6g',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/Remmo1/MultiThreatening_Dining_Philosophers_Problem',
      },
    ],
    description:
      'Aplikacja bez graficznego interfejsu która przy pomocy wielowątkowości rozwiązuje popularny problem programistyczny. Kod w całości został napisany w języku Scala. Problem ucztujących filozofów został szczegółowo opisany pod linkiem na YT oraz na githubie, wystarczy kliknąć w ikonę by dowiedzieć się więcej.',
  },
  {
    id: 'max3sat',
    title: 'Max3Sat',
    stack: 'C++',
    badge: 'Console application',
    links: [
      {
        type: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/watch?v=EkPx4DKFHqk',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/Remmo1/Max3Sat',
      },
    ],
    description:
      'Aplikacja bez graficznego interfejsu która przy pomocy języka C++ optymalizuje rozwiązanie problemu Max3Sat. Ten problem należy do problemów, dla których nie ma jednego świetnego i uniwersalnego algorytmu. Cały program polega na znalezieniu rozwiązania najbliższego optymalnemu. Sam problem polega na spełnialności klauzul logicznych, przydatne w wielu dziedzinach np. układy logiczne. Po więcej szczegółów odsyłam na YT oraz githuba.',
  },
];

