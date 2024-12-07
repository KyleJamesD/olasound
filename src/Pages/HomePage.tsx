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
import { useEffect } from "react";
  import TrackPlayer from "react-native-track-player";
import { useState } from "react";
  import MainPageBanner from "../components/kyle/MainPageBanner";
  import SearchBar from "../components/kyle/SearchBar";
  import { Keyboard, TouchableWithoutFeedback } from "react-native";
  import TopMixesButton from "../components/kyle/TopMixesButton";
  import Song from "../components/kyle/Song";
  import { RepeatMode } from 'react-native-track-player';





  function HomePage({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {


    const [inputText, setInputText] = useState("");

    console.log(inputText)



    // Navigate to the Search Page with the Searched Item
    const SearchIconPress = () => {
      console.log('Home page inputtext:'+ inputText);
      // Navigate to 'SearchNav' stack navigator, specifically targeting 'SearchPage'
      navigation.navigate('SearchNav', { inputText });
    };


/***********************Set up react native Track Player********************** */

    useEffect(() => {
      const setupPlayer = async () => {
        try {
          // Initialize TrackPlayer
          await TrackPlayer.setupPlayer();  // This is the correct method to initialize the player
          console.log('Player setup complete!');
          TrackPlayer.setRepeatMode(RepeatMode.Track); // Sets the Player to keep repeating the track and prevents it from popping it off the queue
  
          // Now the player is ready to be used
          // You can add tracks or interact with other TrackPlayer methods here
        } catch (error) {
          console.log('Error setting up player:', error);
        }
      };
  
      setupPlayer(); // Call the function that sets up the player
    }, []); // Only run on initial render (empty dependency array) except this doesnt work because Im not good enough to fully understand React Navigation, which keeps mounting and unmounting pages......this seems to only happen to use effects  on the PLayPage
 
    

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
              <Song songid= {1234} preview="nopreview" song="Starlight Serenade" artist="Luna Nova" albumn="Cosmic Pop"  albumnCover="https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=500&h=500"></Song>
              </View>
              {/** */}

          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: 815.28, // Takes up full height of the screen - the bottomtabNavigator
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