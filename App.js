import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const stack = createNativeStackNavigator();
export default function App() {
 return (
      <NavigationContainer>
        <stack.Navigator initialRouteName='LoginScreen'
        screenOptions={{headerStyle: {backgroundColor: "#71B2FF"}, headerTintColor: "black", 
        headerTitleStyle: {fontWeight: 'bold', fontSize: 25}}}>
          <stack.Screen options={{headerShown: false}}  name='เข้าสู่ระบบ' component={LoginScreen}/>
          <stack.Screen name='สมัครสมาชิก' component={RegisterScreen}/>
          <stack.Screen name='ข้อมูลส่วนตัว' component={ProfileScreen}/>
        </stack.Navigator>
      </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },
 screens: {
  backgroundColor: '#D9D9D9'
},
});