import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './navigation/homeNavigation';
import LoginNavigation from './navigation/loginNavigation';
import SearchNavigator from './navigation/searchNavigation';
//screens
import {
  homeViewDataTest,
  homeView,
  searchView,
  mymusicView,
  boardView,
  profileView,
  loginView,
} from './screens';
// import MusicPlayer from './screens/MusicPlayer';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const isLoggedIn = true;

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
          } else if (route.name === 'Board') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <IonIcon name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: 'center',
      })}>
      <Tab.Screen name="Home" component={homeViewDataTest} />
      <Tab.Screen name="Search" component={searchView} />
      <Tab.Screen name="MyMusician" component={mymusicView} />
      <Tab.Screen name="Board" component={boardView} />
      <Tab.Screen name="Profile" component={profileView} />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  // return <HomeNavigator />;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={AppTabComponent} />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={loginView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AppTabComponent"
            component={AppTabComponent}
            options={{gestureEnabled: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
