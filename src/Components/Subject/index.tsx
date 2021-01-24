import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import MultipleOptionQuestion from '../MultipleOptionQuestion';
import SubjectParams from './Subject.typed';
import { useParams } from 'react-router-dom';
// Mock
import questions1 from '../../mock/question1.tmp';
import questions2 from '../../mock/question2.tmp';

type StateSetter = React.Dispatch<React.SetStateAction<number>>;

const setQuestion = (totalQuestions: number, nextQuestion: number, setActualQuestion: StateSetter) => {
  if (nextQuestion < 0 || nextQuestion >= totalQuestions) return;
  setActualQuestion(nextQuestion);
};

//TODO extract function
const getQuiz = (id:string) => {
  if(id === '1') return questions1;
  if(id === '2') return questions2;
  return null;
};

const Subject = () => {
  const { id } = useParams<SubjectParams>();
  const [quiz, setQuiz] = useState<any>(null); 
  const [actualQuestion, setActualQuestion] = useState(0);

  // Set Quiz
  useEffect(() => {
    const quizObject = getQuiz(id);
    setQuiz(quizObject);
  }, [id]);

  if(quiz) {
    return (
      <>
        <MultipleOptionQuestion {...quiz[actualQuestion]} />
        <Button color="primary" onClick={() => setQuestion(quiz.length, actualQuestion - 1, setActualQuestion)}>
          Anterior
        </Button>
        <Button color="primary" onClick={() => setQuestion(quiz.length, actualQuestion + 1, setActualQuestion)}>
          Siguiente
        </Button>
      </>
    );
  }

  return (<h1>NO SUBJECT FOUND</h1>)
};

export default Subject;
