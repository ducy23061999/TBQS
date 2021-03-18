import React, {Component} from 'react';
import {
    View,
} from 'react-native'
import {
    Body,
    Container,
    Badge,
    Text,
    Button,
    Switch
} from 'native-base'
import {connect} from 'react-redux'
import styles from './ProfileStyle'
import images from '../../images'
import {Image} from '../../components'
import FastImage from 'react-native-fast-image'
import ProfileSheetView from './ProfileSheetItem'
import TagEditView from './TagEditorView'
export class ProfileScreen extends Component {

    render() {
       return (
        <View style = {styles.container}>
               <Container style = {{borderRadius: 10, width: '100%'}}>
                    <View style = {styles.center}>                        
                        <Image 
                            uri = {images.thumnail}
                            style = {styles.avata}
                            resizeMode = {FastImage.resizeMode.cover}
                        />
                        <Text style = {styles.emailText}>ducyk41cntt@gmail.com</Text>
                        <ProfileSheetView field = "Tên"
                            onPressItem = {() => {

                            }}
                        >
                            <Text style = {styles.textItem}>Trần Đức Ý</Text>
                        </ProfileSheetView>

                        <ProfileSheetView field = "Tuổi"
                            onPressItem = {() => {

                            }}
                        >
                            <Text style = {styles.textItem}>18</Text>
                        </ProfileSheetView>

                        <ProfileSheetView field = "Trường"
                            onPressItem = {() => {

                            }}
                        >
                           <Text style = {styles.textItem}>
                               ĐHKH
                           </Text>
                        </ProfileSheetView>

                        <ProfileSheetView field = "Khoa"
                            onPressItem = {() => {

                            }}
                        >
                            <Badge info>
                                <Text 
                                    style = {styles.descText}
                                    lineBreakMode = 'tail'
                                    numberOfLines = {1}
                                >
                                    Công nghệ thông tin
                                </Text>
                            </Badge>
                        </ProfileSheetView>
                        
                        <TagEditView />
                        
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
                        
                        <Button danger full bordered style = {styles.button}>
                            <Text>Đăng xuất</Text>
                        </Button>

                        <Button danger full style = {styles.button}>
                            <Text> Xóa tài khoản</Text>
                        </Button>
                        
    
                    </View>
               
               </Container>
        </View>
       )
    }
}
export default connect()(ProfileScreen)