import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {

  render () {
    return(
    <div>
         <div>
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Barely Functional</Link>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                          <li><Link to="/about" activeClassName="active">About</Link></li>
                          <li><Link to="/archive" activeClassName="active">Archive</Link></li>
                          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                          <li><Link to="/resume" activeClassName="active">Resume</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
      <div className="container">
        {this.props.children}
      </div>
    </div>
    );
  }
}

export default Main;
