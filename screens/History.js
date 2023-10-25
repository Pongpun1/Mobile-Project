import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { BarChart } from "react-native-chart-kit";

LocaleConfig.locales["ปฏิทิน"] = {
  monthNames: [
    "มกราคม",
    "กุมภาพันธ์",
    "มืนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฏาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ],
  dayNames: [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
  ],
  dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
};

LocaleConfig.defaultLocale = "ปฏิทิน";

const HistoryScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const windowWidth = Dimensions.get("window").width * 0.9;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.HeadText}>ปฏิทินการกิน</Text>

        <Calendar
          style={{
            width: windowWidth,
            backgroundColor: "white",
            borderRadius: 15,
          }}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true, selectedColor: "#90C2FD" },
            "2023-10-23": {
              selected: true,
              marked: true,
              selectedColor: "#FB1010",
            },
            "2023-10-24": {
              selected: true,
              marked: true,
              selectedColor: "#58D03A",
            },
            "2023-10-25": {
              selected: true,
              marked: true,
              selectedColor: "#58D03A",
            },
          }}
          theme={{
            textMonthFontWeight: "bold",
            textDayFontSize: 15,
            textMonthFontSize: 25,
            textDayHeaderFontSize: 16,
          }}
        />
        <View style={styles.graph}>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.Text}>ข้อมูล ณ วันที่</Text>
            <Text style={styles.Text}>วันที่ 26 ตุลาคม 2566</Text>
          </View>
          <BarChart
            data={{
              labels: ["แคลอรี่ที่ควรได้รับ", "แคลอรี่ที่ได้รับ", "คงเหลือ"],
              datasets: [
                {
                  // ใส่ข้อมูลตรงนี้
                  data: [1500, 1200, 400],
                  colors: [() => "#3AADD1", () => "#72CB48", () => "#F99D49"],
                },
              ],
            }}
            width={Dimensions.get("window").width * 0.9}
            height={250}
            fromZero="true"
            yAxisSuffix="kcal"
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: "white",
              backgroundGradientFromOpacity: 1,
              backgroundGradientTo: "white",
              backgroundGradientToOpacity: 0.5,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              barPercentage: 1,
            }}
            showBarTops={false}
            withCustomBarColorFromData
            style={{
              backgroundColor: "white",
              marginVertical: 8,
              borderRadius: 10,
              fontWeight: "bold",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  HeadText: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    marginBottom: -10,
  },
  graph: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default HistoryScreen;
