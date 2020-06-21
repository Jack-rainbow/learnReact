import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {setCurrentUser} from './store/actions/signUp'
import cookie from 'js-cookie'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import store from './store/index'

import 'antd/dist/antd.css'; 
import 'moment/locale/zh-cn';

import Routes from './router';
import axios from './http'
React.axios = axios;

const Store = createStore(store, composeWithDevTools(applyMiddleware(logger, thunk)))

if(cookie.get('token')){
  console.log(Store, 'Store');
  Store.dispatch(setCurrentUser(cookie.get('token')))
}

ReactDOM.render(
  <Provider store={Store}>
      <Routes></Routes>
  </Provider>,
  document.getElementById('root')
);

