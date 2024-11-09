import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfilePage from "../Pages/ProfilePage";


type HomeStackParams = {
    ProfilePage : undefined,
}

const HomeStack = createNativeStackNavigator<HomeStackParams>();


function ProfileNav() : React.JSX.Element {

    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name="ProfilePage" component={ProfilePage} />
        </HomeStack.Navigator>
    );
}

export default ProfileNav;