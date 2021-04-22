import React from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default () => {
  return (
    <LinearGradient colors={["#82addb", "#ebb2b1"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>The weather today is...</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 1 },
    textShadowRadius: 10,
  },
});
