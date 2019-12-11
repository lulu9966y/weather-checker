import React, { Component } from "react";
import WeatherItem from "./WeatherItem";

export class Weather extends Component {
  render() {
    console.log(this.props.weather);
    return this.props.weather.map(item => {
      return <WeatherItem weather={item} />;
    });
  }
}

export default Weather;
