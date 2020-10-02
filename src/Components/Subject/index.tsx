import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MultipleOptionQuestion from '../MultipleOptionQuestion';
import SubjectProps from './Subject.typed';

type StateSetter = React.Dispatch<React.SetStateAction<number>>;

const setQuestion = (totalQuestions: number, nextQuestion: number, setActualQuestion: StateSetter) => {
  if (nextQuestion < 0 || nextQuestion >= totalQuestions) return;
  setActualQuestion(nextQuestion);
};

const Subject = ({ questions }: SubjectProps) => {
  const [actualQuestion, setActualQuestion] = useState(0);
  return (
    <>
      <MultipleOptionQuestion {...questions[actualQuestion]} />
      <Button color="primary" onClick={() => setQuestion(questions.length, actualQuestion - 1, setActualQuestion)}>
        Anterior
      </Button>
      <Button color="primary" onClick={() => setQuestion(questions.length, actualQuestion + 1, setActualQuestion)}>
        Siguiente
      </Button>
    </>
  );
};

export default Subject;
