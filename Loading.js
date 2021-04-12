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
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 120,
  },
  text: {
    fontSize: 45,
    color: "white",
    width: "70%",
  },
});
