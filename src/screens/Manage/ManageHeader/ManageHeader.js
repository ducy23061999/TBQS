import React from 'react'
import {StyleSheet} from 'react-native'
import {
    Container,
    Content,
    Header,
    View,
    Text,
    Left,
    Right,
    Icon
} from 'native-base'
import Ionicons from 'react-native-vector-icons/FontAwesome5';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {Tabs, Image} from '../../../components'
import styles from './ManageHeaderStyle'
import images from '../../../images'
import FastImage from 'react-native-fast-image'


export default function({onPressYourGroup, onPressFilter, onPressRefresh}) {
    return (
        <Header hasTabs style = {styles.container}>
            <LeftView />
            <RightView onPress={onPressYourGroup}/>
        </Header>
    )
}


const LeftView = () => {
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
        <Text style = {styles.statusText}>Đang hoạt động</Text>
      </View>

    </View>
  )
}

const RightView = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress = {onPress}
    >
      <View style = {styles.rightContain}>
            <Ionicons name = 'users' style = {styles.groupIcon}/>
            <Text style = {styles.yourGroupText}>Nhóm của bạn</Text>
      </View>
    </TouchableOpacity>
  )
}

