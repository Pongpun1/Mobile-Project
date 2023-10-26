import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userKey, clearData } from "../store/actions/userAction";

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

const MenuScreen = ({ navigation }) => {
  const foods = useSelector((state) => state.account.foods);
  const activitys = useSelector((state) => state.account.activitys);

  const [state, setState] = useState({
    menu: "",
    activity: "",
    filteredFoods: [],
    filteredActivitys: [],
  });

  const inputValueUpdate = (val, prop) => {
    setState((prevState) => ({
      ...prevState,
      [prop]: val,
    }));
  };

  useEffect(() => {
    inputValueUpdate(foods, "filteredFoods");
    inputValueUpdate(activitys, "filteredActivitys");
  }, []);

  const test = () => {
    console.log(menuData)
  };

  const menuData = [
    { name: "w", calories: 350 },
    { name: "www", calories: 420 },
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
          <TouchableOpacity style={styles.iconContainer} onPress={() => test()}>
            <Ionicons
              name="ios-add"
              size={32}
              color="#71B2FF"
              onPress={() => {
                navigation.navigate("เพิ่มรายการอาหาร");
              }}
            />
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
            placeholder="ค้นหาอาหาร"
            value={state.menu}
            onChangeText={(val) => {
              inputValueUpdate(val, "menu");
              const filteredFoods = foods.filter((food) =>
                food.name.toLowerCase().includes(val.toLowerCase())
              );
              inputValueUpdate(filteredFoods, "filteredFoods");
            }}
          />
        </View>
      <View style={[styles.listContainer]}>
        <View style={styles.HeadItem}>
          <Text style={styles.text}>รายการอาหาร</Text>
          <Text style={styles.text}>ได้รับ kcal</Text>
        </View>
        <FlatList
          data={state.filteredFoods}
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text1}>{item.name}</Text>
              <Text style={styles.text1}>{item.kcalories}</Text>
            </View>
          )}
        />
      </View>


      <View style={styles.headerContainer}>
        <Text style={styles.headText}>รายการกิจกรรม</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={() => test()}>
            <Ionicons
              name="ios-add"
              size={32}
              color="#71B2FF"
              onPress={() => {
                navigation.navigate("เพิ่มรายการกิจกรรม");
              }}
            />
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
          placeholder="ค้นหากิจกรรม"
          value={state.activity}
          onChangeText={(val) => {
            inputValueUpdate(val, "activity");
            const filteredActivitys = activitys.filter(activity => activity.name.toLowerCase().includes(val.toLowerCase()));
            inputValueUpdate(filteredActivitys, "filteredActivitys")
          }}
        />
      </View>

      <View style={[styles.listContainer, {marginBottom: '10%'}]}>
        <View style={styles.HeadItem}>
          <Text style={styles.text}>รายการกิจกรรม</Text>
          <Text style={styles.text}>เผาผลาญ kcal</Text>
        </View>
        <FlatList
          data={state.filteredActivitys}
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.text1}>{item.name}</Text>
              <Text style={styles.text1}>{item.kcalories}</Text>
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
    width: 350,
    height: 30,
    marginTop: 25,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingLeft: 10,
    margin: 15,
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
    width: 350,
    height: 250,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    padding: 7,
  },
  text1: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    padding: 7,
  },
  HeadItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#71B2FF",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    width: 350,
  },
  icon: {
    padding: 5,
  },
  input: {
    fontSize: 20,
    opacity: 0.6,
    width: 300,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MenuScreen;
