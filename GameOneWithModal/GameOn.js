import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import Resultfs from "../Result-fix/Resultfs";
import Cards from "../components/Cards";
import Messages from "../components/Messages";
import Input from "../components/Input";

const GameOn = (propso) => {
  const [input, setinput] = useState();
  const [count, setcount] = useState(0);
  const [resetcount, setresetcount] = useState(0);
  const [resulrmode, setresultmode] = useState(false);
  const [msgno, setmsgno] = useState(0);

  const updateresetcount = () => {
    setresetcount(resetcount + 1);
  };

  const trytry = () => {
    setcount(count + 1);
  };

  const inputchecker = (value) => {
    setinput(value);
  };
  // const trytryreset = () => {
  //   setcount(0);
  // };

  const onChangeText = (text) => {
    // if (/^\d+$/.test(text) || text === "") {
    setinput(text.replace(/[^0-9]/g, ""));
    // }
  };

  const inputcheckerreset = () => {
    setinput("");
    setmsgno(90);
  };
  console.log(
    "inout--setcount-- " + input + "--" + count + "-reset -- " + resetcount
  );
  let message;
  if (msgno === 3) message = "Please enter lower number then " + input;
  else if (msgno === 2) message = "Please enter higher number then " + input;
  else if (msgno == 1) message = "Please enter number between 1 to 9";
  else message = "";

  const checkpreicate = (userinput) => {
    if (
      userinput == "" ||
      userinput == undefined ||
      userinput == null ||
      isNaN(userinput)
    ) {
      Alert.alert("Invalid !!", "Please enter number between 1 to 9", [
        { text: "OKAY", style: "destructive", onPress: inputcheckerreset },
      ]);
    } else if (userinput > propso.predicated) {
      setmsgno(3);
      // console.log("Please enter lower");
      //message = <Text>"Please Enter Lower:"+{userinput}</Text>;
    } else if (userinput < propso.predicated) {
      setmsgno(2);
      // console.log("Please enter higher");
      //message = <Text>"Please Enter Higer:"+{userinput}</Text>;
    } else {
      //console.log("I reaced predicated --" + propso.predicated);
      setmsgno(0);
      return propso.onGameOver(true, count + 1);
      //setresultmode(true);
    }
    Keyboard.dismiss();
  };
  return (
    <View>
      <Modal
        visible={propso.visiblemode}
        animationType="slide"
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.centeredView}>
            <View>
              <Text
                style={{
                  marginTop: -350,
                  alignItems: "center",
                  fontWeight: "700",
                  fontSize: 20,
                  color: "yellow",
                }}
              >
                Play The Game!
              </Text>
            </View>
            <View>
              <Cards style={styles.addcard}>
                {/* can you predefined card but I have design my own card component */}
                <View style={{ marginTop: -10, padding: 10 }}>
                  {/* <KeyboardAvoidingView
                  behavior="padding"
                  style={styles.containers}
                > */}
                  <Input
                    mode="flat"
                    //underlineColor="red"
                    style={styles.updateinput}
                    underlineColorAndroid={"rgba(0,0,0,0)"}
                    label="Enter random number"
                    placeholder="Please enter number between 1 to 9"
                    value={input}
                    onChangeText={onChangeText}
                    //onPress={() => console.log("this is entered" + input)}
                  />
                  {/* </KeyboardAvoidingView> */}

                  <View
                    style={{
                      marginTop: 50,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      style={{ width: 115, borderRadius: 10 }}
                      icon="repeat"
                      mode="contained"
                      color="red" //{colors.resetbuttoncolor}
                      labelStyle={{ fontSize: 25 }}
                      children
                      onPress={() => {
                        {
                          inputcheckerreset();
                          // trytryreset();
                          updateresetcount();
                        }
                      }}
                    >
                      <Text style={{ fontSize: 14 }}>Reset</Text>
                    </Button>
                    <Button
                      style={{ width: 115, borderRadius: 10 }}
                      icon="check-decagram"
                      mode="contained"
                      color="#FF6900"
                      labelStyle={{ fontSize: 25 }}
                      onPress={() => {
                        trytry();
                        checkpreicate(input);
                      }} // propso.matchthisinput.bind(this, input)
                    >
                      <Text style={{ fontSize: 14 }}>Check</Text>
                    </Button>
                  </View>
                </View>
              </Cards>
            </View>
            <View>
              <Messages>{message}</Messages>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {/* <Resultfs
          resultvisible={resulrmode}
          revertMode={() => {
            setresultmode(false);
          }}
        ></Resultfs> */}
      </Modal>
    </View>
  );
};

export default GameOn;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 106,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    padding: 55,
  },
  updateinput: {
    color: "orange",
    backgroundColor: "transparent",
    borderRadius: 10,
    // textAlign: "center",
  },
  addcard: {
    marginTop: -300,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    height: 200,
    width: 360,
    borderRadius: 40,
  },
});
