import React, {useState} from 'react'
import styles from './styles'
import { View } from 'react-native'
import {
    Text,
    Button,
    Container
} from 'native-base'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Header from './Header'
import Footer from './Footer'

export default function({children, isVisible, onClose, onAdd}) {

    return (
        <Modal isVisible = {isVisible}
        >
            <View style={styles.container}>
               <Header 
                name = "Add Favorite"
                onClickClose = {onClose}/>
                
                <View style = {styles.bodyModal}>
                    {children}
                </View>
                <Footer>
                    <Button primary 
                        onPress = {onAdd}
                        style = {{marginLeft: 10, marginRight: 10}}>
                        <Text>Send</Text>
                    </Button>
                    <Button danger style = {{marginLeft: 10, marginRight: 10}}
                        onPress = {onClose}
                    >
                        <Text>Close</Text>
                    </Button>
                </Footer>

            </View>
        </Modal>
    )
}
