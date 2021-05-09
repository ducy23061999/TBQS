import React, {useState} from 'react'
import {
    View
} from 'react-native'
import styles from './WrapOptionStyle'
import {
    Input,
    Text,
    Item,
    Picker,
    Icon
} from 'native-base'
import { Value } from 'react-native-reanimated'

/*
    data = [
        {
            label,
            value
        }
    ]
*/
export default function({field, placeholder, callBackValueChange, require, style, data = []}) {
    const [selectedValue, setIndex] = useState(0)
    return (
        <View {...style}>
            <Text style= {styles.field} >{field}: {require && '(*)'}</Text>
            <Item picker bordered style = {styles.containerInput}>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder= {placeholder}
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={selectedValue}
                    onValueChange={(value) => {
                        setIndex(value);
                        callBackValueChange && callBackValueChange(value);
                    }}
                >
                    {data.map(item => <Picker.Item label={item.label} value={item.value}/>)}
                </Picker>
             </Item>
        </View>
    )
}