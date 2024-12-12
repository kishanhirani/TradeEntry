import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AppNavigator from './appNavigator';
import AuthNavigator from './authNavigator';
import { navigationRef } from '../helper/NavigationHelper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/Store';
import { darkColor, lightColor } from '../helper/Colors';
import { SafeAreaView } from 'react-native';

const RootNavigator = () => {
  const theme = 'light';

  let MyTheme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, ...lightColor },
  };

  if (theme === 'light') {
    MyTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, ...darkColor } };
  }



  //states
  const [loggedIn, setLoggedIn] = useState(false);

  //selector
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  //mount
  useEffect(() => {
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, [isLoggedIn]);

  //render
  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      {!loggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
