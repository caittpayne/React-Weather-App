import React from "react";
import ZipCode from "./ZipCode";
import Weather from "./Weather";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLongArrowAltLeft,
  faMapMarkerAlt,
  faCloud
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faLongArrowAltLeft);
library.add(faMapMarkerAlt);
library.add(faCloud);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      forecast: "",
      hourly: "",
      showWeather: "hide",
      showZip: "show"
    };
  }

  setLocation = value => {
    const zipUrl = `https://www.zipcodeapi.com/rest/${
      process.env.REACT_APP_ZIP
    }/info.json/${value}/degrees`;

    return axios
      .get(zipUrl)
      .then(res => {
        const gridUrl = `https://api.weather.gov/points/${res.data.lat}%2c${
          res.data.lng
        }`;

        axios
          .get(gridUrl, { headers: { accept: "application/geo+json" } })
          .then(res => {
            this.setState({ location: res.data.properties });
            this.getForecast();
          })
          .catch(err => {
            alert(err);
          });
      })
      .catch(err => {
        alert(err);
      });
  };

  getForecast = () => {
    const x = this.state.location.gridX;
    const y = this.state.location.gridY;
    const cwa = this.state.location.cwa;
    const url = `https://api.weather.gov/gridpoints/${cwa}/${x},${y}/forecast?units=us`;

    axios
      .get(url, { headers: { accept: "appliation/geo+json" } })
      .then(res => {
        this.setState({
          forecast: res.data.properties.periods,
          showWeather: "show",
          showZip: "hide"
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  backToSearch = () => {
    this.setState({
      showZip: "show",
      showWeather: "hide"
    });
  };

  render() {
    return (
      <div>
        <ZipCode setLocation={this.setLocation} showZip={this.state.showZip} />
        <Weather
          forecast={this.state.forecast}
          location={this.state.location}
          showWeather={this.state.showWeather}
          backToSearch={this.backToSearch}
        />
      </div>
    );
  }
}

export default App;
