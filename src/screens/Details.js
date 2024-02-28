import React from "react";
import { Image, Text, View } from "react-native";

const Details = ({route}) => {
  return (
    <View>
      <Text>Details</Text>
      <Text>{route.params.name}</Text>
      <Text>{route.params.type}</Text>
      <Text>{route.params.age}</Text>
      <Text>{route.params.location}</Text>
      <Image source={route.params.petPic}/>
    </View>
  );
};

export default Details;
