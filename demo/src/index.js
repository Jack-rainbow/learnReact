import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Route from './router'
import Nav from './page/nav'


ReactDOM.render(
  <div>
    <Route/>
  </div>,
  document.getElementById('root')
);
