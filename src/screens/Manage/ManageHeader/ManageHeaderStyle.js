import {StyleSheet} from 'react-native'
import colors from '../../../comon/colors/colors'
import layouts from '../../../comon/layout/layout'
import fonts from '../../../comon/fonts/fonts'

export default StyleSheet.create({
    container: {
        ...layouts.rowSpaceBCenter,
        width: '100%',
        height: 130
   
     },
     leftContain: {
        ...layouts.rowStartCenter
     },
     item: {
       marginRight: 50
     },
     image: {
         width: 60,
         height: 60,
         borderRadius: 30
     },
     rightContain: {
        ...layouts.columnCenterCenter
     },
     nameText: {
        color: colors.white,
        fontFamily: fonts.PoppinsExtraBold,
        fontSize: 18
     },
     statusText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: fonts.PoppinsMedium
     },
     groupIcon: {
        fontSize: 28,
        color: colors.white,
        marginBottom: 5
     },
     yourGroupText: {
        color: colors.white,
        fontSize: 10,
        fontFamily: fonts.PoppinsMedium
     }
})