export type Translatable = {
  pl: string;
  en: string;
};

export type ProjectLink = {
  type: 'youtube' | 'github' | 'other';
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: Translatable;
  stack: Translatable;
  badge: Translatable;
  links: ProjectLink[];
  description: Translatable;
};

export const projects: Project[] = [
  {
    id: 'covidTracker',
    title: { pl: 'Covid Tracker App', en: 'Covid Tracker App' },
    stack: { pl: 'Spring, Java, HTML, CSS, JS', en: 'Spring, Java, HTML, CSS, JS' },
    badge: { pl: 'App with GUI', en: 'App with GUI' },
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
    description: {
      pl:
        'Aplikacja stworzona w czasie trwania pandemii Covid-19, która podaje ilość dziennych zakażeń na świecie. Jest to tabela pokazująca poszczególne kraje w porządku alfabetycznym. Do jej napisania korzystałem ze Springa, a do pobierania danych wykorzystałem API z internetu, konkretniej z GitHub COVID‑19 data. Zachęcam do odwiedzenia githuba i zobaczenia kodu.',
      en:
        'App created during the Covid-19 pandemic that shows the number of daily infections worldwide. It is a table listing countries in alphabetical order. I used Spring to write it and fetched data from the internet via the GitHub COVID-19 dataset API. Feel free to visit GitHub and check out the code.',
    },
  },
  {
    id: 'library',
    title: { pl: 'Library', en: 'Library' },
    stack: { pl: 'JavaFX, PostgresSQL', en: 'JavaFX, PostgresSQL' },
    badge: { pl: 'App with GUI', en: 'App with GUI' },
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
    description: {
      pl:
        'Prosty model biblioteki, ze wszystkimi podstawowymi operacjami takimi jak: dodawanie książki do biblioteki, edytowanie jej własności oraz usuwanie ze zbioru. Jest to podstawowy model bazy danych, zamierzam go rozbudować o czytelników, którzy będą mogli wypożyczać i zwracać lubiane przez nich tytuły.',
      en:
        'A simple library model with all basic operations such as adding a book to the library, editing its properties, and removing it from the collection. It’s a basic database model — I plan to expand it with patrons who can borrow and return their favorite titles.',
    },
  },
  {
    id: 'calculator',
    title: { pl: 'Kalkulator', en: 'Calculator' },
    stack: { pl: 'React', en: 'React' },
    badge: { pl: 'App with GUI', en: 'App with GUI' },
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
    description: {
      pl:
        'Jest to moja pierwsza użyteczna aplikacja stworzona z pomocą biblioteki React. Napisałem najprostszy kalkulator, który posiada wszystkie niezbędne operacje matematyczne, czyli dodawanie, odejmowanie, mnożenie oraz dzielenie. Ponadto sprawdza się przy dłuższych wyrażeniach takich jak np. 3*2+9-1.',
      en:
        'This is my first practical application built with the React library. I wrote a basic calculator that supports all essential mathematical operations: addition, subtraction, multiplication, and division. It also handles longer expressions like 3*2+9-1.',
    },
  },
  {
    id: 'hr-program',
    title: { pl: 'Program dla HR', en: 'HR Program' },
    stack: { pl: 'Spring, React, Full stack', en: 'Spring, React, Full stack' },
    badge: { pl: 'App with GUI', en: 'App with GUI' },
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
    description: {
      pl:
        'Moja pierwsza udana próba napisania działającej aplikacji full stack połączonej z bazą danych. Za logikę programu (backend) odpowiada Spring, natomiast za wygląd strony internetowej React. Ponadto aplikacja korzysta z bazy danych PostgresSQL. Jest to prosta w obsłudze aplikacja służąca do dodawania pracownika, edytowania jego danych oraz usuwania go z firmy.',
      en:
        'My first successful attempt at writing a working full‑stack application connected to a database. Spring handles the program logic (backend), while React is responsible for the website appearance. The application also uses a PostgreSQL database. It’s a simple-to-use app for adding employees, editing their data, and removing them from the company.',
    },
  },
  {
    id: 'snake-game',
    title: { pl: 'Gra Snake', en: 'Snake Game' },
    stack: { pl: 'React', en: 'React' },
    badge: { pl: 'App with GUI', en: 'App with GUI' },
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
    description: {
      pl:
        'Czy ktoś jeszcze pamięta grę w której wąż miał zjadać małe obiekty, rosnąć i przy tym unikać barier? Tak to wspomnienia ze starszych telefonów. Dzięki React udało się te wspomnienia przywrócić, tworząc w bardzo krótkim czasie klona wspomnianej gry. Zasady są identyczne co z nieśmiertelenej produkcji: kieruj wężem tak aby nie uderzył w bandę a przy tym urósł do jak największych rozmiarów.',
      en:
        'Does anyone still remember the game where a snake ate small objects, grew, and avoided obstacles? Those were memories from older phones. With React, I brought those memories back by creating a clone of that game in a short time. The rules are the same as the timeless original: steer the snake so it doesn’t hit the walls while growing as large as possible.',
    },
  },
  {
    id: 'dining-philosophers',
    title: { pl: 'Problem ucztujących filozofów: aplikacja wielowątkowa', en: 'Dining Philosophers Problem: multithreaded app' },
    stack: { pl: 'Scala', en: 'Scala' },
    badge: { pl: 'Console application', en: 'Console application' },
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
    description: {
      pl:
        'Aplikacja bez graficznego interfejsu która przy pomocy wielowątkowości rozwiązuje popularny problem programistyczny. Kod w całości został napisany w języku Scala. Problem ucztujących filozofów został szczegółowo opisany pod linkiem na YT oraz na githubie, wystarczy kliknąć w ikonę by dowiedzieć się więcej.',
      en:
        'A non‑graphical application that uses multithreading to solve a common programming problem. The code is entirely written in Scala. The dining philosophers problem is explained in detail on the YouTube link and on GitHub — just click the icon to learn more.',
    },
  },
  {
    id: 'max3sat',
    title: { pl: 'Max3Sat', en: 'Max3Sat' },
    stack: { pl: 'C++', en: 'C++' },
    badge: { pl: 'Console application', en: 'Console application' },
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
    description: {
      pl:
        'Aplikacja bez graficznego interfejsu która przy pomocy języka C++ optymalizuje rozwiązanie problemu Max3Sat. Ten problem należy do problemów, dla których nie ma jednego świetnego i uniwersalnego algorytmu. Cały program polega na znalezieniu rozwiązania najbliższego optymalnemu. Sam problem polega na spełnialności klauzul logicznych, przydatne w wielu dziedzinach np. układy logiczne. Po więcej szczegółów odsyłam na YT oraz githuba.',
      en:
        'A command‑line application written in C++ that optimizes a solution to the Max3Sat problem. This problem is one of those for which there’s no single great universal algorithm. The program’s goal is to find a solution as close to optimal as possible. The problem itself deals with satisfiability of logical clauses, useful in areas such as logic circuits. For more details, see the YouTube link or GitHub.',
    },
  },
];

