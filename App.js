import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import Resultfs from "./Result-fix/Resultfs";
import { AppLoading } from "expo";
import * as Font from "expo-font";
//import colors from "./constants/colors";

const fetchfonts = () => {
  Font.loadAsync({
    "my-open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "my-open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  //  const predict = Math.floor(Math.random() * 9 + 1);
  // console.log(
  //   "predicted one from App - " + predict + "-platform-- " + Platform.OS
  // );

  const [win, setwin] = useState(false);
  const [dataload, setdataload] = useState(false);
  lg;
  let content = <LetStart />;

  return (
    <View style={styles.container}>
      <View>
        <Navbar title="GUESS A NUMBER"></Navbar>
      </View>
      <View>{content}</View>

      {/* <Text style={styles.container}>Let's Start</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363836",
    flex: 1,
  },
});
