import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Navigator
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

//View Module Stacks
import AuthStack from './AuthStack';
import MainTab from './MainTab';
import {UserProfile} from '../screens';

export type rootStackParamList = {
  //
};

const Stack = createStackNavigator();

const isLoggedIn = false;

const RootNavigation = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    // gestureEnabled: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'MainTab' : 'AuthStack'}
        screenOptions={navigationOptions}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

/*

        {isLoggedIn ? (
          
            <Stack.Screen name="MainTab" component={MainTab} />}
          
        ) : (
          <>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen
              name="MainTab"
              component={MainTab}
              options={{
                gestureEnabled: false,
              }}
            />
          </>
        )}
*/
