// React Stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
// Custom modules
import App from './App';
// Custom CSS
import './index.css';

ReactDOM.render(

  <Router history={hashHistory} >
    <Route path="/" component={App} />
    </Router>,
  document.getElementById('root')
);
