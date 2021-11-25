import React from 'react';
import {Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './navigation/homeNavigation';
import LoginNavigation from './navigation/loginNavigation';
import SearchNavigator from './navigation/searchNavigation';
//screens
import {mymusicView, boardView, profileView} from './screens';

import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const isLoggedIn = false;

const AppTabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'ios-search-outline';
          } else if (route.name === 'MyMusician') {
            iconName = focused
              ? 'ios-musical-notes'
              : 'ios-musical-notes-outline';
          } else if (route.name === 'Practice') {
            iconName = 'clipboard';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return <IonIcon name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: 'center',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{headerRight: () => <Button/>}}
      />
      <Tab.Screen name="Search" component={SearchNavigator} />
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
        <AuthStack.Screen name="Main" component={AppTabComponent} />
      ) : (
        <>
          <AuthStack.Screen
            name="Login"
            component={LoginNavigation}
            options={{headerShown: false}}
          />
          <AuthStack.Screen
            name="AppTabComponent"
            component={AppTabComponent}
            options={{gestureEnabled: false}}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};
