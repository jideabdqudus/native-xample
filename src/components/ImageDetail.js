import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const ImageDetail = () => {
  const imageProps = [
    {
      id: "1",
      title: "Beach",
      image: "../../assets/beach.jpg",
    },
    {
      id: "2",
      title: "Forest",
      image: "../../assets/forest.jpg",
    },
    {
      id: "3",
      title: "Mountain",
      image: "../../assets/mountain.jpg",
    },
  ];

  return (
    <View>
      <Text>Image Detail</Text>
      <FlatList
        data={imageProps}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
             <View> 
                <Text>{item.title}</Text>
                <Image source={item.image}/>
             </View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
