import React from 'react';
import { StyleSheet,Text ,View, Image, TextInput, TouchableOpacity,} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <>
    <View style={styles.container}>
      <Image style={styles.stretch} source={require('/assets/bmi.png')}/>
      <Text style={styles.HeadText}>CalCal</Text>
      <Text style={styles.Text}>ชื่อผู้ใช้งาน</Text>
      <TextInput style={styles.input} placeholder="Username"/>
      <Text style={styles.Text}>รหัสผ่าน</Text>
      <TextInput secureTextEntry={true} style={styles.input} placeholder="Password"/>

      <View style={{ flexDirection:'row', gap:35, }}>
       <TouchableOpacity
        style={styles.roundButton1} onPress={ ()=> {navigation.navigate("สมัครสมาชิก");} }>
        <Text style={styles.ButtonText}>สมัครสมาชิก</Text>
      </TouchableOpacity>

          <TouchableOpacity style={styles.roundButton1}>
            <Text style={styles.ButtonText}>เข้าสู่ระบบ</Text>
          </TouchableOpacity>
        </View>
    </View>
    </>
  );
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
