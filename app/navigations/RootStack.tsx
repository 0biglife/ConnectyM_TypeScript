import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Navigator
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

//View Module Stacks
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {RootStackparamList} from './Types';

const Stack = createStackNavigator<RootStackparamList>();

const isLoggedIn = false;

const RootStack = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    // gestureEnabled: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'MainStack' : 'AuthStack'}
        screenOptions={navigationOptions}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

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
