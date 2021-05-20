import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {
    Card,
    CardItem,
    Body,
    Button,
} from 'native-base'
import styles from './CardStyle'
import Ionicons from 'react-native-vector-icons/FontAwesome5';

export default function InviteCard({name, targetId, type, onPressUser, onPressGoToChat, onPressActionBtn}) {
    
    const wrapActionButton = (targetId, type) => {
        onPressActionBtn && onPressActionBtn(targetId, type)
    }

    return (
        <Card style = {{marginLeft: 8, marginRight: 8}}>
           <View style = {styles.containCard}>
                <View style = {styles.inviteCardContain}>
                        <Button style = {styles.acceptButton} onPress = {() => wrapActionButton(targetId, "approve")}>
                            <Ionicons name = 'check' style = {styles.functionInviteImage}/>
                        </Button>
                        <Button style = {styles.denyButton} onPress = {() => wrapActionButton(targetId, "reject")}>
                            <Ionicons name = 'times' style = {styles.functionInviteImage}/>
                        </Button>
                    </View>
               <View style = {{marginLeft: 10, width: '90%'}}>
                    <View >
                        <Text style={styles.inviteContainText}
                            lineBreakMode = 'tail'
                            numberOfLines = {3}
                        >
                            <Text 
                                onPress={() =>
                                    {alert('but this is');}}
                                style={styles.nameText}>
                               {name}
                            </Text> 
                                { type == 'invite' ?  
                                    ' muốn bạn tham gia nhóm        ' :
                                    ' muốn tham gia nhóm của bạn                   '
                                }
                            </Text>
                    </View>
                    <TouchableOpacity 
                        style = {styles.rightChatContain}
                        hitSlop = {{top: 10, bottom: 10, left: 10, right: 10}}
                    >
                        <Text style = {styles.chatActionText}>Chat now <Ionicons name = "arrow-right"/> </Text>
                    </TouchableOpacity>
               </View>
           </View>
        </Card>
    )
}