import { View, Text } from "react-native";

import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Prayers() {
  const [data, setdata] = useState([]);

  function getData() {
    axios
      .get("https://dailyprayer.abdulrcs.repl.co/api/Lahore")
      .then(function (response) {
        // // handle success
        setdata(response.data);
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  }
  useEffect(() => getData(), [0]);
  return (
    <View>
      <Text>Prayers</Text>
      {/* https://dailyprayer.abdulrcs.repl.co/api/  */}
    </View>
  );
}
