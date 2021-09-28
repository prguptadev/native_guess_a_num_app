import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const Input = (prop) => {
  return (
    <TextInput
      style={{ ...styel.input, ...prop.style }}
      {...prop}
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
      maxLength={1}
      keyboardType="number-pad"
    />
  );
};

export default Input;

const styel = StyleSheet.create({
  input: {},
});
