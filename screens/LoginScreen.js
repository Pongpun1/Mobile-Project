import React, {Component} from 'react';
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

class LoginScreen extends Component {
  constructor(props){
    super(props);

    this.AccountCollection = firebase.firestore().collection("accounts");

    this.state = {
      username: '',
      password: '',
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  login() {
    if (!this.state.username || !this.state.password) {
      Alert.alert(
        "Missing Information",
        "กรุณากรอก Username และ Password"
      );
      return;
    }
    this.AccountCollection
      .where('username', '==', this.state.username)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          // ไม่พบผู้ใช้ที่ตรงกัน
          Alert.alert('Login Failed', 'ไม่พบผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
          return;
        }
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if(bcrypt.compareSync(this.state.username+this.state.password, userData.password)){
            console.log("yes")
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
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.stretch} source={require('../assets/bmi.png')}/>
      <Text style={styles.HeadText}>CalCal</Text>
      <Text style={styles.Text}>ชื่อผู้ใช้งาน</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={this.state.username}
        onChangeText={(val) => this.inputValueUpdate(val, "username")}
      />
      <Text style={styles.Text}>รหัสผ่าน</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
        value={this.state.password}
        onChangeText={(val) => this.inputValueUpdate(val, "password")}
      />

      <View style={{ flexDirection:'row', gap:35, }}>
        <TouchableOpacity
        style={styles.roundButton1} onPress={ ()=> {this.props.navigation.navigate("สมัครสมาชิก");} }>
        <Text style={styles.ButtonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.login()}
          >
          <Text style={styles.ButtonText}>เข้าสู่ระบบ</Text>
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
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 80,
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
