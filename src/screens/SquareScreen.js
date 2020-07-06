import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SquareScreen = () => {
    const moreRed =()=>{
        const red = Math.floor(Math.random() * 256)

        return
    }
  return (
    <View>
      <Text>Square Screen</Text>
      <View>
        <Button title="More Red" onPress={moreRed} />
        <Button title="Less Red" />
      </View>
      <View>
        <Button title="More Green" />
        <Button title="Less Green" />
      </View>
      <View>
        <Button title="More Blue" />
        <Button title="Less Blue" />
      </View>
      <View>
        <View style={{ height: 100, width: 100, backgroundColor: "black" }} />
      </View>
    </View>
  );
};

const randomRgb = () => {};

const styles = StyleSheet.create({});

export default SquareScreen;
