import React, {Component} from 'react';
import {
    View,
    SafeAreaView,
    Image
} from 'react-native'
import {
    Body,
    Container,
    Badge,
    Text,
    Button,
    Switch,
    
} from 'native-base'
import {connect} from 'react-redux'
import styles from './ProfileStyle'
import images from '../../images'
import FastImage from 'react-native-fast-image'
import ProfileSheetView from './ProfileSheetItem'
import TagEditView from './TagEditorView'
import {fetchUserFavorite, setUserData} from '../../store/actions'
import {Screens} from '../../comon/Constants'
import { flatten } from 'lodash';
import Storage from '../../comon/Storage';
import Services from '../../services';
import {AddFavoriteModal, Tags} from '../../components'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../../comon/colors/colors';
export class ProfileScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            profileUser: {},
            favorites: [],
            isShowAddModal: false
        }

    }
    
    componentDidMount() {
        this.fetchData()
    }

    fetchData =  () => {
        const {userData, schools} = this.props;
        this.props.fetchUserFavorite(userData.id);
    }

    findSchoolName(major) {
        try {
            const {userData, schools} = this.props;
            const schoolId = major.school;
            const school = schools.find(sch => sch.id == schoolId);
    
            return school.name;
        } catch(error) {
            return ''
        }
       
    }

    findMajor() {
        const {userData, majors} = this.props;

        const userMajor = Number.parseInt(userData.major);
        console.log("hello", majors)
        const major = majors.find(majo => majo.id == userMajor);

        return major;

    }
    logout = async () => {
        try {
            await Storage.removeToken()
            this.props.setUserData({});
            this.forceNavigateLogin()
        } catch(error) {
            alert(error);
        }
        
    }


    deleteAccount = async () => {
        Services.deleteMe()
        .then(response => {
           
            this.forceNavigateLogin();
            this.props.setUserData({});
        })
        .catch(error => {
            console.log(error);
            alert(error)
        })
        
    }

    forceNavigateLogin = () => {
        this.props.navigation.navigate(Screens.AuthNavigate);
        this.props.navigation.navigate(Screens.Login);
    }

    render() {
        const userData = this.props.userData;
        const fbAvt = `https://graph.facebook.com/${userData.id}/picture?type=large&access_token=${userData.access_token}`;
        
        const major = this.findMajor()
        const schoolName = this.findSchoolName(major);
        
       return (
        <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.container}>
               <Container style = {{borderRadius: 10, width: '100%'}}>
                    <View style = {styles.center}>                        
                        <Image 
                            source = {{uri: fbAvt}}
                            style = {styles.avata}
                            resizeMode = {FastImage.resizeMode.cover}
                        />
                        <Text style = {styles.emailText}>{userData.email}</Text>
                        <ProfileSheetView field = "Tên"
                            onPressItem = {() => {

                            }}
                        >
                            <Text style = {styles.textItem}>{`${userData.first_name} ${userData.last_name}`}</Text>
                        </ProfileSheetView>

                        <ProfileSheetView field = "Trường"
                            onPressItem = {() => {

                            }}
                        >
                           <Text style = {styles.textItem}>
                               {schoolName || ''}
                           </Text>
                        </ProfileSheetView>

                        <ProfileSheetView field = "Khoa"
                            onPressItem = {() => {

                            }}
                        >
                            <Badge info style = {{backgroundColor: (major && major.color) || '#32a84e'}}>
                                <Text 
                                    style = {styles.descText}
                                    lineBreakMode = 'tail'
                                    numberOfLines = {1}
                                >
                                    {(major && major.name) || ''}
                                </Text>
                            </Badge>
                        </ProfileSheetView>

                        <View style = {styles.tagCell}>
                             <TagsView 
                                tags = {this.props.favorites}
                                onTagChange = {(tags) => this.props.onFavoriteChanges(tags)}
                                onPressAdd = {() => {this.setState({isShowAddModal: true})}}
                            />
                        </View>
                       
                        
                        <ProfileSheetView field = "Khóa tài khoản"
                            onPressItem = {() => {

                            }}
                        >
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={true ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                            />
                        </ProfileSheetView>
                        
                        <Button danger full bordered style = {styles.button}
                            onPress = {this.logout}
                        >
                            <Text>Đăng xuất</Text>
                        </Button>

                        <Button danger full style = {styles.button}
                            onPress = {this.deleteAccount}
                        >
                            <Text> Xóa tài khoản</Text>
                        </Button>
                        
    
                    </View>
                    <AddFavoriteModal 
                        isVisible = {this.state.isShowAddModal}
                        onAdd = {() => this.setState({isShowAddModal: false})}
                        onClose = {() => this.setState({isShowAddModal: false})}
                    />
               
               </Container>
        </View>
        </SafeAreaView>
       )
    }
}


export const TagsView = ({tags, onPressAdd, onTagChange}) => {
    return (
        <View style = {[{marginTop: 10}]}>
            <Tags data = {tags} onTagChange = {onTagChange}/>
            <Button 
                style = {styles.buttonFavor}
                onPress = {onPressAdd}
                transparent
            >
                 <Ionicons name= {'plus'} size={50} color={colors.boldViolet} />
            </Button>
        </View>
        
    )
}

const mapStateToProps = (state) => ({
    userData: state.userReducer,
    favorites: state.userFavorites,
    majors: state.majorReducer,
    schools: state.schoolReducer
})

const mapActionToDispatch = (dispatch) => ({
    fetchUserFavorite: (userId) => dispatch(fetchUserFavorite(userId)),
    setUserData: (userData) => dispatch(setUserData(userData)),
    onFavoriteChanges: (favorites) => dispatch(setUserFavorite(favorites)),
})

export default connect(mapStateToProps, mapActionToDispatch)(ProfileScreen)