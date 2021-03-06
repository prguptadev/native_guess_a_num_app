import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import GameOn from "../GameOneWithModal/GameOn";
import { Button } from "react-native-paper";
import { Platform, Dimensions } from "react-native";
import Resultfs from "../Result-fix/Resultfs";
import Mycolors from "../constants/Mycolors";
import { MaterialCommunityIcons, Fontisto, Ionicons } from "@expo/vector-icons";

const LetStart = (props) => {
  const [startMode, setStartMode] = useState(false);
  const [wins, setwins] = useState(false);
  const [prevalue, setprevalue] = useState();
  const [checkcount, setcheckcount] = useState(0);
  const [winmsg, setwinmsg] = useState("Congratulation");
  const [desc, setdesc] = useState("You Won!!");
  const [emojisize, setemojisize] = useState(400);
  const [buttonwidth, setbuttonwidth] = useState(
    Dimensions.get("window").width
  );

  // const updateLayoout = () => {
  //   setbuttonwidth(Dimensions.get("window"));
  // };
  // Dimensions.addEventListener("change", updateLayoout);

  useEffect(() => {
    const updateLayoout = () => {
      setbuttonwidth(Dimensions.get("window"));
    };
    Dimensions.addEventListener("change", updateLayoout);

    return () => {
      Dimensions.removeEventListener("change", updateLayoout);
    };
  }, []);
  const revert = (rever) => {
    return setStartMode(rever);
  };

  const predicate = () => {
    setprevalue(Math.floor(Math.random() * 9 + 1));
  };

  console.log(
    "predicted one from App - " + prevalue + "-platform-- " + Platform.OS
  );

  const GameOverHandler = (count) => {
    setwins(true);
    if (Dimensions.get("window").width > 413) setemojisize(250);
    else setemojisize(100);

    console.log("====================" + count);
    if (count === 10) {
      setwinmsg("     ...Oops...");
      setdesc("You Lost!");
    } else if (count === 0) {
      setwinmsg("         Quit!!");
      setdesc("     Looser");
    } else {
      setwinmsg("Congratulation");
      setdesc("You Won!!");
    }
    setcheckcount(count);
  };

  let screen = (
    <GameOn
      visiblemode={startMode}
      predicated={prevalue}
      onGameOver={GameOverHandler}
    />
  );
  if (wins) {
    screen = <Resultfs finalcount={checkcount} msg={winmsg} msgdes={desc} />;
  }

  return (
    // <SafeAreaView> // rather than here put in app js to observe all chnage
    <ScrollView>
      <View>{screen}</View>
      <View style={styles.constainerView}>
        <Button
          style={styles.start}
          icon="star-three-points"
          mode="outlined"
          color="green"
          labelStyle={{ fontSize: 25 }}
          onPress={() => {
            {
              setStartMode(true);
              predicate();
              setwins(false);
            }
          }}
        >
          <Text style={{ fontSize: 14 }}>Let's Begin </Text>
        </Button>
        <View style={{ justifyContent: "center" }}>
          <Fontisto name="smiley" size={emojisize} color="grey" />
        </View>

        {/* <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#f90"
        onPress={() => setStartMode(true)}
        style={styles.start}
      >
        <Text style={styles.textstyle} onPress={predicate}>
          Let's Begin
        </Text>
      </TouchableHighlight> */}

        {/* <GameOn
        visiblemode={startMode}
        predicated={prevalue}
        //revertohome={revert}
      ></GameOn>
       */}
      </View>
    </ScrollView>
  );
};
export default LetStart;

const styles = StyleSheet.create({
  constainerView: {
    marginTop: Dimensions.get("window").width > 413 ? "10%" : "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  textstyle: {
    color: "white",
    fontWeight: "300",
    textAlign: "center",
  },
  start: {
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: Mycolors.secondayScreen,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 100,
  },
});
