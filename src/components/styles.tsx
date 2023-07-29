import {StyleSheet} from 'react-native'
import {FONTS,FONT_SIZES} from '../utils/fonts'
import { height, normalScale, verticalScale } from '../utils/device'
import { COLORS } from '../static/constants/colors'

export const styles = StyleSheet.create({
    Bold2024:{
        color: '#000',
        fontFamily: FONTS.Bold,
        fontSize: FONT_SIZES[20],
        fontWeight: "700",
        lineHeight: FONT_SIZES[24],
        fontStyle: 'normal'
    },
    Bold1420:{
        color: '#000',
        fontFamily: FONTS.Bold,
        fontSize: FONT_SIZES[14],
        fontWeight: "700",
        lineHeight: FONT_SIZES[20],
        fontStyle: 'normal'
    },
    SemiBold1624:{
        color: '#000',
        fontFamily: FONTS.SemiBold,
        fontSize: FONT_SIZES[16],
        fontWeight: "400",
        lineHeight: FONT_SIZES[24],
        fontStyle: 'normal'
    },
    Regular1120:{
        color: '#000',
        fontFamily: FONTS.SemiBold,
        fontSize: FONT_SIZES[11],
        fontWeight: "400",
        lineHeight: FONT_SIZES[20],
        fontStyle: 'normal'
    },
    buttonComman: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius: normalScale(12),
        width:'100%',
        height: '80%'
    },
    colorEnable: {
        color: COLORS.enableColor
    },
    colorDiable: {
        color: COLORS.disableColor,
    },
    buttonEnable: {
        backgroundColor: COLORS.primaryColor
    },
    buttonDisabled: {
        backgroundColor: COLORS.disableBackground
    }, 
    inputContainer: {
        borderWidth:1,
        borderRadius: normalScale(6),
        height: verticalScale(70),
        flexDirection:'row'
    },
    inputStyle: {
        width: '100%',
        borderRadius: normalScale(6),
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(24)
    },

    validatedImageStyle: {
        borderWidth:1,
        position: 'absolute',
        zIndex: 1,
        width: normalScale(24),
        height: verticalScale(34),
        right:5,
        bottom: 14,
    },

    otpIndividualBoxStyle: {
        width: normalScale(48),
        height: normalScale(48),
        textAlign: 'center',
        fontSize: FONT_SIZES[20],
        fontWeight:'bold',
        color: COLORS.enableColor
    },

    enableBackground: {
        backgroundColor: COLORS.otpBoxBackgroundEnable
    },

    disableBackground: {
        backgroundColor: COLORS.otpBoxBackgroundDisable
    },

    otpContainerStyle: {
        flexDirection:'row',
        width: normalScale(220),
        justifyContent:'space-between'
    },

    optMainConatiner: {
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    touchableContainer: {
        width: normalScale(48),
        height: normalScale(48),
    },

    imageContent: {
        borderWidth: 1,
        width: '100%',
        height: '100%'
    }
})