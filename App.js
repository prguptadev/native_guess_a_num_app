import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Navbar from "./navbar-fix/Navbar";
import LetStart from "./LetsStart/LetStart";
export default function App() {
  //  const predict = Math.floor(Math.random() * 9 + 1);
  // console.log(
  //   "predicted one from App - " + predict + "-platform-- " + Platform.OS
  // );

  return (
    <View style={styles.container}>
      <View>
        <Navbar title="GUESS A NUMBER"></Navbar>
      </View>
      <View>
        <LetStart></LetStart>
      </View>

      {/* <Text style={styles.container}>Let's Start</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});
