import {StyleSheet} from 'react-native'
import { COLORS } from '../static/constants/colors'
import { normalScale, verticalScale } from '../utils/device'

export const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    flex9: {
        flex: 9
    },
    flex2_5:{
        flex: 2.5
    },
    justifyBetween: {
        justifyContent:'space-between'
    },

    background:{
        backgroundColor: COLORS.enableColor
    },
    topContainer: {
        marginHorizontal: normalScale(24),
        marginTop: verticalScale(37)
    },
    bottomContainer: {
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: normalScale(16)
    }, 
    logoStyle : {
        width:normalScale(70),
        height:normalScale(70),
        marginBottom: verticalScale(23)
    },

    successContainer: {
        backgroundColor: COLORS.successColor,
    },

    justifyAlignCenter: {
        justifyContent:'center',
        alignItems:'center'
    },

    outerContainer: {
        width: normalScale(114),
        height: normalScale(114), 
        borderRadius: normalScale(60),
        backgroundColor: COLORS.outerColor
    },

    innerContainer: {
        width: normalScale(86),
        height: normalScale(86), 
        borderRadius: normalScale(44),
        backgroundColor: COLORS.enableColor
    },

    tickMark: {
        width:'100%',
        height: '100%'
    },

    otpSection: {
        backgroundColor: COLORS.primaryColor
    },

    colorWhite: {
        color: COLORS.enableColor
    },

    pdfContainerStyle:{
        width:'100%',
        height:'100%'
    }
})