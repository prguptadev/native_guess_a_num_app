import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Navbar(props) {
  return (
    <View>
      <Text style={stylish.header}>{props.title}</Text>
    </View>
  );
}

const stylish = StyleSheet.create({
  header: {
    textAlign: "center",
    borderWidth: 1,
    borderBottomWidth: 3,
    backgroundColor: "pink",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingBottom: 15,
    paddingTop: 70,
    fontWeight: "900",
    fontStyle: "italic",
    textDecorationStyle: "dotted",
    writingDirection: "rtl",
  },
});
