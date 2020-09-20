import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/NavigationComponents/SettingsScreen";



/*
Husk at begge skal importeres.
1. skal vi have en container med som bruges i default (rd. "MAIN") metoden
2. skal vi have importer selve bottom navigation componenten
 */
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import DetailsScreen from "./components/NavigationComponents/DetailsScreen";
import stackNavigator from "./components/NavigationComponents/DetailsScreen";
import SettingStack from "./components/StackNavigation";



const tabNavigator = createBottomTabNavigator(
    /*
    Routes er selfølgelig en reference til den screen der skal vises
    */

    {
      Home: {
          screen: HomeScreen
      },
      Settings: {
          /*
          Kalder SettingsStack for at have navigation frem og tilbage med stacks
           */
          screen: SettingStack
      },

},
    /*
    Generelle label indstillinger
     */
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

