import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList, 
    Easing
} from 'react-native'
import styles from './GroupListStyle'
import {GroupCard} from '../Cards' 


export default class GroupList extends Component {
    constructor(props) {
        super(props);
    
    }
    renderItem = ({item}) => {
        const {onPress} = this.props;
        return (
            <GroupCard 
                onPress = {onPress}
                item = {item}
            />
        )
    }

    render() {
        return (
            <View style = {{flex: 1}}>
                <FlatList 
                    keyExtractor = {item => `group_${item.id}`}
                    data = {this.props.data}
                    renderItem = {this.renderItem}
                />
            </View>
        )
    }
    
}