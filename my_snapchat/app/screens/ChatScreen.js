import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { baseUrl } from "../config";

const ChatScreen = ({navigation}) => {
  const [snaps, getSnaps] = useState("");
  const getSnap = () => {
    axios
      .get("http://snapi.epitech.eu:8000/snaps", {
        headers: {
          token: "BhFDL5PXPSie3LszKQ138MqT",
        },
      })
      .then((res) => {
        const snaps = res.data
        getSnaps(snaps);
        console.log(snaps);
      })
      .catch((e) => {
        console.log(`${e}`);
      });
  };
  useEffect(() => {
    getSnap();
  }, []);
  return (
    <View style={styles.notAllowed}>
      <Text>Chat</Text>
      <View style={styles.btn_view}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => navigation.navigate("snaps")}
        > 
        <Text style={styles.btn_text1}>see snap</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.btn_text1}>Snap from {snaps.from}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notAllowed: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
