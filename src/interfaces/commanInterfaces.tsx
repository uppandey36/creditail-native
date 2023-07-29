import React, { Ref } from 'react'
import {ViewStyle, TextStyle, TextInputProps} from 'react-native'

export interface textInterface {
    color?: string
    style?: TextStyle
    children: string
}

export interface buttonInterfaces {
    label: string,
    disable: boolean,
    onClick: Function
}

export interface sizeboxInterface {
    width?: number,
    height?: number
}

export interface inputInterface extends TextInputProps {
    validated?: boolean,
    isValidationRequired?: boolean
}

export interface optBoxRef extends TextInputProps {
    ref?:  React.MutableRefObject<undefined>
}

export interface otpSectionBoxesInterface {
    id: string,
    currentRef: React.MutableRefObject<undefined>,
    editable: boolean,
    forwardRef?: React.MutableRefObject<undefined>
}