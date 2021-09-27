import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Messages = (props) => {
  return (
    <View style={styless.showmessage}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "500",
          fontStyle: "italic",
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
    // borderWidth: 1,
    padding: 5,
    width: 300,
  },
});

export default Messages;
