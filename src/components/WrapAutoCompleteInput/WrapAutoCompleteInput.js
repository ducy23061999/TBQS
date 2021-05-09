import React from 'react'
import {
    View
} from 'react-native'
import styles from './WrapAutoCompleteStyle'
import {
    Input,
    Text,
    Item
} from 'native-base'
import AutoCompleleInput from '../InputAutocomplete'
import Tags from '../Tags';
import { ScrollView } from 'react-native-gesture-handler'

export default function({field, require, value, data, onSelectedItem, onValueChange}) {
    return (
        <View>
            <Text style= {styles.field} >{field}: {require && '(*)'}</Text>
            <Item regular bordered style = {styles.containerInput}
            >
                <Input
                    style = {styles.input}
                    onChangeText = {onValueChange}
                    value = {value}/>
                </Item>
                <ScrollView contentContainerStyle = {styles.autocompleteContain}>
                    <Tags 
                        data = {data}
                        onTagClick = {(tag) => onSelectedItem(tag)}
                    />
                </ScrollView>
        </View>
    )
}