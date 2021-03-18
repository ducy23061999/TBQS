import React from 'react'
import {
    Card,
    CardItem,
    Body,
    Left, 
    Right,
    Badge
} from 'native-base'
import {View, Text, StyleSheet} from 'react-native'
import layouts from '../../comon/layout/layout'
import Image from '../Image'
import images from '../../images'
import FastImage from 'react-native-fast-image'
import colors from '../../comon/colors/colors'
import fonts from '../../comon/fonts/fonts'

export default function({name, uri, status}) {
    return (
        <Card>
            <CardItem>
                <Body style = {styles.cardContain}>
                  <View style = {styles.leftContain}>
                        <Image 
                            uri = {images.thumnail}
                            style = {styles.image}
                            resizeMode = {FastImage.resizeMode.cover}
                        />
                  </View>
                  <View style = {styles.rightContain}>
                        <Text style = {styles.nameText}>Hello</Text>
                        <Badge>
                            <Text style = {styles.badgeText}>chưa xác minh</Text>
                        </Badge>
                  </View>
                </Body>
            </CardItem>
        </Card>
    )
}

export const styles = StyleSheet.create({
    cardContain: {
        ...layouts.rowStartCenter
    },
    leftContain: {
        marginRight: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    rightContain: {
        ...layouts.columnSpaceStart,
        height: 60
    },
    nameText: {
        fontFamily: fonts.PoppinsMedium,
        fontSize: 14,
        color: colors.lighGrey
    },
    badgeText: {
        color: colors.white,
        fontFamily: fonts.PoppinsMediumItalic,
        fontSize: 10
    }
})