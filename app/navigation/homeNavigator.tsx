import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {homeView, homeView2} from '../screens';

export enum HomeScreens {
  Main = 'Home',
  Details = 'Home2',
}

export type HomeStackParamList = {
  Main: undefined;
  Details: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={HomeScreens.Main} component={homeView} />
      <HomeStack.Screen name={HomeScreens.Details} component={homeView2} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
