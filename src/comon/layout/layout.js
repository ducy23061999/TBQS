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
    rowSpaceCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    rowSpaceBCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowSpaceBStart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
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
    },
    columnStartCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    columnCenterCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    columnSpaceStart: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
})