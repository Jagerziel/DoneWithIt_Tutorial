import { StyleSheet, Text, View, SafeAreaView, Platform, Image, StatusBar, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Button, Alert } from "react-native";

export const Playground = () => {


    return (
        <SafeAreaView style={[styles.container, containerStyle , {backgroundColor: 'blue'}]}>
            <StatusBar style="auto" />
            {/* <Text 
            // numberOfLines={1} 
            onPress={handlePress}
            selectable={false}
            >
            React Native
            </Text> */}
            {/* <Image source={require('./assets/icon.png')} style={{height: 100, aspectRatio: 1}}/> */}
            {/* <TouchableHighlight onPress={() => console.log("image tapped")}>
            <Image 
                source={{uri: "https://picsum.photos/200/300", width: 200, height: 300}}
                blurRadius={1}
                fadeDuration={3000} // Android Only
            />
            </TouchableHighlight> */}
            <Button 
            title="Click Me" 
            onPress={() => Alert.alert('My Title', 'My super awesome message', [
                { text: 'Yes', onPress: () => console.log('horray!') },
                { text: 'No', onPress: () => console.log('awwww :(') }
            ])}
            color={"orange"}
            />
            <Button 
            title="No click me"
            onPress={() => Alert.prompt('Title', 'Enter Text', text => console.log(text))}
            />
        </SafeAreaView>
    );
}

const containerStyle = { backgroundColor: "green" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});