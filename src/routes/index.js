import React from 'react';
import login from '../pages/login';
import main from '../pages/main';
import {Switch, Route} from 'react-router-dom';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={login}/>
      <Route path="/main" component={main}/>
    </Switch>
  );
}

export default Routes;