import React from 'react';
import { StyleSheet,Text ,View, TextInput, TouchableOpacity,} from 'react-native';

const RegisterScreen = ({navigation}) => {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.HeadText}>สมัครสมาชิก</Text>

        <View style={styles.container2}>
            <Text style={styles.Text}>ชื่อผู้ใช้งาน</Text>
            <TextInput style={styles.input} placeholder="Enter Username"/>

            <Text style={styles.Text2}>อีเมลล์</Text>
            <TextInput style={styles.input} placeholder="Enter Email"/>

            <Text style={styles.Text2}>รหัสผ่าน</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter Password"/>

            <Text style={styles.Text}>ยืนยันรหัสผ่าน</Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Confirm Password"/>
            <TouchableOpacity style={styles.roundButton1} onPress={ ()=> {navigation.navigate("ข้อมูลส่วนตัว");} }>
            <Text style={styles.ButtonText}>สมัครสมาชิก</Text>
          </TouchableOpacity>
            </View>
        </View>
        
        </>
    )
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