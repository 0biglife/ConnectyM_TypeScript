/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { RootNavigation } from './navigations';
//Redux


//theme
import {ThemeProvider} from 'styled-components';
import {dark, light} from './styles/theme';

const App = () => {
  const theme: string = 'light';
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;
