import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import counter from './reducers'
import logger from 'redux-logger'

const log = store => next => action => {
  console.log('开始改变state', store);
  let result = next(action);
  console.log('获取state', store.getState());
  return result;
}

let store = createStore(counter, {}, applyMiddleware(logger))

//subscribe  可以监听数据的改变
store.subscribe(()=>console.log('查看state', store.getState()))


// const render = ()=> {
//     ReactDOM.render(
//     <Provider store={store}>
//       <App 
//         onIncrement={()=> store.dispatch({type: 'add'})}
//         onJianment={()=> store.dispatch({type: 'jian'})}
//         value={store.getState()}
//       />
//     </Provider>,
//     document.getElementById('root')
//   );
// }
// render()
// store.subscribe(render)
 ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );