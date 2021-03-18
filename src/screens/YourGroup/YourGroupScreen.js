import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {
    Container
} from 'native-base'
import {connect} from 'react-redux'
import YourGroupContainView from './YourGroupContainView'
import FloatButton from './FloatButton'
import {BackFloatButton} from '../../components'

export class YourGroupScreen extends Component {

    render() {
       return (
        <>
        <BackFloatButton {...this.props}/>
        <Container>
            <YourGroupContainView 
                onClickUpLoad = {() => {}}/>
        </Container>
        <FloatButton />
        </>
       )
    }
}
export default connect()(YourGroupScreen)