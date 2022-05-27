import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./PrayerStyle";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Prayers(props) {

  const [data, setData] = useState([]);
  const [today, setToday] = useState([]);
  const loading = true;
  // https://dailyprayer.abdulrcs.repl.co/api/Lahore
  // https://coronavirus-tracker-api.herokuapp.com/v2/locations
  const getData = async () => {
    const { data } = await axios
      .get("https://dailyprayer.abdulrcs.repl.co/api/Lahore")

    // // handle success
    // setdata(response.data);
    // console.log(data);
    setData(data);
    // setToday(data.today)
    // console.log
    console.log(data.today)
    // console.log("adil console", data);
    // console.log(typeof data);
  }
  useEffect(() => {
    getData()
  }, []);


  return (

    <View style={{ flex: 1, backgroundColor: "green" }}>
      <View style={styles.TitleWrapper} >
        <Text style={styles.City}>{data.city}</Text>
      </View>

      <View style={styles.dateWrapper} >
        <Text>Wednesday, 25 May</Text>
        <Text>23 Shawwal 1443</Text>
      </View>

      {data.today == null ? (
        <Text>loading....</Text>
      ) : (
        <View style={styles.timeWrapper} >
          <Text style={styles.timeSection}>Prayers Timings</Text>
          <TouchableOpacity style={styles.prayers}>
            <Text>Fajr</Text>
            <Text>{data.today.Fajr}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.prayers}>
            <Text>Dhuhr</Text>
            <Text>{data.today.Dhuhr}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prayers}>
            <Text>Asr</Text>
            <Text>{data.today.Asr}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prayers}>
            <Text>Maghrib</Text>
            <Text>{data.today.Maghrib}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prayers}>
            <Text>Isha'a</Text>
            <Text>{data.today.Maghrib}</Text>
          </TouchableOpacity>
        </View>

      )}

      <Text style={styles.timeSection}>Shortcuts</Text>
      <View style={styles.shortcuts}>


        <View style={styles.container}>
          <View style={styles.imgWrapper}>
            <Image style={styles.imgSize} source={require("../images/book.png")} />
          </View>
          <View>
            <Text  >Quran</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.imgWrapper}>
            <Image style={styles.imgSize} source={require("../images/tasbeeh.png")} />
          </View>
          <View>
            <Text  >Quran</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.imgWrapper}>
            <Image style={styles.imgSize} source={require("../images/prayers.png")} />
          </View>
          <View>
            <Text  >Quran</Text>
          </View>
        </View>


      </View>



    </View>
  );
}
