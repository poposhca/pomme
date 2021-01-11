import React from 'react';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import GuestLogin from './Components/GuestLogIn';
import Subjects from './Components/Subjects'
import Subject from './Components/Subject';
// Mocks
import { questions } from './mock/question.tmp';
import { subjects } from './mock/subjects.tmp';

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Switch>
          {/* Route after login is a mock test  */}
          <Route path="/subjects">
            <Subjects subjects={subjects} />
          </Route>
          {/* Route after login is a mock test  */}
          <Route path="/subject">
            <Subject questions={questions} />
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
