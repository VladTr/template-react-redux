import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Todo from './Todo';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={About}/>
      <Route path='/to-do' component={Todo}/>
    </Switch>
  </main>
)

export default Main;