/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import RootStack from './navigations/RootStack';
import SplashScreen from 'react-native-splash-screen';
//Redux
import {UserContextProvider} from './apis/STRAPI/contexts/UserContext';
//theme
import {ThemeProvider} from 'styled-components';
import {dark, light} from './styles/theme';

//React-Query
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

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
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
          <RootStack />
        </ThemeProvider>
      </QueryClientProvider>
    </UserContextProvider>
  );
};

export default App;
