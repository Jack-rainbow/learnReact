import React, {Component} from 'react'
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import demo from '../page/demo'
import mine from '../page/mine'
import home from '../page/home'
import Nav from '../page/nav'



// HashRouter 使用的是 # 链接，类似于vue中的model
//BrowserRouter 使用的/, history.push 类似于vue中的history，上线后需要后端做重定向404的处理
export default class RouteConfig extends Component {
  render () {
    return (
        <HashRouter>
            <Nav/>
            <Route path="/demo"  component= {demo}/>
            <Route path="/mine" component= {mine}/>
            {/* 当路由里边有相同路径的时候就，且不让主文件显示，那么可以使用 exact  当路由完全匹配时，才跳转*/}
            <Route exact={true} path="/home" strict component= {home}/>
            <Route path="/home/my" component= {mine}/>
        </HashRouter>
    )
  }
}


// Switch语句作用？如何正确使用？