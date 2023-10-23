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

const CalActivities = ({ navigation }) => {
  const [menu, setmenu] = useState("");
  const inputValueUpdate = (val) => {
    setmenu(val); // Update the menu state
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
      <View style={styles.inputContainer}>
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
          onChangeText={inputValueUpdate}
        />
      </View>
      <View style={styles.container2}>
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
  container2: {
    alignItems: "center",
    width: "90%",
    flex: 1,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    margin: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingLeft: 10,
  },
  icon: {
    padding: 5,
  },
  input: {
    fontSize: 20,
    opacity: 0.6,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 270,
  },
});

export default CalActivities;
