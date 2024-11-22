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

    import { Keyboard,TouchableWithoutFeedback } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";



import HomeNav from "./navigation/HomeStackNav";
import LibraryNav from "./navigation/LibraryStackNav";
import ProfileNav from "./navigation/ProfileStackNav";
import SearchNav from "./navigation/SearchStackNav";
import PlayPage from "./Pages/PlayPage";

type AppNavType = {
    HomeNav : undefined,
    SearchNav : undefined,
    LibraryNav : undefined,
    ProfileNav : undefined,
};


const AppNav = createBottomTabNavigator<AppNavType>();


function Main() : React.JSX.Element {


    return (
        <NavigationContainer>
            <AppNav.Navigator screenOptions={{
                headerShown: false,
            }}>
                <AppNav.Screen name="HomeNav" component={HomeNav}/>
                <AppNav.Screen name="SearchNav" component={SearchNav}/>
                <AppNav.Screen name="LibraryNav" component={LibraryNav}/>
                <AppNav.Screen name="ProfileNav" component={ProfileNav}/>
            </AppNav.Navigator>
        </NavigationContainer>

    );

}


export default Main;