import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import MultipleOptionQuestion from '../MultipleOptionQuestion'

const setQuestion = (totalQuestions, nextQuestion, setActualQuestion) => {
    if(nextQuestion < 0 || nextQuestion >= totalQuestions) return
    setActualQuestion(nextQuestion)
}

const Subject = ({ questions }) => {
    const [actualQuestion, setActualQuestion] = useState(0);
    return(
        <>
            <MultipleOptionQuestion {...questions[actualQuestion]} />
            <Button color="primary" onClick={() => setQuestion(questions.length, actualQuestion-1, setActualQuestion)}>
                Anterior
            </Button>
            <Button color="primary" onClick={() => setQuestion(questions.length, actualQuestion+1, setActualQuestion)}>
                Siguinte
            </Button>
        </>
    )
}

export default Subject
