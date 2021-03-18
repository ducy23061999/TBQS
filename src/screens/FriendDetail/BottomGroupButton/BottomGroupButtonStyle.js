import {StyleSheet} from 'react-native'
import layouts from '../../../comon/layout/layout'
import colors from '../../../comon/colors/colors'

export default StyleSheet.create({
    container: {
        ...layouts.rowCenterCenter,
        position: 'absolute',
        bottom: 10,
        width: '100%'
    },
    button: {
        width: 55,
        height: 55,
        ...layouts.rowCenterCenter,
        marginLeft: 15,
        marginRight: 15
    }
})