import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => {
    setCounter(counter + 1);
  };
  const onDecrease = () => {
    setCounter(counter - 1);
  };
  const onReset = () => {
    setCounter(0);
  };
  return (
    <View>
      <Button title="Increase" onPress={onIncrease} />
      <Button title="Decrease" onPress={onDecrease} />
      <Button title="Reset" onPress={onReset} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
