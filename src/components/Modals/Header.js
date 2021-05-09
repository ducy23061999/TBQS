import React, {useState} from 'react'
import styles from './styles'
import { View } from 'react-native'
import {
    Text,
    Button
} from 'native-base'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/FontAwesome5';

export default function({name, onClickClose}) {
    
    return (
        <View style = {styles.headerContain}>
            <Text style = {styles.headerText}>{name}</Text>
            <Button
            hitSlop = {{top: 10, bottom: 10, left: 10, right: 10}}
            onPress = {onClickClose}
            transparent>
                <Ionicons name= {'times'} size={30} />
            </Button>
        </View>
    )
}
