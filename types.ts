export type TranslatableString = {
  en: string;
  es: string;
};

export enum QuestionType {
  TrueFalse = 'VERDADERO_FALSO',
  MultipleChoice = 'MULTIPLE_CHOICE',
  CaseStudy = 'CASO_ESTUDIO',
  Reflection = 'REFLEXION',
  Metacognition = 'METACOGNICION',
}

export interface AnswerOption {
  text: TranslatableString;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  type: QuestionType;
  questionText: TranslatableString;
  options?: AnswerOption[];
  explanation: TranslatableString;
}

export interface SubModule {
  id: string;
  title: TranslatableString;
  summary: TranslatableString;
  quiz: Question[];
}

export interface Module {
  id: number;
  title: TranslatableString;
  summary: TranslatableString;
  subModules: SubModule[];
  exam: Question[];
}

export type UserAnswers = {
  [key: string]: {
    answer: string | null; // The text of the selected option in the current language
    isCorrect: boolean | null;
  };
};

export interface Badge {
  id: string;
  name: TranslatableString;
  description: TranslatableString;
  icon: string;
}
