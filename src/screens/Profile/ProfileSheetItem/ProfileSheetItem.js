import React from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './ProfileSheetStyle'

export default function({field, onPressItem, ...props}) {
    return (
        <TouchableOpacity style = {[styles.container]}>
            <Text style = {styles.fieldText}>{field}: </Text>
            <View style = {styles.rightView}>
             {props.children}
            </View>
        </TouchableOpacity>
    )
}