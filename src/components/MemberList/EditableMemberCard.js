import React from 'react'
import {
    Card,
    CardItem,
    Body,
    Left, 
    Right,
    Badge,
    Button
} from 'native-base'
import {View, Text, StyleSheet} from 'react-native'
import layouts from '../../comon/layout/layout'
import Image from '../Image'
import images from '../../images'
import FastImage from 'react-native-fast-image'
import colors from '../../comon/colors/colors'
import fonts from '../../comon/fonts/fonts'
import Ionicons from 'react-native-vector-icons/FontAwesome5';

export default function({name, status, onPressDeleted, image}) {
    return (
        <Card>
            <CardItem>
                <Body style = {styles.cardContain}>
                  <View style = {styles.leftContain}>
                        <Image 
                            uri = {{uri: image}}
                            style = {styles.image}
                            resizeMode = {FastImage.resizeMode.cover}
                        />
                  </View>
                  <View style = {styles.rightContain}>
                        <Text style = {styles.nameText}>{name}</Text>
                        <Badge>
                            <Text style = {styles.badgeText}>Xác minh</Text>
                        </Badge>
                       
                  </View>
                </Body>
            </CardItem>
            { onPressDeleted && 
                <Button 
                    style={styles.closeButton}
                    hitSlop = {{bottom: 10, top: 10, left: 10, right: 10}}
                    onPress = {onPressDeleted}
                >
                    <Ionicons name = 'times-circle' size={30} color= {colors.red}/>
                </Button>
            }
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
    },
    closeButton: {
        backgroundColor: colors.white,
        elevation: 0,
        position: 'absolute',
        top: 0, 
        right: 10
    }
})