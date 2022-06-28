import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.profileImg}
          source={require("../../profile.png")}
        />
      </View>
      <Text style={styles.name}>Cristian</Text>
      <Text style={styles.email}>cristiandinca211@gmail.com</Text>

      <View style={styles.find}>
        <Text>Find friends on Snapchat</Text>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  containerImg: {
    width: 800,
    height: 115,
    bottom: 630,
    position: "absolute"
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    position: "absolute",
    bottom: 580,
  },
  email: {
    fontSize: 17,
    position: "absolute",
    bottom: 556,
  },
  find: {
    width: "90%",
    height: 85,
    bottom: 445,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3
  }
});
