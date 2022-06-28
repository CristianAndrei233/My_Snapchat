import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Title } from "react-native-paper";
import { setGestureState } from "react-native-reanimated/lib/reanimated2/NativeMethods";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Camera"
        onPress={() => navigation.navigate("pages")}
      ></Button>
      <ImageBackground
        source={require("../../logo.png")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>

      <View style={styles.btn_view2}>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.btn_text2}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn_view}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btn_text1}>LOG IN</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFC00",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: 165,
    width: 150,
    height: 144,
  },
  btn_view: {
    backgroundColor: "#fb607f",
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 65,
  },
  btn_view2: {
    backgroundColor: "#0096FF",
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 65,
  },
  btn_text1: {
    color: "white",
    textAlign: "center",
    paddingTop: 15,
    fontSize: 30,
  },
  btn_text2: {
    color: "white",
    textAlign: "center",
    paddingTop: 15,
    fontSize: 30,
  },
  btn_go: {
    position: "absolute",
    top: 50,
    right: 20,
  },
});
export default HomeScreen;
