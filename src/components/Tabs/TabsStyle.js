import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
export default StyleSheet.create({
    container: {
        flex: 1,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0
    },
    tabContainer: {
        backgroundColor: colors.boldOrange1
    },
    headingBackground: {
        backgroundColor: colors.primaryGreen,
    },
    textInTab: {
        color: colors.white,
        fontWeight: 'bold'
    }
})