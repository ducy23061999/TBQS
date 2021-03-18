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
import {Image} from '../../../components'
import images from '../../../images'
import FastImage from 'react-native-fast-image'
import styles from './OtherNotiStyle'

export default function({onPressItem}) {
    const renderItem = ({item}) => {
        return (
            <TouchableOpacity 
              style = {styles.chatItem} 
              onPress = {() => {
                onPressItem(item)
              }}>
                <LeftView readed = {true}/>
            </TouchableOpacity>
        )
    }
    
    return (
        <View>
            <FlatList 
                data = {[1,2,3,4]}
                key = {index => `${index}`}
                renderItem = {renderItem}
            />
        </View>
    )
}

const LeftView = ({name, message, readed}) => {
    return (
      <View style = {styles.leftContain}>
        <View>
          <Image 
            uri = {images.thumnail} 
            style = {styles.image}
            resizeMode = {FastImage.resizeMode.cover}
          />
        </View>
        <View style = {{marginLeft: 10}}>
          <Text style = {styles.nameText}>Trần Đức Ý</Text>
          <Text 
           style = {[
                styles.statusText,
                readed ? styles.unreaded : {}
            ]}
            numberOfLines= {1}
            lineBreakMode = 'tail'>
                Hey, mình đang cần tìm bạn để lập nhóm quân sự
            </Text>
        </View>
  
      </View>
    )
  }