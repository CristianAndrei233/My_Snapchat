import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper'

export const SnapsScreen = () => {
    const [snaps, getSnaps] = useState("");
    const getSnap = () => {
      axios
        .get("http://snapi.epitech.eu:8000/snap/3586", {
          headers: {
            token: "BhFDL5PXPSie3LszKQ138MqT",
          },
        })
        .then((res) => {
          const snaps = res.data
          getSnaps(snaps)
        })
        .catch((e) => {
          console.log(`${e}`);
        });
    };
    useEffect(() => {
      getSnap();
    }, [])
    return (
      <View style={styles.notAllowed}>
        <Text>Chat</Text>
        <View style={styles.btn_view}>
          <TouchableOpacity
            style={styles.btn1}
          > 
          </TouchableOpacity>
        </View>
        <View>
        {/* <Image source={} /> */}
        <View style={styles.containerImg}>
        <Image style={{width: 100, height: 50, borderWidth: 1, borderColor: 'red'}} source={{uri: `data:image/gif;base64,${snaps}`}}/>
      </View>
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
