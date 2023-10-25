import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Alert} from "react-native";
import firebase from '../database/calcalDB';
import { useSelector, useDispatch} from "react-redux";
import { userKey, clearData } from "../store/actions/userAction";
import { Entypo } from '@expo/vector-icons'; 
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{alignItems: "center",justifyContent: "center",}}>
            <Text style={styles.HeadText}>BMI</Text>
            <Text style={styles.BMItext}>{state.bmi}</Text>
          </View>
        </View>
        <View style={styles.statusBox}>
        {(state.bmi >= 18.5 && state.bmi <=22.9) && (         
            <Entypo name="emoji-happy" size={100} color="black"/>   
        )}
        {(state.bmi < 18.5 || (state.bmi >= 23 && state.bmi <=24.9)) && (       
            <Entypo name="emoji-neutral" size={100} color="black" />
        )}
        {(state.bmi >= 24.9) && (  
            <Entypo name="emoji-sad" size={100} color="black"/>
        )}

        {(state.bmi < 18.5) && (     
          <View> 
            <Text style={styles.statusText}>คุณอยู่ในเกณฑ์</Text>
            <Text style={styles.statusText}>ต่ำกว่ามาตรฐาน</Text>
          </View>
        )}
        {(state.bmi >= 18.5 && state.bmi <=22.9) && (     
          <View> 
            <Text style={styles.statusText}>คุณอยู่ในเกณฑ์</Text>
            <Text style={styles.statusText}>ปกติ</Text>
          </View>
        )}
        {(state.bmi >= 23 && state.bmi <=24.9) && (     
          <View> 
            <Text style={styles.statusText}>คุณอยู่ในเกณฑ์</Text>
            <Text style={styles.statusText}>เกินมาตรฐาน</Text>
          </View>
        )}
        {(state.bmi >= 25 && state.bmi <=29.9) && (     
          <View> 
            <Text style={styles.statusText}>คุณอยู่ในเกณฑ์</Text>
            <Text style={styles.statusText}>อ้วน</Text>
          </View>
        )}
        {(state.bmi >= 30) && (     
          <View> 
            <Text style={styles.statusText}>คุณอยู่ในเกณฑ์</Text>
            <Text style={styles.statusText}>อ้วนมาก</Text>
          </View>
        )}
        </View>
        

        <View style={styles.content}>

          <View style={styles.box}>
            <Image style={styles.stretch} source={require("../assets/thin.png")} />
              <View style={{flexDirection: 'column'}}>
                  <Text style={styles.Text}>ระดับ BMI ต่ำกว่า 18.5</Text>
                  <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ ต่ำกว่ามาตรฐาน</Text>
                  <Text>เสี่ยงสูงที่ร่างกายขาดสารอาหาร
                        ในการหล่อเลี้ยงภายในร่างกายได้ไม่เพียงพอ
                        ส่งผลกระทบให้ร่างกายอ่อนเพลียง่าย ภูมิคุ้มกันพกบร่อง</Text>
              </View>
          </View>

          <View style={styles.box}>
            <Image style={styles.stretch} source={require("../assets/normal.png")}/>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.Text}>ระดับ BMI อยู่ในช่วง 18.5 - 22.9</Text>
              <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ น้ำหนักสมส่วน</Text>
                <Text>เสี่ยงต่อโรคแทรกซ้อนจากโรคอ้วนได้น้อยที่สุด
                      ควรรักษาความสุมดลของค่า BMI ระดับนี้ไว้อย่างสม่ำเสมอ
                      และหมั่นตรวจค่า BMI จากการตรวจสุขภาพประจำปี</Text>
            </View>
          </View>

          <View style={styles.box}>
              <Image style={styles.stretch} source={require("../assets/fat1.png")} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.Text}>ระดับ BMI อยู่ในช่วง 23.0 - 24.9</Text>
              <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ น้ำหนักเกินมาตรฐาน</Text>
                <Text>เสี่ยงที่เกิดโรคแทรกซ้อนที่เกิดจากโรคอ้วนได้
                      ควรควบคุมปริมาณไขมันในร่างกายตัวเอง
                      เลือกทานอาหารที่มีโปรตีนสูงและหมั่นออกกำลังกาย</Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image style={styles.stretch2} source={require("../assets/fat2.png")} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.Text}>ระดับ BMI อยู่ในช่วง 25.0 - 29.9</Text>
              <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ อ้วน</Text>
                <Text>เสี่ยงที่เกิดโรคแทรกซ้อนที่เกิดจากโรคอ้วนได้สูง
                      ควรควบคุมปริมาณไขมันในร่างกายตัวเองแบบเร่งด่วน
                      ด้วยการปรับเปลี่ยนวิถีการกินที่เน้นสุขภาพให้มากขึ้น</Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image style={styles.stretch} source={require("../assets/fat3.png")} />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.Text}>ระดับ BMI มากกว่า 30.0</Text>
              <Text style={{ fontWeight: 'bold'}}>อยู่ในเกณฑ์ อ้วนมาก</Text>
                <Text>เสี่ยงที่เกิดโรคแทรกซ้อนที่เกิดจากโรคอ้วนได้สูงที่สุด
                      ควรนัดพบแพทย์เพื่อรับยาในการปรับปริมาณน้ำตาลในเลือด
                      พร้อมปรับเปลี่ยนพฤติกรรมการทานให้เป็นอาหารสุขภาพ</Text>
            </View>
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
    alignItems: "center"
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 28,
  },
  statusBox : {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  statusText : {
    fontWeight: "bold",
    fontSize: 35,
  },
  BMItext : {
    fontWeight: "bold",
    fontSize: 75,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "#AFD4FF",
    alignItems: "center",
    padding: 20,
    marginBottom: 30,
    width: "100%",
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
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    padding: 20,
    marginBottom: 20,
    width: "75%"
  },
});

export default BMIscreen;
