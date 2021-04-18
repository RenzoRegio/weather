import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";

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
    icon: "",
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      // )
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=${API_KEY}`
      )
        .then(function (response) {
          return response.json();
        })
        .then((json) => {
          this.setState({
            temperature: json.main.temp,
            location: json.name,
            isLoading: false,
            condition: json.weather[0].main,
            icon: json.weather[0].icon,
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
    const { isLoading, temperature, location, condition, icon } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        location={location}
        temperature={temperature}
        condition={condition}
        icon={icon}
      />
    );
  }
}
