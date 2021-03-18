import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {
    Container,
    Content,
    Body
} from 'native-base'
import styles from './ManageScreenStyle'
import {connect} from 'react-redux'
import Header from './ManageHeader'
import {Tabs, InviteCard} from '../../components'
import { Screens } from '../../comon/Constants'

export class ManageScreen extends Component {

    navigate = {
        yourGroup: () => {
            this.props.navigation.push(Screens.YourGroup)
        }
    }
    render() {

        return (
            <Container style = {{flex: 1}}>
                <Header
                    onPressYourGroup = {this.navigate.yourGroup}
                />
                <Tabs 
                    PersonView = {() => (
                        <View style = {{flex: 1}}>
                            <InviteCard />
                        </View>
                    )}
                    GroupView = {() => (
                        <View>

                        </View>
                    )}
                    MergeGroupView =  {() => (
                        <View>

                        </View>
                    )}
                />
            </Container>
        )
    }
}

export default connect()(ManageScreen)