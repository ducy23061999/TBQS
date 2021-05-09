import React, {Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import {
    Container
} from 'native-base'
import {connect} from 'react-redux'
import YourGroupContainView from './YourGroupContainView'
import FloatButton from './FloatButton'
import {BackFloatButton} from '../../components'
import Services from '../../services'
import layouts from '../../comon/layout/layout'
import colors from '../../comon/colors/colors'
export class YourGroupScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groupData: null,
            isLoading: false
        }

    }

    componentDidMount() {
        this.loadGroupData()
    }

    loadGroupData = () => {
        this.setState({isLoading: true})
        Services.getMyGroup()
        .then(response => {
            const data = response.data;
            console.log(response);
            this.setState({
                groupData: data,
                isLoading: false
            })   
        })
        .catch(error => {
            console.log(error);
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        const {isLoading, groupData} = this.state;

       return (
        <>
        <BackFloatButton {...this.props}/>
        <Container>
           { isLoading ?
                <ActivityIndicator 
                        size="large"
                        color = {colors.primaryGreen}
                        style = {[layouts.columnCenterCenter, {flex: 1}]}
                /> : 
                groupData ?
                 <YourGroupContainView 
                    onClickUpLoad = {() => {}}
                    item = {groupData}
                    onDeleteMember = {() => {}}
                /> : <View></View>
           }
          
        </Container>
        <FloatButton />
        </>
       )
    }
}
export default connect()(YourGroupScreen)