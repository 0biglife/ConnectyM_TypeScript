/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {RootNavigation} from './navigations';
import SplashScreen from 'react-native-splash-screen';
//Redux

//theme
import {ThemeProvider} from 'styled-components';
import {dark, light} from './styles/theme';

const App = () => {
  const theme: string = 'light';
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    } catch (e) {
      console.warn('에러발생');
      console.warn(e);
    }
  });

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;
