import React from 'react'
import { View, Image, Text, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import styles from './BlurImageStyles'
import images from '../../images'
import Utils from '../../comon/Utils'

export default function({uri}) {
    return (
        <View style={styles.container}>
            <Image
                key={'blurryImage'}
                source={images.thumnail}
                style={[styles.absolute]}
            />
            <BlurView
                style={[styles.absolute]}
                blurType= "dark"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
            />
        </View>
    )
}