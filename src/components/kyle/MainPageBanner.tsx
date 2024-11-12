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
  import LinearGradient from "react-native-linear-gradient";


  function MainPageBanner({ title , msg }: { title: string, msg?: string }) : React.JSX.Element {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#3a6d8c', '#ead8b1']} // Gradient colors from top to bottom
          style={styles.LinearGradient}>
          <View style={styles.textContainer}>
          <Text style={styles.lineargradientText}>{title}</Text>
          <Text style={styles.lineargradientTextSmall}>{msg}</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: '23.5%'
    },
    LinearGradient: {
      width: '100%', // Full width of the screen
      height: '100%', // 23.5% of the screen height
      // allows all child containers with absolute to positions themselves by the linear gradients dimension and not the full view port.
    },
    textContainer: {
      // Position the text absolutely within the LinearGradient
      top: '55%', // Position it 65% down
      left: '6%', // position by the left side of the text 
    },
    lineargradientText: {
      color: '#FFF',
      fontSize: 32,
      fontWeight: '700',
    },
    lineargradientTextSmall: {
      color: '#FFF',
      paddingLeft: '1%',
    },
  });
  

export default MainPageBanner;