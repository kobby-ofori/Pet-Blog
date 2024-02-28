import React from "react";
import { Text, View } from "react-native";
import TopNav from "../components/TopNav";
import ListScreen from "./ListScreen";
import { StyleSheet } from "react-native";

const Discover = () => {
  return (
    <View style={styles.discoverContainer}>
      {/* <View>
        <TopNav pageTitle={"Discover"} />
      </View> */}
      <View>
        <ListScreen />
      </View>
    </View>
  );
};

export default Discover;


const styles = StyleSheet.create({
  discoverContainer:{
    // paddingBottom: "62%"
  }
})