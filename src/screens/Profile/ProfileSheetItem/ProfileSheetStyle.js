import {
    StyleSheet
} from 'react-native'
import colors from '../../../comon/colors/colors'
import Utils from '../../../comon/Utils'
import layouts from '../../../comon/layout/layout'
import fonts from '../../../comon/fonts/fonts'

const HEIGHT = Utils.getHeith()
export default StyleSheet.create({
   container: {
       width: '100%',
       minHeight: 60,
       ...layouts.rowSpaceBCenter,
       borderBottomWidth: 0.5,
       borderBottomColor: colors.greyTransparent,
       borderStyle: 'dashed',
   },
   fieldText: {
        fontFamily: fonts.PoppinsExtraLight,
        fontSize: 20,
        color: colors.lighGrey, 
   },
   rightView: {
   }
   
})