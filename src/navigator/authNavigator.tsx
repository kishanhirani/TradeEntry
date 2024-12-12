import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../helper/Constants';
import SplashScreen from '../screens/Auth/SplashScreen/SplashScreen';
import IntroSLider from '../screens/Auth/IntroSlider/IntroSLider';
import Login from '../screens/Auth/Login/Login';
import OTP_SCREEN from '../screens/Auth/Otp/Otp';
import Details from '../screens/Auth/Details/Details';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.SPLASH} component={SplashScreen} />
            <Stack.Screen name={SCREENS.INTRO_SLIDER} component={IntroSLider} />
            <Stack.Screen name={SCREENS.LOGIN} component={Login} />
            <Stack.Screen name={SCREENS.OTP} component={OTP_SCREEN} />
            <Stack.Screen name={SCREENS.DETAILS} component={Details} />
        </Stack.Navigator>
    );
}