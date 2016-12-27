// React
import React from 'react';
import {render} from 'react-dom';

// React Router
import { Router, Route, Link, browserHistory} from 'react-router'

// Nav Bar Pages
import About from './about.jsx';
import Archive from './archive.jsx';
import Contact from './contact.jsx';
import Main from './main.jsx';
import Resume from './resume.jsx';

// Posts
var Alchemist = require('html!markdown!./posts/announcing-alchemist.md');
var BlogRust = require('html!markdown!./posts/blog-about-rust.md');
var HaskellRust = require('html!markdown!./posts/haskell-rust.md');
var StdMacros = require('html!markdown!./posts/how-do-i-std-macros.md');
var StrString = require('html!markdown!./posts/how-do-i-str-string.md');
var OneRust = require('html!markdown!./posts/1-year-of-rust.md');
var Pipers = require('html?-attrs!markdown!./posts/pipers.md');
var RussianDolls = require('html?-attrs!markdown!./posts/russian-dolls.md');
var RustHaskell = require('html!markdown!./posts/rust-haskell.md');
var SchemeEx1 = require('html!markdown!./posts/scheme-ex1.md');
var SchemeInput = require('html!markdown!./posts/scheme-input.md');
var SchemeParser = require('html!markdown!./posts/scheme-parser.md');
var SchrodingersBug = require('html!markdown!./posts/schrodingers-bug.md');
var WhereClauses = require('html!markdown!./posts/understanding-where-clauses.md');

class alchemist extends React.Component {
  render() {
    const html = {__html: Alchemist};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class blogRust extends React.Component {
  render() {
    const html = {__html: BlogRust};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class stdMacros extends React.Component {
  render() {
    const html = {__html: stdMacros};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class strString extends React.Component {
  render() {
    const html = {__html: StrString};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class oneRust extends React.Component {
  render() {
    const html = {__html: oneRust};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class haskellRust extends React.Component {
  render() {
    const html = {__html: HaskellRust};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class pipers extends React.Component {
  render() {
    const html = {__html: Pipers};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class russianDolls extends React.Component {
  render() {
    const html = {__html: RussianDolls};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class rustHaskell extends React.Component {
  render() {
    const html = {__html: RustHaskell};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class schemeEx1 extends React.Component {
  render() {
    const html = {__html: SchemeEx1};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class schemeInput extends React.Component {
  render() {
    const html = {__html: SchemeInput};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class schemeParser extends React.Component {
  render() {
    const html = {__html: SchemeParser};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class schrodingersBug extends React.Component {
  render() {
    const html = {__html: SchrodingersBug};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
class whereClauses extends React.Component {
  render() {
    const html = {__html: WhereClauses};
    return(<div dangerouslySetInnerHTML={html}/>);
  };
}
render(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <Route path="/about" component={About}/>
            <Route path="/archive" component={Archive}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/posts/announcing-alchemist" component={alchemist}/>
            <Route path="/posts/blog-about-rust" component={blogRust}/>
            <Route path="/posts/haskell-rust" component={haskellRust}/>
            <Route path="/posts/how-do-i-std-macros" component={stdMacros}/>
            <Route path="/posts/how-do-i-str-string" component={strString}/>
            <Route path="/posts/one-year-of-rust" component={oneRust}/>
            <Route path="/posts/pipers" component={pipers}/>
            <Route path="/posts/russian-dolls" component={russianDolls}/>
            <Route path="/posts/rust-haskell" component={rustHaskell}/>
            <Route path="/posts/scheme-ex-1" component={schemeEx1}/>
            <Route path="/posts/scheme-input" component={schemeInput}/>
            <Route path="/posts/scheme-parser" component={schemeParser}/>
            <Route path="/posts/schrodingers-bug" component={schrodingersBug}/>
            <Route path="/posts/understanding-where-clauses" component={whereClauses}/>
          </Route>
        </Router>
      </div>
      , document.getElementById('root'));
