import route from "color-convert/route";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { userKey, clearData, addFood } from "../store/actions/userAction";

const PopAddCalFood = ({route, navigation }) => {
  const { name, kcalories } = route.params;
  const [state, setState] = useState({
    menu: "1",
  });

  const dispatch = useDispatch() 

  const addFoodHandler = () => {
    if (!state.menu) {
      Alert.alert(
        "Missing Amount",
        "กรุณากรอกจำนวน"
      );
      return;
    }else if(state.menu <= 0){
      Alert.alert(
        "Incorrect Amount",
        "จำนวนต้องมากกว่า 0"
      );
      return;
    }
    dispatch(addFood(name, kcalories, state.menu));
    navigation.navigate("แคลอรี่วันนี้")
  };

  const inputValueUpdate = (val, prop) => {
    setState((prevState) => ({
      ...prevState,
      [prop]: val,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.headText}>เพิ่มรายการอาหารที่กิน</Text>
        <View style={styles.inputContainer1}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{kcalories} Cal</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>จำนวน</Text>

          <TextInput
            style={styles.textInput}
            value={state.menu}
            onChangeText={(val) => inputValueUpdate(val, "menu")}
          />
          {/* <Text style={styles.unit}></Text> */}
        </View>
        <View style={styles.inputContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addFoodHandler()}
          >
            <Text style={styles.buttonText}>บันทึก</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {navigation.navigate("รายการอาหาร");} }
          >
            <Text style={styles.buttonText}>ยกเลิก</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  headText: {
    fontWeight: "bold",
    fontSize: 30,
    // marginTop: 30,
  },
  addContainer: {
    // backgroundColor: "gray",
    alignItems: "center",
    height: 250,
    borderColor: "#90C2FD",
    borderWidth: 3,
    borderRadius: 50,
    // flex: 1,
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    padding: 8,
  },
  unit: {
    // fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    padding: 8,
  },
  textInput: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    padding: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    width: 70,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    margin: 10,
    // backgroundColor: "#D9D9D9",
    borderRadius: 50,
    // paddingLeft: 10,
    justifyContent: "flex-end",
  },
  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    margin: 10,
    // backgroundColor: "#D9D9D9",
    borderRadius: 50,
    // paddingLeft: 10,
    justifyContent: "space-between",
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    margin: 10,
    // backgroundColor: "#D9D9D9",
    borderRadius: 10,
    // paddingLeft: 10,
    justifyContent: "space-around",
  },
  button: {
    width: 80,
    height: 30,
    // marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90C2FD",
    borderRadius: 50,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PopAddCalFood;
