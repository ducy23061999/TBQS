import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import fonts from '../../comon/fonts/fonts'
import layouts from '../../comon/layout/layout'

export default StyleSheet.create({
    container: {
        ...layouts.rowStartCenter,
        marginLeft: -5
    },
    input: {
        backgroundColor: "blue"
    },
    marginTag: {
        marginLeft: 8,
        marginRight: 8
    },
    hide: {
        display: 'none'
    },
    tagContainer: {
        borderRadius: 10,
        borderColor: colors.lightViolet,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    },
    tagText: {
        padding: 4,
        fontFamily: fonts.PoppinsMedium,
        color: colors.boldViolet,
        fontSize: 13
    }
})