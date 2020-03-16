import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from "../screens/profile";
import AvtarSelection from "../screens/avatar";
import Loading from "../screens/welcome";
import ProfileScreen from "../screens/profile";
import LoginSignup from "../screens/loginSignup";

const Stack = createStackNavigator();

export const SignedIn =()=> (
    <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
        header: () => null,
    }}>
        
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
);

