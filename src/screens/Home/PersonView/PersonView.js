import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import {FriendList, FriendListHorizontal} from '../../../components' 
import styles from './PersonViewStyle';
import {connect} from 'react-redux';
import {updateFriendSelectList} from '../../../store/actions'

const SECTION = {
    NEAR_YOU: 0,
    NORMAL: 1
};

export const PersonView = function({
    onPressCheckBox, onPress, lockTab, isLocked,
    suggestFriends}) {
        
    return (
        <View style = {{flex: 1}}>
             <HomeContent 
                lockTab = {lockTab} 
                isLocked = {isLocked}
                onPress = {onPress}
                locationFriends = {suggestFriends.location}
                favoriteFriends = {suggestFriends.favorite}
                onPressCheckBox = {onPressCheckBox}
            />
        </View>
    )
}

export const HomeContent = ({lockTab, isLocked, locationFriends, favoriteFriends, onPress, onPressCheckBox}) => {

    
    return (
        <FlatList 
            data = {[SECTION.NEAR_YOU, SECTION.NORMAL]}
            renderItem = {({item}) => {
                return renderItem({
                    item,
                    isLocked,
                    lockTab,
                    locationFriends,
                    favoriteFriends,
                    onPress,
                    onPressCheckBox
                })
            }}
            contentContainerStyle = {styles.listContain}
            nestedScrollEnabled = {true}
        />
    )
}

export const renderItem = ({item, isLocked, lockTab, locationFriends, favoriteFriends, onPress, onPressCheckBox}) => {
    const ui = {
        nearYouView: (
            <View style = {styles.section}>
                <Text style = {styles.headerText}>Gần nơi bạn ở</Text>
                <FriendList 
                    data = {locationFriends}
                    onPress = {onPress}
                    lockTab = {isLocked}
                    isLocked = {lockTab}
                    onPressCheckBox = {onPressCheckBox}
                />
            </View>
        ),
        normal: (
            <View style = {styles.section}>
                <Text style = {styles.headerText}>Sở thích</Text>
                <FriendList 
                    data = {favoriteFriends}
                    onPress = {onPress}
                    onPressCheckBox = {onPressCheckBox}
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
const mapStateToProps = (state) => ({
    suggestFriends: state.friendReducer
})

const mapActionToDispatch = (dispatch) => ({
    updateFriendSelectList: (friend, isChecked) => dispatch(updateFriendSelectList(friend, isChecked))
})

export default connect(mapStateToProps, null)(PersonView)