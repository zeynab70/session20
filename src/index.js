import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRouter from './component/myRouter';
import { Fragment } from 'react';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <MyRouter/>
  </Fragment>

);

