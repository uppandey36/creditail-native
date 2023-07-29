import React from 'react'
import {TouchableOpacity} from 'react-native'
import { Bold1420 } from '.'
import { buttonInterfaces } from '../interfaces/commanInterfaces'
import { styles } from './styles'

export const ButtonSolid: React.FC<buttonInterfaces> = (props:buttonInterfaces) => {
    const disable = props.disable
    return(
        <TouchableOpacity activeOpacity={1} 
            onPress = {()=>disable? null: props.onClick()}
            style = {[styles.buttonComman, disable? styles.buttonDisabled: styles.buttonEnable]}
        >
            <Bold1420 style={disable? styles.colorDiable : styles.colorEnable}>{props.label}</Bold1420>
        </TouchableOpacity>
    )
}
