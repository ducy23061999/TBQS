import {StyleSheet} from 'react-native'
import layouts from '../../comon/layout/layout'
import colors from '../../comon/colors/colors'

export default StyleSheet.create({
    container: {
        ...layouts.rowStartCenter,
        flexWrap: 'wrap'
    },
    memberContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: colors.white,
        borderWidth: 1
    },
    memberMargin: {
        marginLeft: -3
    },
    memberImage: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    badgeContainer: {
        
    }
})