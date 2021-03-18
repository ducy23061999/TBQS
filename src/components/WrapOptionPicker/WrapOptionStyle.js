import {StyleSheet} from 'react-native'
import fonts from '../../comon/fonts/fonts'
import colors from '../../comon/colors/colors'

export default StyleSheet.create({
    field: {
        marginBottom: 10,
        fontSize: 18,
        fontFamily: fonts.PoppinsExtraLight,
        color: colors.lighGrey,
        fontWeight: '600'
    },
    containerInput: {
        borderRadius: 6, 
        height: 60
    }, 

    input: {
        borderRadius: 10
    }
})