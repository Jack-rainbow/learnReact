import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import Parent from './components/parent'
import Home from './page/home'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route strict exact={true} path="/home" component={Home}></Route>
        <Route strict exact={true} path="/parent" component={Parent}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
