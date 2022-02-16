import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//View Module Stacks
import AuthStack from './AuthStack';
import {RootStackparamList} from './Types';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {editProfileView, MessageView, UserProfileView} from '../screens';
import MainTab from './MainTab';

const Stack = createNativeStackNavigator<RootStackparamList>();

const isLoggedIn = true;

const RootStack = () => {
  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'MainTab' : 'AuthStack'}
        screenOptions={navigationOptions}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Message" component={MessageView} />
        <Stack.Screen name="EditProfile" component={editProfileView} />
        <Stack.Screen name="UserProfile" component={UserProfileView} />
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
