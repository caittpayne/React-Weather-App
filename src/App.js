import React from "react";
import { Route } from "react-router-dom";
import ZipCode from "./ZipCode";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ZipCode} />
      </div>
    );
  }
}

export default App;
