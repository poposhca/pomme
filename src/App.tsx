import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GuestLogin from './Components/GuestLogIn';
import Subjects from './Components/Subjects';
import Subject from './Components/Subject';
import QuestionStats from './Components/QuestionStats';
// Mocks
import { subjects } from './mock/subjects.tmp';
import MultipleOptionQuestion from './Components/MultipleOptionQuestion';

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Switch>
          {/* Route after login is a mock test  */}
          <Route path="/subjects">
            <Subjects subjects={subjects} />
          </Route>
          <Route path="/test">
            <h1>TEST PATH</h1>
          </Route>
          {/* Route after login is a mock test  */}
          <Route path="/subject/stats/:id">
            <Subject SubjectContent={QuestionStats} />
          </Route>
          <Route path="/subject/:id">
            <Subject SubjectContent={MultipleOptionQuestion} />
          </Route>
          {/* Default route is the login */}
          <Route path="/">
            <GuestLogin />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
