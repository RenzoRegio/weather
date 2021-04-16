import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import Loading from "./Loading";

const API_KEY = "7d78bcfc6d1b8624d91e6d7756dd4f5c";

export default class extends React.Component {
  state = {
    isLoading: true,
    location: "",
    temperature: 0,
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )
        .then(function (response) {
          return response.json();
        })
        .then((json) => {
          this.setState({
            temperature: json.main.temp,
            location: json.name,
            isLoading: false,
          });
        });
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
    const { isLoading, temperature, location } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
