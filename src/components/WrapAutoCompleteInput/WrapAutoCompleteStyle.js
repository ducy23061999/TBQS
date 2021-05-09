import {StyleSheet} from 'react-native'
import fonts from '../../comon/fonts/fonts'
import colors from '../../comon/colors/colors'

export default StyleSheet.create({
    field: {
        marginBottom: 10,
        fontSize: 18,
        fontFamily: fonts.PoppinsExtraLight,
        color: colors.lighGrey,
        fontWeight: '600',
    },
    containerInput: {
        borderRadius: 6, 
        minHeight: 50,
    }, 

    input: {
        borderRadius: 10
    },

    autocompleteContain: {
        maxHeight: 200,
        marginTop: 10
    }
})