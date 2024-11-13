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
  import MainPageBanner from "../components/kyle/MainPageBanner";
  import SearchBar from "../components/kyle/SearchBar";
  import { Keyboard, TouchableWithoutFeedback } from "react-native";
  import TopMixesButton from "../components/kyle/TopMixesButton";
  import Song from "../components/kyle/Song";



  //*********************************Context Provider************************************************/


  function HomePage({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {
    const [inputText, setInputText] = useState("");
    console.log(inputText)



    // Navigate to the Search Page with the Searched Item
    const SearchIconPress = () => {
      console.log('Home page inputtext:'+ inputText);
      // Navigate to 'SearchNav' stack navigator, specifically targeting 'SearchPage'
      navigation.navigate('SearchNav', {
        screen: 'SearchPage', // Specify the exact screen within SearchNav
        params: { inputText }, // Pass inputText as a parameter
      });
    };

    

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <MainPageBanner title="Ola Sound" msg="Your Personal Music Journey" ></MainPageBanner>
          <View style={styles.SearchBar}>
            <SearchBar SearchIconPress={SearchIconPress}  inputText={inputText} setInputText={setInputText}></SearchBar>
          </View>
          <ScrollView>
                <Text style={styles.topMixesTitle}>Your Top Mixes</Text>
              <View style={styles.mixesButtonsContainer}>
                <TopMixesButton text="Chill Vibes" color1="#1565c0" color2="#e3f2fd"></TopMixesButton>
                <TopMixesButton text="Workout Beats" color1="#ef6c00" color2="#fff3e0"></TopMixesButton>
                <TopMixesButton text="Focus Flow" color1="#2e7d32" color2="#e8f5e9"></TopMixesButton>
                <TopMixesButton text="Throwback Hits" color1="#c2185b" color2="#fce4ec"></TopMixesButton>
              </View>
              <Text style={styles.recommendedTitle}>Recommended for You</Text>

              <View style={styles.songlist}>
              <Song song="Starlight Serenade" artist="Luna Nova" albumn="Cosmic Pop"  albumnCover="https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=500&h=500"></Song>
              </View>
              {/** */}

          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, // Takes up full height of the screen
    },
    SearchBar: {
      alignItems:'center',
      marginTop:'8%',

    },
    topMixesTitle: {
      fontSize: 24,
      fontWeight: '600',
      marginLeft: '10%',
      marginTop: '5%',
      color: '#000',
    },
    mixesButtonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '90%',
      marginLeft: '8%',
      marginTop: '3%',

    },
    recommendedTitle: {
      fontSize: 24,
      fontWeight: '600',
      marginLeft: '3%',
      marginTop: '2%',
      color: '#000',
      marginBottom: '2%'

    },
    songlist: {
      alignItems: 'center',
    },


  });
  

export default HomePage;