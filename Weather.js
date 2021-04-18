import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ({ location, temperature, condition, icon }) => {
  let gradientColors = [];

  if (condition.toLowerCase() === "clear") {
    gradientColors = ["#b7eaff", "#67d1fb"];
  } else if (condition.toLowerCase() === "clouds") {
    gradientColors = ["#D9E5E6", "#BECCDD", "#9DAED2"];
  } else if (condition.toLowerCase() === "rain") {
    gradientColors = ["#57c1eb", "#246fa8"];
  }

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Text style={styles.condition}>{condition}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.location}>{location} City</Text>
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
