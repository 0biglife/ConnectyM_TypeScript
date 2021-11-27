import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {homeView, homeView2} from '../screens';

export enum HomeScreens {
  Home = 'Home',
  Sub = 'Home2',
}

export type HomeStackParamList = {
  Main: undefined;
  Details: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeNavigation: React.FC = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={HomeScreens.Home} component={homeView} />
      <HomeStack.Screen name={HomeScreens.Sub} component={homeView2} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
