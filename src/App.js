import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Users from './user/pages/user'
import NewPlace from './places/pages/NewPlace';

const App = () =>{
  return (
    <Router>
      <Switch>
        <Route Path="/" exact> 
          <Users />
        </Route>
        <Route path="/places" >
          <NewPlace/>
        </Route>
      </Switch>
  </Router>
  );
};

export default App;
