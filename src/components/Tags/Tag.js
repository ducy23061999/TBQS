import React from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native'
import styles from './TagsStyle'

export default function Tag({key, tag, onPress}) {
    return (
        <TouchableOpacity 
            key={key} 
            onPress={onPress}
            style = {styles.tagContainer}
        >
          <Text style = {styles.tagText}>{tag}</Text>
        </TouchableOpacity>
    )
}