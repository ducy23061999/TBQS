import React, {useRef, useEffect, useState} from 'react'

import {
    View,
    Image,
    ScrollView,
    Switch
} from 'react-native'
import {
    Body,
    Text,
    Card,
    CardItem,
    Textarea,
    Button
} from 'native-base'
import styles from './YourGroupContainStyle'
import { SharedElement } from 'react-navigation-shared-element';
import images from '../../../images'
import {CoverView, Tags, ViewMoreText, EditableMemberList} from '../../../components'
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../comon/colors/colors';

export default function({style, item, onClickUpLoad}) {
    return (
        <View style = {[styles.container, style]}>
            <ScrollView>
                <CoverView onClickUpLoad = {onClickUpLoad}/>
                <View style = {styles.borderTopView}>
                    <View style = {styles.content}>
                        <AgeView/>
                        <DescriptView longText = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'/>
                        <TagsView tags = {[]} onPressAdd = {() => {}}/>
                        <ListMemberView />
                        <AdvanceView />
                        <View style = {{width: '100%', height: 90}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
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
export const TagsView = ({tags, onPressAdd}) => {
    const [tagsState, setTags] = useState(tags)
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Sở thích</Text>
            <Tags data = {tagsState} />
            <Button 
                style = {styles.buttonFavor}
                onPress = {onPressAdd}
            >
                 <Ionicons name= {'plus'} size={50} color={colors.boldViolet} />
            </Button>
            
        </View>
        
    )
}

export const DescriptView = ({longText}) => {
  
    return (
        <View style = {[styles.lineSeparate]}>
            <Text style = {styles.descriptionText}>Lời mời gọi</Text>
            <Textarea 
                value = {longText}
                rowSpan = {6}
                bordered
                autoFocus
                selectTextOnFocus
                focusable
            />
        </View>
    )
}

export const ListMemberView = ({}) => {
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Thành viên</Text>
            <EditableMemberList />
        </View>
    )
}

export const AdvanceView = ({}) => {
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Nâng cao</Text>
            <View style = {styles.advanceContainer}>
                <View style = {styles.switchView}>
                    <Text style = {styles.switchText}>Bật ghép nhóm: </Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={true ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />

                </View>

                <Button danger full>
                    <Text> Delete Group </Text>
                </Button>
            </View>
        </View>
    )
}