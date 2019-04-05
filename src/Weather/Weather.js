import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Weather extends React.Component {
  render() {
    return (
      <div className={this.props.showWeather}>
        {this.props.forecast !== "" ? (
          <main className="container">
            <section className="navigation">
              <FontAwesomeIcon
                id="arrow-icon"
                icon="long-arrow-alt-left"
                onClick={() => this.props.backToSearch()}
              />
            </section>
            <section className="main">
              <div style={{ fontWeight: "bold" }}>
                {this.props.forecast[0].name}
              </div>
              <div className="temperature">
                {this.props.forecast[0].temperature}
              </div>
              <div id="location">
                <FontAwesomeIcon id="map-icon" icon="map-marker-alt" />
                <p style={{ marginLeft: "10px" }}>
                  {this.props.location.relativeLocation.properties.city},{" "}
                  {this.props.location.relativeLocation.properties.state}
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                {this.props.forecast[0].shortForecast}
              </div>
            </section>
            <section className="week-forecast">
              {this.props.forecast
                .slice(2, 8)
                .filter(day => day.isDaytime === true)
                .map((day, index) => (
                  <div key={index} className="day-containers">
                    <div>{day.name}</div>
                    <div className="weekTemp">{day.temperature}°</div>
                  </div>
                ))}
            </section>
          </main>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Weather;
