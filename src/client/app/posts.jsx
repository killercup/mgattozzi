import React from 'react';
import ReactMarkdown from 'react-markdown'

// Posts
import alchemist from 'raw-loader!./posts/announcing-alchemist.md';
import blogRust from 'raw-loader!./posts/blog-about-rust.md';
import haskellRust from 'raw-loader!./posts/haskell-rust.md';
import stdMacros from 'raw-loader!./posts/how-do-i-std-macros.md';
import strString from 'raw-loader!./posts/how-do-i-str-string.md';
import oneRust from 'raw-loader!./posts/1-year-of-rust.md';
import pipers from 'raw-loader!./posts/pipers.md';
import russianDolls from 'raw-loader!./posts/russian-dolls.md';
import rustHaskell from 'raw-loader!./posts/rust-haskell.md';
import schemeEx1 from 'raw-loader!./posts/scheme-ex1.md';
import schemeInput from 'raw-loader!./posts/scheme-input.md';
import schemeParser from 'raw-loader!./posts/scheme-parser.md';
import schrodingersBug from 'raw-loader!./posts/schrodingers-bug.md';
import whereClauses from 'raw-loader!./posts/understanding-where-clauses.md';

export class Alchemist extends React.Component {
  render () { return( <ReactMarkdown source={eval(alchemist)} />); }
}
export class BlogRust extends React.Component {
  render () { return( <ReactMarkdown source={eval(blogRust)} />); }
}
export class HaskellRust extends React.Component {
  render () { return( <ReactMarkdown source={eval(haskellRust)} />); }
}
export class StdMacros extends React.Component {
  render () { return( <ReactMarkdown source={eval(stdMacros)} />); }
}
export class StrString extends React.Component {
  render () { return( <ReactMarkdown source={eval(StrString)} />); }
}
export class OneRust extends React.Component {
  render () { return( <ReactMarkdown source={eval(OneRust)} />); }
}
export class Pipers extends React.Component {
  render () { return( <ReactMarkdown source={eval(pipers)} />); }
}
export class RussianDolls extends React.Component {
  render () { return( <ReactMarkdown source={eval(russianDolls)} />); }
}
export class RustHaskell extends React.Component {
  render () { return( <ReactMarkdown source={eval(rustHaskell)} />); }
}
export class SchemeEx1 extends React.Component {
  render () { return( <ReactMarkdown source={eval(schemeEx1)} />); }
}
export class SchemeInput extends React.Component {
  render () { return( <ReactMarkdown source={eval(SchemeInput)} />); }
}
export class SchmeParser extends React.Component {
  render () { return( <ReactMarkdown source={eval(schemeParser)} />); }
}
export class SchrodingersBug extends React.Component {
  render () { return( <ReactMarkdown source={eval(schrodingersBug)} />); }
}
export class WhereClauses extends React.Component {
  render () { return( <ReactMarkdown source={eval(whereClauses)} />); }
}
