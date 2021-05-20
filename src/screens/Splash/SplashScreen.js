import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native'
import {connect} from 'react-redux'
import {Screens} from '../../comon/Constants'
import {fetchMajorList, fetchAllScholl} from '../../store/actions'
import images from '../../images';
import styles from './SplashStyle'
export class SplashScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMajorList()
        this.props.fetchAllScholl();
        
        this.fakeSplash = setTimeout(() => {
            if (this.props.userData && this.props.userData.id) {
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
        <View style = {styles.container}>
            <Image 
                source = {images.logo}
                resizeMode = 'cover'
                style = {styles.imgLogo}
            />
            <ActivityIndicator 
                size="large"
                color = '#1ca75d'
            />
        </View>
       )
    }
}

const mapStateToProps = (state) => ({
    userData: state.userReducer
})

const mapActionToDispatch = (dispatch) => ({
    fetchMajorList: () => dispatch(fetchMajorList()),
    fetchAllScholl: () => dispatch(fetchAllScholl())
})
export default connect(mapStateToProps, mapActionToDispatch)(SplashScreen)