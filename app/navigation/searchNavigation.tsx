import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {searchView} from '../screens';

export enum SearchScreens {
  Main = 'Search',
}

export type SearchStackParamList = {
  Main: undefined;
};

const SearchStack = createStackNavigator<SearchStackParamList>();
const SearchNavigation: React.FC = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name={SearchScreens.Main} component={searchView} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
