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
      Image,
      Button,
      Pressable,
    } from 'react-native';

    import { useRef } from "react";
    import { useEffect } from "react";
    import { useState } from "react";

    import MainPageBanner from "../components/kyle/MainPageBanner";

    import TrackPlayer , { useProgress } from 'react-native-track-player';
import { setupPlayer } from "react-native-track-player/lib/src/trackPlayer";




function PlayPage({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {

    const  {songid, song, artist, albumn, albumnCover, preview, } = route.params;

//**For the track bar eventually */
    const progress = useProgress();
    let circleprogress = progress.position / 31 * 100; // since we know all our track are aprox 30seconds, in real app this would be set dynamically unfortunatel React native trackplayer has no means to give us the actual time and division by zero may occour if we were to use the buffered time.

    const [playpause, setPlayPause] = useState(false);

      useEffect(() => {
        // Call the setup function
        console.log('setup has run and the new song should load')
        setup2();
        setPlayPause(false);
      }, [route.params]);

      

      const setup2 = async () => {
      await TrackPlayer.reset();
        await TrackPlayer.add({
          url:(preview),
          //artwork: require(albumnCover)
        });

      };

      


    function playPauseButton () {
      if(!playpause){
        TrackPlayer.play();
        setPlayPause(true);
      }
      else{
        TrackPlayer.pause();
        setPlayPause(false);
      }
            
    }


    function pausebutton () {
            TrackPlayer.pause(); 
    }
    



    return (
        <View style={styles.container}>
            <MainPageBanner title='Play Page'></MainPageBanner>
            <View style={styles.songContent}>
            <Text style={styles.songTitle}>{song}</Text>
            <Text style={styles.artistTitle}>{artist}</Text>
            <Image style={styles.image} source={typeof albumnCover === 'string' ? { uri: albumnCover } : require('../../assets/icons/noimgfound.jpg')}></Image>
            
            <Pressable onPress={playPauseButton}><Image  style={styles.playbutton} source={playpause === false ? require('../../assets/icons/play.png') : require('../../assets/icons/pause.png')}></Image></Pressable>
            </View>



            <View style={styles.containertrackbar}>
                  {/* Progress Bar */}
                  <View style={styles.trackBar}>
                    <View style={[styles.circle,{left:`${circleprogress}%`}]}  />
                  </View>
                  {/* Time Text (Start and End) */}
                  
                </View>


                <View style={styles.timetimecontainer}>
                  <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{progress.position}</Text>
                    <Text style={styles.timeText}>{progress.buffered}</Text>
                  </View>
                  </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      height: 815.28, // Takes up full height of the screen - the bottomtabNavigator
    },
    image: {
        width: 200,  // Set the width of the image
        height: 200,
        borderRadius: 5,

    },
    songContent: {
        alignItems: 'center',
    },
    songTitle: {
        fontSize: 40,
        color: 'black',
        fontStyle: 'italic',
        fontWeight: '600',
        marginTop: '5%',
    },
    artistTitle: {
        marginBottom: '2%'
    },
    playbutton: {
        width: 100,  // Set the width of the image
        height: 100,
        marginTop: '5%'
    },
     /******************CSS properties for the Track Bar********************* */
     containertrackbar: {
      width: '90%',
      height: 20,
      paddingHorizontal: 10,
      marginTop: 30,
      alignSelf:'center',
    },

    timetimecontainer: {
      alignItems:'center',
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'85%',
    },
    timeText: {
      fontSize: 14,
    },
    trackBar: {
      position: 'relative',
      height: 5,
      backgroundColor: '#ddd',
      borderRadius: 2.5,
      marginTop: 5,
      justifyContent: 'center',
    },
    circle: {
      position: 'absolute',
      left: '25%', // Adjust this dynamically if needed
      width: 15,
      height: 15,
      borderRadius: 7.5,
      backgroundColor: '#000',
    },
})
export default PlayPage;