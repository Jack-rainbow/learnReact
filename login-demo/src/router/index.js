import React, {
    Component
} from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import NotFound from '../components/not-found'
import Signup from '../page/signup'
import Tabs from '../components/tabs'
import Registered from '../components/registered'

export default class RouteConfig extends Component {
  render () {
    return (
        <BrowserRouter>
          <Tabs></Tabs>
            <Switch>
              <Route exact={true} path="/"  component= {Signup}/>
              <Route exact={true} path="/registered"  component= {Registered}/>
              <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
  }
}
