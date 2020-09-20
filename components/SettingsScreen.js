import React, {Component} from 'react'
import View from "react-native-web/dist/exports/View";
import Text from "react-native-web/dist/exports/Text";
import {StyleSheet} from "react-native";

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>Dette er Settings Screen </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0043FF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        fontSize: 100,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    }

});