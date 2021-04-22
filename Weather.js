import React from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ location, temperature, condition }) => {
  const weatherCondition = {
    Clear: {
      icon: "weather-sunny",
      gradient: ["#FFE469", "#FECC51", "#FCB033", "#FA961B", "#FA8607"],
    },
    Clouds: {
      icon: "weather-cloudy",
      gradient: ["#D9E5E6", "#BECCDD", "#9DAED2"],
    },
    Rain: {
      icon: "weather-pouring",
      gradient: ["#0F2027", "#203A43", "#2C5364"],
    },
    Haze: {
      icon: "weather-hazy",
      gradient: ["purple", "black"],
    },
    Snow: {
      icon: "snowflake",
      gradient: ["#83a4d4", "#b6fbff"],
    },
    Drizzle: {
      icon: "weather-partly-rainy",
      gradient: ["#89F7FE", "#66A6FF"],
    },
    Thunderstorm: {
      icon: "weather-lightning",
      gradient: ["#0F2027", "#203A43", "#2C5364"],
    },
    Fog: {
      icon: "weather-fog",
      gradient: ["#bdc3c7", "#2c3e50"],
    },
    Mist: {
      icon: "weather-fog",
      gradient: ["#bdc3c7", "#2c3e50"],
    },
    Tornado: {
      icon: "weather-tornado",
      gradient: ["#bdc3c7", "#2c3e50"],
    },
    Dust: {
      icon: "weather-fog",
      gradient: ["#4DA0B0", "#D39D38"],
    },
    Atmosphere: {
      icon: "weather-cloudy",
      gradient: ["#89F7FE", "#66A6FF"],
    },
  };

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
