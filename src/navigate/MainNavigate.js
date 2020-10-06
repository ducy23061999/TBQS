import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Home,
    Chat,
    Profile
} from '../screens'

const Tab = createBottomTabNavigator()
const MainNavigate = () => {
   return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {Home}/>
            <Tab.Screen name = "Chat" component = {Chat}/>
            <Tab.Screen name = "Profile" component = {Profile}/>
        </Tab.Navigator>
    </NavigationContainer>
   )
}

export default MainNavigate;