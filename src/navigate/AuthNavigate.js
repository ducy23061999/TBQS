import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
    Auth,
    Login,
    SignUp
} from '../screens'

const Stack = createStackNavigator()
const AuthNavigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Auth">
                <Stack.Screen name = "Auth" component = {Auth}/>
                <Stack.Screen name = "Login" component = {Login}/>
                <Stack.Screen name = "SignUp" component = {SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigate;