import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import {FriendList, FriendListHorizontal} from '../../../components' 
import styles from './PersonViewStyle'

const SECTION = {
    NEAR_YOU: 0,
    NORMAL: 1
};

export default function({onPress, lockTab, isLocked}) {
    return (
        <View style = {{flex: 1}}>
             <HomeContent 
                lockTab = {lockTab} 
                isLocked = {isLocked}
                onPress = {onPress}
            />
        </View>
    )
}

export const HomeContent = ({lockTab, isLocked, onPress}) => {
    return (
        <FlatList 
            data = {[SECTION.NEAR_YOU, SECTION.NORMAL]}
            renderItem = {({item}) => {
                return renderItem({
                    item,
                    isLocked,
                    lockTab,
                    onPress
                })
            }}
            contentContainerStyle = {styles.listContain}
            nestedScrollEnabled = {true}
        />
    )
}

export const renderItem = ({item, isLocked, lockTab, onPress}) => {
    const ui = {
        nearYouView: (
            <View style = {styles.section}>
                <Text style = {styles.headerText}>Gần nơi bạn ở</Text>
                <FriendList 
                    data = {[10, 11, 12, 13, 14, 15, 16]}
                    onPress = {onPress}
                    lockTab = {isLocked}
                    isLocked = {lockTab}
                />
            </View>
        ),
        normal: (
            <View style = {styles.section}>
                <Text style = {styles.headerText}>Khác</Text>
                <FriendList 
                    data = {[1, 2, 3, 4, 5, 6]}
                    onPress = {onPress}
                />
            </View>
        )
    }
    switch(item) {
        case SECTION.NEAR_YOU: {
            return ui.nearYouView
        }
        default: {
            return ui.normal
        }
    }
   
}