import React, {
    Component
} from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import NotFound from '../components/not-found'
import Home from '../page/home'
import Tabs from '../components/tabs'
import Registered from '../components/registered'
import Login from '../components/login'

export default class RouteConfig extends Component {
  render () {
    return (
        <BrowserRouter>
          
            <Switch>
              <Route exact={true} path="/login"  component= {Login}/>
              <Route exact={true} path="/registered"  component= {Registered}/>
              <Route exact={true} path="/home"  component= {Home}/>
              <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
  }
}
