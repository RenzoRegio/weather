import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather</Text>
    </View>
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
    fontSize: 45,
    color: "white",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 1 },
    textShadowRadius: 10,
  },
});
