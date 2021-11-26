import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

const App = function () {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Switch>
          <Route exact path="/users" component={UsersList}/>
        </Switch>
        <Switch>
          <Route exact path="/users/id" component={User}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
