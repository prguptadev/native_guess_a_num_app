import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-paper";
import Resultfs from "../Result-fix/Resultfs";
import Cards from "../components/Cards";
import Messages from "../components/Messages";
import Input from "../components/Input";
import Default_style from "../constants/Default_style";
import Mycolors from "../constants/Mycolors";
import MainButton from "../components/MainButton";
import { MaterialIcons, Fontisto, Ionicons } from "@expo/vector-icons";

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

    if (count === 9) {
      return propso.onGameOver(count + 1);
    }
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
    setmsgno();
  };
  console.log(
    "inout--setcount-- " + input + "--" + count + "-reset -- " + resetcount
  );

  const giveup = () => {
    console.log("ha ja rha bc");
    return propso.onGameOver(0);
  };

  let message;
  if (msgno === 3) message = "Please enter lower number than " + input;
  else if (msgno === 2) message = "Please enter higher number than " + input;
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
      return propso.onGameOver(count + 1);
      //setresultmode(true);
    }
    Keyboard.dismiss();
  };
  return (
    <View>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
        <Modal
          visible={propso.visiblemode}
          animationType="slide"
          transparent={true}
          supportedOrientations={[
            "portrait",
            //"portrait-upside-down",
            "landscape",
            // "landscape-left",
            //  "landscape-right",
          ]}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.centeredView}>
              <View>
                <Text style={Default_style.bodyText}>Play The Game!</Text>
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
                        color={Mycolors.checkbuttom}
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
              <View style={{ marginBottom: 50 }}>
                <MainButton
                  onClick={() => {
                    giveup();
                  }}
                >
                  !Don't Give up!
                </MainButton>
              </View>
              <View
                style={{
                  marginBottom:
                    Dimensions.get("window").width > 413 ? -200 : -380,
                }}
              >
                <MaterialIcons name="emoji-nature" size={120} color="black" />
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
      </KeyboardAvoidingView>
    </View>
  );
};

export default GameOn;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: Dimensions.get("window").width > 413 ? 100 : 45, // works only once in app cycle
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
    marginTop: "-100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    height: 200,
    width: 360,
    borderRadius: 40,
  },
});
