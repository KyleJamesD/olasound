import React from "react";
import {
  SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    PermissionsAndroid,
    Linking,
    Alert,
    TouchableOpacity,
    Pressable,
  } from 'react-native';
import { useState } from "react";


type info = {
    text : string;
    color1: string;
    color2: string;
}



function TopMixesButton (props : info) : React.JSX.Element {

const text = props.text;
const color1 = props.color1;
const color2 = props.color2;

    function consoleWrite (text : string) {
        console.log(text + ' Has been Pressed');
    }


    return (
        <View>
            <Pressable style={[styles.pressable, { backgroundColor: color2 }]}
            onPress={()=>consoleWrite(text)}>
            <Text style={[styles.text, { color: color1 }]}>{text}</Text>
            </Pressable>
        </View>
    )
};



const styles = StyleSheet.create ({

    text: {
        padding: '4%',
        fontSize: 14,
        fontWeight: '400',

    },
    pressable: {
        borderRadius: 25,
        margin: 6,
    },

});


export default TopMixesButton;