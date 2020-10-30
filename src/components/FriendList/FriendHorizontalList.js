import React from 'react'
import {
    FlatList,
    View,
    TouchableWithoutFeedback
} from 'react-native'
import styles from './FriendStyle'
import {PersonalFriendCard} from '../Cards' 


export default function({data, onPress, lockTab, isLocked}) {

    return (
        <View style = {{flex: 1}}>
            <FlatList 
                data = {data}
                renderItem = {({item}) => {
                    return renderRow({
                        item,
                        lockTab: lockTab,
                        isLocked: isLocked
                    })
                }}
                horizontal
                nestedScrollEnabled={true}
            />
        </View>
    )
}

export const renderRow = ({item, lockTab, isLocked}) => {
    const handleInnerPressIn = () => lockTab(true);
    const handleInnerPressOut = () => lockTab(false);

    return (
        <TouchableWithoutFeedback
              onPressIn={handleInnerPressIn}
              onPressOut={handleInnerPressOut}>
            <PersonalFriendCard 
                onPress = {() => {}}
                item = {item}
                horizontal = {true}
            />
        </TouchableWithoutFeedback>
       
    )
}