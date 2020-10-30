import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'
import {
    Container,
    Content,
    Header,
    Tabs,
    Tab,
    TabHeading,
    Icon
} from 'native-base'
import {
    Tabs as CustomTabs,
    CustomHeader
} from '../../components'
import PersonView from './PersonView'
import GroupView from './GroupView'
import MergeGroupView from './MergeGroupView'
import FloatButton from './FloatButton'
import HomeHeader from './HomeHeader'
import styles from './HomeStyle'
import {Screens} from '../../comon/Constants'
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

const TAB_STATE = {
    PERSONAL: 0,
    GROUP: 1,
    MERGE_GROUP: 2
}
export class HomeScreen extends Component {

    navigate = this.props.navigation

    navigateScreen = (type, item) => {
        switch(type) {
            case TAB_STATE.PERSONAL:
                this.navigate.push(Screens.FriendDetail, {item})
                break
            case TAB_STATE.GROUP: 
                this.navigate.push(Screens.GroupDetail, {item})
                break
            default: 
                this.navigate.push(Screens.FriendDetail, {item})
        }
    }

    renderBody(tabState) {
        switch(tabState) {
            case TAB_STATE.PERSONAL: {
                return <PersonView onPress = {(item) => {
                    this.navigateScreen(TAB_STATE.PERSONAL, item)
                }}/>
            }
            case TAB_STATE.GROUP: {
                return <GroupView onPress = {(item) => {
                    this.navigateScreen(TAB_STATE.GROUP, item)
                }}/>
            }
            case TAB_STATE.MERGE_GROUP: {
                return <MergeGroupView />
            }
        }
    }

    renderHeader = () => {
        return (
            <HomeHeader />
        )
    }
    render() {
       return (
        <Container>
            <HomeHeader />
            <StickyParallaxHeader
                header = {this.renderHeader}
                headerType = 'TabbedHeader'
                title = "Hi Ý. Mong bạn tìm bạn suôn sẻ!"
                tabs={[
                    {
                      title: 'Cá nhân',
                      content: this.renderBody(TAB_STATE.PERSONAL)
                    },
                    {
                      title: 'Nhóm',
                      content: this.renderBody(TAB_STATE.GROUP)
                    },
                    {
                      title: 'Ghép nhóm',
                      content: this.renderBody(TAB_STATE.MERGE_GROUP)
                    },
                  ]}
                  headerHeight = {40}
                renderBody = {this.renderBody}
            >
            </StickyParallaxHeader>
            <FloatButton/>
        </Container>
       )
    }
}
export default connect()(HomeScreen)