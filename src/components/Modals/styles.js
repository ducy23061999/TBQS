import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import layouts from '../../comon/layout/layout'
import fonts from '../../comon/fonts/fonts'

export default StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        minHeight: 80,
        backgroundColor: colors.white,
        borderRadius: 5,
    },
    headerContain: {
        ...layouts.rowSpaceBCenter,
        padding: 10
    },
    footerContain: {
        ...layouts.rowCenterCenter,
        marginTop: 10,
        marginBottom: 10
    },
    headerText: {
        fontFamily: fonts.PoppinsMedium,
        fontSize: 18
    },
    bodyModal: {
        marginLeft: 5,
        marginRight: 5
    }
})