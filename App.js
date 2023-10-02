// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform, Image, StatusBar, TouchableWithoutFeedback } from "react-native";

export default function App() {
  function handlePress () {console.log('text pressed')} 

  return (
    <SafeAreaView style={styles.container}>
      <Text 
        // numberOfLines={1} 
        onPress={handlePress}
        selectable={false}
      >
        React Native
      </Text>
      {/* <Image source={require('./assets/icon.png')} style={{height: 100, aspectRatio: 1}}/> */}
      <TouchableWithoutFeedback onPress={() => console.log("image tapped")}>
        <Image 
          source={{uri: "https://picsum.photos/200/300", width: 200, height: 300}}
          blurRadius={1}
          fadeDuration={3000} // Android Only
        />
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
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
