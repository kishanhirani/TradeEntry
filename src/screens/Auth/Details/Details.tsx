import { Image, StatusBar, StyleSheet, Text, TextInput as BaseInput, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native'
import React, { LegacyRef, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'
import { createStyles } from './style'
import { IMAGES, RConstants, SCREENS } from '../../../helper/Constants'
import { goBack, navigate, reset } from '../../../helper/NavigationHelper'
import { ScaleSize } from '../../../helper/ScaleSize'
import TextInput from '../../../components/Textinput/TextInput'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'
import Utils from '../../../helper/Utils'

const Details = () => {
    //hooks
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { colors } = useTheme()
    const styles = createStyles(colors)

    //states
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [nameError, setnameError] = useState("")
    const [emailError, setemailError] = useState("")
    const [formStatus, setFormStatus] = useState<boolean>(true)

    //refs
    const nameRef = useRef<BaseInput>(null)
    const emailRef = useRef<BaseInput>(null)

    //functions
    const handleSubmit = () => {
        let isValid = true
        if (Utils.isNull(name)) {
            isValid = false
            setnameError('required')
        } else {
            setnameError('')
        }
        if (Utils.isNull(email)) {
            isValid = false
            setemailError("required")
        } else if (!Utils.isEmailValid(email)) {
            isValid = false
            setemailError(t('invalid_email_format'))
        } else {
            setemailError("")
        }
        if (isValid) {
            dispatch({ type: RConstants.LOGIN_SUCCESS })

        }
    }

    return (
        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>
                    <Image source={IMAGES.detailsImg}
                        style={styles.loginImage}
                    />

                    <View style={styles.enterView}>
                        <Text style={styles.enterNumber}>You are {"\n"}Almost Done!</Text>
                        <Text style={styles.otpText}>Please enter your basic details</Text>

                        <View style={styles.textInputWrap}>
                            <TextInput
                                value={name}
                                error={nameError}
                                onChange={(text) => {
                                    setname(text)
                                    setnameError("")
                                }}
                                placeholder={t('your_name')}
                                refs={nameRef}
                                onSubmit={() => emailRef?.current?.focus()}

                            />
                            <TextInput
                                value={email}
                                placeholder={t('your_email')}
                                error={emailError}
                                onChange={(text) => {
                                    setemail(text)
                                    setemailError("")
                                }}
                                refs={emailRef}
                                onSubmit={() => handleSubmit()}
                            />

                        </View>

                        <PrimaryButton
                            title={t('continue')}
                            onPress={() => handleSubmit()}
                            disable={email.length === 0 || name.length === 0} />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}

export default Details
