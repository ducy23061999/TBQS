import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import fonts from '../../comon/fonts/fonts'
import layouts from '../../comon/layout/layout'

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        zIndex: 0
    },
    coverImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
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
    },
    uploadView: {
        position: 'absolute',
        height: 50,
        width: 80,
        right: 0,
        bottom: 40,
        zIndex: 100,
        backgroundColor: colors.white,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        ...layouts.rowCenterCenter
    },
    photoIcon: {
       marginLeft: 10 
    },

})