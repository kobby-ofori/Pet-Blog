import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const List = ({ name, type, age, location, petPic }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Detail", {
          name,
          type,
          age,
          location,
          petPic,
        });
      }}
    >
      <View style={styles.container}>
        <Image source={petPic} style={styles.img} />
        <View style={styles.txtContainer}>
          <Text style={[styles.txt, styles.nameTxt]} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.txt} numberOfLines={1}>
            {type}
          </Text>
          <Text style={styles.txt} numberOfLines={1}>
            {age}
          </Text>
          <Text style={styles.txt} numberOfLines={1}>
            <EvilIcons name="location" size={24} color="black" />
            {location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  img: {
    height: 200,
    borderWidth: 1,
    borderRadius: 25,
    flex: 5,
  },
  txtContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    flex: 5,
  },
  txt: {
    marginLeft: 20,
    marginRight: 35,
    marginVertical: 5,
    color: "gray",
  },
  nameTxt: {
    color: "rgba(0, 0, 255, 1)",
    fontWeight: "bold",
    fontSize: 20,
  },
});
