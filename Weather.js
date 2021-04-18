import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native-elements";

export default ({ location, temperature, condition, icon }) => {
  let gradientColors = [];
  const image = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const currentCondition = condition.toLowerCase();

  if (currentCondition === "clear") {
    gradientColors = ["#FFE469", "#FECC51", "#FCB033", "#FA961B", "#FA8607"];
  } else if (currentCondition === "clouds") {
    gradientColors = ["#D9E5E6", "#BECCDD", "#9DAED2"];
  } else if (currentCondition === "rain") {
    gradientColors = ["#00B9D3", "#57C7DB", "#90D6E2", "#B8E3EA", "#CAECF1"];
  } else if (currentCondition === "haze") {
    gradientColors = ["purple", "black"];
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
