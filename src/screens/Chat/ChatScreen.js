import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'

export class ChatScreen extends Component {

    render() {
       return (
        <View>
            <Text>ChatScreenScreen</Text>
        </View>
       )
    }
}
export default connect()(ChatScreen)