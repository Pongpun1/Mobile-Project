import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyNavigator from "./navigation/MyNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MyNavigator />
    
 // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="LoginScreen"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "#71B2FF" },
    //       headerTintColor: "black",
    //       headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
    //     }}
    //   >
    //     <Stack.Screen
    //       options={{ headerShown: false }}
    //       name="เข้าสู่ระบบ"
    //       component={LoginScreen}
    //     />
    //     <Stack.Screen name="สมัครสมาชิก" component={RegisterScreen} />
    //     <Stack.Screen name="ข้อมูลส่วนตัว" component={ProfileScreen} />
    //     <Stack.Screen name="แคลอรี่วันนี้" component={MainScreen} />
    //     <Stack.Screen name="เพิ่มเมนูอาหาร" component={AddFoodScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

