interface Subject {
  id: string;
  name: string;
  image: string;
}

export interface SubjectProps {
  subjects: Array<Subject>;
}

export default Subject;
