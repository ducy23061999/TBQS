import React from 'react'
import {View, FlatList} from 'react-native'
import MemberCard from './MemberCard'

export default function({data, onPressItem}) {

    return (
        <View>
            <FlatList 
                data = {[1, 2, 3, 4, 5]}
                numColumns = {1}
                renderItem = {() => (<MemberCard />)}
            />       
        </View>
    )
}