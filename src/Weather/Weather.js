import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className={this.props.showWeather}>
        {this.props.forecast !== "" ? (
          <main>
            <section>
              <div>{this.props.forecast[0].name}</div>
              <div>{this.props.forecast[0].temperature}</div>
              <div>
                <p>
                  {this.props.location.relativeLocation.properties.city},{" "}
                  {this.props.location.relativeLocation.properties.state}
                </p>
              </div>
              <div>{this.props.forecast[0].detailedForecast}</div>
            </section>
            <section>
              {this.props.forecast
                .slice(2, 8)
                .filter(day => day.isDaytime === true)
                .map((day, index) => (
                  <div key={index}>
                    <div>{day.name}</div>
                    <div>{day.temperature}</div>
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
