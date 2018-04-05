import React from 'react';
import ReactDOM from 'react-dom';
import { BrowseRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
