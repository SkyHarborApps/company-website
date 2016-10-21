import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './layouts/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Home } from './layouts/Home'
import { Blog } from './layouts/Blog'
import { Portfolio } from './layouts/Portfolio'
import { Contact } from './layouts/Contact'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute name="index" component={ Home } />
      <Route name="blog" path="/blog" component={ Blog } />
      <Route name="portfolio" path="/portfolio" component={ Portfolio } />
      <Route name="contact" path="/contact" component={ Contact } />
    </Route>
  </Router>
), document.getElementById('root'))
