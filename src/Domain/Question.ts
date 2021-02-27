interface Option {
  label: string;
}

interface Question {
  label: string;
  options: Option[];
  answers: number[];
}

export default Question;
