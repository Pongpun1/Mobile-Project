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
  SafeAreaView,
} from "react-native";

const MainBottom = ({ navigation }) => {
  const [state, setState] = useState({
    menu: "",
    activity: "",
  });

  const inputValueUpdate = (val, prop) => {
    setState((prevState) => ({
      ...prevState,
      [prop]: val,
    }));
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
    // เพิ่มรายการเมนูเพิ่มเติมที่นี่
  ];

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headText}>รายการอาหาร</Text>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="ios-add" size={32} color="#71B2FF" />
          </TouchableOpacity>
        </View>
        <View style={[styles.listContainer]}>
          <FlatList
            data={menuData}
            keyExtractor={(item, index) => index.toString()}
            nestedScrollEnabled={true}
            renderItem={({ item }) => (
              <View style={styles.foodItem}>
                <View style={styles.itemRow1}>
                  <Text style={styles.textcount}>{item.name}</Text>
                  <Text style={styles.textcount}>Text * 1</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textcal}>{item.calories} kcal</Text>
                  <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="ios-trash" size={30} color="#71B2FF" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  headerContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    borderRadius: 50,
    height: 30,
    marginTop: 25,
  },
  iconContainer: {
    marginLeft: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  listContainer: {
    alignItems: "center",
    width: "90%",
    height: 250,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    // padding: 7,
  },
  textcount: {
    fontWeight: "bold",
    // textAlign: "center",
    fontSize: 18,
    // padding: 7,
  },
  textcal: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    // padding: 10,
    marginTop: 13,
  },
  itemRow1: {
    // flex: 1,
    // flexDirection: "row",
  },
  itemRow: {
    // flex: 1,
    flexDirection: "row",
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
  },
  foodItem: {
    flexDirection: "row",
    width: "81%",
    backgroundColor: "lightgray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginLeft: 15,
  },
});

export default MainBottom;
