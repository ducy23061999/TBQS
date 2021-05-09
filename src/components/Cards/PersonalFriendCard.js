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
import {CheckBox} from 'native-base'
import { SharedElement } from 'react-navigation-shared-element';
import {useSelector} from 'react-redux'

export default function PersonalFriendCard({onPress, item, horizontal, onPressCheckBox}) {
  const userData = useSelector(state => state.userReducer) 
  const wrapOnpress = () => {
      return onPress(item)
    }
    
  const containStyle = horizontal ? {width: 200, height: 300, margin: 8} : styles.cardContainer
  const fbAvt = `https://graph.facebook.com/${item.id}/picture?type=large&access_token=${userData.access_token}`;

    return (
      <TouchableOpacity 
        onPress = {wrapOnpress} 
        style = {containStyle}
        activeOpacity = {1}
      >
        <Card>
            <CheckBox 
              hitSlop = {{top: 20, bottom: 20, left: 20, right: 20}}
              checked = {item.isChecked || false}
              style = {styles.checkbox}
              onPress = {() => onPressCheckBox(item)} 
              
            />
            <CardItem style = {{overflow: 'hidden'}}>
                <Body>
                  <SharedElement id={`friend_item.${item.id}.photo`} style = {{width: '100%'}}>
                    <Image 
                      source = {{uri: fbAvt}} 
                      resizeMode = 'cover'
                      style = {styles.friendCardImage}
                    />
                  </SharedElement>
                  <View>
                    <Text style = {styles.titleText}>{item.first_name + ' ' + item.last_name}</Text>
                    {item.major && 
                      <Badge info style = {styles.personInfoMargin, {backgroundColor: item.major.color}}>
                      <Text 
                        style = {styles.descText}
                        lineBreakMode = 'tail'
                        numberOfLines = {1}
                      >
                        {item.major.name}
                      </Text>
                    </Badge>
                    }
                  </View>
                  <Tags />
                </Body>
                {item.distance &&
                  <CardBadge distance = {Number.parseInt(item.distance / 1000)}/>}
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
