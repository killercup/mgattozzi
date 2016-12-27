import React from 'react';

class Archive extends React.Component {

  render () {
    return(
      <div>
        <h1>Archive</h1>
          <p>
            You'll find collections of articles I've written here that can be
            grouped together by topic
          </p>
        <h2>Alchemist</h2>
          <p>
            Articles regarding my package name conversion tool.
          </p>
          <ul>
            <li><a href="/posts/announcing-alchemist.html">
              Announcing Alchemist: v0.1.0
            </a></li>
          </ul>
        <h2>Rust</h2>
          <p>
            Articles about various topics in Rust
          </p>
          <ul>
            <li><a href="/posts/blog-about-rust.html">
              Why you should be blogging about Rust
            </a></li>
            <li><a href="/posts/1-year-of-rust.html">
              One year of Rust
            </a></li>
            <li><a href="/posts/understanding-where-clauses.html">
              Understanding where clauses and trait constraints
            </a></li>
            <li><a href="/posts/russian-dolls.html">
              Russian Dolls and clean Rust code
            </a></li>
            <li><a href="/posts/pipers.html">
              Announcing Pipers
            </a></li>
          </ul>
        <h2>Schemers</h2>
          <p>
            A series of articles aimed at new Rust users to learn the language
            by writing a scheme interpreter. These are listed in order.
          </p>
          <ul>
            <li><a href="/posts/scheme-input.html">
              Input
            </a></li>
            <li><a href="/posts/scheme-ex1.html">
              Exercise 1
            </a></li>
            <li><a href="/posts/scheme-parser.html">
              Parser 1
            </a></li>
          </ul>
        <h2>Haskell and Rust</h2>
          <p>
            Articles doing FFI with Haskell and Rust
          </p>
          <ul>
            <li><a href="/posts/haskell-rust.html">
              FFI with Haskell and Rust
            </a></li>
            <li><a href="/posts/rust-haskell.html">
              Using Haskell in Rust
            </a></li>
          </ul>
        <h2>How do I X in Rust?</h2>
          <p>
            A collection of articles aimed at new Rust users to avoid growing pains
            normally associated with learning the language.
          </p>
          <ul>
            <li><a href="/posts/how-do-i-str-string.html">
              How do I convert a &amp;str to String in Rust?
            </a></li>
            <li><a href="/posts/how-do-i-std-macros.html">
              How do I use the Standard Library macros in Rust?
            </a></li>
          </ul>
        <h2>JS</h2>
          <p>
            Articles regarding my usage of JavaScript.
          </p>
          <ul>
            <li><a href="/posts/schrodingers-bug.html">
              Schrodinger's Bug: Adventures in Asynchronous Debugging
            </a></li>
          </ul>
      </div>
    );
  }
}

export default Archive;
