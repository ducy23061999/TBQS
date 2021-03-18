import React from 'react'
import {
    View
} from 'react-native'
import styles from './WrapTextInputStyle'
import {
    Input,
    Text,
    Item
} from 'native-base'

export default function({field, placeholder, onTextChange, require, style}) {
    return (
        <View {...style}>
            <Text style= {styles.field} >{field}: {require && '(*)'}</Text>
            <Item regular bordered style = {styles.containerInput}>
                <Input
                placeholder = {placeholder}
                style = {styles.input}
                onChangeText = {onTextChange}/>
             </Item>
        </View>
    )
}