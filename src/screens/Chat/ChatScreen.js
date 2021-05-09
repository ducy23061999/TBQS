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

export class ChatScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                  _id: 1,
                  text: 'Chào cả nhà!',
                  createdAt: new Date(),
                  user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                  },
                },
            ]
        }
    }

    onSend = (message) => {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, message)
        }));
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
                        _id: 1,
                    }}
                />
               
            </Container>
          )
    }
}
export default connect()(ChatScreen)