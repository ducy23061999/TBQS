import {Dimensions, StyleSheet} from 'react-native'
import layouts from '../../comon/layout/layout';
import colors from '../../comon/colors/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.lightGreen,
        flex: 1,
        ...layouts.columnCenterCenter
    },
    imgLogo: {
        width: '80%',
        aspectRatio: 3.4
    }
})