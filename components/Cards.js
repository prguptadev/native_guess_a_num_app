import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cards = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    // width: 300,
    // maxWidth: "80%",
    // alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 60,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
