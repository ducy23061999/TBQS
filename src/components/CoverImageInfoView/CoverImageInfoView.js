import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import {
    Body,
    Card,
    CardItem,
    Button
} from 'native-base'

import styles from './CoverImageInfoStyle'
import images from '../../images'
import Ionicons from 'react-native-vector-icons/FontAwesome5';

export default function({title, desc, image, onClickUpLoad}) {
    return (
        <View style = {styles.container}>
             { onClickUpLoad &&
                 <UploadImageView callback = {onClickUpLoad}/>
            }
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

export const UploadImageView = ({callback}) => {
    return (
        <TouchableOpacity 
            onPress = {callback}
            style={styles.uploadView}>
            <Ionicons name='images' size={30} style = {styles.photoIcon}/>
        </TouchableOpacity>
    )
}