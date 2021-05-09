import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList, 
    Easing
} from 'react-native'
import styles from './FriendStyle'
import {PersonalFriendCard} from '../Cards' 
import _ from 'lodash'

export default class FriendList extends Component {
    constructor(props) {
        super(props);

        
        const newFriendState = props.data ? props.data.map(friend => ({
            ...friend,
            isChecked: false
        })) : []

        this.state = {
            friendData: newFriendState,
        }
    }

    componentWillReceiveProps(nextProps) {

        const newFriendState =  nextProps.data ? nextProps.data.map(friend => ({
            ...friend,
            isChecked: false
        })) : []

        this.setState({friendData: newFriendState})
    }

    toggleCheckItem = (item) => {
        return Object.assign(item, {isChecked: !item.isChecked})
    }
    handlePressCheckBox = (item) => {

        const updateFriends  = _.map(this.state.friendData, (friend) => {
            return friend.id == item.id ? this.toggleCheckItem(item) : friend
        });

        this.setState({
            friendData: updateFriends
        })
        this.props.onPressCheckBox(item);
    }


    renderItem = ({item}) => {
        const {onPress} = this.props;
        return (
            <PersonalFriendCard 
                onPress = {onPress}
                item = {item}
                onPressCheckBox = {this.handlePressCheckBox}
            />
        )
    }

    render() {
        const {data, onPress} = this.props;
        return (
            <View style = {{flex: 1}}>
                <FlatList 
                    numColumns = {2}
                    data = {this.state.friendData}
                    renderItem = {this.renderItem}
                />
            </View>
        )
    }
    
}