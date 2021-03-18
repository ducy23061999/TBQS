import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Home,
    Chat,
    Profile,
    Notifications,
    FriendDetail,
    GroupDetail,
    Manage,
    YourGroup
} from '../screens'
import {Screens} from '../comon/Constants'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../comon/colors/colors'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const ShareStack = createSharedElementStackNavigator();

const HomeStack = () => {
    return (
        <ShareStack.Navigator
            headerMode = 'none'
        >
            <ShareStack.Screen name = {Screens.Home} component = {Home}/>
            <ShareStack.Screen 
                name = {Screens.FriendDetail} component = {FriendDetail}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    const { item } = route.params;
                    return [`friend_item.${item}.photo`];
                }}
            />
            <ShareStack.Screen 
                name = {Screens.GroupDetail} component = {GroupDetail}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    const { item } = route.params;
                    return [`group_item.${item}.photo`];
                }}
            />
        </ShareStack.Navigator>
    )
}

const ManageStack = () => {
    return (
       <Stack.Navigator 
            headerMode = 'none'
            initialRouteName = {Screens.Manage}
        >
           <Stack.Screen name = {Screens.Manage} component = {Manage}/>
           <Stack.Screen name = {Screens.YourGroup} component = {YourGroup}/>
       </Stack.Navigator>

    )
}

const InteractionStack = () => {
    return (
        <Stack.Navigator
            headerMode = 'none'
            initialRouteName = {Screens.Notifications}
        >
            <Stack.Screen name = {Screens.Notifications} component = {Notifications}/>
            <Stack.Screen
                name = {Screens.Chat}
                component = {Chat}
                options={{
                    tabBarVisible: false,
                }}
                />
        </Stack.Navigator>

    )
}

const MainNavigate = () => {
   return (
        <Tab.Navigator
            screenOptions = {screenOptions}
            tabBarOptions = {tabBarColors}
            initialRouteName = {Screens.HomeStack}
        >
            <Tab.Screen name = {Screens.HomeStack} component = {HomeStack}/>
            <Tab.Screen name = {Screens.ManageStack} component = {ManageStack}/>
            <Tab.Screen name = {Screens.NotificationStack} component = {InteractionStack}/>
            <Tab.Screen name = {Screens.Profile} component = {Profile}/>
        </Tab.Navigator>
   )
}


const screenOptions = ({route}) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        switch (route.name) {
            case Screens.HomeStack: 
                iconName = focused ? 'home': 'home';
                break;
            case Screens.ManageStack: 
                iconName = focused ? 'puzzle-piece': 'puzzle-piece'
                break;
            case Screens.NotificationStack: 
                iconName = focused ? 'bell' : 'bell';
                break;
            default: 
                iconName = focused ? 'user' : 'user'
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
})
const tabBarColors =  {
    activeTintColor: colors.primaryGreen,
    inactiveTintColor: 'gray',
    showLabel: false,
    style: {
        height: 60
    }
}
export default MainNavigate;