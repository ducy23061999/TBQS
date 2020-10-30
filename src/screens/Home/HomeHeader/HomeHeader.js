import React from 'react'
import {StyleSheet} from 'react-native'
import {
    Container,
    Content,
    Header,
    View,
    Text,
} from 'native-base'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../comon/colors/colors'
import layouts from '../../../comon/layout/layout'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function({onPressSearch, onPressFilter, onPressRefresh}) {
    return (
        <Header hasTabs>
            <View style = {styles.container}>
              <TouchableOpacity style = {styles.item} onPress = {onPressSearch}>
                <Ionicons name = 'search' size = {20} color = {colors.white}/>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.item} onPress = {onPressFilter}>
                <Ionicons name = 'filter' size = {20} color = {colors.white}/>
              </TouchableOpacity>
              <TouchableOpacity onPress = {onPressFilter}>
                <Ionicons name = 'sync-alt' size = {20} color = {colors.white}/>
              </TouchableOpacity>
            </View>
        </Header>
    )
}

const styles = StyleSheet.create({
  container: {
     ...layouts.rowEndCenter,
     width: '100%'

  },
  item: {
    marginRight: 50
  }
})

