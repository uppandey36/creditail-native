import React from 'react'
import {View, TextInput, Image} from 'react-native'
import {inputInterface} from '../interfaces/commanInterfaces'
import {styles} from './styles'

export const Input: React.FC<inputInterface>  = (props:inputInterface) => {
    const {keyboardType,onChangeText,value,editable = true,maxLength,multiline = false,placeholder,style,validated = false, isValidationRequired = false, onFocus} = props
    return(
        <View style = {styles.inputContainer}>
            <TextInput
                value={value}
                onChangeText = {onChangeText}
                placeholder = {placeholder}
                style = {[styles.inputStyle,style]}
                keyboardType = {keyboardType}
                onFocus = {onFocus}
            />
            {isValidationRequired && validated && <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/5/50/20120412190544%21Yes_Check_Circle.svg/120px-Yes_Check_Circle.svg.png'}} style = {styles.validatedImageStyle}/> }
        </View>
    )
}
