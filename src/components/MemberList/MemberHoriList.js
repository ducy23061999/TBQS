import React from 'react'
import {
    View, 
    Text,
    Image
} from 'react-native'
import {
} from 'native-base'
import styles from './MemberListStyle'
import images from '../../images'
import {useSelector} from 'react-redux'

export default function MemberHoriList({data = []}) {
   
    return (
        <View style = {styles.container}>
            {data.map(item => (
                <Member user = {item}/>
            ))}
        </View>
    )
    
}

const Member = ({user}) => {
    const userData = useSelector(state => state.userReducer)
    const fbAvt = `https://graph.facebook.com/${user.id}/picture?type=large&access_token=${userData.access_token}`;
    return (
        <View style = {[styles.memberContainer, styles.memberMargin]}>
            <Image 
                source = {{uri: fbAvt}}
                style = {styles.memberImage}
            />
        </View>
    )
}