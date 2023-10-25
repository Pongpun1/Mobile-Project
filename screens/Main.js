import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import {
  BarChart,
  PieChart,
} from "react-native-chart-kit";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.HeadText}>แคลอรี่ในวันนี้ของคุณ</Text>
        <BarChart
          data={{
            labels: ["แคลอรี่ที่ควรได้รับ", "แคลอรี่ที่ได้รับ", "คงเหลือ"],
            datasets: [
              {
                // ใส่ข้อมูลตรงนี้
                data: [1500, 1200, 400],
                colors: [
                  () => '#48ACCB',
                  () => '#72CB48',
                  () => '#F99D49',
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width * 0.9}
          height={250}
          fromZero='true'
          yAxisSuffix="kcal"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#9FC9FB",
            backgroundGradientFromOpacity:0.6,
            backgroundGradientTo: "#76B5FF",
            backgroundGradientToOpacity:1,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            barPercentage: 0.7,
          }}
          showBarTops={false}
          withCustomBarColorFromData
          style={{
            marginVertical: 8,
            borderRadius: 10,
            
            fontWeight: 'bold',
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 20,
  },
});

export default MainScreen;
