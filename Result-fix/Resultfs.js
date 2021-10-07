import React, { useState } from "react";
import { View, Modal, Text, Image, Dimensions } from "react-native";
import { Card, Button, TextInput } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const Resultfs = (props) => {
  return (
    <View>
      {/* <Modal
        visible={props.resultvisible}
        animationType="slide"
        //onRequestClose={props.revertMode.bind(this, false)}
      > */}
      <View>
        <View style={{ padding: 20, height: 300 }}>
          <Image
            style={{
              marginTop: 30,
              marginLeft: 78,
              paddingLeft: 90,
              justifyContent: "center",
              alignItems: "center",
              width: 220,
              height: 100,
              position: "relative",
            }}
            source={require("../assets/win.png")}
          />
          <Text
            style={{
              marginTop: 40,
              // backgroundColor: "white",
              fontSize: 40,
              color: "white",
              alignContent: "center",
              fontStyle: "italic",
              paddingLeft: 55,
              //alignItems: "stretch",
            }}
          >
            Congratulation
          </Text>
          <Text
            style={{
              // backgroundColor: "white",
              fontSize: 40,
              color: "white",
              justifyContent: "space-evenly",
              fontStyle: "italic",
              paddingLeft: 90,
              //alignItems: "stretch",
            }}
          >
            You Won!!
          </Text>
          <Text
            style={{
              padding: 10,
              fontSize: 15,
              color: "white",
              justifyContent: "center",
              paddingLeft: 90,
            }}
          >
            You got right in {props.finalcount} attempt
          </Text>
        </View>
        <View
          style={
            {
              //flex: 1,
              //marginTop: 30,
              //justifyContent: "center",
              // alignItems: "center",
              //backgroundColor: "white",
            }
          }
        >
          {/* <Button
            style={{
              width: 150,
              borderRadius: 10,
              alignItems: "center",
            }}
            icon="backup-restore"
            mode="contained"
            color="green"
            labelStyle={{ fontSize: 25 }}
            // onPress={props.revertMode.bind(this, false)}
          >
            <Text style={{ fontSize: 14 }}>New Game!</Text>
          </Button> */}
        </View>
      </View>
      {/* </Modal> */}
    </View>
  );
};

export default Resultfs;
