import {StyleSheet} from 'react-native'
import colors from '../../comon/colors/colors'
import fonts from '../../comon/fonts/fonts'
import layouts from '../../comon/layout/layout'
import Utils from '../../comon/Utils'

export default StyleSheet.create({
    cardContainer: {
        width: '46%',
        marginLeft: "2%",
        marginRight: "2%"
    }, 
    groupAuthor: {
        ...layouts.rowStartCenter,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 15
    },
    avataImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2
    },
    rightAuthorContain: {
        marginLeft: 10
    },
    nameAuthor: {
        fontFamily: fonts.PoppinsRegular,
        fontSize: 14,
    },
    claimContain: {
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 10
    },
    clainText: {
        fontFamily: fonts.PoppinsExtraLightItalic,
        fontSize: 14
    },
    friendCardImage: {
        width: '100%',
        height: 120,
        borderRadius: 10
    },
    personInfoMargin: {
        marginBottom: 10,
        
    },
    titleText: {
        fontSize: 15,
        fontFamily: fonts.PoppinsBold,
        color: colors.black,
        marginTop: 16
    },
    descText: {
        fontSize: 9,
        // color: colors.lighGrey,
        fontFamily: fonts.PoppinsRegular,
    },
    groupBoldText: {
        fontSize: 12,
        fontFamily: fonts.PoppinsBold,
        color: colors.black,
    },
    groupCardContain: {
        width: '96%',
        marginLeft: "2%",
        marginRight: "2%"
    },
    cover: {
        padding: 0,
        margin: 0
    },
    coverGroupImage: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    memberContainer: {
        ...layouts.row
    },
    ownerGroup: {
        flex: 1,
    },
    listMember: {
        flex: 1,
        ...layouts.columnStartEnd
    },
    badgeContainer: {
        position: 'absolute',
        width: 120,
        height: 100,
        backgroundColor: colors.boldGreen,
        right: -54,
        top: -50,
        transform: [
            {
                rotate: "45deg"
            }
        ]
    },
    badge: {
        transform: [
            {translateX: 35},
            {translateY: 75}
        ],
        color: colors.white,
        fontFamily: fonts.PoppinsMedium,
        fontSize: 10
    },
    badgeForPerson: {
        right: -70, 
        // backgroundColor: colors.boldBlue2
    }
})