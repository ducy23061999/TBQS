import React from 'react'
import {
    View,
    Text,
} from 'native-base'
import ActionButton from 'react-native-action-button';
import styles from './FloatButtonStyle'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ({onRequestCreateGroup, onRequestClearFriendList}) {
    return (
        <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#3498db' title="Xóa tất cả danh sách" onPress={onRequestClearFriendList}>
                <Icon name = 'broom' size={20} color= {'white'}/>
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Tạo mới group dựa trên danh sách" onPress={onRequestCreateGroup}>
                <Icon name="list" size={20} color= {'white'} />
            </ActionButton.Item>
        </ActionButton>
    )
}