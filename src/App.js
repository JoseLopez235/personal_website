import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar'
import Home from './components/About'
import Project from './components/Project/Project'
import './App.css';

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Project />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
