import { Alert, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@react-navigation/native'
import { createStyles } from './style'
import { FORCE_UPDATE_ON, IMAGES, SCREENS } from '../../../helper/Constants'
import TextInput from '../../../components/Textinput/TextInput'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'
import { navigate } from '../../../helper/NavigationHelper'
import { Linking } from 'react-native';
import VersionCheck from 'react-native-version-check';
import BottomSheet from '../../../helper/BottomSheet'
const Login = () => {
    //hooks
    const { t } = useTranslation()
    const { colors } = useTheme()
    const styles = createStyles(colors)

    useEffect(() => {
        VersionCheck.needUpdate()
            .then(async (res: any) => {
                if (FORCE_UPDATE_ON && res.isNeeded) {
                    // if (res.isNeeded) {
                    Alert.alert("App Update Required!", "We have added new features and fix some bugs to make your experience seamless.", [
                        {
                            text: 'Update App',
                            onPress: () => Linking.openURL(res.storeUrl),
                            style: 'cancel',
                        },
                    ])
                }
            });
    }, [])

    //states
    const [mobileNumber, setmobileNumber] = useState("")
    const [mobileNumberError, setmobileNumberError] = useState("")

    const handleSubmit = () => {
        if (mobileNumber.length < 10) {
            setmobileNumberError(t('enter_10_digit_number'))
        } else {
            navigate(SCREENS.OTP, { number: mobileNumber })
        }
    }
    return (
        <SafeAreaView>

            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.container}>

                    <Image source={IMAGES.loginImg}
                        style={styles.loginImage}
                    />

                    <View style={styles.enterView}>
                        <View style={styles.infoview}>
                            <Text style={styles.enterNumber}>{t('enter_your_number')}</Text>
                            <Text style={styles.otpText}>{t('opt_will_be_sent_to_your_number')}</Text>
                        </View>

                        <TextInput
                            value={mobileNumber}
                            error={mobileNumberError}
                            onChange={(text) => {
                                setmobileNumber(text)
                                setmobileNumberError('')
                            }}
                            maxLength={10}
                            keyboardType='numeric'
                            prefix={"+91"}
                            placeholder={t('enter_your_mobile_number')}

                        />
                        <PrimaryButton
                            title={t('continue')}
                            onPress={() => handleSubmit()}
                            disable={mobileNumber.length < 10}
                        />
                    </View>

                    <Text style={styles.byContinue}>
                        By continuing you agree to our
                        <Text style={styles.boldText}> Terms of Use & Privacy Policy</Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}

export default Login
