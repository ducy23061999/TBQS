import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'

export class HomeScreen extends Component {

    render() {
       return (
        <View>
            <Text>HomeScreen</Text>
        </View>
       )
    }
}
export default connect()(HomeScreen)