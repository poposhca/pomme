import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import Question from '../../Domain/Question';

const data = [
  { question: 1, annswers: 5 },
  { question: 2, annswers: 10 },
  { question: 3, annswers: 15 },
  { question: 4, annswers: 5 },
];

const QuestionStats = ({ label, options, answers }: Question) => (
  <>
    <h1>Question Stats</h1>
    <h2>{label}</h2>
    <VictoryChart domainPadding={20}>
      <VictoryAxis tickValues={data.map((question) => question.question)} tickFormat={(n) => `Respuesta ${n}`} />
      <VictoryAxis dependentAxis tickFormat={(n) => n} />
      <VictoryBar data={data} x="question" y="annswers" />
    </VictoryChart>
  </>
);

export default QuestionStats;
