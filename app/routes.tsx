import React from 'react';
// import { Button } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './navigation/homeNavigator';
import LoginNavigator from './navigation/loginNavigation';
//screens
import {
  homeView,
  homeView2,
  searchView,
  mymusicView,
  boardView,
  profileView,
} from './screens';

const AuthStack = createStackNavigator();
const isLoggedIn = true;


const Tab = createBottomTabNavigator();

const AppTabComponent = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Home"
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
          
      //   }
      // })}
    >
      <Tab.Screen name="Home" component={homeView} />
      <Tab.Screen name="Search" component={searchView} />
      <Tab.Screen name="MyMusician" component={mymusicView} />
      <Tab.Screen name="Board" component={boardView} />
      <Tab.Screen name="Profilie" component={profileView} />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  // return <HomeNavigator />;
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <AuthStack.Screen name="Home" component={AppTabComponent} />
      ) : (
        <AuthStack.Screen name="Login" component={LoginNavigator} />
      )}
    </AuthStack.Navigator>
  )
};
