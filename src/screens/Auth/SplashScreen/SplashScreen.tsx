import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { AppColors } from '../../../helper/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsConstants, IMAGES, RConstants, SCREENS } from '../../../helper/Constants';
import { useDispatch } from 'react-redux';
import { navigate, reset } from '../../../helper/NavigationHelper';
import { createStyles } from './styles';
import { useTheme } from '@react-navigation/native';

const SplashScreen = () => {

    //states
    //hooks
    const dispatch = useDispatch()
    const { colors } = useTheme()
    const styles = createStyles(colors)

    //mount
    useEffect(() => {
        setTimeout(() => {
            initApp()
        }, 3000);
    }, [])

    const initApp = async () => {
        const loggedIn = await AsyncStorage.getItem(AsConstants.LOGGED_IN)
        if (loggedIn) {
            dispatch({ type: RConstants.LOGIN_SUCCESS })
        } else {
            reset(SCREENS.INTRO_SLIDER)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} barStyle={'dark-content'} />
            <Image source={IMAGES.splashImg} />

        </View>
    )
}

export default SplashScreen

