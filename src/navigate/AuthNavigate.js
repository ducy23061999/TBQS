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
        <Stack.Navigator 
            initialRouteName = {Screens.Login}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name = {Screens.Login} 
                component = {Login}
                
                options={{
                    tabBarVisible: false,
                }}/>
            <Stack.Screen name = {Screens.SignUp} component = {SignUp}/>
        </Stack.Navigator>
    )
}

export default AuthNavigate;