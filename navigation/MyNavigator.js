import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainScreen from "../screens/Main";
import ProfileScreen from "../screens/ProfileScreen";

import LoginScreen from "../screens/LoginScreen";

import MenuScreen from "../screens/Menu";
import BMIscreen from "../screens/BMI";
import HistoryScreen from "../screens/History";

import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Login(){
  return(
        <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "#71B2FF" },
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }} name="เข้าสู่ระบบ" component={LoginScreen}/>
        <Stack.Screen name="สมัครสมาชิก" component={RegisterScreen} />
        <Stack.Screen name="ข้อมูลส่วนตัว" component={ProfileScreen} />
        <Stack.Screen options={{ headerShown: false }} name="แคลอรี่วันนี้" component={MainTabNavi}/>
    </Stack.Navigator>

  )
}
function MainTabNavi() {
  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#71B2FF" },
      headerTintColor: "black",
      headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
    }}>
      <Tab.Screen  name="แคลอรี่วันนี้" component={MainScreenNavi} />
      <Tab.Screen  name="รายการแคลอรี่" component={MenuScreenNavi} />
      <Tab.Screen  name="ดัชนีมวลกาย" component={BMIScreenNavi} />
      <Tab.Screen  name="ประวัติ" component={HistoryScreenNavi}/>
    </Tab.Navigator>
  )
}
function MainScreenNavi() {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="หน้าหลัก" component={MainScreen}/>
    </Stack.Navigator>
  )
}
function MenuScreenNavi(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="รายการแคลอรี่" component={MenuScreen}/>
    </Stack.Navigator>
  )
}
function BMIScreenNavi(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="ดัชนีมวลกาย" component={BMIscreen}/>
    </Stack.Navigator>
  )
}
function HistoryScreenNavi(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="ประวัติ" component={HistoryScreen}/>
    </Stack.Navigator>
  )
}

// function ProfileNavi() {
//   return (
//     <Stack.Navigator 
//     screenOptions={{headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"}}>
//       <Stack.Screen name="ข้อมูลส่วนตัว" component={ProfileScreen} />
//     </Stack.Navigator>
//   )
// }

// function AccNavi() {
//   return (
//     <Stack.Navigator 
//     screenOptions={{headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"}}>
//       <Stack.Screen name="ข้อมูลบัญชีของคุณ" component={AccountScreen} />
//     </Stack.Navigator>
//   )
// }

// function LogoutNavi() {
//   return (
//     <Stack.Navigator 
//     screenOptions={{headerStyle: {backgroundColor: "#4a148c"}, headerTintColor: "white"}}>
//       <Stack.Screen name="เข้าสู่ระบบ" component={LoginScreen} />
//     </Stack.Navigator>
//   )
// }

// function MainNavigator() {
//   return (
//     <Drawer.Navigator>
//         <Drawer.Screen name="Main" component={MainTabNavi}
//         options={{
//           drawerLabel: "หน้าหลัก",
//         }} />
//         <Drawer.Screen name="EditProfile" component={ProfileNavi}
//         options={{
//           drawerLabel: "แก้ไขข้อมูลส่วนตัว",
//         }} />
//         <Drawer.Screen name="EditAcc" component={AccNavi}
//         options={{
//           drawerLabel: "แก้ไขข้อมูลบัญชี",
//         }} />
//         <Drawer.Screen name="Logout" component={LogoutNavi}
//         options={{
//           drawerLabel: "ออกจากระบบ",
//         }} />
//       </Drawer.Navigator>

//     <Stack.Navigator
//         initialRouteName="LoginScreen"
//         screenOptions={{
//           headerStyle: { backgroundColor: "#71B2FF" },
//           headerTintColor: "black",
//           headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
//         }}
//       >
//         <Stack.Screen
//           options={{ headerShown: false }} name="เข้าสู่ระบบ" component={LoginScreen}/>
//         <Stack.Screen name="สมัครสมาชิก" component={RegisterScreen} />
//         <Stack.Screen name="ข้อมูลส่วนตัว" component={ProfileScreen} />
//         <Stack.Screen name="แคลอรี่วันนี้" component={MainScreen }/>
//     </Stack.Navigator>
//   );
// }

export default function MyNavigator() {
  return (
    <NavigationContainer>
      {Login()}
    </NavigationContainer>
  );
}
