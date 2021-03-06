import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/login'
import Dashboard from './components/Dashboard/dashboard';
import history from './components/history'
import NameList from './components/List'


function App() {
  return (
    <div className="app">

      <Router history = { history}>
        <Switch>

          <Route path="/login" component= {Login}/>
          <Route path="/dashboard" component = { Dashboard }/>
          <Route path="/namelist" component = {NameList}/>
          <Route path="/">THIS IS ROOT</Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
