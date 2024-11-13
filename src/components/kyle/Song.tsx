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
    Image,
  } from 'react-native';
import { useState } from "react";


type songdetails  = {
    song : string;
    artist : string;
    albumn : string;
    albumnCover : string;
}

  function Song (props : songdetails) : React.JSX.Element {

  const  {song, artist, albumn, albumnCover } = props;


  function iconPress () {
    console.log ('Pressed the three dot  Song Icon')
  }
  function songCardPress () {
    console.log ('Pressed the Song Icon')
  }

    return (
        <View  style={styles.container}>
            <Pressable onPress={songCardPress} style={styles.pressable}>
                <Image style={styles.image} source={typeof albumnCover === 'string' ? { uri: albumnCover } : require('../../../assets/icons/noimgfound.jpg')}></Image>
                <View style={styles.songartistalbumncontainer}>
                    <Text style={styles.song}>{song}</Text>
                    <View style={styles.artistalbumn}>
                        <Text style={styles.artist}>{artist}</Text>
                        <Text> • </Text>
                        <Text style={styles.albumn}>{albumn}</Text>
                    </View>
                </View>
            </Pressable>
            <Pressable onPress={iconPress}>
                <Image source={require('../../../assets/icons/dots.png')} // Adjust the path based on your folder structure
                style={styles.iconstyle} // Apply styles to the image
                >
                </Image>
            </Pressable>
        </View>
    )

  }

  const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'93%',
        marginTop: 5,
    },
    pressable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 60,  // Set the width of the image
        height: 60,
        borderRadius: 5,
    },
    song: {
        fontSize: 16,
        fontWeight: '500',
        color:'#14181B'

    },
    songartistalbumncontainer: {
        marginLeft: 15,

    },
    artistalbumn: {
        flexDirection: 'row'
    },
    artist: {
        color:'#57636C',
        fontSize: 12,
        fontWeight: '400',

    },
    albumn: {
        color:'#57636C',
        fontSize: 12,
        fontWeight: '400',

    },
    iconstyle: {
    width: 20,  // Set the width of the image
    height: 20, // Set the height of the image
    },

  });


  export default Song;