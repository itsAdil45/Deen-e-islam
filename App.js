import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import Prayers from "./Screens/Prayers";
import Home from "./Screens/Home";
import Duas from "./Screens/Duas";
import PrayerDetails from "./Screens/PrayerDetails";
import DuaTranslation from "./Screens/DuaTranslation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
const stack = createStackNavigator();

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCPEMslkLZtRJPcTYQxqQtkY0yggqOolmo",
    authDomain: "deen-e-islam-f8024.firebaseapp.com",
    projectId: "deen-e-islam-f8024",
    storageBucket: "deen-e-islam-f8024.appspot.com",
    messagingSenderId: "1057161338756",
    appId: "1:1057161338756:web:7c85b5725e555ceffd07d1",
    measurementId: "G-SSJ5M1KQKN"
  };

  initializeApp(firebaseConfig);
  return (

    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Prayers" component={Prayers} />
        <stack.Screen name="Duas" component={Duas} />
        <stack.Screen name="DuaTranslation" component={DuaTranslation} />
        <stack.Screen name="PrayerDetails" component={PrayerDetails} />
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
