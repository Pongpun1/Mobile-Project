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
import { useSelector, useDispatch} from "react-redux";
import { userKey, clearData } from "../store/actions/userAction";
import bcrypt from 'react-native-bcrypt';
import firebase from '../database/calcalDB';


const AccountScreen = ({navigation}) => {
  const AccountCollection = firebase.firestore().collection("accounts");
  const key = useSelector(state => state.account.key);
  console.log(key)
  const [state, setState] = useState({
    input_email: '',
    input_oldPassword: '',
    input_newPassword: '',
    input_newPasswordCF: '',
  });

  const inputValueUpdate = (val, prop) => {
    setState(prevState => ({
      ...prevState,
      [prop]: val
    }));
  }

  useEffect(() => {
    setState({
      input_email: '',
      input_oldPassword: '',
      input_newPassword: '',
      input_newPasswordCF: '',
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setState({
        input_email: '',
        input_oldPassword: '',
        input_newPassword: '',
        input_newPasswordCF: '',
      });
    });

    return unsubscribe;
  }, [navigation]);


  const change = () => {
    if (!state.input_email || !state.input_oldPassword || !state.input_newPassword || !state.input_newPasswordCF) {
      Alert.alert(
        "Missing Information",
        "กรุณากรอก ข้อมูลให้ครบ"
      );
      return;
    }
    if (state.input_newPassword !== state.input_newPasswordCF) {
      setState(prevState => ({
        ...prevState,
        input_newPassword: '',
        input_newPasswordCF: ''
      }));
      Alert.alert(
        "Password Mismatch",
        "รหัสผ่านใหม่ต้องเหมือนกัน"
      );
      return;
    }
    const userDoc = AccountCollection.doc(key);
    userDoc.get().then((res) => {
      if (res.exists) {
        const userData = res.data();
        if(bcrypt.compareSync(userData.username+state.input_oldPassword, userData.password) && (state.input_email == userData.email)){
          const salt = bcrypt.genSaltSync(10);
          //hashPassword
          const hashedPassword = bcrypt.hashSync(userData.username+state.input_newPassword, salt)
          userDoc
          .update({
            password: hashedPassword
          })
          .then(() => {
            navigation.navigate("หน้าหลักใช้งาน", { screen: "Main", params: { key: key } });
            Alert.alert(
              "Updating Alert",
              "อัพเดทข้อมูลของคุณแล้ว"
            );
          });
          console.log("w")
        }else{
          setState(prevState => ({
            ...prevState,
            input_email: '',
            input_oldPassword: '',
            input_newPassword: '',
            input_newPasswordCF: '',
          }));
          Alert.alert('Change Password Failed', 'อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        }
      }
    })
  };


  return (
    <View style={styles.container}>
        <Text style={styles.HeadText}>ข้อมูลบัญชี</Text>
        <View>
          <Text style={styles.Text}>อีเมล</Text>
          <TextInput
            style={styles.input} 
            placeholder="กรุณากรอกอีเมล"
            value={state.input_email}
            onChangeText={(val) => inputValueUpdate(val, "input_email")}
          />
          <Text style={styles.Text}>รหัสผ่านเก่า</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input} 
            placeholder="กรุณากรอกรหัสผ่าน"
            value={state.input_oldPassword}
            onChangeText={(val) => inputValueUpdate(val, "input_oldPassword")}
          />
          <Text style={styles.Text}>รหัสผ่านใหม่</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input} 
            placeholder="กรุณาตั้งรหัสผ่าน"
            value={state.input_newPassword}
            onChangeText={(val) => inputValueUpdate(val, "input_newPassword")}
          />
          <Text style={styles.Text}>ยืนยันรหัสผ่านใหม่</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input} 
            placeholder="ยืนยันรหัสผ่าน"
            value={state.input_newPasswordCF}
            onChangeText={(val) => inputValueUpdate(val, "input_newPasswordCF")}
          />

        </View>
        <TouchableOpacity style={styles.button} onPress={ ()=> change() }>
          <Text style={styles.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
  },
  input: {
    height: 40,
    width: 370,
    marginLeft: 12,
    borderRadius: 50,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#D9D9D9",
    fontSize: 15,
    opacity: 0.6,
  },
  button: {
    width: 100,
    height: 40,
    marginTop: 40,
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
  Text: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 6,
  },
});

export default AccountScreen;
