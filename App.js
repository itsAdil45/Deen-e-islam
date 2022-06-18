import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import Prayers from "./Screens/Prayers";
import Home from "./Screens/Home";
import Duas from "./Screens/Duas";
import PrayerDetails from "./Screens/PrayerDetails";
import DuaTranslation from "./Screens/DuaTranslation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import * as Notifications from 'expo-notifications';
const stack = createStackNavigator();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const a = 1
  const b = 1
  //  useEffect(async () => await schedulePushNotification(), [])
  // useEffect(() =>
  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "Namaz Time 📬",
  //       body: 'Ao namaz ki taraf',

  //     },
  //     trigger: {
  //       seconds: 12,
  //       repeats: true

  //     },
  //   })
  //   , [0])
  useEffect(() => {

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);




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


function schedulePushNotification() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Namaz Time 📬",
      body: 'Ao namaz ki taraf',

    },
    trigger: {
      seconds: 2,
      repeats: true

    },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
