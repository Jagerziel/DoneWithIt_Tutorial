// import { StatusBar } from "expo-status-bar";
import { StyleSheet,  View, SafeAreaView , Platform, StatusBar } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  
});

