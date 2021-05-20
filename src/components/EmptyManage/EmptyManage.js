import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import images from '../../images'
import styles from './EmptyManageStyle';

export default function({}) {

    return (
        <View style = {styles.container}>
            <Image 
                source = {images.broke}
                style = {styles.image}
                resizeMethod = 'auto'
                resizeMode = 'cover'
            />
            <Text style = {styles.text}>Trang này không khả dụng do bạn đã có nhóm hoặc không có yêu cầu nào</Text>
        </View>
    )
}