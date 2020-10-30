import React from 'react'
import {
    View,
    Text,
    Badge
} from 'native-base'
import styles from './VerifyMemberStyle'

export default function({total, verified}) {
    return (
       <View>
            <Badge info>
                <Text>{verified} / {total} members verify</Text>
            </Badge>
       </View>
    )
}