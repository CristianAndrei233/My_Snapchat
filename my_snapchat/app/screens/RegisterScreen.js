import {
  ImageBackground,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  TouchableOpacityBase,
  Pressable,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import client  from "../api/client";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../config";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [ password, setPassword ] = useState("")
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  }

  const register = (email, password) => {
    axios
    .post(`${baseUrl}/inscription`, {
      email,
      password,
    }, config).then(res=>{
      let userInfo = res.data
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
      console.log(userInfo);
    }).catch(e => {
      console.log(`Houston, we have a problem : ${e}`);
    })
  }

  const onPress = async function () {
    register(email, password);
    navigation.navigate('Login')
  }; 


  const createOneButtonAlert = () =>
    Alert.alert(
      "Privacy Policy",
      "Snap Inc. is a camera company. Our products and services — including Snapchat, Bitmoji, Spectacles, advertising, and others that link to this Privacy Policy — provide fast and fun ways to express yourself, live in the moment, learn about the world, and have fun together!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK, I understand", onPress: () => console.log("OK Pressed") },
      ]
    );
  const createTwoButtonAlert = () =>
    Alert.alert("Terms of Service", "By using Snapchat, Bitmoji, or any of our other products or services that are subject to these Terms (which we refer to collectively as the “Services”), you agree to the Terms. Of course, if you don’t agree with them, then don’t use the Services.", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK, I understand", onPress: () => console.log("OK Pressed") },
    ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.emailView}>
        <Text style={styles.email}>Email</Text>
      </View>
      <TextInput
        style={styles.header}
        returnKeyType="next"
        autoCorrect={false}
        autoCapitalize="none"
        autoCompleteType="email"
        value={email}
        onChangeText={ text => setEmail(text)}
      />
      <View style={styles.emailView}>
        <Text style={styles.password}>Password</Text>
      </View>
      <TextInput
        style={styles.header2}
        returnKeyType="next"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.termsView}>
        <Text style={styles.terms}>
          By tapping Sign Up & Accept you acknowledge that you have read the
          <Text style={styles.alert} onPress={createOneButtonAlert}>
            {" "}
            Privacy Policy{" "}
          </Text>
          and agree to the{" "}
          <Text onPress={createTwoButtonAlert} style={styles.alert}>
            Terms of Service
          </Text>
        </Text>
      </View>
      <View style={styles.btn_view}>
        <TouchableOpacity
          style={styles.btn1}
          onPress={() => onPress()}
        >
          <Text style={styles.btn_text1}>Sign Up & Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 9,
    textAlign: "center",
    fontSize: 19,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    position: "absolute",
    top: 120,
  },
  email_text: {
    marginTop: 20,
    fontSize: 18,
  },
  header: {
    borderBottomColor: "#999999",
    borderBottomWidth: 2,
    marginBottom: 30,
    textAlign: "left",
    width: "90%",
    fontSize: 18,
  },
  email: {
    fontSize: 23,
    marginBottom: 13,
    marginLeft: -175,
    color: "#666666",
  },
  emailView: {},
  password: {
    fontSize: 23,
    marginBottom: 13,
    marginLeft: -175,
    color: "#666666",
  },
  header2: {
    borderBottomColor: "#999999",
    borderBottomWidth: 2,
    marginBottom: -10,
    textAlign: "left",
    width: "90%",
    fontSize: 18,
  },
  terms: {
    fontSize: 15,
    marginTop: 25,
    marginLeft: 10,
    color: "#666666",
  },
  btn_view: {
    backgroundColor: "#0096FF",
    width: "55%",
    height: 50,
    position: "absolute",
    bottom: 60,
    borderRadius: "30",
  },
  btn_text1: {
    color: "white",
    textAlign: "center",
    paddingTop: 15,
    fontSize: 20,
  },
  alert: {
    color: "#0096FF",
    fontWeight: "bold",
  },
});
export default Register;