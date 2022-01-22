import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
//screens
import {
  loginView,
  signupView,
  phoneAuth,
  otpAuth,
  permissionAuth,
} from '../screens/Auth';
import MainTab from './MainTab';
import {AuthStackParamList} from './Types';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const navigationOptions: StackNavigationOptions = {
    // headerShown: false,
    headerTitle: '',
    gestureEnabled: false,
    headerBackTitleVisible: false,
    headerTintColor: 'black',
    headerStyle: {
      shadowColor: 'transparent', //버튼을 보여주되 헤더 가리기
    },
  };
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Login" component={loginView} />
      <Stack.Screen name="SignUp" component={signupView} />
      <Stack.Screen name="PhoneAuth" component={phoneAuth} />
      <Stack.Screen name="OtpAuth" component={otpAuth} />
      <Stack.Screen name="PermissionAuth" component={permissionAuth} />
    </Stack.Navigator>
  );
};

export default AuthStack;
