import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi, Abdul-Qudus</Text>
      <ComponentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
