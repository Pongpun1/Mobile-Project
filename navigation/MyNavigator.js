import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector, useDispatch } from "react-redux";

import MainScreen from "../screens/Main";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import MenuScreen from "../screens/Menu";
import BMIscreen from "../screens/BMI";
import HistoryScreen from "../screens/History";
import RegisterScreen from "../screens/RegisterScreen"; 
import AccountScreen from "../screens/AccountScreen";

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// เปิดด้วยหน้า Login
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
        <Stack.Screen name="หน้าหลักใช้งาน" component={DrawerNavigator}
          options={
          ({ route }) => ({
            headerShown: false,
          })}/>
    </Stack.Navigator>
  )
}


// ส่วนของ Drawer
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
      headerStyle: { backgroundColor: "#71B2FF" },
      headerTintColor: "black",
      headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
      drawerPosition: 'right',
      drawerActiveTintColor: '#71B2FF',
      drawerInactiveTintColor: "gray",
    }}>
        <Drawer.Screen  name="แคลอรี่วันนี้" component={MainTabNavi}
        options={({route,  navigation }) => ({
          drawerLabel: "หน้าหลัก",
          drawerIcon: ({ color }) => { return <AntDesign name="home" size={40} color="black" />; },
        })}
        />

        <Drawer.Screen name="ข้อมูลส่วนตัว" component={ProfileScreen}
        options={({route,  navigation }) => ({
          drawerLabel: "แก้ไขข้อมูลส่วนตัว",
          drawerIcon: ({ color }) => { return <FontAwesome5 name="user-edit" size={35} color="black" />; },
        })}
        />

        <Drawer.Screen name="ข้อมูลบัญชี" component={AccountScreen}
        options={({route, navigation }) => ({
          drawerLabel: "แก้ไขข้อมูลบัญชี",
          drawerIcon: ({ color }) => { return <Ionicons name="md-key-outline" size={40} color="black" />; },
        })}
        />

        <Drawer.Screen name="Logout" component={Login}
        options={{
          drawerLabel: "ออกจากระบบ", headerShown: false,
          drawerIcon: ({ color }) => { return <MaterialIcons name="logout" size={40} color="black" />
          ; },
        }}/>
      </Drawer.Navigator>
  );
}

// ส่วนของ Tab Bar ด้านล่าง
function MainTabNavi() {
  return (
    <Tab.Navigator  screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold'},
      tabBarInactiveTintColor: 'black',
      tabBarActiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#71B2FF', height: 75,},
    }}>
      <Tab.Screen 
      name="หน้าหลัก"
      component={MainScreenNavi}
      options={{headerShown: false,tabBarIcon: () => {
        return <AntDesign name="home" size={45} color="black" />}
      }}/>
      <Tab.Screen  name="รายการ" component={MenuScreenNavi} options={{headerShown: false,tabBarIcon: () => {
        return <MaterialIcons name="restaurant-menu" size={45} color="black" />}
      }}/>
      <Tab.Screen  name="ดัชนีมวลกาย" component={BMIscreen} options={{headerShown: false,tabBarIcon: () => {
        return <FontAwesome5 name="weight" size={40} color="black" />}
      }}/>
      <Tab.Screen  name="ประวัติ" component={HistoryScreenNavi} options={{headerShown: false,tabBarIcon: () => {
        return <AntDesign name="calendar" size={45} color="black" />}
      }}/>
    </Tab.Navigator>
  )
}
function MainScreenNavi() {
  return (
    <Stack.Navigator  screenOptions={{
      headerStyle: { backgroundColor: "#71B2FF" },
      headerTintColor: "black",
      headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
    }}>
        <Stack.Screen
        options={{ headerShown: false }}
        name="Stackแคลอรี่วันนี้"
        component={MainScreen}/>
    </Stack.Navigator>
  )
}
function MenuScreenNavi(){
  return(
    <Stack.Navigator  screenOptions={{
      headerStyle: { backgroundColor: "#71B2FF" },
      headerTintColor: "black",
      headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
    }}>
      <Stack.Screen options={{ headerShown: false }} name="Stackรายการแคลอรี่" component={MenuScreen}/>
    </Stack.Navigator>
  )
}

function HistoryScreenNavi(){
  return(
    <Stack.Navigator  screenOptions={{
      headerStyle: { backgroundColor: "#71B2FF" },
      headerTintColor: "black",
      headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
    }}>
      <Stack.Screen options={{ headerShown: false }} name="Stackประวัติ" component={HistoryScreen}/>
    </Stack.Navigator>
  )
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      {Login()}
    </NavigationContainer>
  );
}
