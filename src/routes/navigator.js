import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Home from '../screen/home'
import  Search from '../screen/search'
import  Settings from '../screen/settings'



const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Search" component={Search} />
    <AppStack.Screen name="Settings" component={Settings} />
    </AppStack.Navigator>

    </NavigationContainer>
    );
}