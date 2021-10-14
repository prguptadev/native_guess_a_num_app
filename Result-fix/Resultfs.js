import React, { useState } from "react";
import { View, Modal, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Card, Button, TextInput } from "react-native-paper";
import BodyText from "../components/BodyText";
import Mycolors from "../constants/Mycolors";

const { width, height } = Dimensions.get("window");

const Resultfs = (props) => {
  return (
    <View
      style={{
        margin: 20,
        marginTop: 20,
        backgroundColor: Mycolors.secondayScreen,
        height: 390,
        justifyContent: "flex-start",
        borderRadius: 40,
        marginBottom: "-2%",
      }}
    >
      {/* <Modal
        visible={props.resultvisible}
        animationType="slide"
        //onRequestClose={props.revertMode.bind(this, false)}
      > */}
      <View style={{ marginTop: 1 }}>
        <View style={{ padding: 20, height: 300 }}>
          <BodyText style={{ color: "red", paddingLeft: 100, padding: 10 }}>
            The Game is Over!
          </BodyText>
          <View style={styless.images}>
            <Image
              fadeDuration={3000}
              style={{
                // marginTop: 22,
                // marginLeft: 18,
                //paddingLeft: 90,
                //justifyContent: "center",
                //alignItems: "center",
                // width: 130,
                height: 200,
                //borderRadius: 100,
                // position: "relative",
              }}
              //source={require("../assets/win.png")}
              source={{
                uri: "https://static01.nyt.com/images/2021/01/20/sports/19ALTsummit-k2-2-print/19summit-k2-2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
              }}
              resizeMode="cover"
            />
          </View>
          <BodyText
            style={{
              marginTop: 40,
              justifyContent: "space-evenly",
              // backgroundColor: "white",
              fontSize: 35,
              color: "white",
              //alignContent: "center",
              fontStyle: "italic",
              paddingLeft: 40,
              //alignItems: "stretch",
            }}
          >
            {props.msg}
          </BodyText>
          <BodyText
            style={{
              // backgroundColor: "white",
              fontSize: 25,
              color: "white",
              justifyContent: "center",
              fontStyle: "italic",
              paddingLeft: 100,
              alignItems: "center",
            }}
          >
            {props.msgdes}
          </BodyText>
          <BodyText
            style={{
              padding: 10,
              fontSize: 15,
              color: "white",
              justifyContent: "center",
              paddingLeft: 65,
            }}
          >
            Number of attempts:{"  "}
            <Text style={{ color: "red" }}>{props.finalcount}</Text>
          </BodyText>
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

const styless = StyleSheet.create({
  images: {
    marginLeft: "27%",
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "black",
    width: 150,
    height: 150,
    overflow: "hidden",
  },
});

export default Resultfs;
