import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
import { createStyles } from './style'
import { IMAGES, SCREENS } from '../../../helper/Constants'
import { OtpInput, OtpInputRef } from "react-native-otp-entry"
import { goBack, navigate, reset } from '../../../helper/NavigationHelper'
import { ScaleSize } from '../../../helper/ScaleSize'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const INITIAL_TIMER = 59
const TIMER_INTERVAL = 1000

const OTP_SCREEN = () => {
    // hooks
    const { t } = useTranslation()
    const route = useRoute()
    const { colors } = useTheme()
    const styles = createStyles(colors)
    const navigation = useNavigation()

    // states
    const [timer, setTimer] = useState(INITIAL_TIMER)
    const [isResendActive, setIsResendActive] = useState(false)

    // refs
    const otpRef = useRef<OtpInputRef | undefined>()
    const timerRef = useRef<NodeJS.Timeout>()

    // props
    const number = route?.params?.number

    const formatTime = (seconds: number): string => {
        return `00:${seconds.toString().padStart(2, '0')}`
    }

    const startTimer = useCallback(() => {
        setIsResendActive(false)
        setTimer(INITIAL_TIMER)

        // Clear any existing timer
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }

        timerRef.current = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    // Clear interval when timer reaches 0
                    if (timerRef.current) {
                        clearInterval(timerRef.current)
                    }
                    setIsResendActive(true)
                    return 0
                }
                return prev - 1
            })
        }, TIMER_INTERVAL)
    }, [])

    const handleResend = () => {
        if (isResendActive) {
            startTimer()
        }
    }

    useEffect(() => {
        startTimer()

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [])

    const handleOtpComplete = (text: string) => {
        if (text.length === 4) {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
            reset(SCREENS.DETAILS)
        }
    }

    return (
        <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    <Icon
                        name='arrow-left'
                        size={ScaleSize.SPACING_40}
                        style={styles.arrowStyle}
                        onPress={() => goBack()}
                    />
                    <Image source={IMAGES.otpImg} style={styles.loginImage} />
                    <View style={styles.enterView}>
                        <Text style={styles.enterNumber}>{t('enter_otp')}</Text>
                        <Text style={styles.otpText}>
                            {t('otp_sent_to')}<Text style={styles.boldText}>{number}</Text>
                        </Text>
                        <View style={styles.otpView}>
                            <OtpInput
                                theme={{
                                    pinCodeContainerStyle: {
                                        borderWidth: 0,
                                        borderBottomWidth: 2,
                                        borderColor: "red",
                                        width: ScaleSize.SPACING_60,
                                        padding: 0,
                                        margin: 0,
                                    },
                                    focusStickStyle: {
                                        backgroundColor: "black",
                                        bottom: -ScaleSize.SPACING_10
                                    },
                                    pinCodeTextStyle: {
                                        padding: 0,
                                        bottom: -ScaleSize.SPACING_10
                                    },
                                    focusedPinCodeContainerStyle: {
                                        borderColor: "black",
                                    }
                                }}
                                numberOfDigits={4}
                                ref={otpRef}
                                onTextChange={handleOtpComplete}
                            />
                            <View style={styles.resendView}>
                                <Text style={styles.timerText}>{formatTime(timer)}</Text>
                                <Text
                                    onPress={handleResend}
                                    style={[
                                        styles.resendText,
                                        !isResendActive && styles.resendTextDisabled
                                    ]}
                                >
                                    {t('resend')}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default OTP_SCREEN