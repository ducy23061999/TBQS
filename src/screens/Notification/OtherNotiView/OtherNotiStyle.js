import {StyleSheet} from 'react-native'
import colors from '../../../comon/colors/colors'
import layouts from '../../../comon/layout/layout'
import fonts from '../../../comon/fonts/fonts'

export default StyleSheet.create({
    container: {
        marginTop: 30
    },
    chatItem: {
        width: '100%',
        height: 80,
        backgroundColor: colors.white,
        marginTop: 5,
        ...layouts.rowStartCenter,
    },
    leftContain: {
        ...layouts.rowSpaceBStart,
        marginLeft: 10,
        marginRight: 10
    },
     nameText: {
        color: colors.black,
        fontFamily: fonts.PoppinsRegular,
        fontSize: 18
     },
     statusText: {
        color: colors.lighGrey,
        fontSize: 14,
        fontFamily: fonts.PoppinsMedium,
        width: '90%'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    unreaded: {
        color: colors.black,
        fontFamily: fonts.PoppinsSemiBold
    }
})