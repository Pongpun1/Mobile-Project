import React from 'react';
import { StyleSheet,Text ,View, TextInput,TouchableOpacity} from 'react-native';


const AddFood = ({navigation}) => {
  return (
    <>
    <View style={styles.container}>
        <Text style={styles.HeadText}>เพิ่มเมนูอาหาร</Text>
        
        <View style={styles.container2}>
          <Text style={styles.Text}>ชื่อเมนูอาหาร</Text>
          <TextInput style={styles.input} />
          <Text style={styles.Text}>แคลอรี่</Text>
          <TextInput style={styles.input} />
          <Text style={styles.Text}>ต่อหน่วย</Text>
          <TextInput style={styles.input} />
        </View>

        <TouchableOpacity style={styles.roundButton1} >
          <Text style={styles.buttonText}>เพิ่ม</Text>
        </TouchableOpacity>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    container2: {
      marginTop: 15,
    },
    HeadText: {
      fontWeight: "bold",
      fontSize: 30,
      marginTop: 40,
    },
    Text: {
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 270,
        marginTop: 20,
        marginBottom: 6,
      },
      input: {
        height: 40,
        width: 370,
        borderRadius: 50,
        borderWidth: 0,
        padding: 10,
        backgroundColor: "#D9D9D9",
        fontSize: 15,
        opacity: 0.6,
      },
      roundButton1: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
        borderRadius: 100,
        backgroundColor: '#D9D9D9',
      },
      buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
      },
});

export default AddFood;
