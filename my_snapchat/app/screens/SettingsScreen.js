import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Text } from "react-native-paper";


export const SettingsScreen = ({ navigation }) => {
  const logout = () => {
    AsyncStorage.clear()
    navigation.navigate("home")
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Settings screen</Text>
      </View>
      <View style={styles.btn_view}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => logout()}
          >
            <Text style={styles.btn_text1}>Bye</Text>
          </TouchableOpacity>
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
});
