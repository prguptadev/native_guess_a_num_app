import React, { useState } from "react";
import { View, Modal, Text, Image, Dimensions } from "react-native";
import { Card, Button, TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const Resultfs = (props) => {
  return (
    <View>
      <Modal
        visible={props.resultvisible}
        animationType="slide"
        //onRequestClose={props.revertMode.bind(this, false)}
      >
        <View>
          <View>
            <Image source={require("../assets/win.png")} />
          </View>
          <View
            style={{
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                width: 150,
                borderRadius: 10,
                alignItems: "center",
              }}
              icon="backup-restore"
              mode="contained"
              color="green"
              labelStyle={{ fontSize: 25 }}
              onPress={props.revertMode.bind(this, false)}
            >
              <Text style={{ fontSize: 14 }}>New Game!</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Resultfs;
