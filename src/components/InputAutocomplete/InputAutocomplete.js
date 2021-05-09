import React, {useState, useEffect} from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import styles from './InputAutocompleteStyle';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput'
import Tags from '../Tags'
import Input from '../WrapTextInput/WrapTextInput'
const DATA = [
    {code: 'AP', name: 'Andhra Pradesh'},
    {code: 'AR', name: 'Arunachal Pradesh'},
    {code: 'AP', name: 'Andhra Pradesh'},
    {code: 'AR', name: 'Arunachal Pradesh'},
    {code: 'AP', name: 'Andhra Pradesh'},
    {code: 'AR', name: 'Arunachal Pradesh'},
  ];


// TODO: CHUYEN AUTO COMPLETE SANGT TAG LIST
export default function({data, onSelectedItem}) {
    const [query, setQuery] = useState('');
    const [autoData, setAutoData] = useState(data);

    useEffect(() => {
        setAutoData(data)
    }, [data])

    return (
        <View 
            style = {{
                maxHeight: 250
            }}
        >
          <Tags data = {['a', 'b',]}/>
        </View>
    )

}