import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import '../public/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css'
import { Home } from './app/home/Home'
import { Blog } from './app/blog/Blog'
import { Portfolio } from './app/portfolio/Portfolio'
import { Contact } from './app/contact/Contact'

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
