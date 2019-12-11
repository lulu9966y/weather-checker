import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";

export class WeatherItem extends Component {
  render() {
    const Container = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 4fr);
      background-color: rgba(204, 204, 204, 0.3);
      margin: 20px 60px;
    `;
    const Part = styled.div`
      padding-left: 20px;
    `;
    const Icon = styled.img`
      width: 50px;
      height: 50px;
    `;

    const {
      time,
      icon,
      summary,
      temperatureHigh,
      temperatureLow,
      windSpeed,
      humidity
    } = this.props.weather;
    var date = moment.unix(time).format("ll");
    return (
      <div className="WeatherItem">
        <Container>
          <Part>
            <small>{date}</small>
            <br />
            <br />
            <Icon
              src={
                icon
                  ? require(`../icon/${icon}.png`)
                  : require(`../icon/clear-day.png`)
              }
            />
            <small>{icon}</small>
          </Part>
          <Part>
            <p>High: {temperatureHigh}°F</p>
            <p>Low: {temperatureLow}°F</p>
          </Part>
          <Part>
            <p>Wind Speed:</p>
            <p>{windSpeed}mph</p>
          </Part>
          <Part>
            <p>Humidity:</p>
            <p>{humidity}</p>
          </Part>
        </Container>
      </div>
    );
  }
}

export default WeatherItem;
