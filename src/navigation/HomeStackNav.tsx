import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Pages/HomePage";



type HomeStackParams = {
    HomePage : undefined,
}

const HomeStack = createNativeStackNavigator<HomeStackParams>();


function HomeNav() : React.JSX.Element {

    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name="HomePage" component={HomePage}/>
        </HomeStack.Navigator>
    );
}

export default HomeNav;