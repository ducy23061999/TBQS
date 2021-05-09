import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'
import {Screens} from '../../comon/Constants'
import {fetchMajorList} from '../../store/actions'
export class SplashScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMajorList()
        this.fakeSplash = setTimeout(() => {
            if (this.props.userData) {
                this.props.navigation.replace(Screens.MainNavigate)
            } else {
                this.props.navigation.replace(Screens.Intro)
            }
            
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

const mapStateToProps = (state) => ({
    userData: state.userReducer
})

const mapActionToDispatch = (dispatch) => ({
    fetchMajorList: () => dispatch(fetchMajorList())
})
export default connect(mapStateToProps, mapActionToDispatch)(SplashScreen)