import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./PrayerStyle";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Shadow } from 'react-native-shadow-2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Storage } from 'expo-storage'
export default function Prayers({ route, navigation }) {
  const [data, setData] = useState([]);
  const [namaz, setNamaz] = useState([]);
  const [ishaTime, setIsha] = useState("");
  const [time, setTime] = useState(null);
  const { item } = route.params;
  const loading = true;

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('44', data.today.Maghrib)
      await AsyncStorage.setItem('11', data.today.Fajr)
      await AsyncStorage.setItem('22', data.today.Dhuhr)
      await AsyncStorage.setItem('33', data.today.Asr)
      await AsyncStorage.setItem('55', ishaTime)
    } catch (e) {
      // saving error
    }
  }

  storeData();



  useEffect(() => {
    getCurrentTime();
    setTime(getCurrentTime());
  }, [2]);

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    // let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    return hours + ':' + minutes;
  }


  function Data() {
    const db = getDatabase();
    const reference = ref(db, '/Appdata/Namaz');
    onValue(reference, (snapshot) => {
      setNamaz(snapshot.val());

    });
  }



  // https://dailyprayer.abdulrcs.repl.co/api/Lahore
  // https://coronavirus-tracker-api.herokuapp.com/v2/locations

  useEffect(() => {
    getData(), Data();

  }, []);


  const getData = async () => {
    const { data } = await axios
      .get(`https://dailyprayer.abdulrcs.repl.co/api/${item}`)
    var mystring = JSON.stringify(data.today);
    setIsha(mystring.slice(92, 97))

    setData(data);

  }


  return (

    <View style={{ flex: 1, backgroundColor: "#204B38" }}>

      <View style={styles.TitleWrapper} >
        <Text style={styles.City}>{item}</Text>
      </View>


      <View style={styles.dateWrapper} >
        <Text>Wednesday, 25 May</Text>
        <Text>{time}</Text>
      </View>

      {data.today == null ? (
        <Text>loading....</Text>
      ) : (

        <View style={styles.timeWrapper}  >
          <Text style={styles.timeSection}>Prayers Timings</Text>
          <TouchableOpacity style={styles.prayers} onPress={() => navigation.navigate("PrayerDetails", { n: namaz[0] })} >
            <Text>Fajr</Text>
            <Text>{data.today.Fajr}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.prayers} onPress={() => navigation.navigate("PrayerDetails", { n: namaz[1] })}>
            <Text>Dhuhr</Text>
            <Text>{data.today.Dhuhr}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prayers} onPress={() => navigation.navigate("PrayerDetails", { n: namaz[2] })}>
            <Text>Asr</Text>
            <Text>{data.today.Asr}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prayers} onPress={() => navigation.navigate("PrayerDetails", { n: namaz[3] })}>
            <Text>Maghrib</Text>
            <Text>{data.today.Maghrib}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prayers} onPress={() => navigation.navigate("PrayerDetails", { n: namaz[4] })}>
            <Text>Isha'a</Text>
            <Text>{ishaTime}</Text>
          </TouchableOpacity>
        </View>


      )}

      <Text style={[styles.shortcutsSectionHeading]}>Shortcuts</Text>
      <View style={styles.shortcuts}>


        <View style={styles.container}>
          <View style={styles.imgWrapper}>
            <Image style={styles.imgSize} source={require("../images/book.png")} />
          </View>
          <View>
            <Text style={styles.shortcutsSectionText}  >Quran</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.container} >
          <View style={styles.imgWrapper}>
            <Image style={styles.imgSize} source={require("../images/tasbeeh.png")} />
          </View>



          <View >
            <Text style={styles.shortcutsSectionText} >Tasbeeh</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Duas")}>
          <View style={styles.imgWrapper}>
            <Image style={styles.imgSize} source={require("../images/prayers.png")} />
          </View>
          <View>
            <Text style={styles.shortcutsSectionText} >Duas</Text>
          </View>
        </TouchableOpacity>


      </View>



    </View>
  );
}

// async function schedulePushNotification() {

//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "Namaz Time 📬",
//       body: 'Ao namaz ki taraf',

//     },
//     trigger: {
//       seconds: 2,
//       repeats: true
//     },
//   });
// }