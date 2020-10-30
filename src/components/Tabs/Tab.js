import React from 'react';
import {
    TabHeading,
    Icon
} from 'native-base'
import {
    View,
    Text
} from 'react-native'
import styles from './TabsStyle'

export const DefaultTab = ({text, iconName}) => {
    return (
        <>
            {iconName && <Icon name= {iconName} />}
            <Text style = {styles.textInTab}>{text}</Text>
        </>
    )
}