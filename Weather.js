import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native-elements";

export default ({ location, temperature, condition, icon }) => {
  let gradientColors = [];
  const image = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  if (condition.toLowerCase() === "clear") {
    gradientColors = ["#FFE469", "#FECC51", "#FCB033", "#FA961B", "#FA8607"];
  } else if (condition.toLowerCase() === "clouds") {
    gradientColors = ["#D9E5E6", "#BECCDD", "#9DAED2"];
  } else if (condition.toLowerCase() === "rain") {
    gradientColors = ["#57c1eb", "#246fa8"];
  }

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Text style={styles.condition}>{condition}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: image }} />
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.location}>{location}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  condition: {
    fontSize: 25,
    color: "white",
    textTransform: "uppercase",
  },
  location: {
    fontSize: 25,
    color: "white",
  },
  temperature: {
    fontSize: 75,
    color: "white",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 1 },
    textShadowRadius: 10,
  },
});
