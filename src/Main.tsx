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
  } from 'react-native';
import { useState } from "react";
  import MainPageBanner from "./components/MainPageBanner";
  import SearchBar from "./components/SearchBar";
  import { Keyboard, TouchableWithoutFeedback } from "react-native";


  function Main() : React.JSX.Element {
    const [inputText, setInputText] = useState('');

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
       <MainPageBanner></MainPageBanner>
       <View style={styles.SearchBar}>
       <SearchBar  inputText={inputText} setInputText={setInputText}></SearchBar>
       </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, // Takes up full height of the screen
    },
    SearchBar: {
      marginLeft:'5%',
      marginTop:'7%',

    }

  });
  

export default Main;