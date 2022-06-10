import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./PrayerStyle";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Shadow } from 'react-native-shadow-2';


export default function Prayers({ route, navigation }) {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  var i = `Isha'a`;

  // console.log(navigation.route.params)
  const { item } = route.params;

  const loading = true;
  // https://dailyprayer.abdulrcs.repl.co/api/Lahore
  // https://coronavirus-tracker-api.herokuapp.com/v2/locations

  useEffect(() => {
    getData()

  }, []);

  const getData = async () => {
    // setCity(props.city)

    const { data } = await axios
      .get(`https://dailyprayer.abdulrcs.repl.co/api/${item}`)
    setData(data);



  }


  return (

    <View style={{ flex: 1, backgroundColor: "green" }}>
      <Shadow viewStyle={{ alignSelf: 'stretch' }} >
        <View style={styles.TitleWrapper} >
          <Text style={styles.City}>{"lahore"}</Text>
        </View>
      </Shadow>

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
            <Text  >Tasbeeh</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Duas")}>
          <View style={styles.imgWrapper}>
            <Image style={styles.imgSize} source={require("../images/prayers.png")} />
          </View>
          <View>
            <Text  >Duas</Text>
          </View>
        </TouchableOpacity>


      </View>



    </View>
  );
}
