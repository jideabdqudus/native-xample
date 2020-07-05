import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SquareScreen = () => {
  return (
    <View>
      <Text>Square Screen</Text>
      <View>
        <Text>Red</Text>
        <Button title="More Red" onPress={} />
        <Button title="Less Red" onPress={} />
      </View>
      <View>
        <Text>Green</Text>
        <Button title="More Green" onPress={} />
        <Button title="Less Green" onPress={} />
      </View>
      <View>
        <Text>Blue</Text>
        <Button title="More Blue" onPress={} />
        <Button title="Less Blue" onPress={} />
      </View>
      <View>
        <Text>Red</Text>
        <View style={{ height: 100, width: 100, backgroundColor: item }} />
      </View>
    </View>
  );
};

const randomRgb = () => {
    
};

const styles = StyleSheet.create({});

export default SquareScreen;
