import React, { useState } from 'react'
import {TextInput, View, TouchableOpacity,Image} from 'react-native'
import { styles } from './styles'

const OTPContainer: React.FC = ({onSubmit}) => {
    const [values,setValues] = useState(['','','',''])
    const [focused,setFocused] = useState(0)

    const refs = []
    for (let i = 0; i < 4; i++) {
        refs[i] = React.createRef<TextInput>()
    }

    const onChangeText = (text: string,index: number) =>{
        if(text && index < 3){
            refs[index+1]?.current?.focus()
            let newValues = [...values]
            newValues[index] = text
            setValues(newValues)
            setFocused(index+1)
        }else if(text && index == 3){
            let newValues = [...values]
            newValues[index] = text
            setValues(newValues)
            submitOTP(newValues)
        }
    }

    const handleKeyPress = (e,index) => {
        if(e.nativeEvent.key === 'Backspace' && index > 0 && values[index] === ''){
            refs[index - 1]?.current?.focus()
            let newValues = [...values]
            newValues[index - 1] = ''
            setValues(newValues)
            setFocused(index - 1)
        }
    }
    const submitOTP = (vals) => {
        onSubmit(vals.join(''))
    }
    return(
        <View style = {styles.optMainConatiner}>
            <View style = {[styles.otpContainerStyle]}>
                {
                    Array(4).fill('')?.map((item,index) => (
                        <TextInput 
                            style = {[styles.otpIndividualBoxStyle, focused === index ? styles.enableBackground : styles.disableBackground]}
                            maxLength= {1}
                            editable = {true}
                            value = {values[index]}
                            onChangeText = {(text) => onChangeText(text,index)}
                            ref = {refs[index]}
                            keyboardType = {'number-pad'}
                            onKeyPress = {(e) => handleKeyPress(e,index)}
                            autoFocus = {index === 0}
                        />
                    ))
                }
            </View>
            <TouchableOpacity activeOpacity={1} style = {styles.touchableContainer} onPress = {()=>submitOTP(values)}>
                <Image source={require('../static/images/Button.png')} style = {styles.imageContent} />
            </TouchableOpacity>
        </View>
    )
}

export default OTPContainer