import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Pages/HomePage";
import PlayPage from "../Pages/PlayPage";



type HomeStackParams = {
    HomePage : undefined,
    PlayPage : {
        songid: string;
        song: string;
        artist: string;
        albumn: string;
        albumnCover: string;
        preview: string;
      };
}

const HomeStack = createNativeStackNavigator<HomeStackParams>();


function HomeNav() : React.JSX.Element {

    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name="HomePage" component={HomePage}/>
            <HomeStack.Screen name="PlayPage" component={PlayPage}/>
        </HomeStack.Navigator>
    );
}

export default HomeNav;