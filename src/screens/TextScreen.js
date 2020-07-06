import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      <Text>Text Screen</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.TextInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    margin: 15,
    borderColor: "#333",
    borderWidth: 1,
  },
});

export default TextScreen;
