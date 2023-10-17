import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";

const ProfileScreen = ({ navigation }) => {

  const [Activity, setActivity] = React.useState("");
  const onValueChange = (itemValue) => {
    setActivity(itemValue);
  };

  const [Gender, setGender] = React.useState("");
  const onGenderValueChange = (itemValue) => {
    setGender(itemValue);
  };



  return (
    <>
      <View style={styles.container}>
        <Text style={styles.HeadText}>ข้อมูลส่วนตัว</Text>
        <View>

          <Text style={styles.Text}>เพศ</Text>
          <Picker
            selectedValue={Gender}
            onValueChange={onGenderValueChange}
            style={styles.dropdown}
          >
            <Picker.Item label="ระบุเพศ" value="0" />
            <Picker.Item label="ชาย" value="1" />
            <Picker.Item label="หญิง" value="2" />
            <Picker.Item label="ไม่ระบุ" value="3" />
          </Picker>

          <Text style={styles.Text}>วันเกิด</Text>
          <TextInput style={styles.input} />
          
          <Text style={styles.Text}>น้ำหนัก (กิโลกรัม)</Text>
          <TextInput style={styles.input} />
          <Text style={styles.Text}>ส่วนสูง (เซนติเมตร)</Text>
          <TextInput style={styles.input} />

          <Text style={styles.Text}>การออกกำลังกาย</Text>
          <Picker
            selectedValue={Activity}
            onValueChange={onValueChange}
            style={styles.dropdown}
          >
            <Picker.Item label="เลือกพฤติกรรมการออกกำลังกาย" value="0" />
            <Picker.Item label="ไม่เคยออกกำลังกาย" value="1" />
            <Picker.Item label="ออกกำลังกายเป็นบางครั้ง" value="2" />
            <Picker.Item label="ออกกำลังกายเป็นประจำ" value="3" />
          </Picker>

        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
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
