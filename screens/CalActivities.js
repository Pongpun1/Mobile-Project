import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { black } from "color-name";

const CalActivities = ({ navigation }) => {
  const [menu, setmenu] = useState("");
  const [activity, setactivity] = useState("");
  const [cal, setcal] = useState("");

  const inputValueMenuUpdate = (val) => {
    setmenu(val); // Update the menu state
  };
  const inputValueActivityUpdate = (val) => {
    setactivity(val); // Update the menu state
  };
  const inputValueCalUpdate = (val) => {
    setcal(val); // Update the menu state
  };

  const menuData = [
    { name: "ก๋วยเตี๋ยวเนื้อ", calories: 350 },
    { name: "ผัดไทย", calories: 420 },
    { name: "สลัด", calories: 180 },
    { name: "พิซซ่า", calories: 700 },
    { name: "ไก่ทอด", calories: 450 },
    { name: "ก๋วยเตี๋ยวเนื้อ", calories: 350 },
    { name: "ผัดไทย", calories: 420 },
    { name: "สลัด", calories: 180 },
    { name: "พิซซ่า", calories: 700 },
    { name: "ไก่ทอด", calories: 450 },
    { name: "ก๋วยเตี๋ยวเนื้อ", calories: 350 },
    { name: "ผัดไทย", calories: 420 },
    { name: "สลัด", calories: 180 },
    { name: "พิซซ่า", calories: 700 },
    { name: "ไก่ทอด", calories: 450 },
    { name: "ก๋วยเตี๋ยวเนื้อ", calories: 350 },
    { name: "ผัดไทย", calories: 420 },
    { name: "สลัด", calories: 180 },
    { name: "พิซซ่า", calories: 700 },
    { name: "ไก่ทอด", calories: 450 },
    // เพิ่มรายการเมนูเพิ่มเติมที่นี่
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headText}>รายการกิจกรรม</Text>
      </View>
      <View style={styles.searchInputContainer}>
        <Ionicons
          name="ios-search"
          size={24}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          iconName="ios-search"
          placeholder="รายการกิจกรรม"
          value={menu}
          onChangeText={inputValueMenuUpdate}
        />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.foodHeadItem}>
          <Text style={styles.text}>รายการกิจกรรม</Text>
          <Text style={styles.text}>kcal</Text>
        </View>
        <FlatList
          data={menuData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.foodItem}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.calories} kcal</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.addContainer}>
        <Text style={styles.headText}>เพิ่มกิจกรรมด้วยตัวเอง</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>กิจกรรม</Text>
          <Text style={styles.text}>kcal</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputNew}
            placeholder="                                    "
            value={activity}
            onChangeText={inputValueActivityUpdate}
          />
          <TextInput
            style={styles.inputNew}
            placeholder="                 "
            value={cal}
            onChangeText={inputValueCalUpdate}
          />
        </View>
        <View style={styles.inputContainer2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("save button")}
          >
            <Text style={styles.buttonText}>บันทึก</Text>
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
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: 10,
  },
  headText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
  },
  listContainer: {
    alignItems: "center",
    width: "90%",
    flex: 1,
  },
  addContainer: {
    // backgroundColor: "gray",
    alignItems: "center",
    width: "90%",
    flex: 0.4,
    justifyContent: "flex-end",
    margin: 50,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    padding: 12,
  },
  foodHeadItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#71B2FF",
  },
  foodItem: {
    flexDirection: "row",
    width: "83%",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    margin: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    // margin: 10,
    // backgroundColor: "#D9D9D9",
    // borderRadius: 10,
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
    justifyContent: "flex-end",
  },
  icon: {
    padding: 5,
  },
  input: {
    fontSize: 20,
    opacity: 0.6,
    borderRadius: 50,
  },
  inputNew: {
    fontSize: 20,
    opacity: 0.6,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 270,
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

export default CalActivities;
