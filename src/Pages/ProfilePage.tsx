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




function ProfilePage({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {




    return (
        <View>
            <Text>Profile Page</Text>
        </View>

    )

}
const styles = StyleSheet.create({
    container: {
      height: 815.28, // Takes up full height of the screen - the bottomtabNavigator
      borderWidth: 2,
      borderColor: 'red',
      
    },

})

export default ProfilePage;