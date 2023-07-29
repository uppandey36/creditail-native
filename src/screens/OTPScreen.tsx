import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { Bold2024, Regular1120, SemiBold1624, SizeBox } from '../components'
import { strings } from '../static/constants/strings'
import { verticalScale } from '../utils/device'
import { styles } from './styles'
import OTPContainer from '../components/OTPComponent'
import Pdf from 'react-native-pdf'

const OTPScreen: React.FC = ({navigation}) => {

    const onSubmit = (otp:string) =>{
        if(otp.length === 4){
            setTimeout(()=>{
                navigation.navigate('success')
            },1000)
        }
    }
    return(
        <View style={styles.flex1}>
            <View style = {[styles.topContainer, styles.flex2_5]}>
                <Bold2024>{`${strings.step} 2`}</Bold2024>
                <SizeBox height={verticalScale(7)} />
                <SemiBold1624>{strings.enterOtpPlease}</SemiBold1624>
                <View style = {[styles.flex1]}>
                    <Pdf 
                        source={{uri:"https://drive.google.com/file/d/1uvswVpD52fJ0fz03A93nbNPxGMFhAEbk/view"}} 
                        style = {styles.pdfContainerStyle} 
                        onLoadComplete={(numberOfPages,filePath)=>{
                            console.log(`number of pages: ${numberOfPages}`);
                        }}
                    />
                </View>
            </View>
            <View style = {[styles.flex1, styles.otpSection]}>
                <View style = {[styles.topContainer, styles.flex1, styles.justifyBetween]}>
                    <Bold2024 style={styles.colorWhite} >{strings.enterOtp}</Bold2024>
                    <OTPContainer onSubmit = {onSubmit} />
                    <View>
                        <Regular1120 style={styles.colorWhite}>{strings.didNotGetYet}</Regular1120>
                        <SizeBox height={verticalScale(8)} />
                        <TouchableOpacity activeOpacity={1}>
                            <SemiBold1624 style={styles.colorWhite}>{strings.resend}</SemiBold1624>
                        </TouchableOpacity>
                        <SizeBox height={verticalScale(21)} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default OTPScreen