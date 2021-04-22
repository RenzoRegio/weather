import React from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ location, temperature, condition }) => {
  let gradientColors = [];
  let icon;
  const currentCondition = condition.toLowerCase();

  const weatherCondition = {
    Clear: {
      icon: "weather-sunny",
      gradient: ["#FFE469", "#FECC51", "#FCB033", "#FA961B", "#FA8607"],
    },
    Clouds: {
      icon: "weather-cloudy",
      gradient: ["#D9E5E6", "#BECCDD", "#9DAED2"],
    },
  };
  // if (currentCondition === "clear") {
  //   gradientColors = ["#FFE469", "#FECC51", "#FCB033", "#FA961B", "#FA8607"];
  //   icon = "weather-sunny";
  // } else if (currentCondition === "clouds") {
  //   gradientColors = ["#D9E5E6", "#BECCDD", "#9DAED2"];
  //   icon = "weather-cloudy";
  // } else if (currentCondition === "rain") {
  //   gradientColors = ["#00B9D3", "#57C7DB", "#90D6E2", "#B8E3EA", "#CAECF1"];
  //   icon = "weather-rainy";
  // } else if (currentCondition === "haze") {
  //   gradientColors = ["purple", "black"];
  //   icon = "weather-hazy";
  // }

  return (
    <LinearGradient
      colors={weatherCondition[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <Text style={styles.condition}>{condition}</Text>
      <MaterialCommunityIcons
        name={weatherCondition[condition].icon}
        size={200}
        color="white"
      />
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
