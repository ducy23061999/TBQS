import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import Utils from '../../comon/Utils'
import layouts from '../../comon/layout/layout'
import fonts from '../../comon/fonts/fonts'

export default StyleSheet.create({
    container: {
        ...layouts.columnCenterCenter,
       marginLeft: 16,
       marginRight: 16,
       marginTop: '50%',
       alignSelf: 'center',
       borderRadius: 16
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    }, 

    wellcomeText: {
        textAlign: 'center',
        fontFamily: fonts.PoppinsRegular,
        paddingTop: 100,
        color: colors.white,
        fontSize: 16
    },
    buttonContainer: {
        marginTop: '20%',
        paddingBottom: 16,
        ...layouts.rowSpaceBCenter,
        height: 60,
        borderRadius: 10
    }, 

    buttonText: {
        fontFamily: fonts.PoppinsMedium,
        marginRight: 10,
        color: colors.white,
        fontSize: 16,
        marginTop: 10
    }
})