import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    Easing,
    InteractionManager,
    StatusBar,
    Dimensions,
    Alert
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
import Services from '../../services';
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
            needUpdateBlur: false,
            groupData: null,
            isLoading: true,
            currentFriend: {}
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
            <View>
                <FriendCarouselItem 
                    key = {`carousel_item_${item.id}`}
                    style = {{
                        width: ITEM_WIDTH,
                        height: ITEM_HEIGHT,
                        marginTop: 40,
                    }}
                    item = {item}
                />
            </View>
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
        const {suggestFriends} = this.props;
        const {activeIndex} = this.props.route.params;
        // const times = setTimeout(() => {
        //     this.setState({
        //         needUpdateBlur: true
        //     });
        //     clearTimeout(times);
        // }, 500)
        this.loadGroupData();

        this.setState({
            currentFriend: suggestFriends[activeIndex]
        })

       
    }

    componentWillUnmount() {
        this.setState({
            needUpdateBlur: false
        });
    }

    onPressAddIntoGroup = () => {
        const {groupData, currentFriend} = this.state;

        // IF Aready have group -> Add Into Group
        console.log("Hello", currentFriend)
        if (groupData.id) {
            Alert.alert(
                "Xác nhận",
                "Bạn muốn thêm người này vào group chứ?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {
                    Services.createVerify({
                        inviteUsers: [currentFriend.id]
                    }).then(response => {
                        alert("Gửi lời mời tham gia nhóm thành công")
                    })
                    .catch(error => {
                        alert("Gửi lời mời tham gia nhóm thất bại")
                    })
                  }}
                ]
            );
        } else {
            global.friendListSelected = [...global.friendListSelected, currentFriend.id];
            alert("Đã thêm vào danh sách của bạn")
        }
        // IF Not YET -> Add to cache
    }

    onPressChatDirect = () => {
        // INCOMING
    }

    loadGroupData = () => {
        this.setState({isLoading: true})
        Services.getMyGroup()
        .then(response => {
            const data = response.data;
            console.log(response);
            this.setState({
                groupData: data,
                isLoading: false
            })   
        })
        .catch(error => {
            console.log(error);
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        const {needUpdateBlur, initIndex} = this.state;
        const {suggestFriends} = this.props;
        const {activeIndex} = this.props.route.params;
        const friendListSuggest = [...suggestFriends.favorite, ...suggestFriends.location];
        return (
            <>
                <StatusBar translucent backgroundColor="transparent" />
                {/* {needUpdateBlur && <BlurImage uri = {1}/> } */}
                <View style = {{flex: 1}}>
                    <BackFloatButton {...this.props}/>
                    <CarouselSlide 
                        data = {friendListSuggest}
                        renderItem = {this.renderCarouselItem}
                        itemWidth = {ITEM_WIDTH}
                        sliderWidth = {SLIDER_WIDTH}
                        itemHeight = {ITEM_HEIGHT}
                        activeIndex = {activeIndex}
                        onChangeItem = {(item) => this.setState({currentFriend: item})}
                        
                    />
                    <BottomGroupButton 
                        onPressAddIntoGroup = {this.onPressAddIntoGroup}
                        onPressChatDirect = {this.onPressChatDirect}
                    />
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userData: state.userReducer,
    suggestFriends: state.friendReducer
})

const mapActionToDispatch = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapActionToDispatch)(FriendDetailScreen)
