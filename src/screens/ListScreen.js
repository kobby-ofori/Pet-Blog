import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import List from "../components/List";

const ListScreen = () => {
  const pets = [
    {
      name: "Skipp",
      petType: "Cat",
      age: "2 years old",
      location: "LakeSide Community 1",
      pic: require("../../assets/cat.jpg"),
      id: 1,
    },
    {
      name: "Pye",
      petType: "Dog",
      age: "1 years old",
      location: "LakeSide Estate",
      pic: require("../../assets/bigdog.jpg"),
      id: 2,
    },
    {
      name: "Clover",
      petType: "Dog",
      age: "2 years old",
      location: "13 Avenue Pawpaw Street",
      pic: require("../../assets/smalldog.jpg"),
      id: 3,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pets}
        renderItem={({ item }) => {
          return (
            <List
              name={item.name}
              type={item.petType}
              age={item.age}
              location={item.location}
              petPic={item.pic}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#f0f6fa",
  },
});
