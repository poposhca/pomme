import React from 'react';
import './App.css';
import GuestLogin from './Components/GuestLogIn';
// import Subject from './Components/Subject';
// import { questions } from './mock/question.tmp';

function App() {
  return (
    <div className="App">
      <GuestLogin />
      {/* <Subject questions={questions} /> */}
    </div>
  );
}

export default App;
