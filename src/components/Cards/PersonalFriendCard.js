import React from 'react'
import {
    View,
    Text,
    Card,
    CardItem,
    Body,
    Badge
} from 'native-base'
import {Image, TouchableOpacity} from 'react-native'
import Tags from '../Tags'
import styles from './CardStyle'
import images  from '../../images'
import { SharedElement } from 'react-navigation-shared-element';


export default function PersonalFriendCard({onPress, item, horizontal}) {
    const wrapOnpress = () => {
      return onPress(item)
    }
    
    const containStyle = horizontal ? {width: 200, height: 300, margin: 8} : styles.cardContainer
    return (
      <TouchableOpacity 
        onPress = {wrapOnpress} 
        style = {containStyle}
        activeOpacity = {1}
      >
        <Card>
            <CardItem style = {{overflow: 'hidden'}}>
                <Body>
                  <SharedElement id={`friend_item.${item}.photo`} style = {{width: '100%'}}>
                    <Image 
                      source = {images.thumnail} 
                      resizeMode = 'cover'
                      style = {styles.friendCardImage}
                    />
                  </SharedElement>
                  <View>
                    <Text style = {styles.titleText}>Trần Đức Ý</Text>
                    <Badge info style = {styles.personInfoMargin} >
                      <Text 
                        style = {styles.descText}
                        lineBreakMode = 'tail'
                        numberOfLines = {1}
                      >
                        Công nghệ thông tin
                      </Text>
                    </Badge>
                  </View>
                  <Tags />
                </Body>
                <CardBadge distance = {3}/>
            </CardItem>
        </Card>
      </TouchableOpacity>       
    )
}
export const CardBadge = ({distance}) => {
  return (
      <View 
        style = {[
            styles.badgeContainer, 
            styles.badgeForPerson
        ]}>
          <Text style = {styles.badge}>  {distance} Km</Text>
      </View>
  )
}
