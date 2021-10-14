import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

export default function Navbar(props) {
  return (
    <View>
      <Text style={{ ...stylish.header, ...props.style }}>{props.title}</Text>
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
    paddingTop: Dimensions.get("window").width > 413 ? 60 : 30,
    fontWeight: "700",
    fontStyle: "italic",
    textDecorationStyle: "dotted",
    writingDirection: "rtl",
  },
});
