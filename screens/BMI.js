import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert} from "react-native";
import firebase from '../database/calcalDB';
import { useSelector, useDispatch} from "react-redux";
import { userData, clearData } from "../store/actions/userAction";

const BMIscreen = ({route, navigation}) => {
  const key = useSelector(state => state.account.key);
  const [state, setState] = useState({
    bmi: "0"
  });


  useEffect(() => {
    const fetchUserData = async () => {
      const userDoc = firebase.firestore().collection("accounts").doc(key);
      const res = await userDoc.get();
      if (res.exists) {
        const user = res.data();
        if (user.BMI) {
          setState(prevState => ({
            ...prevState,
            key: res.id,
            bmi: user.BMI,
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
  }, [navigation, key]);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
      <View style={{alignItems: "center",justifyContent: "center",}}>
        <Text style={styles.HeadText}>ค่าดัชนีมวลกายอยู่ที่</Text>
        <Text style={styles.BMItext}>{state.bmi}</Text>
      </View>
        
      </View>
      <View style={styles.content}>

        <View style={styles.box}>
          <Image style={styles.stretch} source={require("../assets/thin.png")} />
          <View style={{flexDirection: 'column'}}>
          <Text style={styles.Text}>ระดับ BMI ต่ำกว่า 18.5</Text>
            <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ ต่ำกว่ามาตรฐาน</Text>
              <Text>เสี่ยงสูงที่ร่างกายขาดสารอาหาร</Text>
              <Text>ในการหล่อเลี้ยงภายในร่างกายได้ไม่เพียงพอ</Text>
              <Text>ส่งผลกระทบให้ร่างกายอ่อนเพลียง่าย ภูมิคุ้มกันพกบร่อง</Text>
          </View>

        </View>

        <View style={styles.box}>
          <Image style={styles.stretch} source={require("../assets/normal.png")}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.Text}>ระดับ BMI อยู่ในช่วง 18.5 - 22.9</Text>
            <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ น้ำหนักสมส่วน</Text>
              <Text>เสี่ยงต่อโรคแทรกซ้อนจากโรคอ้วนได้น้อยที่สุด</Text>
              <Text>ควรรักษาความสุมดลของค่า BMI ระดับนี้ไว้อย่างสม่ำเสมอ</Text>
              <Text>และหมั่นตรวจค่า BMI จากการตรวจสุขภาพประจำปี</Text>
          </View>
        </View>

        <View style={styles.box}>
            <Image style={styles.stretch} source={require("../assets/fat1.png")} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.Text}>ระดับ BMI อยู่ในช่วง 23.0 - 24.9</Text>
            <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ น้ำหนักเกินมาตรฐาน</Text>
              <Text>เสี่ยงที่เกิดโรคแทรกซ้อนที่เกิดจากโรคอ้วนได้</Text>
              <Text>ควรควบคุมปริมาณไขมันในร่างกายตัวเอง</Text>
              <Text>เลือกทานอาหารที่มีโปรตีนสูงและหมั่นออกกำลังกาย</Text>
          </View>
        </View>

        <View style={styles.box}>
          <Image style={styles.stretch2} source={require("../assets/fat2.png")} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.Text}>ระดับ BMI อยู่ในช่วง 25.0 - 29.9</Text>
            <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ อ้วน</Text>
              <Text>เสี่ยงที่เกิดโรคแทรกซ้อนที่เกิดจากโรคอ้วนได้สูง</Text>
              <Text>ควรควบคุมปริมาณไขมันในร่างกายตัวเองแบบเร่งด่วน</Text>
              <Text>ด้วยการปรับเปลี่ยนวิถีการกินที่เน้นสุขภาพให้มากขึ้น</Text>
          </View>
        </View>

        <View style={styles.box}>
          <Image style={styles.stretch} source={require("../assets/fat3.png")} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.Text}>ระดับ BMI มากกว่า 30.0</Text>
            <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ อ้วนมาก</Text>
              <Text>เสี่ยงที่เกิดโรคแทรกซ้อนที่เกิดจากโรคอ้วนได้สูงที่สุด</Text>
              <Text>ควรนัดพบแพทย์เพื่อรับยาในการปรับปริมาณน้ำตาลในเลือด</Text>
              <Text>พร้อมปรับเปลี่ยนพฤติกรรมการทานให้เป็นอาหารสุขภาพ</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 28,
  },
  BMItext : {
    fontWeight: "bold",
    fontSize: 75,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "#AFD4FF",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  stretch: {
    width: 120,
    height: 120,
  },
  stretch2: {
    width: 120,
    height: 120,
  },
  content:{
    flex: 5,
    marginBottom: 50,
  },
  box: {
    backgroundColor: '#D9D9D9',
    marginTop: 25,
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
  },
});

export default BMIscreen;
