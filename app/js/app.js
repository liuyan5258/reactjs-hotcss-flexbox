import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Modals from './components/Modals';

let routes = (
  <Route component={App}>
    <Route path="/" component={Home}></Route>
    <Route path="/modals" component={Modals}></Route>
  </Route>
);



ReactDOM.render(<Router>{routes}</Router>,  document.getElementById('react-dom'))