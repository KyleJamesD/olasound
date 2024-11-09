import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "../Pages/SearchPage";



type HomeStackParams = {
    SearchPage : undefined,
}

const HomeStack = createNativeStackNavigator<HomeStackParams>();


function SearchNav() : React.JSX.Element {

    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name="SearchPage" component={SearchPage} />
        </HomeStack.Navigator>
    );
}

export default SearchNav;