import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
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
