import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Image,
    Pressable
  } from 'react-native';
  

  type InputBoxProps = {
    inputText: string;
    setInputText: (text: string) => void;
    SearchIconPress: (text: string) => void;
    placeHolderText?: string; 
 };

  function SearchBar(props : InputBoxProps) : React.JSX.Element {

    let inputText = props.inputText;
    let setInputText = props.setInputText;
    let SearchIconPress = props.SearchIconPress;
    let placeHolderText = props.placeHolderText || 'Search for songs, artists, or albums...';



    return (
      
      <View style={styles.inputArea}>
        <Pressable onPress={()=>SearchIconPress(inputText)}>
        <Image
        source={require('../../../assets/icons/search.png')} // Adjust the path based on your folder structure
        style={styles.iconStyle} // Apply styles to the image
      />
      </Pressable>
      <TextInput
      style={styles.inputField}
      placeholder={placeHolderText}
      value={inputText}
      onChangeText={setInputText}
      onSubmitEditing={SearchIconPress} // Trigger search on Enter, this causes a typescript error due to onSubmitEditing expecting the function passed to be an event, but it works 
      returnKeyType="search" // Set keyboard Enter key to show "Search"
      />
      </View>

    );
  }

  const styles = StyleSheet.create({
    inputArea: {
      width: '90%',
      flexDirection: 'row',  // Align the icon and input horizontally
      alignItems: 'center',
      borderRadius: 25,
      elevation: 10,
      backgroundColor: '#F5F5F5',
  },
  inputField: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,  // Set the width of the image
    height: 20, // Set the height of the image
    marginRight: 10,  // Space between the icon and input
    marginLeft:15,
  },
  }) 

export default SearchBar;