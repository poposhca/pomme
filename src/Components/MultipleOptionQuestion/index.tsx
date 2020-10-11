import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Question } from '../Subject/Subject.typed';

const MultipleOptionQuestion = ({ label, options, answers }: Question) => {
  const [correctAnswers, _] = React.useState(answers);
  const [correctAnswersCount, setCorrectAnswersCount] = React.useState(0);

  React.useEffect(() => {
    setCorrectAnswersCount(0);
  }, [correctAnswers]);

  const checkAnswer = (index: number, checked: boolean) => {
    const isCorrectAnswer = correctAnswers.includes(index);
    if(isCorrectAnswer && checked) setCorrectAnswersCount(correctAnswersCount + 1);
    if(isCorrectAnswer && !checked) setCorrectAnswersCount(correctAnswersCount - 1);
  };

  return (
    <>
      <h1>{label}</h1>
      {correctAnswersCount === correctAnswers.length && <h2>BIEN</h2>}
      <FormGroup>
        {options && options.map(({ label }, i) =>
          <FormControlLabel
            key={label}
            control={<Checkbox />}
            label={label}
            onChange={(event: any, checked: boolean) => {
              console.log(checked)
              checkAnswer(i, checked)
            }}
          />
        )}
      </FormGroup>
    </>
  );
};

export default MultipleOptionQuestion;
