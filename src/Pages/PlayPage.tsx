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

    import { useEffect } from "react";

    import MainPageBanner from "../components/kyle/MainPageBanner";

    import TrackPlayer , { useProgress } from 'react-native-track-player';




function PlayPage({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {

    const  {songid, song, artist, albumn, albumnCover, preview, } = route.params;
    console.log(route.params)

//**For the track bar eventually */
//const progress = useProgress();
//console.log(progress.position);  
//console.log(progress.buffered);
    


      useEffect(() => {
        
        // Call the setup function
        console.log('setup has run and the new song should load')
        setup();
      }, [route.params]);

      

      const setup = async () => {
      await TrackPlayer.reset();
        await TrackPlayer.add({
          url:(preview),
          //artwork: require(albumnCover)
        });
      
      };

      


    function playbutton () {
            TrackPlayer.play();
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
            
            <Pressable onPress={playbutton}><Image  style={styles.playbutton} source={require('../../assets/icons/play.png')}></Image></Pressable>
            <Pressable onPress={pausebutton}><Image  style={styles.playbutton} source={require('../../assets/icons/play.png')}></Image></Pressable>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Takes up full height of the screen
      paddingBottom: 200,
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
    }
})
export default PlayPage;