import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList, 
    Easing
} from 'react-native'
import styles from './FriendStyle'
import {PersonalFriendCard} from '../Cards' 


export default class FriendList extends Component {
    constructor(props) {
        super(props);
    
    }
    renderItem = ({item}) => {
        const {onPress} = this.props;
        return (
            <PersonalFriendCard 
                onPress = {onPress}
                item = {item}
            />
        )
    }

    render() {
        const {data, onPress} = this.props;
        return (
            <View style = {{flex: 1}}>
                <FlatList 
                    numColumns = {2}
                    data = {data}
                    renderItem = {this.renderItem}
                />
            </View>
        )
    }
    
}