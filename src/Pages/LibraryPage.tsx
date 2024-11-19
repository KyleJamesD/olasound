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




function LibraryPage ({ navigation, route }: {navigation: any, route: any }) : React.JSX.Element {




    return (
        <View style={styles.container}>
            <Text>Library Page</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      height: 815.28, // Takes up full height of the screen - the bottomtabNavigator
      
    }

})

export default LibraryPage;