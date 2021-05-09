import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import { connect } from 'react-redux'
import {GroupList} from '../../../components'
import {getSuggestGroup} from '../../../store/actions'


export function GroupView({onPress, groupData}) {
    console.log(groupData)
    return (
        <View style = {{flex: 1}}>
            <GroupList
                data = {groupData}
                onPress = {onPress}
             />
        </View>
    )
}
const mapStateToProps = (state) => ({
    groupData: state.groupReducer
})

const mapActionToDispatch = (dispatch) => ({
    
})
export default connect(mapStateToProps, mapActionToDispatch)(GroupView)
