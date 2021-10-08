import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Mycolors from "../constants/Mycolors";

const MainButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.opacity}
      onPress={props.onClick}
    >
      <View style={styles.buttonlook}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  opacity: {},
  buttonlook: {
    backgroundColor: Mycolors.secondayScreen,
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 10,
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
