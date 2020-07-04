import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = () => {
  const onLaunch = "Wagwan!"
  return (
    <View styles={styles.view}>
      <Text style={styles.onLaunch}>{onLaunch}</Text>
      <Text style={styles.text}>Hi, Abdul-Qudus</Text>
      <ComponentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  onLaunch:{
    color: "#fbca02",
    marginLeft: 40,
    paddingTop: 10
  },
  view:{
    marginLeft: 60,
  }
});

export default HomeScreen;
