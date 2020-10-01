import React from 'react';
import './App.css';
import Subject from './Components/Subject';
import { questions } from './mock/question.tmp';

function App() {
  return (
    <div className="App">
      <Subject questions={questions} />
    </div>
  );
}

export default App;
