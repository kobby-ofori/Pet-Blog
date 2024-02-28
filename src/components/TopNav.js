import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Fontisto, AntDesign } from "@expo/vector-icons";

const TopNav = ({ pageTitle }) => {
  return (
    <View style={styles.TopNavContainer}>
      <View>
        <Fontisto name="nav-icon-grid-a" size={22} color="black" />
      </View>
      <View>
        <Text style={styles.text}>{pageTitle}</Text>
      </View>
      <View>
        <AntDesign name="search1" size={22} color="black" />
      </View>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  TopNavContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text:{
    color:"black",
    fontWeight:"bold",
    fontSize: 28,
    fontStyle:"normal",
    fontFamily:"serif"
  }
})
