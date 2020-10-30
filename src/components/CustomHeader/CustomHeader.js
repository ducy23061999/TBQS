import React from 'react'
import { Header } from 'native-base'
import colors from '../../comon/colors/colors'


export default function CustomHeader(props) {
    return <Header 
            style = {{backgroundColor: colors.boldViolet}}
            props
        >
        {props.children}
    </Header>
}