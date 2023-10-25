import React, { useState, useEffect, useCallback } from "react";
import { Entypo } from '@expo/vector-icons'; 
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
import { BarChart, PieChart } from "react-native-chart-kit";

const MainScreen = ({ navigation }) => {
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
        <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headText}>รายการอาหาร</Text>
          <TouchableOpacity style={styles.iconContainer}>
          <Entypo name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View> 

        <View style={[styles.listContainer]}>
          <FlatList
          style={{width:'100%'}}
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
                  <Entypo name="plus" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
        
      </SafeAreaView>




      </View>


      {/* <View style={[styles.listContainer, {marginBottom: '10%'}]}>
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
       */}

      
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
  HeadText: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
  headerContainer: {
    backgroundColor: "#FFF9F9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    height: 30,
    marginTop: 25,
    padding: 10,
    borderRadius: 10
  },
  iconContainer: {
    marginLeft: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  listContainer: {
    alignItems: "center",
    width: "85%",
    height: 250,
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  textcount: {
    fontWeight: "bold",
    fontSize: 18,
  },
  textcal: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 13,
  },
  itemRow: {
    flexDirection: "row",
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
  },
  foodItem: {
    flexDirection: "row",
    width: "81%",
    backgroundColor: "#D9D9D9",
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginLeft: 30,
  },
});

export default MainScreen;
