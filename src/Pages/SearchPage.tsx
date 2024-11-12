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
    import { useEffect } from "react";
    import { Keyboard,TouchableWithoutFeedback } from 'react-native';


    import MainPageBanner from "../components/kyle/MainPageBanner";
    import SearchBar from "../components/kyle/SearchBar";




function SearchPage({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {

    const {inputText} = route.params;
    const [inputTextNew, setInputTextNew] = useState(inputText);
    console.log(inputTextNew)
    

    // must use route.params and not inputText as the dependancy otherwise routing from homepage with the same search will not update
    // on the second load, only the first load, this is because inputText does not change however it could be different from inputtextnew. useing route.params
    // as the dependancy forces useeffect to run each time we navigate to the page and the setInputTextNew(inputText); to run allowing us to update the inputText  
    //of the Searchbar evertyime even if we are navigating to the page with the same data. 
    useEffect(() => {
        console.log('SearchPage:' + inputText);
        setInputTextNew(inputText);
      }, [route.params]); 
    


      //Call the API and display the results in a mapped list on button press.
    function SearchIconPress () {
        console.log (inputTextNew);
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <MainPageBanner title="Search"></MainPageBanner>
            <View style={styles.SearchBar}>
            <SearchBar SearchIconPress={SearchIconPress} placeHolderText={inputTextNew} inputText={inputTextNew} setInputText={setInputTextNew}></SearchBar>
            </View>
        </View>
        </TouchableWithoutFeedback>

    )

}

  
const styles = StyleSheet.create({
    container: {
      flex: 1, // Takes up full height of the screen
    },
    SearchBar: {
        alignItems:'center',
        marginTop:'8%',
  
      },
})

export default SearchPage;