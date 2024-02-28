import React from "react";
import { StyleSheet, View } from "react-native";
import MyTabs from "../navigations/MyTabs";

const AppScreen = () => {
  return (
    <View style={styles.AppScreenContainer}>
      <MyTabs />
    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  AppScreenContainer: {
    // marginTop: 20,
  },
});
