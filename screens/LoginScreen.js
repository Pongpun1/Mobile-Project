import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import firebase from '../database/calcalDB';
import bcrypt from 'react-native-bcrypt';
import { useSelector, useDispatch} from "react-redux";
import { userKey, clearData } from "../store/actions/userAction";
const LoginScreen = ({route, navigation}) =>{
  const dispatch = useDispatch();
  const AccountCollection = firebase.firestore().collection("accounts");
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const inputValueUpdate = (val, prop) => {
    setState(prevState => ({
      ...prevState,
      [prop]: val
    }));
  }

  bcrypt.setRandomFallback((len) => {
    const buf = new Uint8Array(len);
    return buf.map(() => Math.floor(Math.random() * 256));
  });

  const handleLogin = (userId) => {
    dispatch(userKey(userId));
    navigation.navigate("หน้าหลักใช้งาน", { screen: "Main", params: { key: userId } });
  }

  const login = () => {
    // dispatch(userKey("Z4HNI9AMbdVA8piXkJQE"));
    // navigation.navigate("หน้าหลักใช้งาน", { screen: "Main", params: { key: "Z4HNI9AMbdVA8piXkJQE" } });
    if (!state.username || !state.password) {
      Alert.alert(
        "Missing Information",
        "กรุณากรอก Username และ Password"
      );
      return;
    }
    AccountCollection
      .where('username', '==', state.username)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // ไม่พบผู้ใช้ที่ตรงกัน
          Alert.alert('Login Failed', 'ไม่พบผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
          return;
        }
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const userId = doc.id;
          if(bcrypt.compareSync(state.username+state.password, userData.password)){
            handleLogin(userId);
          }else{
            Alert.alert('Login Failed', 'ไม่พบผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
          }
        });
      })
      .catch((error) => {
        console.error('Error getting document:', error);
        Alert.alert('Login Error', 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ โปรดลองอีกครั้ง');
      });
  };
    return (
      <View style={styles.container}>
      <Image style={styles.stretch} source={require('../assets/bmi.png')}/>
      <Text style={styles.HeadText}>CalCal</Text>
      <Text style={styles.Text}>ชื่อผู้ใช้งาน</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={state.username}
        onChangeText={(val) => inputValueUpdate(val, "username")}
      />
      <Text style={styles.Text}>รหัสผ่าน</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
        value={state.password}
        onChangeText={(val) => inputValueUpdate(val, "password")}
      />

      <View style={{ flexDirection:'row', gap:35, }}>
        <TouchableOpacity
        style={styles.roundButton1} onPress={ ()=> {navigation.navigate("สมัครสมาชิก");} }>
        <Text style={styles.ButtonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => login()}
          >
          <Text style={styles.ButtonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: "white",
  },
  stretch: {
    width: 270,
    height: 270,
  },
  input: {
    height: 40,
    width: 330,
    margin: 12,
    borderRadius: 50,
    borderWidth: 0,
    padding: 10,
    backgroundColor: '#D9D9D9',
    fontSize: 15,
    opacity: 0.6,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 270,
  },
  ButtonText: {
    fontWeight: 'bold',
  },
  HeadText: {
    fontWeight: 'bold',
    fontSize: 70,
    marginBottom: 50,
  },
  roundButton1: {
    width: 130,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
    borderRadius: 100,
    backgroundColor: '#90C2FD',
  },

});

export default LoginScreen;
