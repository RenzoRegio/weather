import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ({ location, temperature, condition }) => {
  let weatherCondition;

  if (condition === "clear sky") {
    weatherCondition = styles.clear;
  }

  return (
    <View style={weatherCondition}>
      <Text style={styles.condition}>{condition}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.location}>{location} City</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clear: {
    backgroundColor: "#94dfff",
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
