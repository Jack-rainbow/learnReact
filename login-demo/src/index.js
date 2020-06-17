import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux'
import store from './store/index'
import {Provider} from 'react-redux'
import 'antd/dist/antd.css'; 
import 'moment/locale/zh-cn';

const data = createStore(store, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={data}>
      <App />
  </Provider>,
  document.getElementById('root')
);

