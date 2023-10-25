import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { BarChart } from "react-native-chart-kit";

const MainScreen = ({ navigation }) => {
  const [state, setState] = useState({
    menuList: [],
    activityList: [],
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
  
  ];

  const ActivityData = [
    { name: "วิดพื้น", calories: 350 },
    { name: "ซิดอัพ", calories: 300 },
    { name: "วิ่ง", calories: 200 },

  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.HeadText}>แคลอรี่ในวันนี้ของคุณ</Text>
        <BarChart
          data={{
            labels: ["แคลอรี่ที่ควรได้รับ", "แคลอรี่ที่ได้รับ", "คงเหลือ"],
            datasets: [
              {
                // ใส่ข้อมูลตรงนี้
                data: [1500, 1200, 400],
                colors: [() => "#48ACCB", () => "#72CB48", () => "#F99D49"],
              },
            ],
          }}
          width={Dimensions.get("window").width * 0.9}
          height={250}
          fromZero="true"
          yAxisSuffix="kcal"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#9FC9FB",
            backgroundGradientFromOpacity: 0.6,
            backgroundGradientTo: "#76B5FF",
            backgroundGradientToOpacity: 1,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            barPercentage: 0.7,
          }}
          showBarTops={false}
          withCustomBarColorFromData
          style={{
            marginVertical: 8,
            borderRadius: 10,
            fontWeight: "bold",
          }}
        />

        <View style={styles.list}>
          <View style={styles.headerContainer}>
            <Text style={styles.headText2}>รายการอาหาร</Text>
            <TouchableOpacity style={styles.iconContainer}>
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={[styles.listContainer]}>
            {menuData.map((item, index) => (
                <View key={index} style={styles.foodItem}>
                  <View style={styles.itemRow1}>
                    <Text style={styles.textcount}>{item.name}</Text>
                    <Text style={styles.textcount}>Text * 1</Text>
                  </View>
                  <View style={styles.itemRow}>
                    <Text style={styles.textcal}>{item.calories} kcal</Text>
                    <TouchableOpacity style={styles.iconContainer}>
                      <FontAwesome5 name="trash-alt" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </View>
          <View style={styles.bottomBar}></View>
        </View>



        <View style={styles.list}>
          <View style={styles.headerContainer}>
            <Text style={styles.headText2}>รายการออกกำลังกาย</Text>
            <TouchableOpacity style={styles.iconContainer}>
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={[styles.listContainer]}>
              {ActivityData.map((item, index) => (
              <View key={index} style={styles.foodItem}>
                <View style={styles.itemRow1}>
                  <Text style={styles.textcount}>{item.name}</Text>
                  <Text style={styles.textcount}>Text นาที</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textcal}>{item.calories} kcal</Text>
                  <TouchableOpacity style={styles.iconContainer}>
                    <FontAwesome5 name="trash-alt" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.bottomBar}></View>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  HeadItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#71B2FF",
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
  list: {
    alignItems: "center",
    width: 350,
    marginTop: 20,
    marginBottom: 30,
  },
  headerContainer: {
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#71B2FF",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-start",
    width: 350,
    height: 50,
  },
  bottomBar: {
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#D9D9D9",
    width: 350,
    height: 10,
  },
  headText2: {
    fontWeight: "bold",
    fontSize: 20,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
  foodItem: {
    flexDirection: "row",
    width: 350,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    justifyContent: "space-between",
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  textcount: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textcal: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    marginTop: 13,
  },
  separator: {
    height: 3,
    width: 300,
    backgroundColor: "black",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    width: 350,
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
  gauge: {
    position: "absolute",
    width: 100,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  gaugeText: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
  },
});

export default MainScreen;
