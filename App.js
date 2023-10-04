// import { StatusBar } from "expo-status-bar";
import { StyleSheet,  View, SafeAreaView, Platform, StatusBar, Dimensions, Text } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { Playground } from "./Playground.js";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Playground/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
  
});

