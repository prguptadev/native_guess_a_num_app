import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Mycolors from "../constants/Mycolors";

const MainButton = (props) => {
  let Buttoncomponent = TouchableOpacity;

  // if(Platform.OS==='android'&& Platform.Version>21)
  if (Platform.OS === "android") {
    Buttoncomponent = TouchableNativeFeedback;
  }

  return (
    <Buttoncomponent // from Toucable opacity to platform based
      activeOpacity={0.6}
      style={styles.opacity}
      onPress={props.onClick}
    >
      <View style={styles.buttonlook}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </Buttoncomponent>
  );
};

const styles = StyleSheet.create({
  opacity: {},
  buttonlook: {
    backgroundColor: Mycolors.secondayScreen,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 10,
    overflow: "hidden", // child compnet also be part of lke text
    shadowColor: "white",
    shadowOffset: { width: 10, height: 15 },
    shadowRadius: 30,
    shadowOpacity: 0.9,
    elevation: 9,
  },
  buttonText: {
    color: "black",
    fontFamily: "my-open-sans-bold",
    fontSize: 18,
  },
});

export default MainButton;
