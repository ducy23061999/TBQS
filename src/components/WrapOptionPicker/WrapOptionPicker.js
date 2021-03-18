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

export default function({field, placeholder, callBackValueChange, require, style, data}) {
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
                        callBackValueChange && onValueChange(value);
                    }}
                >
                    <Picker.Item label="2000" value="key0" />
                    <Picker.Item label="1999" value="key1" />
                    <Picker.Item label="1998" value="key2" />
                    <Picker.Item label="1997" value="key3" />
                    <Picker.Item label="1996" value="key4" />
                </Picker>
             </Item>
        </View>
    )
}