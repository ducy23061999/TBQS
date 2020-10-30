import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import {
    Body,
    Card,
    CardItem
} from 'native-base'

import styles from './CoverImageInfoStyle'
import images from '../../images'

export default function({title, desc, image}) {
    return (
        <View style = {styles.container}>
            <Image 
                source = {images.thumnail} 
                resizeMode = 'cover'
                style = {styles.coverImage}
            />
            <View style = {styles.absoluteView}>
                <Text 
                    style = {styles.titleText}
                    numberOfLines = {2} 
                >
                    {title}
                </Text>
                <Text
                    style = {styles.descText}
                    numberOfLines = {2}
                > 
                    {desc}
                </Text>
            </View>
        </View>
    )
}