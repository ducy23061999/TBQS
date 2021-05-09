import React from 'react'
import {View, FlatList} from 'react-native'
import MemberCard from './MemberCard'

export default function({data, onPressItem}) {

    return (
        <View>
            <FlatList 
                data = {data}
                numColumns = {1}
                renderItem = {({item}) => (
                    <MemberCard 
                        name = {item.first_name + ' '+ item.last_name}
                        status = {false}
                        uri = {`https://graph.facebook.com/${item.id}/picture?type=large`}
                    />
                )}
            />       
        </View>
    )
}