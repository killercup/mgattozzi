import React from 'react';
import {render} from 'react-dom';
import NavBar from './navbar.jsx';

class App extends React.Component {
  render () {
    return(
      <div>
        <NavBar />
        <p> Hello React HI!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
