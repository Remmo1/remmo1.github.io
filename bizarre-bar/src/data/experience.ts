export type Translatable = {
  pl: string;
  en: string;
};

export type ExperienceEntry = {
  company: Translatable;
  role: Translatable;
  description: Translatable;
  period: Translatable;
};

export const experience: ExperienceEntry[] = [
  {
    company: { pl: 'Convista', en: 'Convista' },
    role: { pl: 'Mid Java Developer', en: 'Mid Java Developer' },
    description: {
      pl:
        'Pracuję nad rozwojem i utrzymaniem mikroserwisów oraz optymalizacją backendu systemów niemieckiego klienta.',
      en:
        'I work on developing and maintaining microservices and optimizing the backend of systems for a German client.',
    },
    period: { pl: 'styczeń 2025 - obecnie', en: 'January 2025 - present' },
  },
  {
    company: { pl: 'Convista', en: 'Convista' },
    role: { pl: 'Java Junior Developer', en: 'Java Junior Developer' },
    description: {
      pl:
        'Pracuję nad rozwojem i utrzymaniem mikroserwisów oraz optymalizacją backendu systemów niemieckiego klienta.',
      en:
        'I work on developing and maintaining microservices and optimizing the backend of systems for a German client.',
    },
    period: { pl: 'styczeń 2023 - grudzień 2024', en: 'January 2023 - December 2024' },
  },
  {
    company: { pl: 'Convista Poland (Axxiome Health)', en: 'Convista Poland (Axxiome Health)' },
    role: { pl: 'Java Trainee', en: 'Java Trainee' },
    description: {
      pl:
        'Pierwsze doświadczenie w pracy jako stażysta Javy. Staż zakończyłem w grudniu 2022, od stycznia 2023 rozpocząłem pracę przy projekcie niemieckiego klienta.',
      en:
        'My first experience working as a Java intern. I finished the internship in December 2022 and began working on a project for a German client in January 2023.',
    },
    period: { pl: 'lipiec 2022 - grudzień 2022', en: 'July 2022 - December 2022' },
  }
];

