import React from 'react'
import {
    Button
} from 'native-base'
import {StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import layouts from '../../comon/layout/layout'
import colors from '../../comon/colors/colors'

export default function({...props}) {
    return (
        <Button
            style = {styles.container}
            rounded
            onPress = {() => {
                props.navigation.goBack();
            }}
            activeOpacity = {0.4}
        >
            <Icon 
                name = 'long-arrow-alt-left' 
                size = {25}
                color = {colors.white}
                style = {styles.bColor}
            />
            
        </Button>
    )
}

const styles = StyleSheet.create({
    container: {
        ...layouts.rowCenterCenter,
        position: 'absolute',
        width: 55,
        height: 55,
        left: 16,
        top: 30,
        backgroundColor: colors.greyTransparent,
        zIndex: 3
    },
    icon: {

    },
    bColor: {
        backgroundColor: colors.greyTransparent
    }
})