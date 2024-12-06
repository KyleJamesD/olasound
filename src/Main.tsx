import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeNav from "./navigation/HomeStackNav";
import LibraryNav from "./navigation/LibraryStackNav";
import ProfileNav from "./navigation/ProfileStackNav";
import SearchNav from "./navigation/SearchStackNav";
import TabIcon from "./components/junxian/TabIcon";
import LoginPage from "./Pages/LoginPage";
import { MusicProvider } from "./components/xuekun/MusicContext";
import FloatingMusicButton from "./components/xuekun/FloatingMusicButton";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import LibraryPage from "./Pages/LibraryPage";
import ProfilePage from "./Pages/ProfilePage";
import PlayPage from "./Pages/PlayPage";
import PlayListDetailPage from "./Pages/PlayListDetailPage";

type AppNavType = {
    HomeNav : undefined,
    SearchNav : undefined,
    LibraryNav : undefined,
    ProfileNav : undefined,
};


const AppNav = createBottomTabNavigator<AppNavType>();
const Stack = createNativeStackNavigator();

function MainApp() {
  return (
    <>
    <AppNav.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon
            route={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        tabBarActiveTintColor: "#3a6d8c",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <AppNav.Screen name="HomeNav" component={HomePage} />
      <AppNav.Screen name="SearchNav" component={SearchPage} />
      <AppNav.Screen name="LibraryNav" component={LibraryPage} />
      <AppNav.Screen name="ProfileNav" component={ProfilePage} />
    </AppNav.Navigator>
    <FloatingMusicButton/>
    </>
  );
}

export default function Main() {
  return (
    <NavigationContainer>
      <MusicProvider>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayPage"
          component={PlayPage}
          
        />
        <Stack.Screen
          name="PlayListDetailPage"
          component={PlayListDetailPage}
          options={{ title: '' }} 
        />
      </Stack.Navigator>
      </MusicProvider>
    </NavigationContainer>
  );
}