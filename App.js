import React from "react";
import * as Location from "expo-location";

import Loading from "./Loading";

export default class extends React.Component {
  getLocation = async () => {
    const permission = await Location.requestPermissionsAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />;
  }
}
