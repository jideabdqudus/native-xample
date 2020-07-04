import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend 1",
      id: "1",
    },
    {
      name: "Friend 2",
      id: "2",
    },
    {
      name: "Friend 3",
      id: "3",
    },
    {
      name: "Friend 4",
      id: "4",
    },
    {
      name: "Friend 5",
      id: "5",
    },
    {
      name: "Friend 6",
      id: "6",
    },
    {
      name: "Friend 7",
      id: "7",
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={(friend) => {
          return <Text>{friend.name}</Text>;
        }}
      />
      <Text style={styles.text}>List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ListScreen;
