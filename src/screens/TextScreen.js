import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.TextInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text> My name is: {name}</Text>
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
