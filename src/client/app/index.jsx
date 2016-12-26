// React
import React from 'react';
import {render} from 'react-dom';

// React Router
import { Router, Route, Link, browserHistory} from 'react-router'

// Components
import About from './about.jsx';
import Archive from './archive.jsx';
import Contact from './contact.jsx';
import Main from './main.jsx';
import Resume from './resume.jsx';

render(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <Route path="/about" component={About}/>
            <Route path="/archive" component={Archive}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/resume" component={Resume}/>
          </Route>
        </Router>
      </div>
, document.getElementById('root'));
