import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
    Splash,
    Intro
} from '../screens'
import {Screens} from '../comon/Constants'
import MainNavigate from './MainNavigate'
import AuthNavigate from './AuthNavigate'

const Stack = createStackNavigator()
const AppNavigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = {Screens.Splash}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name = {Screens.Splash} component = {Splash}/>
                <Stack.Screen name = {Screens.Intro} component = {Intro}/>
                <Stack.Screen name = {Screens.AuthNavigate} component = {AuthNavigate} />
                <Stack.Screen name = {Screens.MainNavigate} component = {MainNavigate}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// options={{
//     tabBarVisible: false,
// }}

export default AppNavigate;