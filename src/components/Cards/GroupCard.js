import React from 'react'
import {
    View,
    Text,
    Card,
    CardItem,
    Body,
} from 'native-base'
import {Image, TouchableOpacity} from 'react-native'
import styles from './CardStyle'
import images  from '../../images'
import { SharedElement } from 'react-navigation-shared-element';
import {MemberHoriList} from '../MemberList'
import VerifyMemberView from '../VerifyMemberView'

export default function GroupCard({item, onPress}) {
    const wrapOnpress = () => {
      onPress(item)
    }

    return (
      <TouchableOpacity 
        style = {[styles.groupCardContain]} 
        activeOpacity = {1}
        onPress = {wrapOnpress}
        >
        <Card style = {{overflow: 'hidden'}}>
            <GroupAuthorView />
            <ClaimAuthorView />
            <SharedElement id={`group_item.${item}.photo`} style = {{width: '100%'}}>
                <Image 
                    source = {images.thumnail}
                    style = {styles.coverGroupImage}
                    resizeMode = 'cover'
                    resizeMethod = 'scale'
                />   
            </SharedElement>
            <Badge member = "7"/> 
           <CardItem>
                <Body>
                    <View style = {styles.memberContainer}>
                        <View style = {styles.ownerGroup}>
                            <Text style = {styles.groupBoldText}>Ngày tạo</Text>
                            <Text style = {styles.descText}>30/10/2020</Text>
                        </View>
                        <View style = {styles.listMember}>
                            <Text style = {styles.groupBoldText}>Thành viên</Text>
                            <MemberHoriList />
                        </View>
                    </View>
                </Body>
            </CardItem> 
        </Card>
      </TouchableOpacity>       
    )
}

export const Badge = ({member}) => {
    return (
        <View style = {styles.badgeContainer}>
            <Text style = {styles.badge}>{member} members</Text>
        </View>
    )
}

export const GroupAuthorView = ({}) => {
    return (
        <View style = {styles.groupAuthor}>
            <Image 
                source = {images.thumnail}
                style = {styles.avataImage}
                resizeMode = 'cover'
                resizeMethod = 'scale'
            />
            <View style = {styles.rightAuthorContain}>
                <Text style = {styles.nameAuthor}>Trần Đức Ý</Text>
                <VerifyMemberView 
                    total = {7}
                    verified = {4}
                />
            </View>
        </View>
    )
}

export const ClaimAuthorView = ({}) => {
    return (
        <View style = {styles.claimContain}>
            <Text style = {styles.clainText}>Mọi việc trong đời đều ít quan trọng khi bạn mắc ỉa</Text>
        </View>
    )
}