import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    Container,
    Content,
    Body
} from 'native-base'
import styles from './ManageScreenStyle'
import {connect} from 'react-redux'
import Header from './ManageHeader'
import {Tabs, InviteCard, RequestJoinCar, EmptyManage} from '../../components'
import { Screens } from '../../comon/Constants'
import { FlatList } from 'react-native-gesture-handler'
import Services from '../../services'
export class ManageScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            verifyJoinRequests: [],
            joinGroupRequest: [],
            messageError: '',
            groupData: null,
        }
    }

    componentDidMount() {
        console.log("hello")
        this.fetchData("INVITE");
        this.fetchData("REQUEST");
        this.loadGroupData()
    }

    loadGroupData = () => {
        this.setState({isLoading: true})
        Services.getMyGroup()
        .then(response => {
            const data = response.data;
            console.log(response);
            this.setState({
                groupData: data,
            })   
        })
        .catch(error => {
            console.log(error);
        })
    }
    approveJoinGroup = (userId, action) => {
        return Services.approveMember({
            userId: userId,
            action: action
        })
    }

    verifyJoinGroup = (groupId, action) => {
        return Services.verifyJoinGroup({
            groupId: groupId,
            action: action
        })
    }


    fetchData = (type) => {
        this.setState({isLoading: true});

        switch(type) {
            case "INVITE": {
                Services.getInviteGroup()
                .then(response => {
                    const groupData = response.data;
                    console.log(groupData)
                    this.setState({
                        verifyJoinRequests: groupData,
                        isLoading: false     
                    })
                })
                .catch(error => {
                    this.setState({
                        isLoading: false,
                        messageError: error.message
                    })
                })
                break;
            }
            case "REQUEST": {
                Services.getRequestJoin()
                .then(response => {
                    const groupData = response.data;
                    console.log(groupData)
                    this.setState({
                        joinGroupRequest: groupData,
                        isLoading: false     
                    })
                })
                .catch(error => {
                    this.setState({
                        isLoading: false,
                        messageError: error.message
                    })
                })
                
                break;
            }
            default: {
                break;
            }
        }
    }


    onPressActionRequest = (userId, action) => {
        this.approveJoinGroup(userId, action)
        .then(response => {
            this.fetchData("REQUEST")
        })
        .catch(error => {

        })
    }

    onPressActionInvite = (groupId, action) => {
        this.verifyJoinGroup(groupId, action)
        .then(response => {
            this.fetchData("INVITE")
        })
        .catch(error => {
            
        })
    }
    
    navigate = {
        yourGroup: () => {
            this.props.navigation.push(Screens.YourGroup)
        }
    }
    render() {
        const {verifyJoinRequests, joinGroupRequest} = this.state;
        const {userData} = this.props;
        const fbAvt = `https://graph.facebook.com/${userData.id}/picture?type=large&access_token=${userData.access_token}`; 
        
        return (
            <Container style = {{flex: 1}}>
                <Header
                    name = {`${userData.first_name} ${userData.last_name}`}
                    img = {fbAvt}
                    onPressYourGroup = {this.navigate.yourGroup}
                    isAbleShowGroup = {this.state.groupData}
                />
                <Tabs 
                    PersonView = {() => (
                        <View style = {{flex: 1}}>
                            {
                                verifyJoinRequests && verifyJoinRequests.length > 0?
                                <FlatList 
                                    data = {verifyJoinRequests}
                                    key = {(item, index) => `verify_join_${index}`}
                                    renderItem = {({item}) => 
                                    <InviteCard 
                                        type = 'invite'
                                        name = {item?.user.first_name + ' ' + item?.user.last_name}
                                        targetId = {item.group_id}
                                        onPressActionBtn = {this.onPressActionInvite}
                                    />}
                                />
                                :
                                <EmptyManage />
                            }
                            
                        </View>
                    )}
                    GroupView = {() => (
                        <View style = {{flex: 1}}>
                            {joinGroupRequest && joinGroupRequest.length > 0?
                                <FlatList 
                                    data = {joinGroupRequest}
                                    key = {(item, index) => `request_join_${index}`}
                                    renderItem = {({item}) =>  
                                        <InviteCard 
                                            name = {item?.user.first_name + ' ' + item?.user.last_name}
                                            type = 'request'
                                            targetId = {item.user.id}
                                            onPressActionBtn = {this.onPressActionRequest}
                                        />
                                    }
                                />
                            :
                                <EmptyManage />
                            }
                            
                        </View>
                    )}
                    MergeGroupView =  {() => (
                        <View>

                        </View>
                    )}
                />
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    userData: state.userReducer,
})

const mapActionToDispatch = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapActionToDispatch)(ManageScreen)