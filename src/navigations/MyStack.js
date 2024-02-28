import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Discover from "../screens/Discover";
import Details from "../screens/Details";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "serif",
          fontSize: 30,
          fontWeight: "bold",
        },
        headerLeft: () => {
          return (
            <TouchableOpacity>
              <Fontisto
                name="nav-icon-grid-a"
                size={22}
                color="black"
                style={{ marginLeft: 20 }}
              />
            </TouchableOpacity>
          );
        },
        headerRight: () => {
          return (
            <TouchableOpacity>
              <AntDesign
                name="search1"
                size={22}
                color="black"
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          );
        },
      }}
    >
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default MyStack;
