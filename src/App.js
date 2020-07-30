import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignUpForm from './containers/SignUpForm';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignUpForm} />
    </Switch>
  </BrowserRouter>
);

export default App;
