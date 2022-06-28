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
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import React, { useContext, useState} from "react"
import axios from "axios";
import { baseUrl } from "../config";
  
const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }
   const login = (email, password) => {
      axios
      .post(`${baseUrl}/connection`, {
        email,
        password,
      }, config).then(res=>{
        let userInfo = res.data
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        console.log(userInfo);
      }).catch(e => {
        console.log(`Houston, we have a problem : ${e}`) 
       });
    }
    const onPress = () => {
      
      login(email, password);
      navigation.navigate('pages')
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LOG IN</Text>
        <View style={styles.emailView}>
          <Text style={styles.email}>Email</Text>
        </View>
        <TextInput
          style={styles.header}
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={ text => setEmail(text) }
          value={email}
        />
        <View style={styles.emailView}>
          <Text style={styles.password}>Password</Text>
        </View>
        <TextInput
          style={styles.header2}
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="email"
          secureTextEntry={true}
          onChangeText={ text => setPassword(text) }
          value={password}
        />
        <View style={styles.btn_view}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => onPress()}
            // onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.btn_text1}>Log In</Text>
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

  export default Login;
