import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
// import Profile from '../screens/Home/Profile';
import { SCREENS } from '../helper/Constants';
import BottomTabs from './BottomTabs/BottomTabs';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();


export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SCREENS.BOTTOM_TABS} component={BottomTabs} />
        </Stack.Navigator>
    );
}