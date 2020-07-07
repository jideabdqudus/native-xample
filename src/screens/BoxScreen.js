import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "#333",
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "#fbca02",
    margin: 20,
  },
});

export default BoxScreen;
