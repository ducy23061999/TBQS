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
import styles from './GroupDetailStyle'
import {
    CarouselSlide,
    BlurImage,
    BackFloatButton,
    
} from '../../components'
import GroupCarouselItem from './GroupCarouselItem'
import BottomGroupButton from './BottomGroupButton'
import Services from '../../services';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.9);

export class GroupDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            needUpdateBlur: false,
            isLoading: true,
            groupData: {},
            currentGroup: {}
        }
    }

    navigate = {
        instance: this.props.navigation,
        back: () => {
            this.props.navigation.goBack()
        }
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

    renderCarouselItem = ({item}) => {
        return (
            <GroupCarouselItem 
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
            <SharedElement id={`friend_item.${item.id}.photo`}>
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
        const {groupData} = this.props;
        const {activeGroupIndex} = this.props.route.params;
        
        const times = setTimeout(() => {
            this.setState({
                needUpdateBlur: true
            });
            clearTimeout(times);
        }, 500)
        this.loadGroupData()
        this.setState({
            currentGroup: groupData[activeGroupIndex]
        })
    }

    componentWillUnmount() {
        this.setState({
            needUpdateBlur: false
        });
    }

    onRequestJoin = () => {
        const {groupData, currentGroup} = this.state;

        console.log(groupData, currentGroup)
        if (!groupData) {
            Alert.alert(
                "Xác nhận",
                "Bạn muốn yêu cầu vào nhóm chứ?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {
                    Services.requestJoinGroup({
                        groupId: currentGroup.id
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
            alert("Có nhóm rồi mà còn tham gia chị nựa. Tham quá :(((")
        }
    }

    render() {
        const {needUpdateBlur} = this.state;
        const {groupData} = this.props;
        const {activeGroupIndex} = this.props.route.params;

        return (
            <>
                <StatusBar translucent backgroundColor="transparent" />
                {/* {needUpdateBlur && <BlurImage uri = {1}/> } */}
                <View style = {{flex: 1}}>
                    <BackFloatButton {...this.props}/>
                    <CarouselSlide 
                        data = {groupData}
                        renderItem = {this.renderCarouselItem}
                        itemWidth = {ITEM_WIDTH}
                        sliderWidth = {SLIDER_WIDTH}
                        itemHeight = {ITEM_HEIGHT}
                        activeIndex = {activeGroupIndex}
                        onChangeItem = {(item) => this.setState({currentGroup: item})}
                    />
                    <BottomGroupButton 
                        onRequestJoinGroup = {this.onRequestJoin}
                        onShareGroup = {() => {}}
                    />
                </View>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    groupData: state.groupReducer
})

const mapActionToDispatch = (dispatch) => ({
    
})
export default connect(mapStateToProps, mapActionToDispatch)(GroupDetailScreen)
