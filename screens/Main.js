import React, {useState, useEffect} from "react";
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
import firebase from '../database/calcalDB';
import {Picker} from '@react-native-picker/picker';
import { useSelector, useDispatch, connect } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';
import { userData, clearData } from "../store/actions/userAction";
import { createSelector } from 'reselect';


const MainScreen = ({route, navigation}) =>{
  const userKey = useSelector(state => state.account);
  const test = () => {
   
    
    // In your component
    console.log(userKey);
    // console.log(reduxState)
  }
  return(
    <TouchableOpacity
        style={styles.button}
        onPress={() => test()}
        >
        <Text style={styles.buttonText}>บันทึก</Text>
      </TouchableOpacity>
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

export default MainScreen;

