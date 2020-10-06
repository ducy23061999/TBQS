import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'

export class ProfileScreen extends Component {

    render() {
       return (
        <View>
            <Text>ProfileScreen</Text>
        </View>
       )
    }
}
export default connect()(ProfileScreen)