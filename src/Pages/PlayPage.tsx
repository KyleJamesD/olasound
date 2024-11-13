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



function PlayPage({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {


    const  {songid, song, artist, albumn, albumnCover, preview, } = route.params;
    console.log(route.params)

    return (
        <View>
            <Text>Play Page</Text>
        </View>

    )

}


export default PlayPage;