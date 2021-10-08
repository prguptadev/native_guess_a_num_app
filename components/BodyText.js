import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = (props) => {
  return (
    <Text {...props} style={{ ...stless.body, ...props.style }}>
      {props.children}
    </Text>
  );
};

const stless = StyleSheet.create({
  body: {
    fontFamily: "my-open-sans-bold",
  },
});
export default BodyText;
