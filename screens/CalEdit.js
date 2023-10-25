import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CalEdit = ({ navigation }) => {
  const [state, setState] = useState({
    list: "รายการ",
    cal: "150 kcal",
  });

  const inputValueUpdate = (val, prop) => {
    setState((prevState) => ({
      ...prevState,
      [prop]: val,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.headText}>แก้ไขรายการ</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={state.list}
            onChangeText={(val) => inputValueUpdate(val, "list")}
          />

          <TextInput
            style={styles.text}
            value={state.cal}
            onChangeText={(val) => inputValueUpdate(val, "cal")}
          />
        </View>
        <View style={styles.inputContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("save button")}
          >
            <Text style={styles.buttonText}>บันทึก</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("cancel button")}
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
    height: 200,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    margin: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    // paddingLeft: 10,
    justifyContent: "space-between",
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
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

export default CalEdit;
