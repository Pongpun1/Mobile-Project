import React, {Component, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
  Alert
} from "react-native";
import firebase from '../database/calcalDB';
import {Picker} from '@react-native-picker/picker';
import { useSelector, useDispatch } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';
import { userData } from "../store/actions/userAction";

class ProfileScreen extends Component {
  constructor(props){
    super(props);

    this.AccountCollection = firebase.firestore().collection("accounts");

    this.state = {
      gender: '',
      birthday: '',
      weight: '',
      height: '',
      activity: '',
      date: new Date(),
      showPicker: false
    };
  }
  componentDidMount() {
    const { route } = this.props;
    const { key } = route.params;
    this.setState({
      gender: '',
      birthday: '',
      weight: '',
      height: '',
      activity: '',
      date: new Date(),
      showPicker: false
    });
    const userDoc = firebase
          .firestore()
          .collection("accounts")
          .doc(key);
        userDoc.get().then((res) => {
          if (res.exists) {
            const user = res.data();
            this.setState({
              key: res.id,
              gender: user.gender,
              birthday: user.birthday,
              weight: user.weight,
              height: user.height,
              activity: user.activity,
            });
          } else {
            console.log("Document does not exist!!");
          }
        });
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  formatDate = (rawDate) =>{
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return `${day}/${month}/${year}`;
  }

   toggleDatePicker = () =>{
    this.inputValueUpdate(!this.state.showPicker, "showPicker")
  }
   ChangeDate = ({type}, selectedDate) =>{
    console.log(type)
    if (type == "set"){
      const currentDate = selectedDate;
      this.inputValueUpdate(currentDate, "date")
      if(Platform.OS == "android"){
        this.toggleDatePicker()
        this.inputValueUpdate(this.formatDate(currentDate), "birthday")
      }
    } else{
        this.toggleDatePicker()
    }
  }
  update(){
    console.log(this.calculateAge(this.state.date))
    const updateDoc = this.AccountCollection
      .doc(this.state.key);
    updateDoc
      .update({
        gender: this.state.gender,
        birthday: this.state.birthday,
        weight: this.state.weight,
        height: this.state.height,
        activity: this.state.activity,
        age: this.calculateAge(this.state.date)
      })
      .then(() => {
        this.props.navigation.navigate("หน้าหลักใช้งาน", {key: this.state.key});
        const dispatch = useDispatch() 
        dispatch(userData(this.state.key));
        Alert.alert(
          "Updating Alert",
          "อัพเดทข้อมูลของคุณแล้ว"
        );
      });
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.HeadText}>ข้อมูลส่วนตัว</Text>
        <View>

          <Text style={styles.Text}>เพศ</Text>
          <Picker
            selectedValue={this.state.gender}
            onValueChange={(val) => this.inputValueUpdate(val, "gender")}
            style={styles.dropdown}
          >
            <Picker.Item label="ระบุเพศ" value="0" />
            <Picker.Item label="ชาย" value="ชาย" />
            <Picker.Item label="หญิง" value="หญิง" />
            <Picker.Item label="ไม่ระบุ" value="ไม่ระบุ" />
          </Picker>

          <Text style={styles.Text}>วันเกิด</Text>
          {this.state.showPicker &&(
            <DateTimePicker
            mode="date"
            display="spinner"
            value={this.state.date}
            onChange={this.ChangeDate}
            maximumDate={new Date()}
            />
          )}
          {/* ปุ่มวันเลือกวันFake */}
          {this.state.showPicker &&(
          <Pressable>
            <TextInput 
              style={[styles.input, { color: '#000000' }]}
              placeholder="ระบุวันเกิด"
              value={this.state.birthday}
              onChangeText={(val) => this.inputValueUpdate(val, "birthday")}
              editable={false}
            />
          </Pressable>
          )}
          {/* ปุ่มวันเลือกวันจริง */}
          {!this.state.showPicker &&(
          <Pressable onPress={this.toggleDatePicker}>
            <TextInput 
              style={[styles.input, { color: '#000000' }]}
              placeholder="ระบุวันเกิด"
              value={this.state.birthday}
              onChangeText={(val) => this.inputValueUpdate(val, "birthday")}
              editable={false}
            />
          </Pressable>
          )}
          <Text style={styles.Text}>น้ำหนัก (กิโลกรัม)</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={this.state.weight}
          onChangeText={(val) => this.inputValueUpdate(val, "weight")}
          />
          <Text style={styles.Text}>ส่วนสูง (เซนติเมตร)</Text>
          <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={this.state.height}
          onChangeText={(val) => this.inputValueUpdate(val, "height")}
          />

          <Text style={styles.Text}>การออกกำลังกาย</Text>
          <Picker
            selectedValue={this.state.activity}
            onValueChange={(val) => this.inputValueUpdate(val, "activity")}
            style={styles.dropdown}
          >
            <Picker.Item label="เลือกพฤติกรรมการออกกำลังกาย" value="0" />
            <Picker.Item label="ไม่เคยออกกำลังกาย" value="ไม่เคยออกกำลังกาย" />
            <Picker.Item label="ออกกำลังกายเป็นบางครั้ง" value="ออกกำลังกายเป็นบางครั้ง" />
            <Picker.Item label="ออกกำลังกายเป็นประจำ" value="ออกกำลังกายเป็นประจำ" />
          </Picker>

        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.update()}
          >
          <Text style={styles.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </View>
    )
  }
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
    width: 370,
    height: 40,
    paddingLeft: 10,
    marginLeft: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    borderWidth: 0,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 6,
  },
});

export default ProfileScreen;
