import React from 'react'
import {View, Text} from 'react-native'
import styles from './BottomGroupButtonStyle'
import {
    Button
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../../comon/colors/colors'

export default function({onPressAddIntoGroup, onPressChatDirect}) {
    return (
        <View style = {styles.container}>
            <CusButton 
                name = 'user-friends'
                style = {{backgroundColor: colors.red}}
                onPress = {onPressAddIntoGroup}
            />
            <CusButton 
                name = 'comments'
                style = {{backgroundColor: colors.boldGreen}}
                onPress = {onPressChatDirect}
            />
        </View>
    )
}

const CusButton = ({name, style, onPress}) => {
    return (
        <Button rounded
            style = {[styles.button, style]}
            onPress = {onPress}
        >
            <Icon name = {name} size = {20} color = {colors.white}/>
        </Button>
    )
}