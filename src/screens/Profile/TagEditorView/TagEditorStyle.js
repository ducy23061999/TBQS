import {StyleSheet} from 'react-native'
import layouts from '../../../comon/layout/layout'
import colors from '../../../comon/colors/colors'
import fonts from '../../../comon/fonts/fonts'

export default StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 60,
        ...layouts.columnSpaceStart,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.greyTransparent,
        borderStyle: 'dashed',
    },
    tagContainer: {
        marginBottom: 10
    },
    fieldText: {
         fontFamily: fonts.PoppinsExtraLight,
         fontSize: 20,
         color: colors.lighGrey, 
         marginTop: 10
    },
    rightView: {
    }

})