import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";



import TabIcon from "./components/junxian/TabIcon";
import FloatingMusicButton from "./components/xuekun/FloatingMusicButton";
import { MusicProvider } from "./components/xuekun/MusicContext";
import HomePage from "./Pages/HomePage";
import LibraryPage from "./Pages/LibraryPage";
import LoginPage from "./Pages/LoginPage";
import PlayListDetailPage from "./Pages/PlayListDetailPage";
import PlayPage from "./Pages/PlayPage";
import ProfilePage from "./Pages/ProfilePage";
import SearchPage from "./Pages/SearchPage";
import AboutPage from "./Pages/AboutPage";

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
          name="AboutPage"
          component={AboutPage}
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