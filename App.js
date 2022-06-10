import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import Prayers from "./Screens/Prayers";
import Home from "./Screens/Home";
import Duas from "./Screens/Duas";
import DuaTranslation from "./Screens/DuaTranslation";
import { NavigationContainer } from '@react-navigation/native';
import Stack from "./Navigation/Stack";
import { createStackNavigator } from '@react-navigation/stack';
const stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <stack.Navigator >
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Prayers" component={Prayers} />
        <stack.Screen name="Duas" component={Duas} />
        <stack.Screen name="DuaTranslation" component={DuaTranslation} />
      </stack.Navigator>
    </NavigationContainer>



  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
