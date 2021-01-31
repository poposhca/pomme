import React from "react";
import { VictoryBar } from 'victory';

const data = [
    { question: 1, annswers: 5 },
    { question: 2, annswers: 10 },
    { question: 3, annswers: 15 },
    { question: 4, annswers: 5 }
]

const QuestionStats = () => (
    <>
        <h1>Question Stats</h1>
        <VictoryBar
            data={data}
            x="question"
            y="annswers"
        />
    </>
);

export default QuestionStats;
