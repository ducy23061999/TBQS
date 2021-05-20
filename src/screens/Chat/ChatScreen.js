import React, {Component} from 'react';
import {
    View,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
import {
     Header,
     Container, 
     Left, 
     Body, 
     Button, 
     Right, 
     Text
} from 'native-base'
import {connect} from 'react-redux'
import { GiftedChat, Send } from 'react-native-gifted-chat'
import styles from './ChatStyle'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from '../../comon/colors/colors'
import * as actions from '../../store/actions'
import Services from '../../services'
import layouts from '../../comon/layout/layout'
export class ChatScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        const messages = this.props.groupMessage;
        this.setupMessage(messages)
    }

    componentWillReceiveProps(nextProps) {
        this.setupMessage(nextProps.groupMessage)
    }


    setupMessage = (messages) => {
        const {userData} = this.props
        if (messages) {
            const messagesData = messages.map(message => {

                return  {
                    _id: message.id,
                    text: message.message,
                    createdAt: new Date(message.date_send),
                    user: {
                      _id: message.user.id,
                      name: `${message.user.first_name} ${message.user.last_name}`,
                      avatar: `https://graph.facebook.com/${message.user.id}/picture?type=large&access_token=${userData.access_token}`,
                    },
                }
                
            })

            this.setState({
                messages: messagesData
            })
        }
    }

    onSend = (message) => {
        console.log("NEW MESSAGE", message)
        Services.createNewMessage({
            message: message[0].text,
            chat_type: 'group',
        }).then(response => {
            const messageData = response.data;
            const formatMessage = {
                ...messageData.message,
                user: messageData.sender,
                date_send: messageData.date_send,
            }
            // this.props.addNewMessage(formatMessage);

        })
        .catch(error => {
            console.log("ERROR", error)
        })
       
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    renderSend(props) {
        return (
            <Send
                {...props}
            >
                <Icon 
                    name = 'paper-plane' 
                    size = {28}
                    color = {colors.white}
                />
                
            </Send>
        );
    }

    render() {
        const {} = this.state;
        const {userData} = this.props;

        return (
            <Container>
                 <Header style = {styles.chatHeader}>
                    <Left>
                        <Button transparent
                            onPress = {this.goBack}
                        >
                            <Icon 
                                name = 'long-arrow-alt-left' 
                                size = {28}
                                color = {colors.white}
                            />
                        </Button>
                    </Left>
                    <Body style = {{flex: 1}}>
                        <Text style = {styles.headerText}>Chat</Text>
                    </Body>
                    <Right />
                </Header>
    
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: userData.id
                    }}
                />
               
            </Container>
          )
    }
}

const mapStateToProps = (state) => ({
    userData: state.userReducer,
    groupMessage: state.chatReducer.chatGroup
    // listFriendSelected: state.selectedFriendReducer
})

const mapActionToDispatch = (dispatch) => ({
    setMessageToGroup: (messages) => dispatch(actions.setMessageToGroup(messages)),
    setMessageToPerson:  (messages) => dispatch(actions.setMessageToPerson(messages)),
    addNewMessage: (messgae) => dispatch(actions.addMessageToGroup(messgae))
})

export default connect(mapStateToProps, mapActionToDispatch)(ChatScreen)