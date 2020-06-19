import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import store from './store/index'

import 'antd/dist/antd.css'; 
import 'moment/locale/zh-cn';

import Routes from './router';
import axios from './http'

React.axios = axios;

const data = createStore(store, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={data}>
      <Routes></Routes>
  </Provider>,
  document.getElementById('root')
);

