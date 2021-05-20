import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import {
    Container
} from 'native-base';
import {connect} from 'react-redux';
import styles from './NotificationStyle';
import NotiGroupView from './NotiGroupView'
import NotiOtherView from './OtherNotiView'
import {Screens} from '../../comon/Constants'
import * as actions from '../../store/actions'
import Services from '../../services'
import layouts from '../../comon/layout/layout'
import colors from '../../comon/colors/colors'
export class NotificationScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            group: {},
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
       this.setState({
           isLoading: true
       })
       this.fetchMessageGroup()
       .then(groupMessageData => {
            console.log("FBI WARNING!!!", groupMessageData.messageGroup)
            this.props.setMessageToGroup(groupMessageData.messageGroup)
            this.setState({
                isLoading: false,
                errorMessage: null,
                group: groupMessageData.group
            })
       })
       .catch(error => {
           console.log("ERRRR");
           console.log(error);
           this.props.setMessageToGroup([])
            this.setState({
                isLoading: false,
                errorMessage: error.message
            })
        
       })
    }

    fetchMessageGroup = async () => {
        const reponseGroup = await Services.getMyGroup()
        const groupData = reponseGroup.data;
        const messageGroupResponse = await Services.getGroupChatMessage(groupData.id);
        console.log("LOG MESSAGE");

        console.log(messageGroupResponse)
        return {
            messageGroup: messageGroupResponse.data || [],
            group: groupData
        };
    }

    onPressGroupItem = (item) => {
        const {groupMessage} = this.props;
        const {chatGroup} = groupMessage;
        console.log("EYYY");
        console.log(chatGroup)
        this.props.navigation.push(Screens.Chat, {messages: chatGroup})
    }
    getLastMessage = () => {
        const {groupMessage} = this.props;
        const {chatGroup} = groupMessage;
        const lastMessage = chatGroup[0];
        return (lastMessage && lastMessage.message) || ''
    }

    render() {
        const {isLoading, group} = this.state;
        const {groupMessage} = this.props;
        const {chatGroup} = groupMessage;
        
        const fbAvt = `https://graph.facebook.com/${this.props.userData.id}/picture?type=large&access_token=${this.props.userData.access_token}`;
       return (
        <ScrollView style = {styles.container}>
           <Text style = {styles.headerText}>Nhóm của bạn</Text>
            { isLoading ?
                <ActivityIndicator 
                    size="large"
                    color = {colors.primaryGreen}
                    style = {[layouts.columnCenterCenter, {flex: 1}]}
                /> 
                :
                group.id && <NotiGroupView 
                    data = {[
                        {
                            message: this.getLastMessage()
                        }
                    ]}
                    groupName = {group.name}
                    imageURL = {fbAvt}
                    onPressItem = {this.onPressGroupItem}
                
                />
            }
            
           <Text style = {styles.headerText} >Cập nhật mới</Text>
           {/* <NotiOtherView onPressItem = {this.onPressGroupItem}/> */}
        </ScrollView>
       )
    }
}
const mapStateToProps = (state) => ({
    userData: state.userReducer,
    groupMessage: state.chatReducer
    // listFriendSelected: state.selectedFriendReducer
})

const mapActionToDispatch = (dispatch) => ({
    setMessageToGroup: (messages) => dispatch(actions.setMessageToGroup(messages)),
    setMessageToPerson:  (messages) => dispatch(actions.setMessageToPerson(messages)),
})

export default connect(mapStateToProps, mapActionToDispatch)(NotificationScreen)