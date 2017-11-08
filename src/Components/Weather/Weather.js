import React, { Component } from "react";
import "./Weather.css";
import Axios from "axios";

const API_Key = "be12c9cede78dacab40103d7c20d67fb";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      city: null,
      temp: null
    };
  }

  componentDidMount = () => {
    this.getLocation();
  };

  getLocation = () => {
    const baseURL = "http://ip-api.com/json";
    Axios.get(baseURL)
      .then(res => {
        console.log("IP success: ", res);
        this.setState(
          {
            lat: res.data.lat,
            lon: res.data.lon,
            city: res.data.city
          },
          () => this.getWeather()
        );
      })
      .catch(err => console.log(err));
  };

  getWeather = () => {
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?lat=${this
      .state.lat}&lon=${this.state.lon}&units=imperial&APPID=${API_Key}`;

    Axios.get(baseURL)
      .then(res => {
        console.log("Weather: ", res.data);
        const temp = Math.floor(res.data.main.temp);
        this.setState({
          temp
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="weather-container">
        <div className="weather-temp">{this.state.temp}<sup>o</sup></div>
        <p className="weather-city">{this.state.city}</p>
      </div>
    );
  }
}

export default Weather;
