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
      <AppNav.Screen name="HomeNav" component={HomeNav} />
      <AppNav.Screen name="SearchNav" component={SearchNav} />
      <AppNav.Screen name="LibraryNav" component={LibraryNav} />
      <AppNav.Screen name="ProfileNav" component={ProfileNav} />
    </AppNav.Navigator>
  );
}

export default function Main() {
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}