import React from 'react'
import {
    FlatList,
    TouchableOpacity
} from 'react-native'
import {
    View,
    Card,
    Text
} from 'native-base'
import styles from './NotiGroupStyle'
import {Image} from '../../../components'
import images from '../../../images'
import FastImage from 'react-native-fast-image'
import colors from '../../../comon/colors/colors'

export default function({data, onPressItem, groupName, imageURL}) {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity 
              style = {styles.chatItem} 
              onPress = {() => {
                onPressItem(item)
              }}>
                <LeftView name = {groupName} message = {item.message} imageURL = {imageURL}/> 
            </TouchableOpacity>
        )
    }
    
    return (
        <View>
            <FlatList 
                data = {data}
                key = {index => `${index}`}
                renderItem = {renderItem}
            />
        </View>
    )
}

const LeftView = ({name, message ,readed, imageURL}) => {

    return (
      <View style = {styles.leftContain}>
        <View>
          <Image 
            uri = {{uri: imageURL}} 
            style = {styles.image}
            resizeMode = {FastImage.resizeMode.cover}
          />
        </View>
        <View style = {{marginLeft: 10}}>
          <Text style = {styles.nameText}>{name}</Text>
          <Text 
            style = {[
                styles.statusText,
                readed ? styles.unreaded : {}
            ]}
            numberOfLines= {1}
            lineBreakMode = 'tail'>
                {message}
            </Text>
        </View>
  
      </View>
    )
  }
