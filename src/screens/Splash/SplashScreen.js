import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'
import {Screens} from '../../comon/Constants'

export class SplashScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.fakeSplash = setTimeout(() => {
            this.props.navigation.replace(Screens.Intro)
        }, 3000)
    }

    componentWillUnmount() {
       clearTimeout(this.fakeSplash) 
    }
    render() {
       return (
        <View>
            <Text>AuthScreen</Text>
        </View>
       )
    }
}
export default connect()(SplashScreen)