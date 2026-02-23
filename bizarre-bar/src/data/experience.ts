export type ExperienceEntry = {
  company: string;
  role: string;
  description: string;
  period: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Axxiome Health',
    role: 'Java Trainee / Junior Java Backend Developer',
    description:
      'Pierwsze doświadczenie w pracy jako stażysta Javy. Staż zakończyłem w grudniu 2022, od stycznia 2023 rozpocząłem pracę przy projekcie AOK CX.',
    period: '01.07.2022 - 30.06.2023',
  },
  {
    company: 'Convisa Consulting',
    role: 'Java Backend Developer',
    description:
      'Pracuję nad rozwojem mikrousług medycznych oraz optymalizacją backendu systemów AOK CX.',
    period: 'lipiec 2023 &ndash; obecnie',
  },
];

