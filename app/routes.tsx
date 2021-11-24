import React from 'react';
import { Button } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './navigation/homeNavigator';

//screens

const AuthStack = createStackNavigator();
// const MainScreenTab = createBottomTabNavigator();

export const RootNavigator = () => {
  return <HomeNavigator />;
};
