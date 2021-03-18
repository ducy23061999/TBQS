import React from 'react'
import {
    View,
    Text,
    Icon
} from 'native-base'
import ActionButton from 'react-native-action-button';
import styles from './FloatButtonStyle'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../comon/colors/colors'

export default function ({}) {
    const MyIcon = () => {
        return (
            <Ionicons name="chevron-up" style={styles.actionButtonIcon} />
        )
    }
    return (
        <ActionButton buttonColor="rgba(231,76,60,1)"
            renderIcon = {MyIcon}
        >
            
            <ActionButton.Item buttonColor={colors.boldGreen} title="Share" onPress={() => console.log("notes tapped!")}>
                <Ionicons name="share" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Discard" onPress={() => {}}>
                <Ionicons name="times" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#9b59b6' title="Saved change" onPress={() => console.log("notes tapped!")}>
                <Ionicons name="save" style={styles.actionButtonIcon} />
            </ActionButton.Item>
           
        </ActionButton>
    )
}