import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {loginView, signupView} from '../screens';

export enum LoginScreens {
  Login = 'Login',
  Signup = 'Signup',
}

export type LoginStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const LoginStack = createStackNavigator<LoginStackParamList>();
const LoginNavigation: React.FC = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name={LoginScreens.Login} component={loginView} />
      <LoginStack.Screen name={LoginScreens.Signup} component={signupView} />
    </LoginStack.Navigator>
  );
};

export default LoginNavigation;
