import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function AboutPage(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Ola Sound</Text>
      <Image
        source={require('../../assets/res/logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.text}>API: Deezer</Text>
      <Text style={styles.text}>Developer: Kyle, Kwin, Junction</Text>
      <Text style={styles.text}>Date: 2024/12</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5", 
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    text: {
      fontSize: 18,
      color: "#333",
      textAlign: "center",
      marginVertical: 5,
      fontWeight: "500",
      letterSpacing: 0.5,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: 20,
      textAlign: "center",
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 20,
      resizeMode: 'contain',
    },
  });

export default AboutPage;

