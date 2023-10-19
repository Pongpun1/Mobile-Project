import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AccountScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.HeadText}>ข้อมูลบัญชี</Text>
        <View>

          <Text style={styles.Text}>อีเมล</Text>
          <TextInput style={styles.input}  placeholder="กรุณากรอกอีเมลล์"/>
          <Text style={styles.Text}>รหัสผ่านเก่า</Text>
          <TextInput secureTextEntry={true} style={styles.input} placeholder="กรุณากรอกรหัสผ่าน"/>
          <Text style={styles.Text}>รหัสผ่านใหม่</Text>
          <TextInput secureTextEntry={true} style={styles.input} placeholder="กรุณาตั้งรหัสผ่าน"/>
          <Text style={styles.Text}>ยืนยันรหัสผ่านใหม่</Text>
          <TextInput secureTextEntry={true} style={styles.input} placeholder="ยืนยันรหัสผ่าน"/>

        </View>
        <TouchableOpacity style={styles.button} onPress={ ()=> {navigation.navigate("แคลอรี่วันนี้");} }>
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
