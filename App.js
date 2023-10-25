import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyNavigator from "./navigation/MyNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import userReducer from "./store/reducers/userReducer";

import AddFood from "./screens/AddFood";
import AllCal from "./screens/AllCal";

import CalActivities from "./screens/CalActivities";
import CalFoods from "./screens/CalFoods";


const rootReducer = combineReducers({
  account: userReducer,
 });
 const store = createStore(rootReducer);
 

export default function App() {
  return (
    <Provider store={store}>
      <MyNavigator />
    </Provider>


    // <AddFood/>
    // <AllCal/>
    // <CalActivities/>
    // <CalFoods/>
    
      

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

