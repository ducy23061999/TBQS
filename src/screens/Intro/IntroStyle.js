import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 320,
        height: 320,
        marginVertical: 32,
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    buttonCircle: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
})