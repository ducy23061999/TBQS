import React, {useState} from 'react';
import {
    View,
    Text
} from 'react-native'
import {
    Tabs,
    Tab,
    TabHeading,
    Icon
} from 'native-base'
import {
    DefaultTab
} from './Tab'
import styles from './TabsStyle'
import colors from '../../comon/colors/colors'

export default function({PersonView, GroupView, MergeGroupView}) {
    const [isLocked, setIsLocked] = useState(false);


    return (
        <Tabs 
            style = {[styles.container]}
            tabBarBackgroundColor = {colors.lightPink}
        >
            <Tab
                heading = {<TabHeading style = {styles.headingBackground}><DefaultTab text =  "Cá Nhân"/></TabHeading>}
            >
            <PersonView/>
            </Tab>
            <Tab 
                heading={<TabHeading style = {styles.headingBackground}><DefaultTab text =  "Nhóm"/></TabHeading>}
            >
                <GroupView/>
            </Tab>
            <Tab 
                heading={<TabHeading style = {styles.headingBackground}><DefaultTab text =  "Ghép Nhóm"/></TabHeading>}
            >
                <MergeGroupView/>
            </Tab>

        </Tabs>
    )
}