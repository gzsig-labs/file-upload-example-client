import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddThing from './components/AddThing';
import SeeAll from './components/SeeAll';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={SeeAll} />
        <Route exact path='/new-thing' component={AddThing} />
      </Switch>
    </div>
  );
}

export default App;
