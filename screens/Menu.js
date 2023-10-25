import React, { useState, useEffect, useCallback } from "react";

import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const MenuScreen = ({navigation}) => {
  const [state, setState] = useState({
    menu: '',
    activity: '',
  });

  const inputValueUpdate = (val, prop) => {
    setState(prevState => ({
      ...prevState,
      [prop]: val
    }));
  }

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
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headText}>รายการอาหาร</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="ios-add" size={32} color="#71B2FF" />
        </TouchableOpacity>
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
          placeholder="ค้นหา"
          value={state.menu}
          onChangeText={(val) => {
            inputValueUpdate(val, "menu")
          }}
        />
      </View>

      <View style={[styles.listContainer]}>
        <View style={styles.foodHeadItem}>
          <Text style={styles.text}>รายการอาหาร</Text>
          <Text style={styles.text}>kcal</Text>
        </View>
        <FlatList
          data={menuData}
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <View style={styles.foodItem}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.calories} kcal</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headText}>รายการกิจกรรม</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="ios-add" size={32} color="#71B2FF" />
        </TouchableOpacity>
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
          placeholder="ค้นหา"
          value={state.activity}
          onChangeText={(val) => {
            inputValueUpdate(val, "activity")
          }}
        />
      </View>
      <View style={[styles.listContainer, {marginBottom: '10%'}]}>
        <View style={styles.foodHeadItem}>
          <Text style={styles.text}>รายการกิจกรรม</Text>
          <Text style={styles.text}>kcal</Text>
        </View>
        <FlatList
          data={menuData}
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <View style={styles.foodItem}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.calories} kcal</Text>
            </View>
          )}
        />
      </View>
    </View>
    </ScrollView>
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
    justifyContent: "flex-start",
    width: "80%",
    height: 30,
    marginTop: 25,
  },
  iconContainer: {
    marginTop: 0,
  },
  headText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  listContainer: {
    alignItems: "center",
    width: "90%",
    height: 250
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    padding: 7,
  },
  foodHeadItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#71B2FF",
  },
  foodItem: {
    flexDirection: "row",
    width: "82%",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingLeft: 10,
    margin: 15,
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
  },
});

export default MenuScreen;
