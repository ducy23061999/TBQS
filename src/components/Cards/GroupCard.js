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
import {useSelector} from 'react-redux'

export default function GroupCard({item, onPress}) {
    const wrapOnpress = () => {
      onPress(item)
    }
    
    const {owner, members, created_at} = item;

    return (
      <TouchableOpacity 
        style = {[styles.groupCardContain]} 
        activeOpacity = {1}
        onPress = {wrapOnpress}
        >
        <Card style = {{overflow: 'hidden'}}>
            <GroupAuthorView 
                user = {owner}
                totalMember = {members ? members.length : 0}
                verifyMember = {1}

            />
            <ClaimAuthorView />
            <SharedElement id={`group_item.${item}.photo`} style = {{width: '100%'}}>
                <Image 
                    source = {images.thumnail}
                    style = {styles.coverGroupImage}
                    resizeMode = 'cover'
                    resizeMethod = 'scale'
                />   
            </SharedElement>
            <Badge member = {members.length || 0}/> 
           <CardItem>
                <Body>
                    <View style = {styles.memberContainer}>
                        <View style = {styles.ownerGroup}>
                            <Text style = {styles.groupBoldText}>Ngày tạo</Text>
                            <Text style = {styles.descText}>{created_at || ""}</Text>
                        </View>
                        <View style = {styles.listMember}>
                            <Text style = {styles.groupBoldText}>Thành viên</Text>
                            <MemberHoriList 
                                data = {members || []}
                            />
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

export const GroupAuthorView = ({user, totalMember, verifyMember}) => {
    const userData = useSelector(state => state.userReducer)
    const fbAvt = `https://graph.facebook.com/${user.id}/picture?type=large&access_token=${userData.access_token}`;
    return (
        <View style = {styles.groupAuthor}>
            <Image 
                source = {{uri: fbAvt}}
                style = {styles.avataImage}
                resizeMode = 'cover'
                resizeMethod = 'scale'
            />
            <View style = {styles.rightAuthorContain}>
                <Text style = {styles.nameAuthor}>{user.first_name + ' ' + user.last_name}</Text>
                <VerifyMemberView 
                    total = {totalMember}
                    verified = {verifyMember}
                />
            </View>
        </View>
    )
}

export const ClaimAuthorView = ({}) => {
    return (
        <View style = {styles.claimContain}>
            <Text style = {styles.clainText}>Hãy tham gia nhóm của chúng mình nhé</Text>
        </View>
    )
}