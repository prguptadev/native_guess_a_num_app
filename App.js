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
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Mycolors from "./constants/Mycolors";

const fetchfonts = () => {
  return Font.loadAsync({
    "my-open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "my-open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  //  const predict = Math.floor(Math.random() * 9 + 1);
  console.log("predicted one from App --platform-- " + Platform.OS);

  const [win, setwin] = useState(false);
  const [dataload, setdataload] = useState(false);
  if (!dataload) {
    return (
      <AppLoading
        startAsync={fetchfonts}
        onFinish={() => setdataload(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  let content = <LetStart />;

  return (
    <View style={styles.container}>
      <View>
        <Navbar style={styles.title} title="GUESS A NUMBER"></Navbar>
      </View>
      <View>{content}</View>

      {/* <Text style={styles.container}>Let's Start</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Mycolors.primaryScreen,
    flex: 1,
  },
  title: {
    //fontSize: 20,
    fontFamily: "my-open-sans-bold",
  },
});
