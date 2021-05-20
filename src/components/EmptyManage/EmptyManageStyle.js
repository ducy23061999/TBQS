import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import fonts from '../../comon/fonts/fonts'
import layouts from '../../comon/layout/layout'

export default StyleSheet.create({
    container: {
        ...layouts.columnCenterCenter
    },
    image: {
        width: '70%',
        height: '70%'
    },
    text: {
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        color: colors.lighGrey,
        fontFamily: fonts.PoppinsLight,
        fontSize: 16
    }
})