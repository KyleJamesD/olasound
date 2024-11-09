import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import LibraryPage from "../Pages/LibraryPage";



type HomeStackParams = {
    LibraryPage : undefined,
}

const HomeStack = createNativeStackNavigator<HomeStackParams>();


function LibraryNav() : React.JSX.Element {

    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name="LibraryPage" component={LibraryPage}/>
        </HomeStack.Navigator>
    );
}

export default LibraryNav;