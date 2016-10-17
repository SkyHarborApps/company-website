import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Home } from './Home'
import { Portfolio } from './Portfolio'
import { Contact } from './Contact'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute name="index" component={ Home } />
      <Route name="portfolio" path="/portfolio" component={ Portfolio } />
      <Route name="contact" path="/contact" component={ Contact } />
    </Route>
  </Router>
), document.getElementById('root'))
