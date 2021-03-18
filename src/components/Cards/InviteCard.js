import React from 'react'
import {View} from 'react-native'
import {
    Card,
    CardItem,
    Body,
    Text,
    Button
} from 'native-base'
import styles from './CardStyle'
import Ionicons from 'react-native-vector-icons/FontAwesome5';

export default function InviteCard({}) {
    return (
        <Card>
            <View style = {styles.inviteCardContain}>
                <Button style = {styles.acceptButton}>
                    <Ionicons name = 'check' style = {styles.functionInviteImage}/>
                </Button>
                <Button style = {styles.denyButton}>
                    <Ionicons name = 'times' style = {styles.functionInviteImage}/>
                </Button>
            </View>
        </Card>
    )
}