import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

// Components
import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = "7d78bcfc6d1b8624d91e6d7756dd4f5c";

export default class extends React.Component {
  state = {
    isLoading: true,
    location: "",
    temperature: 0,
    condition: "",
  };

  getWeather = async (lat, long) => {
    // const { data } = await axios.get(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    // )
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=santiago&appid=${API_KEY}`
    );
    console.log(data);
    this.setState({
      isLoading: false,
      temperature: Math.floor(data.main.temp),
      condition: data.weather[0].main,
      location: data.name,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      await this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert(
        "Can't find you!",
        "Turn on your location to get the weather :)"
      );
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temperature, location, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        location={location}
        temperature={temperature}
        condition={condition}
      />
    );
  }
}
