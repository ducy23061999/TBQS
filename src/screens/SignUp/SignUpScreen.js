import React, {Component} from 'react';
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
import {StepIndicatorView, WrapTextInput, WrapOptionPicker} from '../../components'
import styles from './SignUpStyle'
import {TagsView} from '../YourGroup'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import colors from '../../comon/colors/colors'

export class SignUpScreen extends Component {

    renderStep1 = () => {
        return (
            <View style = {styles.containerForm}>
                <WrapTextInput 
                    style = {styles.marginItem}
                    field= "Nhập tên của bạn"
                    require
                    placeholder = "Tên"/>

                <WrapTextInput 
                    style = {styles.marginItem}
                    field= "Nhập họ của bạn"
                    require
                    placeholder = "Họ"/>

                <WrapOptionPicker 
                    style = {styles.marginItem}
                    field= "Nhập ngày sinh của bạn"
                    require
                    placeholder = "Ngày sinh"/>
              
            </View>
        )
    }

    renderStep2 = () => {
        return (
            <View style = {styles.containerForm}>
                <WrapOptionPicker 
                    style = {styles.marginItem}
                    field= "Trường của bạn đang học"
                    require
                    placeholder = "Trường"/>
                <WrapOptionPicker 
                    style = {styles.marginItem}
                    field= "Ngành học bạn đang theo đuổi"
                    require
                    placeholder = "Ngành"/>
            </View>
        )
    }

    renderStep3 = () => {
        return (
            <View style = {styles.containerForm}>
                <TagsView />
            </View>
        )
    }

    renderButtonNext = () => {
        return (
            <Button full rounded hasText style = {styles.floatButton} disabled>
                <Text style = {styles.textButton}>Next</Text>
            </Button>
        )
    }

    render() {
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
                        activePosition = {0} />
                    <Text style = {styles.registerDesc}>Thông tin cá nhân của bạn</Text>
                </View>
                {this.renderStep1()}
            </ScrollView>
            {this.renderButtonNext()}
        </KeyboardAvoidingView>
       )
    }

}


export default SignUpScreen