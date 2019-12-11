import React, { Component } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Dropdown from "./components/Dropdown";
import Axios from "axios";

export class App extends Component {
  state = {
    weather: [],
    lat: 43.1566,
    long: 77.6088
  };

  //Call weather data from darksky API
  componentDidMount() {
    Axios.get(
      `/forecast/22af062ee7f2ed78fd2c208f8807e93c/43.1566,77.6088`
    ).then(res =>
      this.setState({
        weather: res.data.daily.data
      })
    );
  }

  //Call respective weather data based on the city chosen
  handleChange = city => {
    console.log(city);
    if (city === "Rochester") {
      Axios.get(
        "/forecast/22af062ee7f2ed78fd2c208f8807e93c/43.1566,77.6088"
      ).then(res =>
        this.setState({
          weather: res.data.daily.data
        })
      );

      // this.setState({
      //   lat: 43.1566,
      //   long: 77.6088
      // });
    } else if (city === "Albany") {
      Axios.get(
        "/forecast/22af062ee7f2ed78fd2c208f8807e93c/42.6526,73.7562"
      ).then(res =>
        this.setState({
          weather: res.data.daily.data
        })
      );

      // this.setState({
      //   lat: 42.6526,
      //   long: 73.7562
      // });
    } else if (city === "Buffalo") {
      Axios.get(
        "/forecast/22af062ee7f2ed78fd2c208f8807e93c/42.8864,78.8784"
      ).then(res =>
        this.setState({
          weather: res.data.daily.data
        })
      );

      // this.setState({
      //   lat: 42.8864,
      //   long: 78.8784
      // });
    } else if (city === "Syracuse") {
      Axios.get(
        "/forecast/22af062ee7f2ed78fd2c208f8807e93c/43.0481,76.1474"
      ).then(res =>
        this.setState({
          weather: res.data.daily.data
        })
      );
      // this.setState({
      //   lat: 43.0481,
      //   long: 76.1474
      // });
    } else if (city === "NYC") {
      Axios.get(
        "/forecast/22af062ee7f2ed78fd2c208f8807e93c/40.7128,74.006"
      ).then(res =>
        this.setState({
          weather: res.data.daily.data
        })
      );

      //   this.setState({
      //     lat: 40.7128,
      //     long: 74.006
      //   });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Dropdown handleChange={this.handleChange} />
        <Weather weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
