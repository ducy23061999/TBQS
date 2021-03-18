import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    Easing,
    InteractionManager,
    StatusBar,
    Dimensions
} from 'react-native'
import {connect} from 'react-redux'
import images from '../../images'
import { SharedElement } from 'react-navigation-shared-element';
import styles from './FriendDetailStyle'
import {
    CarouselSlide,
    BlurImage,
    BackFloatButton
} from '../../components'
import FriendCarouselItem from './FriendCarouselItem'
import BottomGroupButton from './BottomGroupButton'

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.9);

export class FriendDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            needUpdateBlur: false
        }
    }

    navigate = {
        instance: this.props.navigation,
        back: () => {
            this.props.navigation.goBack()
        }
    }

    renderCarouselItem = ({item}) => {
        return (
            <FriendCarouselItem 
                style = {{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    marginTop: 40,
                }}
                item = {item}
            />
        )
    }
    renderImage = () => {
        const { item } = this.props.route.params;
        return (
            <SharedElement id={`friend_item.${item}.photo`}>
                <Image 
                    source = {images.thumnail}
                    style = {{width: '100%', height: 350}}
                    resizeMethod = 'auto'
                    resizeMode = 'cover'
                />
             </SharedElement>
        )
    }
    componentDidMount() {
        const times = setTimeout(() => {
            this.setState({
                needUpdateBlur: true
            });
            clearTimeout(times);
        }, 500)
    }

    componentWillUnmount() {
        this.setState({
            needUpdateBlur: false
        });
    }

    render() {
        const {needUpdateBlur} = this.state
        return (
            <>
                <StatusBar translucent backgroundColor="transparent" />
                {/* {needUpdateBlur && <BlurImage uri = {1}/> } */}
                <View style = {{flex: 1}}>
                    <BackFloatButton {...this.props}/>
                    <CarouselSlide 
                        data = {[1, 2, 3, 4, 5]}
                        renderItem = {this.renderCarouselItem}
                        itemWidth = {ITEM_WIDTH}
                        sliderWidth = {SLIDER_WIDTH}
                        itemHeight = {ITEM_HEIGHT}
                    />
                    <BottomGroupButton />
                </View>
            </>
        )
    }
}

export default connect()(FriendDetailScreen)
