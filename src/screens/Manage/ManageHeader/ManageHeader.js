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
    Icon,
} from 'native-base'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Tabs} from '../../../components'
import styles from './ManageHeaderStyle'
import images from '../../../images'
import FastImage from 'react-native-fast-image'


export default function({
  img, name, status, isAbleShowGroup,
  onPressYourGroup, onPressFilter, onPressRefresh
}) {
    return (
        <Header hasTabs style = {styles.container}>
            <LeftView 
              name = {name}
              img = {img}
              status
            />
            <RightView onPress={onPressYourGroup} isAbleShowGroup = {isAbleShowGroup}/>
        </Header>
    )
}


export const LeftView = ({name, img, status}) => {
  return (
    <View style = {styles.leftContain}>
      <View>
        <Image 
          source = {{uri: img}} 
          style = {styles.image}
          resizeMode = 'cover'
        />
      </View>
      <View style = {{marginLeft: 10}}>
        <Text style = {styles.nameText}>{name}</Text>
        <Text style = {styles.statusText}>Đang hoạt động</Text>
      </View>

    </View>
  )
}

export const RightView = ({isAbleShowGroup, onPress}) => {
  return (
    <TouchableOpacity
      onPress = {onPress}
    >
      {isAbleShowGroup && <View style = {styles.rightContain}>
            <Ionicons name = 'users' style = {styles.groupIcon}/>
            <Text style = {styles.yourGroupText}>Nhóm của bạn</Text>
      </View> }
    </TouchableOpacity>
  )
}

