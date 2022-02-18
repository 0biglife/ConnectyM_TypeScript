import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

//screens
import {
  mymusicView,
  boardView,
  searchView,
  HomeView,
  Profile,
} from '../screens';
//components
import {MainTabParamList} from './Types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab = () => {
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
      })}>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Search" component={searchView} />
      <Tab.Screen name="MyMusician" component={mymusicView} />
      <Tab.Screen name="Board" component={boardView} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTab;
