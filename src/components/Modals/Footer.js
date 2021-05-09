import React, {useState} from 'react'
import styles from './styles'
import { View } from 'react-native'
import {
    Text,
    Button
} from 'native-base'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/FontAwesome5';

export default function({children}) {
    
    return (
        <View style = {styles.footerContain}>
            {children}
        </View>
       
    )
}
