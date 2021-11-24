import React from 'react';
// import { Button } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './navigation/homeNavigator';
import LoginNavigator from './navigation/loginNavigation';
//screens

const AuthStack = createStackNavigator();
const isLoggedIn = true;
// const MainScreenTab = createBottomTabNavigator();

export const RootNavigator = () => {
  // return <HomeNavigator />;
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <AuthStack.Screen name="Main" component={HomeNavigator} />
      ) : (
        <AuthStack.Screen name="Login" component={LoginNavigator} />
      )}
    </AuthStack.Navigator>
  )
};
