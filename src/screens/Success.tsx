import React from 'react'
import { View, Image } from 'react-native'
import { SemiBold1624, SizeBox } from '../components'
import { COLORS } from '../static/constants/colors'
import { strings } from '../static/constants/strings'
import { verticalScale } from '../utils/device'
import {styles} from './styles'

const SuccessScreen:React.FC = () => {
    return(
        <View style = {[styles.flex1, styles.successContainer, styles.justifyAlignCenter]}>
            <View style = {[styles.justifyAlignCenter, styles.outerContainer]}>
                <View style = {[styles.justifyAlignCenter, styles.innerContainer]}>
                    <Image source={{uri:'https://www.pngmart.com/files/16/Tick-Green-Check-Mark-PNG-Clipart.png'}} style = {styles.tickMark} />
                </View>
            </View>
            <SizeBox height={verticalScale(24)} />
            <SemiBold1624 style={{color: COLORS.enableColor}}>{strings.onboardingSuccess}</SemiBold1624>
        </View>
    )
}

export default SuccessScreen