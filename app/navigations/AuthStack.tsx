import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
//screens
import {loginView, signupView} from '../screens/Auth';
import MainTab from './MainTab';
import {AuthStackParamList} from './Types';

const Stack = createStackNavigator<AuthStackParamList>();
//
const AuthStack = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Login" component={loginView} />
      <Stack.Screen name="SignUp" component={signupView} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default AuthStack;
