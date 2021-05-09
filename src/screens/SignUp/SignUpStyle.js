import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import Utils from '../../comon/Utils'
import layouts from '../../comon/layout/layout'
import fonts from '../../comon/fonts/fonts'

export default StyleSheet.create({
    container: {

    },
    topHeader: {
        marginTop: 16
    }, 
    scrollView: {
        paddingBottom: 100
    },

    textRegister: {
        textAlign: 'center',
        fontFamily: fonts.PoppinsSemiBold,
        fontSize: 30,
        marginBottom: 30
    },

    registerDesc: {
        textAlign: 'center',
        fontFamily: fonts.PoppinsRegular,
        fontSize: 15,
        color: colors.lighGrey,
        marginTop: 15
    },
    containerForm: {
        marginTop: 40,
        marginLeft: 16,
        marginRight: 16
    },
    marginItem: {
        marginBottom: 10
    },
    floatButton: {
        position: 'absolute',
        bottom: 20,
        width: Utils.getWidth(),
        height: 60,
        zIndex: 3
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        marginLeft: 16,
        marginTop: 15,
        zIndex: 2
    },
    lineSeparate: {
        borderTopColor: colors.blurWhite2,
        borderTopWidth: 1.5,
        borderStyle: 'dotted',
    },
    descriptionText: {
        fontSize: 20,
        fontFamily: fonts.PoppinsSemiBold,
        color: colors.boldBlue
    },
    buttonFavor: {
        width: '100%',
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        marginTop: 10,
        ...layouts.columnCenterCenter
    },
    locationText: {
        color: colors.lighGrey,
        fontSize: 20
    },
    locationButton: {
        marginTop: 10
    }
})