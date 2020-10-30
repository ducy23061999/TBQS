import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import fonts from '../../comon/fonts/fonts'

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
    },
    coverImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    absoluteView: {
        position: 'absolute',
        bottom: 30,
        left: 12
    },
    titleText: {
        color: colors.white,
        fontFamily: fonts.PoppinsMedium,
        fontSize: 24
    },
    descText: {
        color: colors.white,
        fontFamily: fonts.PoppinsRegular,
        fontSize: 18
    }
})