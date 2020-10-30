import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
    Auth,
    Login,
    SignUp
} from '../screens'
import {Screens} from '../comon/Constants'

const Stack = createStackNavigator()
const AuthNavigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = {Screens.Auth}>
                <Stack.Screen name = {Screens.Auth} component = {Auth}/>
                <Stack.Screen name = {Screens.Login} component = {Login}/>
                <Stack.Screen name = {Screens.SignUp} component = {SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigate;