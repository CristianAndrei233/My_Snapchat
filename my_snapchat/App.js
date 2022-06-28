import CameraScreen from "./app/screens/CameraScreen";
import HomeScreen from "./app/screens/HomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "./app/screens/ChatScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "./app/screens/ProfileScreen";
import { SettingsScreen } from "./app/screens/SettingsScreen";
import { SnapsScreen } from "./app/screens/SnapsScreen";
import { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeStack = createNativeStackNavigator();

function LogStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Login" component={LoginScreen} />
      <HomeStack.Screen name="Register" component={RegisterScreen} />
    </HomeStack.Navigator>
  );
}
const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}
const SnapsStack = createNativeStackNavigator();
function SnapsStackScreen() {
  return (
    <SnapsStack.Navigator screenOptions={{ headerShown: false }}>
      <SnapsStack.Screen name="snaps" component={SnapsScreen} />
    </SnapsStack.Navigator>
  );
}
const tabs = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <tabs.Navigator barStyle={{ backgroundColor: "#000" }}>
      <tabs.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      <tabs.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
    </tabs.Navigator>
  );
}
const RootStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="home" component={LogStackScreen} />
          <RootStack.Screen name="pages" component={Tabs} />
        <RootStack.Screen name="profile" component={ProfileStackScreen} />
        <RootStack.Screen name="settings" component={SettingsStackScreen} />
        <RootStack.Screen name="snaps" component={SnapsStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
