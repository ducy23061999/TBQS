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
import {Screens} from '../../comon/Constants'

export class LoginScreen extends Component {

    constructor(props) {
        super(props)

    }
    onPressLoginFB = () => {
        this.props.navigation.navigate(Screens.SignUp)
    }

    render() {
       return (
            <Container>
                <ImageBackground 
                    source = {images.thumnail}
                    style = {styles.imageBackground}>
                    <View style = {styles.container}>
                        <Text style = {styles.wellcomeText}>Chỉ cần một bước đơn giản, bạn có thể tham gia vào 
                            cộng đồng của chúng tôi
                        </Text>
                        <Button 
                            rounded 
                            bordered 
                            full 
                            iconRight
                            onPress = {this.onPressLoginFB}
                            icon = {true}
                            style = {styles.buttonContainer}>

                            <Text style = {styles.buttonText}>Đăng nhập bằng facebook</Text>
                            <Ionicons name = 'facebook'
                                size={50} 
                                color= {colors.boldBlue}
                            />
                        </Button>
                    </View> 
                </ImageBackground>
            </Container>
       )
    }
}
export default LoginScreen;