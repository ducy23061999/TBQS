import {StyleSheet} from 'react-native' 
import layouts from '../../../comon/layout/layout'
import fonts from '../../../comon/fonts/fonts'
import colors from '../../../comon/colors/colors'

export default StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    content: {
        marginTop: 15,
        marginLeft: 8,
        marginRight: 8
    },
    borderTopView: {
        width: '100%',
        minHeight: 20,
        zIndex: 3,
        marginTop: -30,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        position: 'relative',
        backgroundColor: 'white'
    },
    ageContent: {
        ...layouts.rowStartCenter
    },
    keyAgeText: {
        fontSize: 20,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.boldBlue
    },
    valueAgeText: {
        fontSize: 20,
        fontFamily: fonts.PoppinsMedium,
        color: colors.boldBlue,
        marginLeft: 10
    },
    descriptionText: {
        fontSize: 20,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.boldBlue
    },
    lineSeparate: {
        borderTopColor: colors.blurWhite2,
        borderTopWidth: 1.5,
        borderStyle: 'dotted',
    },
    map: {
        width: '100%',
        height: 150
    }
})