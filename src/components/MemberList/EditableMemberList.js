import React from 'react'
import {View, FlatList} from 'react-native'
import MemberCard from './EditableMemberCard'
import {useSelector} from 'react-redux'

export default function({data, onPressDeleted}) {
    const userData = useSelector(state => state.userReducer)
 
    return (
        <View>
            <FlatList 
                data = {data}
                numColumns = {1}
                keyExtractor = {(item) => `editable_member_${item.id}`}
                renderItem = {({item}) => {
                    const fbAvt = `https://graph.facebook.com/${item.id}/picture?type=large&access_token=${userData.access_token}`;
                    return (
                        <MemberCard
                            name = {`${item.first_name} ${item.last_name}`}
                            image = {fbAvt}
                            onPressDeleted = {onPressDeleted}
                            
                        />
                    )
                }}
            />       
        </View>
    )
}