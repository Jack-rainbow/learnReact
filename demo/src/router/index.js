import React, {Component} from 'react'
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import demo from '../page/demo'
import Mine from '../page/mine'
import Home from '../page/home'
import Nav from '../page/nav'
import NotFound from '../page/404'


// HashRouter 使用的是 # 链接，类似于vue中的model
//BrowserRouter 使用的/, history.push 类似于vue中的history，上线后需要后端做重定向404的处理
export default class RouteConfig extends Component {
  render () {
    return (
        <HashRouter>
            <Nav/>
            <Switch>
              <Route exact={true} path="/demo"  component= {demo}/>
              <Route  exact={true} path="/mine/:id?" component= {Mine}/>
              {/* 当路由里边有相同路径的时候就，且不让主文件显示，那么可以使用 exact  当路由完全匹配时，才跳转*/}
              <Route strict exact={true} path="/home"  component= {Home}/>
              <Route strict exact={true} path="/home/my" render={()=><Mine />}  />
              <Route component={NotFound}/>
            </Switch>
        </HashRouter>
    )
  }
}


// Switch语句作用？如何正确使用？
// 可以用来判断路由
//route的render里边的组件必须使用大驼峰写法

// 路由参数传参
// 可以直接在route上边传参，组件props接收
//  当路由匹配到的时候，但是页面出现404，但是此时又需要参数的时候 可以在参数后边设置？  eg: path="/a/:id?"

//获取参数的多种方法