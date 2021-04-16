import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default ({ location, temperature }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{location} City</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },
  text: {
    fontSize: 45,
    color: "black",
  },
});
