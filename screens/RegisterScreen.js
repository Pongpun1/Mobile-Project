import React, {useState, useEffect} from 'react';
import { StyleSheet,Text ,View, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from '../database/calcalDB';
import bcrypt from 'react-native-bcrypt';
import { useSelector, useDispatch} from "react-redux";
import { userKey, clearData } from "../store/actions/userAction";

const RegisterScreen = ({route, navigation}) =>{
  const dispatch = useDispatch();
  const AccountCollection = firebase.firestore().collection("accounts");

  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
  
  const reigster = () => {
    // navigation.navigate("หน้าหลักใช้งาน", { screen: "ข้อมูลส่วนตัว", params: { key: "xvK6T4sDO2AB5ldcKBSa" } });
    if (!state.username || !state.email || !state.password || !state.confirmPassword) {
      Alert.alert(
        "Missing Information",
        "กรุณากรอกข้อมูลให้ครบทุกช่อง"
      );
      return;
    }
    //รหัสผ่านต้องเหมือนกัน
    if (state.password !== state.confirmPassword) {
      setState(prevState => ({
        ...prevState,
        password: '',
        confirmPassword: ''
      }));
      Alert.alert(
        "Password Mismatch",
        "รหัสผ่านต้องเหมือนกัน"
      );
      return;
    }
    //โปรดป้อนอีเมลให้ถูกต้อง
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      Alert.alert(
        "Invalid Email",
        "โปรดป้อนอีเมลให้ถูกต้อง"
      );
      return;
    }

    const trimmedUsername = state.username.trim(); // ตัดช่องว่างด้านหน้าและด้านหลังของชื่อผู้ใช้
    const trimmedEmail = state.email.trim(); // ตัดช่องว่างด้านหน้าและด้านหลังของอีเมล

    const salt = bcrypt.genSaltSync(10);
    //hashPassword
    const hashedPassword = bcrypt.hashSync(state.username+state.password, salt)

    //ตรวจ Username ซ้ำ
    AccountCollection.where("username", "==", trimmedUsername)
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        // มีชื่อผู้ใช้งานนี้อยู่แล้ว
        setState(prevState => ({
          ...prevState,
          username: '',
        }));
        Alert.alert(
          "Username Exists",
          "ชื่อผู้ใช้งานนี้ถูกใช้ไปแล้ว โปรดใช้ชื่อผู้ใช้งานอื่น"
        );
      } else {
        AccountCollection //เพิ่มข้อมูลลง firebase
        .add({
          username: trimmedUsername,
          email: trimmedEmail,
          password: hashedPassword,
        })
        .then((docRef) => {
          const docKey = docRef.id;
          console.log(docKey);
          setState(prevState => ({
            ...prevState,
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          }));
          dispatch(userKey(docKey));
          navigation.navigate("หน้าหลักใช้งาน", { screen: "ข้อมูลส่วนตัว", params: { key: docKey } });
          Alert.alert(
            "Registered",
            "กรุณากรอกข้อมูลส่วนตัว"
          );
        });
      }
    })
    .catch((error) => {
      console.error("Error checking username:", error);
    });
  }
    return (
    <View style={styles.container}>
      <Text style={styles.HeadText}>สมัครสมาชิก</Text>
      <View style={styles.container2}>
        <Text style={styles.Text}>ชื่อผู้ใช้งาน</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter Username"
          value={state.username}
          onChangeText={(val) => inputValueUpdate(val, "username")}
        />
        <Text style={styles.Text2}>อีเมล</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={state.email}
          keyboardType="email-address"
          onChangeText={(val) => inputValueUpdate(val, "email")}
        />
        <Text style={styles.Text2}>รหัสผ่าน</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          value={state.password}
          onChangeText={(val) => inputValueUpdate(val, "password")}
        />
        <Text style={styles.Text}>ยืนยันรหัสผ่าน</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Confirm Password"
          value={state.confirmPassword}
          onChangeText={(val) => inputValueUpdate(val, "confirmPassword")}
        />
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => reigster()}
          >
          <Text style={styles.ButtonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "white",
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
      },
    HeadText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 50,
    },
    Text : {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 260,
    },
    Text2 : {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 300,
    },
    input: {
        height: 40,
        width: 370,
        margin: 12,
        borderRadius: 50,
        borderWidth: 0,
        padding: 10,
        backgroundColor: '#D9D9D9',
        fontSize: 15,
        opacity: 0.6,
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
    ButtonText: {
      fontWeight: 'bold',
    },
});

export default RegisterScreen;