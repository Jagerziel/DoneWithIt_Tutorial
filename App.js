// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform, Image, StatusBar, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Button, Alert } from "react-native";
import { Playground } from "./Playground.js";

export default function App() {
  function handlePress () {console.log('text pressed')} 

  return (
    <Playground />
  );
}

