import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Navigator
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

//View Module Stacks
import AuthStack from './AuthStack';
import MainTab from './MainTab';

export type rootStackParamList = {
  //
};

/*
export type rootStackParamList = {
  //
};export type rootStackParamList = {
  //
};export type rootStackParamList = {
  //
};export type rootStackParamList = {
  //
};export type rootStackParamList = {
  //
};export type rootStackParamList = {
  //
};export type rootStackParamList = {
  //
};
*/

const Stack = createStackNavigator();

const isLoggedIn = true;

export const RootNavigation = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
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
