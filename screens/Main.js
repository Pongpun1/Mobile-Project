import React, { useState, useEffect, useCallback } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";  
import { useSelector, useDispatch} from "react-redux";
import { userKey, clearData, delFood } from "../store/actions/userAction";
import firebase from '../database/calcalDB';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const MainScreen = ({ navigation }) => {
  const key = useSelector(state => state.account.key);
  const todayFoods = useSelector(state => state.account.todayfoods);
  const dispatch = useDispatch();
  

  const [state, setState] = useState({
    menuList: [],
    activityList: [],
    totalCal: 0,
    percentage: 0,
  });
  
  const inputValueUpdate = (val, prop) => {
    setState((prevState) => ({
      ...prevState,
      [prop]: val,
    }));
  };

  const handleDelete = (index) => {
    dispatch(delFood(index))
    const updatedMenuList = state.menuList.filter((item, i) => i !== index);
    const sumTotalCal = updatedMenuList.reduce((total, item) => total + item.totalcal, 0);
    inputValueUpdate(sumTotalCal, "totalCal");
  };

  const calculatePercentage = (cal, tdee) => {
    if (tdee === 0) {
      return 0;
    }
    const percentage = Math.round((cal / tdee) * 100);
    return percentage;
  };


  useEffect(() => {
    const fetchUserData = async () => {
      inputValueUpdate(todayFoods, "menuList");
      const sumTotalCal = todayFoods.reduce((total, item) => total + item.totalcal, 0);
      inputValueUpdate(sumTotalCal, "totalCal");
      inputValueUpdate(calculatePercentage(sumTotalCal, state.tdee), "percentage");
      
      console.log(state.percentage)
      console.log(todayFoods);
      console.log(sumTotalCal);
      const userDoc = firebase.firestore().collection("accounts").doc(key);
      const res = await userDoc.get();
      if (res.exists) {
        const user = res.data();
        if (user.TDEE) {
          setState(prevState => ({
            ...prevState,
            key: res.id,
            tdee: user.TDEE,
          }));
        } else {
          Alert.alert('Missing Information', 'กรุณากรอกข้อมูลส่วนตัวของคุณก่อน');
          navigation.navigate("หน้าหลักใช้งาน", { screen: "ข้อมูลส่วนตัว", params: { key: key } });
        }
      } else {
        console.log("Document does not exist!!");
      }
    };
    fetchUserData();
    const unsubscribe = navigation.addListener('focus', fetchUserData);
    return unsubscribe;
  }, [navigation, key, todayFoods]);


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.HeadText}>เปอร์เซ็นต์แคลอรี่ที่กินวันนี้</Text>
        <CircularProgress
          radius={100}
          value={state.percentage}
          // maxValue={100}
          progressValueColor={"#5BA6FF"}
          fontSize={20}
          valueSuffix={"%"}
          inActiveStrokeColor={"#5BA6FF"}
          activeStrokeColor={"#5BA6FF"}
          title={"เปอร์เซ็นต์"}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={6}
          duration={1000}
        />
        <Text style={styles.HeadText}>ควรได้รับ {state.tdee} kcal</Text>
        <Text style={styles.HeadText}>ได้รับแล้ว {state.totalCal} kcal</Text>
        <View style={styles.list}>
          <View style={styles.headerContainer}>
            <Text style={styles.headText2}>รายการอาหาร</Text>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {navigation.navigate("รายการอาหาร");} }
            >
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={[styles.listContainer]}>
            {state.menuList.map((item, index) => (
              <View key={index} style={styles.foodItem}>
                <View style={styles.itemRow1}>
                  <Text style={styles.textcount}>{item.name}</Text>
                  <Text style={styles.textcount}>{item.kcal} kcal x {item.unit}</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textcal}>{item.totalcal} kcal</Text>
                  <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => handleDelete(index)}
                  >
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
            <Text style={styles.headText2}>รายการกิจกรรม</Text>
            <TouchableOpacity 
              style={styles.iconContainer}
              onPress={() => {navigation.navigate("รายการกิจกรรม");} }
            >
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={[styles.listContainer]}>
            {state.activityList.map((item, index) => (
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
    marginBottom: 5,
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
    borderBottomColor: "black",
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
