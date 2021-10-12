import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1> About Noemi </h1>
      <p> I am 16 years old. </p>
      <p> My birthday is on December 18th. </p>
      <p> I like to dance and sing. </p>
      <p> I attend DPCHS and I am a senior. </p>
    </div>
  );
}

export default App;
