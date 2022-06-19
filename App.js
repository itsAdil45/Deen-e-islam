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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from "firebase/database";



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

  MaghribNotification();
  IshaNotification();
  FajrNotification();
  AsrNotification();
  DhohrNotification();

  const getmyData = async () => {
    try {
      const magribh = await AsyncStorage.getItem('@1')

      if (magribh !== null) {
        // value previously stored
        console.log("storage ", magribh);
      }
    } catch (e) {
      // error reading value
    }
  }


  useEffect(() => {
    getmyData();

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




async function MaghribNotification() {
  const magribh = await AsyncStorage.getItem('44')
  const hour = magribh.slice(0, 2)
  const minutes = magribh.slice(3, 5)

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Namaz Time 📬",
      body: 'Namaz e Magrib ka waqat',
    },
    trigger: {
      hour: Number(hour),
      minute: Number(minutes),
      repeats: true
    },
  });
}


const IshaNotification = async () => {

  const isha = await AsyncStorage.getItem('55')
  const hour = isha.slice(0, 2)
  const minutes = isha.slice(3, 5)
  console.log(isha);
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Namaz Time 📬",
      body: 'Namaz e Isha ka waqat',
    },
    trigger: {
      hour: Number(hour),
      minute: Number(minutes),
      repeats: true
    },
  });

}

async function AsrNotification() {
  const Asr = await AsyncStorage.getItem('33')
  const hour = Asr.slice(0, 2)
  const minutes = Asr.slice(3, 5)
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Namaz Time 📬",
      body: 'Namaz e Asr ka waqat',
    },
    trigger: {
      hour: Number(hour),
      minute: Number(minutes),
      repeats: true
    },
  });
}

async function DhohrNotification() {
  const Dhuhr = await AsyncStorage.getItem('22')
  const hour = Dhuhr.slice(0, 2)
  const minutes = Dhuhr.slice(3, 5)

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Namaz Time 📬",
      body: 'Namaz e Dhuhr ka waqat',
    },
    trigger: {
      hour: Number(hour),
      minute: Number(minutes),
      repeats: true
    },
  });
}


async function FajrNotification() {
  const Dhuhr = await AsyncStorage.getItem('11')
  const hour = Dhuhr.slice(0, 2)
  const minutes = Dhuhr.slice(3, 5)
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Namaz Time 📬",
      body: 'Namaz e Fajr ka waqat',
    },
    trigger: {
      hour: Number(hour),
      minute: Number(minutes),
      repeats: true
    },
  });
}




