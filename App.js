import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default function App() {
  console.log("App start!!!!!!!");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>로저 잘가요</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
