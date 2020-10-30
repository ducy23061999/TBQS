import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    View,
    Image
} from 'react-native'
import images from '../../images'
import { SharedElement } from 'react-navigation-shared-element'

export class GroupDetailScreen extends Component {

    render() {
        const { item } = this.props.route.params;
        return (
            <View style = {{flex: 1}}>
                <SharedElement id={`group_item.${item}.photo`}>
                    <Image 
                        source = {images.thumnail}
                        style = {{width: '100%', height: 500}}
                        resizeMethod = 'auto'
                        resizeMode = 'cover'
                    />
                </SharedElement>
            </View>
        )
    }
}
export default connect()(GroupDetailScreen)
