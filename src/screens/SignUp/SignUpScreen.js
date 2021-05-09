import React, {Component, useState, useCallback} from 'react';
import {
    View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import {
    Header,
    Container,
    Body,
    Card,
    Button,
    Text
} from 'native-base'
import {connect} from 'react-redux'
import {useAnimatedStyle} from 'react-native-reanimated'
import {
    StepIndicatorView, 
    WrapTextInput, 
    WrapOptionPicker, 
    Tags, 
    AddFavoriteModal
} from '../../components';
import styles from './SignUpStyle'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../../comon/colors/colors';
import Services from '../../services'
import {setUserFavorite, setUserData, updateUserFavorite} from '../../store/actions';
import {Key, Screens} from '../../comon/Constants'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Storage from '../../comon/Storage';
import RNLocation from 'react-native-location';

const YEARS = [
    {
        label: '1998',
        value: '1998'
    },
    {
        label: '1999',
        value: '1999'
    },
    {
        label: '2000',
        value: '2000'
    },
    {
        label: '2001',
        value: '2001'
    },
    {
        label: '2002',
        value: '2002'
    },
    {
        label: '2003',
        value: '2003'
    },
    {
        label: '2004',
        value: '2004'
    },
    {
        label: '2005',
        value: '2005'
    }
]
export class SignUpScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stage: 0,
            firstName: '',
            lastName: '',
            yearBorn: 1999,
            schoolId: 0,
            majorId: 1,
            schools: [],
            majors: [],
            gender: true,
            favorites: ['an', 'ngu'],
            isShowAddModal: false,
            location: {}
        }
    }

    componentDidMount() {
        RNLocation.configure({
            distanceFilter: 100, 
            desiredAccuracy: {
              ios: "best",
              android: "balancedPowerAccuracy"
            },
            
            androidProvider: "auto",
            interval: 5000,
            fastestInterval: 10000, 
            maxWaitTime: 5000, 

            activityType: "other",
            allowsBackgroundLocationUpdates: false,
            headingFilter: 1, 
            headingOrientation: "portrait",
            pausesLocationUpdatesAutomatically: false,
            showsBackgroundLocationIndicator: false,
        })
        this.fetchData();
    }

    validateState = () => {
        const {stage, firstName, lastName, yearBorn, schoolId, majorId, gender, location} = this.state;
        switch (stage) {
            case 0:
                if (firstName.length >= 1 && lastName.length >= 1) {
                    return true;
                }
                return false;
            case 1: 
                if (schoolId != 0 && majorId != 0) {
                    return true;
                }
                return false;
            case 2: 
                if (Object.keys(location).length > 0) {
                    return true;
                }
                return false;

            default:
                return false;
        }
    }

    fetchData = () => {
        this.fetchSchool();
    }
    fetchSchool = () => {
        Services.getAllSchool()
        .then(data => {
            const listSchools = data?.data || [];
            const schoolsState = listSchools.map(school => ({
                label: school.name,
                value: school.id
            }))
            this.setState({schools: schoolsState})
        })
        .catch(error => {
            console.log(error);
            
            this.setState({schools: []})
        })
    }

    fetchMajorById = (schoolId) => {
        Services.getMajorBySchool(schoolId)
        .then(data => {
            const listMajors = data?.data || [];
            const majorsState = listMajors.map(major => ({
                label: major.name,
                value: major.id
            }))

            this.setState({majors: majorsState})
        })
        .catch(error => {
            console.log(error);

        })
    }

    onClickNext = () => {
        const {stage, gender, firstName, lastName, yearBorn, majorId, location} = this.state;
        const {favorites} = this.props;
        const {userID, accessToken} = this.props.route.params;
        const favoriteIds = favorites.map(favorite => favorite.id);

        if (stage < 2) {
            this.setState({
                stage: stage + 1
            })
        } else {
            // SEND API SIGN UP
            Services.register({
                id: userID,
                first_name: firstName,
                last_name: lastName,
                picture: '',
                location: JSON.stringify(location),
                major: JSON.parse(majorId),
                access_token: accessToken,
                created_at: Date.now(),
                active: true,
            })
            .then(async data => {
                if (data.code) {
                    alert(data.message)
                    return
                }

                await Storage.setToken(data.token);
                // update favorite
                this.props.updateUserFavorite(favoriteIds)
                
                this.props.setUserData(data);
                this.props.navigation.replace(Screens.MainNavigate);
            })
            .catch(error => {
                console.log(error)
            })
        }
       
    }
    onChangeSchool = (data) => {
        this.setState({schoolId: data})
        this.fetchMajorById(data);
    }

    onPressBackStep = (index) => {
        const {stage} = this.state;
        if (index <= stage) {
            this.setState({stage: index})
        }
    }

    onRequestLocation = () => {
        RNLocation.checkPermission({
            ios: 'whenInUse',
            android: {
                detail: 'coarse'
            }
        }).then(currentPermisstion => {
            if (!currentPermisstion) {
                RNLocation.requestPermission({
                    ios: 'whenInUse', // or 'always'
                    android: {
                      detail: 'coarse', // or 'fine'
                      rationale: {
                        title: "We need to access your location",
                        message: "We use your location to show where you are on the map",
                        buttonPositive: "OK",
                        buttonNegative: "Cancel"
                      }
                    }
                }).then(locationResponse => {
                    this.handleLocation()
                })
                .catch(error => {
                    console.log(error)
                })
            } else {
                this.handleLocation()
            }
        })
        .catch(error => console.log(error))
    }

    handleLocation = () => {
        RNLocation.getLatestLocation({ timeout: 60000 })
        .then(latestLocation => {
            this.setState({
                location: {
                    latitude: latestLocation.latitude,
                    longitude: latestLocation.longitude
                }
            })
        })
        .catch(error => {
            alert("Get location fail")
        })
    }

    renderStep1 = () => {
        return (
            <View style = {styles.containerForm}>
                <WrapTextInput 
                    style = {styles.marginItem}
                    field= "Nhập tên của bạn"
                    require
                    value = {this.state.firstName}
                    onTextChange = {(value) => this.setState({firstName: value})}
                    placeholder = "Tên"/>

                <WrapTextInput 
                    style = {styles.marginItem}
                    field= "Nhập họ của bạn"
                    require
                    value = {this.state.lastName}
                    onTextChange = {(value) => this.setState({lastName: value})}
                    placeholder = "Họ"/>

                <WrapTextInput 
                    style = {styles.marginItem}
                    field= "Giới tính"
                    require
                    disable = {true}
                    value = {this.state.gender ? "Nam" : "Nữ"}
                />

                <WrapOptionPicker 
                    data = {YEARS}
                    style = {styles.marginItem}
                    field= "Nhập ngày sinh của bạn"
                    require
                    callBackValueChange = {(value) => this.setState({yearBorn: value})}
                    placeholder = "Ngày sinh"/>
              
            </View>
        )
    }

    renderStep2 = () => {
        return (
            <View style = {styles.containerForm}>
                <WrapOptionPicker 
                    data = {this.state.schools}
                    style = {styles.marginItem}
                    field= "Trường của bạn đang học"
                    require
                    callBackValueChange = {this.onChangeSchool}
                    placeholder = "Trường"/>
                <WrapOptionPicker 
                    data = {this.state.majors}
                    style = {styles.marginItem}
                    field= "Ngành học bạn đang theo đuổi"
                    require
                    callBackValueChange = {(value) => this.setState({majorId: value})}
                    placeholder = "Ngành"/>
            </View>
        )
    }

    renderStep3 = () => {
        const {favorites} = this.props;

        return (
            <View style = {styles.containerForm}>
                <TagsView 
                    tags = {favorites}
                    onTagChange = {(tags) => this.props.onFavoriteChanges(tags)}
                    onPressAdd = {() => {this.setState({isShowAddModal: true})}}
                />
                <View>
                    <Text style = {styles.locationText}>Vị trí (*)</Text>

                    <Button
                        primary
                        block
                        rounded
                        style = {styles.locationButton}
                        onPress = {this.onRequestLocation}
                    >
                        <Icon 
                            name = 'location-arrow' 
                            size = {25}
                            color = {colors.white}
                        />
                    </Button>
                </View>
            </View>
        )
    }


    renderButtonNext = () => {
        const {stage} = this.state;
        return (
            <Button full rounded hasText style = {styles.floatButton} 
                onPress = {this.onClickNext}
                disabled = {!this.validateState()}
            >
                <Text style = {styles.textButton}> {stage == 2 ? 'Sign Up' : 'Next'}</Text>
            </Button>
        )
    }

    render() {
        const {stage} = this.state;
        return (
        <KeyboardAvoidingView
            style = {{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
            <Button 
                transparent style = {styles.backButton}
                hitSlop = {{top: 12, bottom: 12, left: 12, right: 12}}
                onPress = {() => {
                    this.props.navigation.goBack()
                }}
            >
                    <Ionicons name = 'arrow-left'
                        size={30} 
                        color= {colors.primaryGreen} />
            </Button>
            <ScrollView
            contentContainerStyle = {styles.scrollView}>
                <View style = {styles.topHeader}>
                    <Text style = {styles.textRegister}>Register</Text>
                    <StepIndicatorView 
                        numberOfStep = {3}
                        activePosition = {stage} 
                        onPressStep = {this.onPressBackStep}/>
                    <Text style = {styles.registerDesc}>Thông tin cá nhân của bạn</Text>
                </View>
                {stage == 0 && this.renderStep1()}
                {stage == 1 && this.renderStep2()}
                {stage == 2 && this.renderStep3()}
                <AddFavoriteModal 
                    isVisible = {this.state.isShowAddModal}
                    onAdd = {() => this.setState({isShowAddModal: false})}
                    onClose = {() => this.setState({isShowAddModal: false})}
                />
            </ScrollView>
            {this.renderButtonNext()}
        </KeyboardAvoidingView>
       )
    }

}

export const TagsView = ({tags, onPressAdd, onTagChange}) => {
    return (
        <View style = {[{marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Sở thích</Text>
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
    favorites: state.userFavorites
})

const mapActionToDispatch = (dispatch) => ({
    updateUserFavorite: (favoriteIds) => dispatch(updateUserFavorite(favoriteIds)),
    onFavoriteChanges: (favorites) => dispatch(setUserFavorite(favorites)),
    setUserData: (userData) => dispatch(setUserData(userData))
})
export default connect(mapStateToProps, mapActionToDispatch)(SignUpScreen)