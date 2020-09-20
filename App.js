import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home";
import Settings from "./components/Settings";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Øvelse 3</Text>
      <StatusBar style="auto" />

      <Home/>

      <Settings/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
