import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import {GroupList} from '../../../components'

export default function({onPress}) {
    return (
        <View style = {{flex: 1}}>
            <GroupList onPress = {onPress}/>
        </View>
    )
}