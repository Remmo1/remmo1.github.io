export type EducationEntry = {
  school: string;
  degree?: string;
  faculty?: string;
  field?: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    school: 'Politechnika Wrocławska',
    degree: 'Magister',
    faculty: 'Wydział Informatyki i Telekomunikacji',
    field: 'Informatyka Stosowana - Projektowanie Systemów Informatycznych',
    period: 'Luty 2024 - Luty 2026',
  },
  {
    school: 'Politechnika Wrocławska',
    degree: 'Inżynier',
    faculty: 'Wydział Informatyki i Telekomunikacji',
    field: 'Informatyka Stosowana',
    period: 'Październik 2020 - Styczeń 2024',
  },
  {
    school: 'Liceum Ogólnokształcące nr 9 we Wrocławiu',
    field: 'Klasa matematyczno-fizyczno-informatyczna',
    period: 'Wrzesień 2017 - Maj 2020',
  },
];

