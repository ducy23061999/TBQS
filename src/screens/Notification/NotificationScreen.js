import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView
} from 'react-native';
import {
    Container
} from 'native-base';
import {connect} from 'react-redux';
import styles from './NotificationStyle';
import NotiGroupView from './NotiGroupView'
import NotiOtherView from './OtherNotiView'
import {Screens} from '../../comon/Constants'
export class NotificationScreen extends Component {

    onPressGroupItem = (item) => {
        this.props.navigation.push(Screens.Chat)
    }

    render() {
       return (
        <ScrollView style = {styles.container}>
           <Text style = {styles.headerText}>Nhóm của bạn</Text>
           <NotiGroupView onPressItem = {this.onPressGroupItem}/>
           <Text style = {styles.headerText} >Cập nhật mới</Text>
           <NotiOtherView onPressItem = {this.onPressGroupItem}/>
        </ScrollView>
       )
    }
}

export default connect()(NotificationScreen)