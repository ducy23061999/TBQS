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
import {useSelector} from 'react-redux'

export default function({style, item, onClickUpLoad, onDeleteMember}) {
    console.log(item);

    return (
        <View style = {[styles.container, style]}>
            <ScrollView>
                <CoverView onClickUpLoad = {onClickUpLoad}/>
                <View style = {styles.borderTopView}>
                    <View style = {styles.content}>
                        <AgeView memberCount = {item.members.length}/>
                        <DescriptView longText = {item.description}/>
                        {/* <TagsView tags = {[]} onPressAdd = {() => {}}/> */}
                        <ListMemberView members = {item.members} onDeleted = {onDeleteMember}/>
                        <AdvanceView />
                        <View style = {{width: '100%', height: 90}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export const AgeView = ({memberCount}) => {
    return (
        <View style = {[styles.ageContent]}>
            <Text style = {styles.keyAgeText}>Số lượng thành viên:</Text>
            <Text style = {styles.valueAgeText}>{memberCount}</Text>
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

export const ListMemberView = ({members, onDeleted}) => {
    console.log("BUGG");
    console.log(members);
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Thành viên</Text>
            <EditableMemberList data = {members} onPressDeleted = {onDeleted}/>
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