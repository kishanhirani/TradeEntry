import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, Touchable, TouchableOpacity, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IMAGES, SCREENS } from '../../helper/Constants';
import { width } from '../../helper/Responsive';
import Home from '../../screens/App/Home/Home';
import { useNavigationState, useRoute, useTheme } from '@react-navigation/native';
import { IColors } from '../../helper/Colors';
import { createStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { ScaleSize } from '../../helper/ScaleSize';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScaleFonts } from '../../helper/ScaleFonts';
import { AppFonts } from '../../helper/AppFonts';
import { navigate, navigationRef } from '../../helper/NavigationHelper';
import More from '../../screens/App/More/More';
import CanWallet from '../../screens/App/Can Wallet/CanWallet';
import Cart from '../../screens/App/Cart/Cart';
import Refer from '../../screens/App/Refer/Refer';
const BottomTabs = () => {

    //hooks
    const Tab = createBottomTabNavigator();
    const colors: IColors = useTheme().colors
    const styles = createStyles(colors)
    const { t } = useTranslation()

    //states
    const tabs = [
        { title: t('more'), image: IMAGES.more, screen: SCREENS.MORE },
        { title: t('home'), icon: 'home-variant-outline', screen: SCREENS.HOME },
        { title: t('can_wallet'), image: IMAGES.waterCan, screen: SCREENS.CAN_WALLET },
        { title: t('cart'), icon: "cart-outline", screen: SCREENS.CART },
        { title: t('refer'), icon: 'handshake', screen: SCREENS.REFER },
    ]

    //index
    const navigationState = useNavigationState((state) => state);
    const index = navigationState?.routes[0]?.state?.index;
    const selectedIndex = index ? index : 0;

    //render
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
            }}
            initialRouteName={SCREENS.HOME}
            backBehavior="none"
            tabBar={
                (props) => (
                    <View
                        style={styles.container}
                    >
                        <StatusBar backgroundColor={colors.primary} barStyle={'dark-content'} />
                        {tabs.map((itm, idx) => {
                            return (
                                <TouchableOpacity key={idx} style={styles.tabButton} onPress={() => {
                                    navigate(itm.screen)
                                }}>
                                    {itm.image ?
                                        <Image
                                            resizeMode='contain'
                                            source={itm.image}
                                            style={[styles.image, { tintColor: selectedIndex === idx ? colors.button : colors.border }]}
                                        /> :
                                        <Icon name={itm.icon} size={ScaleSize.SPACING_25} color={selectedIndex === idx ? colors.button : colors.border} />
                                    }
                                    <Text style={{ color: selectedIndex === idx ? colors.black : colors.border, fontSize: ScaleFonts.SIZE_16, fontFamily: AppFonts.FONT_MEDIUM }}>{itm.title}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                )
            }
        >
            <Tab.Screen key={0} name={SCREENS.MORE} component={More} />
            <Tab.Screen key={1} name={SCREENS.HOME} component={Home} />
            <Tab.Screen key={2} name={SCREENS.CAN_WALLET} component={CanWallet} />
            <Tab.Screen key={3} name={SCREENS.CART} component={Cart} />
            <Tab.Screen key={4} name={SCREENS.REFER} component={Refer} />

        </Tab.Navigator>

    )
}

export default BottomTabs
