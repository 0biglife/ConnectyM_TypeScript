import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
//screens
import {
  loginView as LoginView,
  signupView as SignUpView,
  phoneAuth as PhoneAuth,
  otpAuth as OTPAuth,
  permissionAuth as PermissionAuth,
} from '../screens/Auth';
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
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="SignUp" component={SignUpView} />
      <Stack.Screen name="PhoneAuth" component={PhoneAuth} />
      <Stack.Screen name="OtpAuth" component={OTPAuth} />
      <Stack.Screen name="PermissionAuth" component={PermissionAuth} />
    </Stack.Navigator>
  );
};

export default AuthStack;
