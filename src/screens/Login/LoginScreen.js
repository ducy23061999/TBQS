import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground
} from 'react-native'
import {
    Header,
    Body, 
    Button,
    Container,
} from 'native-base'
import styles from './LoginStyle'
import {connect} from 'react-redux'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../../comon/colors/colors'
import layouts from '../../comon/layout/layout'
import images from '../../images'
import {API, Screens} from '../../comon/Constants'
import { LoginManager, AccessToken, LoginButton } from "react-native-fbsdk";
import Services from '../../services';
import Storage from '../../comon/Storage';
import {setUserData, updateUserFavorite} from '../../store/actions'
export class LoginScreen extends Component {

    constructor(props) {
        super(props)

    }
    onPressLoginFB = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email', 'user_gender']);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }
    
            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();
    
            if (!data) {
                throw 'Something went wrong obtaining access token';
            }
            const {
                accessToken,
                userID,
                expirationTime,
            } = data
            

            const responseStatus = await Services.checkUser({
                id: userID
            });
            console.log(responseStatus)

            if (responseStatus.code === 1) {
                // OK To create new user
                // GOTO SIGN UP
                this.props.navigation.push(Screens.SignUp, {userID, accessToken});
            } else {
                // LOGIN
                 const userData = await Services.login({
                    id: userID,
                    access_token: accessToken
                });
                
                // SET TO REDUX, TOKEN
                this.props.setUserData(userData);
                Storage.setToken(userData.token);
                // SET FAVORITE

                // GO TO HOME
                this.props.navigation.replace(Screens.MainNavigate);
            }
    
        } catch(error) {
            console.log(error)
        }
        
        // Create a Firebase credential with the AccessToken
        // const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
                // this.props.navigation.navigate(Screens.SignUp)
    }

    render() {
       return (
            <Container>
                <ImageBackground 
                    source = {images.wallpaperLogin}
                    style = {styles.imageBackground}>
                    <View style = {styles.container}>
                        <Text style = {styles.wellcomeText}>Chỉ cần một bước đơn giản, bạn có thể tham gia vào 
                            cộng đồng của chúng tôi
                        </Text>
                        <Button 
                            rounded  
                            full 
                            iconRight
                            onPress = {this.onPressLoginFB}
                            icon = {true}
                            style = {styles.buttonContainer}>

                            <Text style = {styles.buttonText}>Đăng nhập bằng facebook</Text>
                            <Ionicons name = 'facebook-f'
                                size={40} 
                                color= {colors.white}
                            />
                        </Button>
                    </View> 
                </ImageBackground>
            </Container>
       )
    }
}

const mapStateToProps = (state) => ({
    favorites: state.userFavorites
})

const mapActionToDispatch = (dispatch) => ({
    setUserData: (userData) => dispatch(setUserData(userData)),
    
})
export default connect(null, mapActionToDispatch)(LoginScreen);