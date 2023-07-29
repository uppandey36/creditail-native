import Recat from 'react'
import {Text, View} from 'react-native'
import {textInterface, sizeboxInterface} from '../interfaces/commanInterfaces'
import {styles} from './styles'

export const Bold2024: React.FC<textInterface> = (props:textInterface) => {
    return (
        <Text style = {[styles.Bold2024, props.style]}>
            {props?.children}
        </Text>
    )
}

export const SemiBold1624: React.FC<textInterface> = (props:textInterface) => {
    return (
        <Text style = {[styles.SemiBold1624, props.style]}>
            {props?.children}
        </Text>
    )
}

export const Regular1120: React.FC<textInterface> = (props:textInterface) => {
    return (
        <Text style = {[styles.Regular1120, props.style]}>
            {props?.children}
        </Text>
    )
}

export const Bold1420: React.FC<textInterface> = (props:textInterface) => {
    return (
        <Text style = {[styles.Bold1420, props.style]}>
            {props?.children}
        </Text>
    )
}

export const SizeBox: React.FC<sizeboxInterface> = (props:sizeboxInterface) => {
    const {width = 0,height = 0} = props
    return(
        <View style = {{
            width,
            height
        }} />
    )
}