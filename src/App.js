import React from 'react'
import './App.css'
import Subject from './Components/Subject'
import questions from './question.tmp.json'

function App() {
  return (
    <div className="App">
      <Subject questions={questions} />
    </div>
  )
}

export default App
