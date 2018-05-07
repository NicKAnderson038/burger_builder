import React, { Component } from "react";
import logo from "./assets/logo.svg";
import classes from "./App.modules.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.header}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className={classes.title}>Welcome to React</h1>
        </header>
        <p className={classes.into}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
