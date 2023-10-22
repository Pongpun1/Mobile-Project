import React, { Component } from 'react';
import { StyleSheet,Text ,View, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from '../database/calcalDB';
import bcrypt from 'react-native-bcrypt';

bcrypt.setRandomFallback((len) => {
  const buf = new Uint8Array(len);
  return buf.map(() => Math.floor(Math.random() * 256));
});

class RegisterScreen extends Component {
  constructor(props){
    super(props);

    this.AccountCollection = firebase.firestore().collection("accounts");

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  store() {
    // this.props.navigation.navigate("ข้อมูลส่วนตัว",{key:"Z4HNI9AMbdVA8piXkJQE"});
    //กรุณากรอกข้อมูลให้ครบทุกช่อง
    if (!this.state.username || !this.state.email || !this.state.password || !this.state.confirmPassword) {
      Alert.alert(
        "Missing Information",
        "กรุณากรอกข้อมูลให้ครบทุกช่อง"
      );
      return;
    }
    //รหัสผ่านต้องเหมือนกัน
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        password: '',
        confirmPassword: ''
      });
      Alert.alert(
        "Password Mismatch",
        "รหัสผ่านต้องเหมือนกัน"
      );
      return;
    }
    //โปรดป้อนอีเมลให้ถูกต้อง
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.state.email)) {
      Alert.alert(
        "Invalid Email",
        "โปรดป้อนอีเมลให้ถูกต้อง"
      );
      return;
    }

    const trimmedUsername = this.state.username.trim(); // ตัดช่องว่างด้านหน้าและด้านหลังของชื่อผู้ใช้
    const trimmedEmail = this.state.email.trim(); // ตัดช่องว่างด้านหน้าและด้านหลังของอีเมล

    const salt = bcrypt.genSaltSync(10);
    //hashPassword
    const hashedPassword = bcrypt.hashSync(this.state.username+this.state.password, salt)

    //ตรวจ Username ซ้ำ
    this.AccountCollection.where("username", "==", trimmedUsername)
    .get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        // มีชื่อผู้ใช้งานนี้อยู่แล้ว
        this.setState({
          username: '',
        });
        Alert.alert(
          "Username Exists",
          "ชื่อผู้ใช้งานนี้ถูกใช้ไปแล้ว โปรดใช้ชื่อผู้ใช้งานอื่น"
        );
      } else {
        this.AccountCollection //เพิ่มข้อมูลลง firebase
        .add({
          username: trimmedUsername,
          email: trimmedEmail,
          password: hashedPassword,
        })
        .then((docRef) => {
          const docKey = docRef.id;
          console.log(docKey);
          this.setState({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
          this.props.navigation.navigate("ข้อมูลส่วนตัว", { key: docKey });
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
  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.HeadText}>สมัครสมาชิก</Text>
      <View style={styles.container2}>
        <Text style={styles.Text}>ชื่อผู้ใช้งาน</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter Username"
          value={this.state.username}
          onChangeText={(val) => this.inputValueUpdate(val, "username")}
        />
        <Text style={styles.Text2}>อีเมล</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={this.state.email}
          keyboardType="email-address"
          onChangeText={(val) => this.inputValueUpdate(val, "email")}
        />
        <Text style={styles.Text2}>รหัสผ่าน</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          value={this.state.password}
          onChangeText={(val) => this.inputValueUpdate(val, "password")}
        />
        <Text style={styles.Text}>ยืนยันรหัสผ่าน</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Confirm Password"
          value={this.state.confirmPassword}
          onChangeText={(val) => this.inputValueUpdate(val, "confirmPassword")}
        />
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.store()}
          >
          <Text style={styles.ButtonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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