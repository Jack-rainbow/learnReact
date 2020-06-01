## demo-react


### React基础知识

#### JSX

jsx = js + xml

##### 为什么使用JSX

当在ui中需要绑定处理事件，在某些时刻状态发生变化时，需要通知到UI，并且需要在UI中展示准备好的数据

当遇到<> 是html的解析，遇到 ()是react解析


#### React.StrictMode

StrictMode不会渲染真实的ui，且控制台会报warning

#### Antd

按需加载

- 默认4.0 已经默认支持按需加载，基于 ES modules 的 tree shaking

- 3.0

``` js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
  ]
}

// import js and css modularly, parsed by babel-plugin-import
import { DatePicker } from 'antd';
```

[3.0参考](https://3x.ant.design/docs/react/introduce)



 
