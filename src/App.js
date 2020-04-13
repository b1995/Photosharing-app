import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Users from './user/pages/user'

const App = () =>{
  return <Router>
    <Route Path="/"> 
      <Users />
    </Route>
  </Router>
};

export default App;
