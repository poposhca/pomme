interface Option {
  label: string;
}

export interface Question {
  label: string;
  options: Option[];
  answers: number[];
}

export default interface SubjectParams {
  id: string;
}
