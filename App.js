import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./components/HomeScreen";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import SettingStack from "./components/StackNavigation";
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

/*
Husk at begge skal importeres.
1. skal vi have en container med som bruges i default (rd. "MAIN") metoden
2. skal vi have importer selve bottom navigation componenten
 */

const tabNavigator = createBottomTabNavigator(
    /*
    Routes er selfølgelig en reference til den screen der skal vises
    */

    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                /*Navn*/
                tabBarLabel: "Home Page",
                /*Ikon*/
                tabBarIcon: ({tintColor}) => (
                    <Entypo name="home" size={24} color={tintColor}/>
                )
            },
        },
        Settings: {
            /*
            Kalder SettingsStack for at have navigation frem og tilbage med stacks
             */
            screen: SettingStack,
            navigationOptions: {
                tabBarLabel: "Settings",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-settings" size={24} color={tintColor}/>
                )
            }
        },

    },
    /*
    Generelle label indstillinger
     */
    {
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            size: 40
        }
    }
)

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

