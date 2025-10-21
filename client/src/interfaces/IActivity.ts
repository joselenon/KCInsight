export type TSubject =
  | 'artes-cenicas'
  | 'artes-plasticas'
  | 'artes-visuais'
  | 'atualidades'
  | 'biologia'
  | 'educacao-artistica'
  | 'educacao-fisica'
  | 'espanhol'
  | 'filosofia'
  | 'fisica'
  | 'geografia'
  | 'historia'
  | 'historia-e-geografia-de-estados-e-municipios'
  | 'ingles'
  | 'literatura'
  | 'matematica'
  | 'musica'
  | 'outros-idiomas-alemao'
  | 'outros-idiomas-frances'
  | 'outros-idiomas-italiano'
  | 'portugues'
  | 'quimica'
  | 'redacao'
  | 'sociologia';

export interface IEstudinoActivity {
  id: string;

  sourceExam: string; // slug customizado: "enem-ppl", "enem-digital", "enem"
  examYear: string;

  examInfo: {
    rawText: string; // texto original coletado, ex: "ENEM 1º Dia (Azul) 2024"
    examSlug: string; // slug normalizado: "enem", "enem-ppl", "enem-digital"
    examVariant?: string; // "ppl" | "digital" | null
    examDay?: number; // 1 | 2 | null
    examColor?: string; // "azul" | "amarelo" | "rosa" | etc
  };
  disciplineSlug: string;
  tags: { name: string; slug: string }[];
  difficultyLevel: number | null;
  questionStemHTML: string;
  alternatives: Array<{
    text: string;
    label: 'A' | 'B' | 'C' | 'D' | 'E';
  }>;

  // RESPOSTA CORRETA
  correctAlternative: 'A' | 'B' | 'C' | 'D' | 'E';
}

export interface IEstudinoActivityPublic {
  id: IEstudinoActivity['id'];
  sourceExam: IEstudinoActivity['sourceExam'];
  examYear: IEstudinoActivity['examYear'];
  disciplineSlug: IEstudinoActivity['disciplineSlug'];
  tags: IEstudinoActivity['tags'];
  difficultyLevel: IEstudinoActivity['difficultyLevel'];
  questionStemHTML: IEstudinoActivity['questionStemHTML'];
  alternatives: IEstudinoActivity['alternatives'];
}

export interface IEstudinoActivityPublicWithAnswer extends IEstudinoActivityPublic {
  correctAlternative: IEstudinoActivity['correctAlternative'];
}
