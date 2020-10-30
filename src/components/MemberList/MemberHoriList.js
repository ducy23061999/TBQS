import React from 'react'
import {
    View, 
    Text,
    Image
} from 'react-native'
import {
} from 'native-base'
import styles from './MemberListStyle'
import images from '../../images'

export default function MemberHoriList({data}) {
    return (
        <View style = {styles.container}>
            <Member />
            <Member />
            <Member />
            <Member />
            <Member />
        </View>
    )
    
}

const Member = () => {
    return (
        <View style = {[styles.memberContainer, styles.memberMargin]}>
            <Image 
                source = {images.thumnail}
                style = {styles.memberImage}
            />
        </View>
    )
}