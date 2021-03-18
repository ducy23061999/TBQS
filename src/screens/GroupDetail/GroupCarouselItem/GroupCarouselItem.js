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

export default function({style, item}) {
    return (
        <Card style = {[styles.container, style]}>
            <ScrollView>
                <CoverView />
                <View style = {styles.borderTopView}>
                    <View style = {styles.content}>
                        <AgeView/>
                        <DescriptView longText = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'/>
                        <TagsView/>
                        <ListMemberView />
                    </View>
                </View>
            </ScrollView>
        </Card>
    )
}

export const AgeView = () => {
    return (
        <View style = {[styles.ageContent]}>
            <Text style = {styles.keyAgeText}>Số lượng thành viên:</Text>
            <Text style = {styles.valueAgeText}>21</Text>
        </View>
    )
}
export const TagsView = () => {
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Sở thích</Text>
            <Tags />
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

export const ListMemberView = ({}) => {
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Thành viên</Text>
            <MemberVertiList />
        </View>
    )
}