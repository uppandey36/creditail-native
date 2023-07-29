import React, {useState} from 'react'
import {View, Image, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'
import { SemiBold1624, Bold2024, SizeBox, Regular1120 } from '../components'
import { ButtonSolid } from '../components/Button'
import { strings } from '../static/constants/strings'
import { verticalScale } from '../utils/device'
import { Input } from '../components/input'
import {styles} from './styles'

const Home: React.FC = ({navigation}) =>{
    const [name,setName]= useState<string>('')
    const [email,setEmail]= useState<string>('')
    const [aadhaar,setAAdhaar]= useState<string>('')
    const [pan,setPan]= useState<string>('')
    const [dob,setDob]= useState<string>('')

    const enterAAdhaar = (text:string) => {
        if(text.length <= 14){
            let thisAadhaar = ''
            if (text.length === 4) thisAadhaar = text + ' '
            else if (text.length === 9) thisAadhaar = text + ' '
            else thisAadhaar = text

            setAAdhaar(thisAadhaar)
        }
    }

    const enterDob = (text:string) => {
        if(text.length <= 8){
            let thisDob = ''
            if (text.length === 2) thisDob = text + '/'
            else if (text.length === 5) thisDob = text + '/'
            else thisDob = text

            setDob(thisDob)
        }
    }

    const isButtonEnable = () => (
        name && 
        /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email) && 
        /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(aadhaar) && 
        /[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan) &&
        /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{2}$/.test(dob)
    )

    const onContinue = () => {
        navigation.navigate('otp')
    }
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style = {[styles.flex1,styles.background]}>
            <View style = {[styles.flex9 ,styles.topContainer]}>
                <Image 
                    source={{uri:'https://media.licdn.com/dms/image/D560BAQEiDxpujaremQ/company-logo_200_200/0/1682624915670?e=1698278400&v=beta&t=_5dCfXjBwFL58Dk3UPqPqKtNo4CDIW7CHk5bT29ugVk'}}
                    style = {styles.logoStyle}
                />
                <View style = {styles.flex1}>
                <ScrollView>
                    <Bold2024>{`${strings.step} 1`}</Bold2024>
                    <SizeBox height={verticalScale(7)} />
                    <SemiBold1624>{strings.enterDetails}</SemiBold1624>

                    <SizeBox height={verticalScale(17)} />
                    <Regular1120>{strings.ownerName}</Regular1120>
                    <Input 
                        value={name}
                        onChangeText = {setName}
                        keyboardType = 'default'
                        key={'1'}
                        placeholder = 'Enter Store Owner Name'
                    />

                    <SizeBox height={verticalScale(24)} />
                    <Regular1120>{strings.emailAddress}</Regular1120>
                    <Input 
                        value={email}
                        onChangeText = {setEmail}
                        keyboardType = 'default'
                        key={'2'}
                        placeholder = 'abcdefgh@gmail.com'
                    />

                    <SizeBox height={verticalScale(24)} />
                    <Regular1120>{strings.aadharNumber}</Regular1120>
                    <Input 
                        value={aadhaar}
                        onChangeText = {enterAAdhaar}
                        keyboardType = 'number-pad'
                        key={'3'}
                        placeholder = '1234 5678 0123'
                        isValidationRequired = {true}
                        validated = {/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(aadhaar)}
                    />

                    <SizeBox height={verticalScale(24)} />
                    <Regular1120>{strings.panNumber}</Regular1120>
                    <Input 
                        value={pan}
                        onChangeText = {setPan}
                        keyboardType = 'default'
                        key={'4'}
                        placeholder = 'ABCDE1234F'
                        isValidationRequired = {true}
                        validated = {/[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)}
                    />
                    {/[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan) &&
                    <>
                    <SizeBox height={verticalScale(24)} />
                    <Regular1120>{strings.dob}</Regular1120>
                    <Input 
                        value={dob}
                        onChangeText = {enterDob}
                        keyboardType = 'number-pad'
                        key={'5'}
                        placeholder = 'DD/MM/YY'
                    /></>}
                </ScrollView>
                </View>
            </View>
            <View style = {[styles.flex1, styles.bottomContainer]}>
                <ButtonSolid 
                    label={strings.continue}
                    disable = {!isButtonEnable()}
                    onClick = {onContinue}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Home