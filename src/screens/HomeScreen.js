import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const onLaunch = "Wagwan!";
  return (
    <View styles={styles.view}>
      <Text style={styles.onLaunch}>{onLaunch}</Text>
      <Text style={styles.text}>Hi, Abdul-Qudus</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />

      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
      />

      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
      />

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to list Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  onLaunch: {
    color: "#fbca02",
    marginLeft: 40,
    paddingTop: 10,
  },
  view: {
    marginLeft: 60,
  },
});

export default HomeScreen;
