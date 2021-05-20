import React, {Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import {
    Container
} from 'native-base'
import {connect} from 'react-redux'
import YourGroupContainView from './YourGroupContainView'
import FloatButton from './FloatButton'
import {BackFloatButton} from '../../components'
import Services from '../../services'
import layouts from '../../comon/layout/layout'
import colors from '../../comon/colors/colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {refreshToken, setMessageToGroup} from '../../store/actions'

export class YourGroupScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groupData: null,
            isLoading: false,
            responseImage: '',
            descriptionText: '',
            members: []
        }

    }

    componentDidMount() {
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
                isLoading: false,
                descriptionText: data.description,
                members: data.members,
                responseImage: ''
            })   
        })
        .catch(error => {
            console.log(error);
            this.setState({
                isLoading: false
            })
        })
    }

    onClickUpload = () => {
        launchImageLibrary({
            mediaType: 'photo',

        }, (response) => {
            if (response) {
                console.log(response)
                this.setState({
                    responseImage: {uri: response.uri, name: 'image.jpg', type: 'image/jpeg'}
                })
            }
        })
    }

    onDeleteMember = (member) => {
        const { members} = this.state;
        const newMembers = members.filter(mem => mem.id != member.id);

        this.setState({
            members: newMembers
        })

    }

    onPressSave = async () => {
        let {groupData, isLoading, descriptionText, members, responseImage} = this.state;

        const memberIds = members.map(member => member.id);
        // responseImage.uri = "file:/" + responseImage.uri.split("file:/").join("");

        console.log(responseImage.uri)
        Services.updateGroup({
            name: groupData.name,
            description: descriptionText,
            members: JSON.stringify(memberIds),
            img: responseImage
        }).then(response => {
            this.loadGroupData()
        })
        .catch(error => {
            console.log("update fail", error);
            alert("UPdate Fails")
        })
    }

    onPressDiscard = () => {
        
    }

    onDeleteGroup = () => {
        const {groupData} = this.state;
        const {userData} = this.props;
        if (userData.id == groupData.owner) {
            Services.deleteGroup()
            .then(response => {
                this.props.refreshToken();
                this.props.setMessageToGroup([])
                this.props.navigation.pop()
            })
            .catch(error => {
                alert("Delete Fails")
            })
        }
    }

    render() {
        const {isLoading, groupData, responseImage, descriptionText, members} = this.state;
        const {userData} = this.props;

       return (
        <>
        <BackFloatButton {...this.props}/>
        <Container>
           { isLoading ?
                <ActivityIndicator 
                        size="large"
                        color = {colors.primaryGreen}
                        style = {[layouts.columnCenterCenter, {flex: 1}]}
                /> : 
                groupData ?
                 <YourGroupContainView 
                    isEditable = {userData.id == groupData.owner}
                    localImage = {responseImage.uri || groupData.img || ''}
                    onClickUpLoad = {this.onClickUpload}
                    item = {groupData}
                    members = {members}
                    descriptionText = {descriptionText}
                    onDeleteMember = {this.onDeleteMember}
                    onTextChange = {(text) => {this.setState({descriptionText: text})}}
                    onDeleteGroup = {this.onDeleteGroup}
                /> : <View></View>
           }
          
        </Container>
        <FloatButton 
            onPressSave = {this.onPressSave}
            onPressDiscard = {this.onPressDiscard}
        />
        </>
       )
    }
}
const mapStateToProps = (state) => ({
    userData: state.userReducer,
})

const mapActionToDispatch = (dispatch) => ({
    setMessageToGroup: (messages) => dispatch(actions.setMessageToGroup(messages)),
    refreshToken: () => dispatch(refreshToken())
})
export default connect(mapStateToProps)(YourGroupScreen)