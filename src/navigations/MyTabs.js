import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Discover from "../screens/Discover";
import Details from "../screens/Details";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import Files from "../screens/Files";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import MyStack from "./MyStack";

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="pink"
      barStyle={{ backgroundColor: "#fff" }}
      
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Files"
        component={Files}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="folder-open-o" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-border" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="settings" size={26} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name="Details" component={Details} /> */}
    </Tab.Navigator>
  );
};

export default MyTabs;
