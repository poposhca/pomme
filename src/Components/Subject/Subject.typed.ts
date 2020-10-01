interface Option {
  label: string;
  correct: boolean;
}

export interface Question {
  label: string;
  options: Option[];
}

export default interface SubjectProps {
  questions: Question[];
}
