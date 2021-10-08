import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Messages = (props) => {
  return (
    <View style={styless.showmessage}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          fontStyle: "italic",
          color: "white",
          width: 310,
        }}
      >
        {props.children}
      </Text>
    </View>
  );
};

const styless = StyleSheet.create({
  showmessage: {
    marginTop: -70,
    justifyContent: "center",
    padding: 5,
    width: 300,
  },
});

export default Messages;
