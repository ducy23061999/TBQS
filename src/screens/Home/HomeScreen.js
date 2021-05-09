import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'
import {
    Container,
    Content,
    Header,
    Tabs,
    Tab,
    TabHeading,
    Icon
} from 'native-base'
import {
    Tabs as CustomTabs,
    CustomHeader
} from '../../components'
import PersonView from './PersonView'
import GroupView from './GroupView'
import MergeGroupView from './MergeGroupView'
import FloatButton from './FloatButton'
import HomeHeader from './HomeHeader'
import styles from './HomeStyle'
import {Screens} from '../../comon/Constants'
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import {getFriendLocation, getFriendSuggestUser, getSuggestGroup, 
    updateFriendSelectList} from '../../store/actions';
import Services from '../../services'

const TAB_STATE = {
    PERSONAL: 0,
    GROUP: 1,
    MERGE_GROUP: 2
}

export class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAddFriend: false,
        }
        
    }

    componentDidMount() {
        this.props.getFriendLocation()
        this.props.getFriendSuggestUser()
        this.props.getSuggestGroup()
    }

    navigate = this.props.navigation

    navigateScreen = (type, item) => {
        const activeIndex = this.calculateActiveFriendIndex(item);
        const activeGroupIndex = this.calculateActiveGroupIndex(item);

        switch(type) {
            case TAB_STATE.PERSONAL:
                this.navigate.push(Screens.FriendDetail, {item, activeIndex})
                break
            case TAB_STATE.GROUP: 
                this.navigate.push(Screens.GroupDetail, {item, activeGroupIndex})
                break
            default: 
                this.navigate.push(Screens.FriendDetail, {item, activeGroupIndex})
        }
    }
    calculateActiveFriendIndex = (item) => {
        const {suggestFriends} = this.props;

        const friendListSuggest = [...suggestFriends.favorite, ...suggestFriends.location];

        const findFriendIndex = friendListSuggest.findIndex(friend => friend.id == item.id);

        return findFriendIndex;
    }

    calculateActiveGroupIndex = (item) => {
        const {suggestGroups} = this.props;

        const findGroupIndex = suggestGroups.findIndex(group => group.id == item.id);

        return findGroupIndex;
    }

    onHandlePressCheckBox = (item) => {
        if (item.isChecked) {
            // REMOVE 
            global.friendListSelected.push(item);
        } else {
            // ADD
            global.friendListSelected = global.friendListSelected.filter(friend => friend.id != item.id);
        }
    }

    onRequestCreateGroup = () => {
        const selectedFriends = global.friendListSelected.map(friend => friend.id);

        // CALL API CREATE GROUP
        Services.createGroup({
            inviteUsers: selectedFriends
        })
        .then(response => {
            alert("Tạo mới group thành công")
            console.log(response)
        })
        .catch(error => {
            console.log(error);

            alert("Tạo mới group lỗi - do đã tạo group trước đó")
        })
    }

    onRequestRemoveSelect = () => {
        console.log("AHIHIHI")
        global.friendListSelected = [];
       this.forceUpdate()
    }

    renderBody(tabState) {
        switch(tabState) {
            case TAB_STATE.PERSONAL: {
                return <PersonView 
                    onPress = {(item) => {
                        this.navigateScreen(TAB_STATE.PERSONAL, item)
                    }}
                    onPressCheckBox = {this.onHandlePressCheckBox}
                />
            }
            case TAB_STATE.GROUP: {
                return <GroupView onPress = {(item) => {
                    this.navigateScreen(TAB_STATE.GROUP, item)
                }}/>
            }
            case TAB_STATE.MERGE_GROUP: {
                return <MergeGroupView />
            }
        }
    }

    renderHeader = () => {
        return (
            <HomeHeader />
        )
    }
    render() {
        
        const {userData} = this.props;
        console.log(userData)
        const fbAvt = `https://graph.facebook.com/${userData.id}/picture?type=large&access_token=${userData.access_token}`;
        const {isAddFriend} = this.state;
        return (
        <Container>
            <HomeHeader />
            <StickyParallaxHeader
                header = {this.renderHeader}
                headerType = 'TabbedHeader'
                title = "Welcome to Groomate"
                foregroundImage = {{uri: fbAvt}}
                tabs={[
                    {
                      title: 'Cá nhân',
                      content: this.renderBody(TAB_STATE.PERSONAL)
                    },
                    {
                      title: 'Nhóm',
                      content: this.renderBody(TAB_STATE.GROUP)
                    },
                    // {
                    //   title: 'Ghép nhóm',
                    //   content: this.renderBody(TAB_STATE.MERGE_GROUP)
                    // },
                  ]}
                headerHeight = {40}
                renderBody = {this.renderBody}
            >
            </StickyParallaxHeader>

            <FloatButton 
                onRequestClearFriendList = {this.onRequestRemoveSelect}
                onRequestCreateGroup = {this.onRequestCreateGroup}
            />
        </Container>
       )
    }
}
const mapStateToProps = (state) => ({
    userData: state.userReducer,
    suggestFriends: state.friendReducer,
    suggestGroups: state.groupReducer,
    // listFriendSelected: state.selectedFriendReducer
})

const mapActionToDispatch = (dispatch) => ({
    getFriendLocation: () => dispatch(getFriendLocation()),
    getFriendSuggestUser: () => dispatch(getFriendSuggestUser()),
    getSuggestGroup: () => dispatch(getSuggestGroup()),
    updateFriendSelectList: (friend, isChecked) => dispatch(updateFriendSelectList(friend, isChecked))
})
export default connect(mapStateToProps, mapActionToDispatch)(HomeScreen)