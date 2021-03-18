import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import layouts from '../../comon/layout/layout'
import fonts from '../../comon/fonts/fonts'

export default StyleSheet.create({
    chatHeader: {
        marginTop: 30,
        height: 80,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    headerText: {
        color: colors.white,
        fontSize: 20,
        alignSelf: 'flex-end',
        marginRight:8
    },
    backButton: {
        marginLeft: 16
    },
    
    
})