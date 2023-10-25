import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
  Alert
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector, useDispatch} from "react-redux";
import { userKey, clearData } from "../store/actions/userAction";
import firebase from '../database/calcalDB';


const ProfileScreen = ({route, navigation}) =>{
  const AccountCollection = firebase.firestore().collection("accounts");
  const key = useSelector(state => state.account.key);
  const [state, setState] = useState({
    gender: '',
    birthday: '',
    weight: '',
    height: '',
    activity: '',
    tdee: '0',
    date: new Date(),
    showPicker: false
  });

  const inputValueUpdate = (val, prop) => {
    setState(prevState => ({
      ...prevState,
      [prop]: val
    }));
  }

  useEffect(() => {
    const fetchUserData = () => {
      const userDoc = firebase
        .firestore()
        .collection("accounts")
        .doc(key);
      userDoc.get().then((res) => {
        if (res.exists) {
          const user = res.data();
          setState((prevState) => ({
            ...prevState,
            key: res.id,
            gender: user.gender,
            birthday: user.birthday,
            date: birthdayToDate(user.birthday),
            weight: user.weight,
            height: user.height,
            activity: user.activity,
            tdee: user.TDEE,
          }));
        } else {
          console.log("Document does not exist!!");
          setState((prevState) => ({
            ...prevState,
            gender: '',
            birthday: '',
            weight: '',
            height: '',
            activity: '',
            tdee: '0',
            date: new Date(),
            showPicker: false
          }));
        }
      });
    };
  
    const unsubscribe = navigation.addListener('focus', () => {
      fetchUserData();
    });
  
    fetchUserData();
  
    return unsubscribe;
  }, [navigation]);

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const calculateTDEE = () => {
    console.log(state)
    if (!state.gender || !state.birthday || !state.weight || !state.height || !state.activity) {
      return '0';
    }
    const gender = state.gender
    const weight = state.weight;
    const height = state.height;
    const age = calculateAge(state.date);
    const activity = state.activity;
    let BMR = 0
    if (gender == "ชาย"){
      BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    }else if(gender == "หญิง"){
      BMR = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    }
    const TDEE = Math.floor(BMR * activity)
    if(TDEE < 0){
      return '0';
    }else{
      return TDEE.toString();
    }
  };

  const calculateBMI = () => {
    const weight = state.weight;
    const height = state.height/100;
    let BMI = weight/(height*height);
    return BMI.toFixed(1);
  };

  const birthdayToDate = (birthday) =>{
    if(birthday){
      const parts = birthday.split('/'); // แยกวันที่ออกมาเป็นส่วนๆ
    // สร้างวัตถุ Date โดยใช้ค่าที่แยกออกมา
      const dateObject = new Date(parts[2], parts[1] - 1, parts[0]); // parts[2] คือปี, parts[1] คือเดือน, parts[0] คือวัน
      return dateObject;
    }else{
      return new Date();
    }
    
  }

  const formatDate = (rawDate) =>{
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return `${day}/${month}/${year}`;
  }

  const toggleDatePicker = () =>{
    inputValueUpdate(!state.showPicker, "showPicker")
  }

  const ChangeDate = ({type}, selectedDate) =>{
    if (type == "set"){
      const currentDate = selectedDate;
      inputValueUpdate(currentDate, "date")
      
      if(Platform.OS == "android"){
        toggleDatePicker()
        inputValueUpdate(formatDate(currentDate), "birthday")
      }
    } else{
        toggleDatePicker()
    }
  }

  const update = () => {
    if (!state.gender || !state.birthday || !state.weight || !state.height || !state.activity) {
      Alert.alert(
        "Missing Information",
        "กรุณากรอกข้อมูลให้ครบทุกช่อง"
      );
      return;
    }
    if (state.weight < 0 || state.height < 0) {
      Alert.alert(
        "Incorrect Information",
        "กรุณากรอกข้อมูลให้ถูกต้อง"
      );
      return;
    }
    const updateDoc = AccountCollection
      .doc(state.key);
    updateDoc
      .update({
        gender: state.gender,
        birthday: state.birthday,
        weight: state.weight,
        height: state.height,
        activity: state.activity,
        age: calculateAge(state.date),
        TDEE: calculateTDEE(),
        BMI: calculateBMI(),
      })
      .then(() => {
        navigation.navigate("หน้าหลักใช้งาน", { screen: "Main", params: { key: state.key } });
        Alert.alert(
          "Updating Alert",
          "อัพเดทข้อมูลของคุณแล้ว"
        );
      });
  }
  return(
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[{alignItems: "center"}]}>
        <Text style={styles.HeadText}>ข้อมูลส่วนตัว</Text>
      
        <View style={[{alignItems: "center", }]}>

          <View style={[styles.tdeeBox, {flexDirection: "row"}]}>
            <Text style={styles.tdeeText}>ค่า TDEE ของคุณคือ </Text>
            <TextInput
              style={[styles.tdeeShow, { color: '#000000' }]}
              keyboardType="numeric"
              value={calculateTDEE()}
              editable={false}
              />
          </View>

          <View style={[]}>
            <Text style={styles.Text}>เพศ</Text>
              <Picker
                selectedValue={state.gender}
                onValueChange={(val) => {
                  inputValueUpdate(val, "gender")
                }}
                style={styles.dropdown}
              >
                <Picker.Item label="ระบุเพศ" value="" />
                <Picker.Item label="ชาย" value="ชาย" />
                <Picker.Item label="หญิง" value="หญิง" />
              </Picker>
            <Text style={styles.Text}>วันเกิด</Text>
              {state.showPicker &&(
                <DateTimePicker
                mode="date"
                display="spinner"
                value={state.date}
                onChange={ChangeDate}
                maximumDate={new Date()}
                />
              )}
              {/* ปุ่มวันเลือกวันFake */}
              {state.showPicker &&(
              <Pressable>
                <TextInput 
                  style={[styles.input, { color: '#000000' }]}
                  placeholder="ระบุวันเกิด"
                  value={state.birthday}
                  onChangeText={(val) => inputValueUpdate(val, "birthday")}
                  editable={false}
                />
              </Pressable>
              )}
              {/* ปุ่มวันเลือกวันจริง */}
              {!state.showPicker &&(
              <Pressable onPress={toggleDatePicker}>
                <TextInput 
                  style={[styles.input, { color: '#000000' }]}
                  placeholder="ระบุวันเกิด"
                  value={state.birthday}
                  onChangeText={(val) => {
                    inputValueUpdate(val, "birthday")
                  }}
                  editable={false}
                />
              </Pressable>
              )}
            <Text style={styles.Text}>น้ำหนัก (กิโลกรัม)</Text>
              <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={state.weight}
              onChangeText={(val) => {
                inputValueUpdate(val, "weight")
                
              }}
              />
            <Text style={styles.Text}>ส่วนสูง (เซนติเมตร)</Text>
              <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={state.height}
              onChangeText={(val) => {
                inputValueUpdate(val, "height")
                
              }}
              />
            <Text style={styles.Text}>การออกกำลังกาย</Text>
              <Picker
                selectedValue={state.activity}
                onValueChange={(val) => {
                  inputValueUpdate(val, "activity")
                  
                }}
                style={styles.dropdown}
              >
                <Picker.Item label="เลือกพฤติกรรมการออกกำลังกาย" value="" />
                <Picker.Item label="ไม่ได้ออกกำลังกายเลย" value="1.2" />
                <Picker.Item label="ออกกำลังกายเบา ๆ (1-2 ครั้งต่อสัปดาห์)" value="1.375" />
                <Picker.Item label="ออกกำลังกายปานกลาง (3-5 ครั้งต่อสัปดาห์)" value="1.55" />
                <Picker.Item label="ออกกำลังกายหนัก (6-7 ครั้งต่อสัปดาห์)" value="1.725" />
                <Picker.Item label="ออกกำลังกายหนักมาก (ทุกวัน)" value="1.9" />
              </Picker>
            </View> 
        </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => update()}
        >
        <Text style={styles.buttonText}>บันทึก</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 10,
  },
  tdeeBox: {
    justifyContent: 'center',
    height: 60,
    width: 350,
    alignItems: "center",
    backgroundColor: '#90C2FD',
    borderRadius: 10,
  },
  tdeeText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  tdeeShow:{
    fontWeight: "bold",
    height: 40,
    width: 80,
    borderRadius: 10,
    backgroundColor: "white",
    fontSize: 20,
    opacity: 1,
    textAlign:'center'
  },
  input: {
    height: 40,
    width: 360,
    borderRadius: 50,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#D9D9D9",
    fontSize: 15,
    opacity: 1,
  },
  button: {
    width: 100,
    height: 40,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90C2FD",
    borderRadius: 100,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdown: {
    width: 360,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    borderWidth: 0,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 6,
  },
});

export default ProfileScreen;
