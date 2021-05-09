import {
    StyleSheet
} from 'react-native'
import colors from '../../comon/colors/colors'
import Utils from '../../comon/Utils'
import layouts from '../../comon/layout/layout'
import fonts from '../../comon/fonts/fonts'

const HEIGHT = Utils.getHeith()
export default StyleSheet.create({
    container: {
        marginTop: 60,
        marginBottom: 20,
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        height: HEIGHT - 80,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    center: {
        ...layouts.columnCenterCenter,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 300,
        backgroundColor: 'blue'
    },
    avata: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    emailText: {
        marginTop: 10,
        fontFamily: fonts.PoppinsMedium,
        color: colors.primaryGreen,
        fontSize: 16
    },
    descText: {
        fontSize: 10,
        // color: colors.lighGrey,
        fontFamily: fonts.PoppinsRegular,
        color: 'white'
    },
    button: {
        borderRadius: 8,
        marginTop: 10,
    },
    textItem: {
        fontFamily: fonts.PoppinsMedium,
        color: colors.lighGrey,
        elevation: 3
    }
})