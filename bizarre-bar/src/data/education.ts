export type Translatable = {
  pl: string;
  en: string;
};

export type EducationEntry = {
  school: Translatable;
  degree?: Translatable;
  faculty?: Translatable;
  field?: Translatable;
  period: Translatable; // date ranges as translatable strings
};

export const education: EducationEntry[] = [
  {
    school: { pl: 'Politechnika Wrocławska', en: 'Wrocław University of Science and Technology' },
    degree: { pl: 'Magister', en: "Master's" },
    faculty: { pl: 'Wydział Informatyki i Telekomunikacji', en: 'Faculty of Computer Science and Telecommunications' },
    field: {
      pl: 'Informatyka Stosowana - Projektowanie Systemów Informatycznych',
      en: 'Applied Computer Science – Information Systems Design',
    },
    period: { pl: 'Luty 2024 - Luty 2026', en: 'Feb 2024 - Feb 2026' },
  },
  {
    school: { pl: 'Politechnika Wrocławska', en: 'Wrocław University of Science and Technology' },
    degree: { pl: 'Inżynier', en: 'Bachelor' },
    faculty: { pl: 'Wydział Informatyki i Telekomunikacji', en: 'Faculty of Computer Science and Telecommunications' },
    field: { pl: 'Informatyka Stosowana', en: 'Applied Computer Science' },
    period: { pl: 'Październik 2020 - Styczeń 2024', en: 'Oct 2020 - Jan 2024' },
  },
  {
    school: { pl: 'Liceum Ogólnokształcące nr 9 we Wrocławiu', en: 'High School No. 9 in Wrocław' },
    field: { pl: 'Klasa matematyczno-fizyczno-informatyczna', en: 'Math-Physics-Computer Science class' },
    period: { pl: 'Wrzesień 2017 - Maj 2020', en: 'Sep 2017 - May 2020' },
  },
];

