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

export default function({field, placeholder, onTextChange, require, style, disable, value}) {
    return (
        <View {...style}>
            <Text style= {styles.field} >{field}: {require && '(*)'}</Text>
            <Item regular bordered style = {styles.containerInput}>
                <Input
                    placeholder = {placeholder}
                    style = {styles.input}
                    onChangeText = {onTextChange}
                    disabled = {disable}
                    value = {value}/>
             </Item>
        </View>
    )
}