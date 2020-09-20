import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";

import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";




const tabNavigator = createBottomTabNavigator(
    {
      Home: {
          screen: HomeScreen
      },
      Settings: {
          screen: SettingsScreen
      }
},
    {tabBarOptions: { labelStyle: {fontSize: 24 } } }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default createAppContainer(tabNavigator);







// Nedenstående er fjernet for at react naviagation kan fungere. Hele vores App function erstattes af navigations function
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Øvelse 3</Text>
      <StatusBar style="auto" />

      <HomeScreen/>

      <SettingsScreen/>


    </View>
  );
}

 */

