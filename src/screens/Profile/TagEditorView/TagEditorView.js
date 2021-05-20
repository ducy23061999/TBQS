import React from 'react'
import {
    View,
    Text
} from 'react-native'
import {Tags} from '../../../components';
import styles from './TagEditorStyle'

export default function ({data}) {

    return (
        <View style = {styles.container}>
            <Text style = {styles.fieldText}>Sở thích</Text>
            <View style = {styles.tagContainer}>
                <Tags data = {data}/>
            </View>
        </View>
    )
}