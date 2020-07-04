import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Tolu",
      id: "1",
      age: "15",
    },
    {
      name: "Ade",
      id: "2",
      age: "25",
    },
    {
      name: "Dipo",
      id: "3",
      age: "16",
    },
    {
      name: "Lare",
      id: "4",
      age: "19",
    },
    {
      name: "Titi",
      id: "5",
      age: "22",
    },
    {
      name: "Chief",
      id: "6",
      age: "35",
    },
    {
      name: "Moyin",
      id: "7",
      age: "12",
    },
  ];

  return (
    <View>
      <Text style={styles.text}>List Screen</Text>
      <FlatList
        horizontal={false} //If list should be horizontal not vertical
        showsHorizontalScrollIndicator={false} //Should the scrollbar show
        keyExtractor={(friend) => friend.name} //Another way of using list keys
        data={friends} //Calls the array data
        renderItem={({ item }) => {
          //Uses the mapping
          return (
            <Text style={styles.listStyle}>
              {item.name} with Age: {item.age}{" "}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  listStyle: {
    marginVertical: 30,
  },
});

export default ListScreen;
