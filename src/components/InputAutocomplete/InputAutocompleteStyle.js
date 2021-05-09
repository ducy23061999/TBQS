import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    listStyle: {
        width: '100%',
        left: -10,
        position: 'relative',
        backgroundColor: 'white',
        zIndex: 999999,
        elevation: (Platform.OS === 'android') ? 4 : 0,
        height: 300,
        flex: 1
    },
    row: {
        height: 50
    },
})