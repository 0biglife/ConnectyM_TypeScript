import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

//Navigator
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

//View Module Stacks
import AuthStack from './AuthStack';
import MainTab from './MainTab';
import { isPropertySignature } from 'typescript';

export type rootStackParamList = {
  //
};

const Stack = createStackNavigator();

const isLoggedIn = true;

export const RootNavigation = () => {
  const themeContext = useContext(ThemeContext);

  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: '#323232',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'MainTab' : 'AuthStack'}
        screenOptions={navigationOptions}>
        {isLoggedIn ? (
          <Stack.Screen name="MainTab" component={MainTab} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
