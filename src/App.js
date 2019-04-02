import React from "react";
import ZipCode from "./ZipCode";
import api from "./api";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      weather: ""
    };
  }

  setLocation = value => {
    api.getLocation(value).then(data => {
      this.setState({ location: data });
    });
  };

  getWeather = () => {};
  render() {
    return (
      <div>
        <ZipCode setLocation={this.setLocation} />
      </div>
    );
  }
}

export default App;
