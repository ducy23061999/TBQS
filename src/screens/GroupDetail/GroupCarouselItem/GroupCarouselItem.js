import React from 'react'

import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import {
    Body,
    Card,
    CardItem
} from 'native-base'
import styles from './GroupCarouselStyle'
import { SharedElement } from 'react-navigation-shared-element';
import images from '../../../images'
import {CoverView, Tags, ViewMoreText, MemberVertiList} from '../../../components'
import MapView from 'react-native-maps';
import {useSelector} from 'react-redux'

const DEFAULT_IMAGE = "https://image.freepik.com/free-vector/group-people-flat-design_23-2148462710.jpg";

export default function({style, item}) {
    const userData = useSelector(state => state.userReducer)

    return (
        <Card style = {[styles.container, style]}>
            <ScrollView>
                <CoverView image = {item.img.length > 0 ? item.img : DEFAULT_IMAGE}/>
                <View style = {styles.borderTopView}>
                    <View style = {styles.content}>
                        <AgeView
                            amountMember = {item.members.length}
                        />
                        <DescriptView 
                            longText = {item.description}
                        />
                        <ListMemberView data = {item.members}/>
                    </View>
                </View>
            </ScrollView>
        </Card>
    )
}

export const AgeView = ({amountMember}) => {
    return (
        <View style = {[styles.ageContent]}>
            <Text style = {styles.keyAgeText}>Số lượng thành viên:</Text>
            <Text style = {styles.valueAgeText}>{amountMember}</Text>
        </View>
    )
}
export const TagsView = (tags) => {
    const data = [
        {
            id: 1,
            name: 'Mèo'
        },
        {
            id: 2,
            name: 'Đá bóng'
        },
        {
            id: 2,
            name: 'Chơi game'
        }
    ]
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Sở thích</Text>
            <Tags data = {data}/>
        </View>
    )
}

export const DescriptView = ({longText}) => {
    return (
        <View style = {[styles.lineSeparate]}>
            <Text style = {styles.descriptionText}>Lời mời gọi</Text>
            <ViewMoreText 
                longText = {longText}
            />
        </View>
    )
}

export const ListMemberView = ({data}) => {
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Thành viên</Text>
            <MemberVertiList data = {data}/>
        </View>
    )
}