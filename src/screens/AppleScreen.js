import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const AppleScreen = () => {
  const imageProps = [
    {
      id: "1",
      title: "Beach",
      by: "Qudusini Zeez",
      image: require("../../assets/beach.jpg"),
    },
    {
      id: "2",
      title: "Forest",
      by: "Trip Adelabu",
      image: require("../../assets/forest.jpg"),
    },
    {
      id: "3",
      title: "Mountain",
      by: "Kags Kapaichu",
      image: require("../../assets/mountain.jpg"),
    },
  ];
  return (
    <View>
      <Text style={styles.Library}>Library </Text>
      <Text style={styles.Playlist}>Playlists </Text>
      <View style={styles.Line} />
      <Text style={styles.Playlist}>Artists </Text>
      <View style={styles.Line} />
      <Text style={styles.Playlist}>Albums </Text>
      <View style={styles.Line} />
      <Text style={styles.Recent}>Recently Added</Text>
      <FlatList
        data={imageProps}
        numColumns={imageProps.length / 1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={styles.Image} source={item.image} />
              <Text style={styles.Title}>{item.title}</Text>
              <Text style={styles.By}>{item.by}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Library: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 30,
    marginBottom: 0,
  },
  Playlist: {
    fontSize: 25,
    fontWeight: "normal",
    color: "red",
    marginTop: 15,
    marginLeft: 30,
  },
  Line: {
    borderBottomColor: "#808080",
    borderBottomWidth: 0.8,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
  LessThan: {
    textAlign: "right",
    alignSelf: "flex-end",
    position: "absolute",
    color: "#333",
    right: 0,
    alignItems: "flex-end",
  },
  Recent: {
    fontSize: 25,
    fontWeight: "600",
    margin: 30,
    marginBottom: 0,
  },
  Image: {
    margin: 30,
    marginTop: 20,
    marginRight: 0,
    marginBottom: 0,
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  Title: {
    margin: 30,
    marginBottom: 0,
    marginTop: 4,
    fontWeight: "500",
    fontSize: 20,
  },
  By: {
    margin: 30,
    marginBottom: 0,
    marginTop: 4,
    fontWeight: "500",
    fontSize: 17,
    color: "#808080",
  },
});

export default AppleScreen;
