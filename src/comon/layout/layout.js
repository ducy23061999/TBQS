import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    rowCenterCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    rowStartCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    rowEndCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    columnStartEnd: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    }
})