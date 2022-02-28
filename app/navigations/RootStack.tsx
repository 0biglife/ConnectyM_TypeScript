import React, {useState} from 'react';
//View Module Stacks
import AuthStack from './AuthStack';
import {RootStackparamList} from './Types';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  ArticleView,
  editProfileView,
  MessageView,
  UploadModal,
  UserProfile,
} from '../screens';
import MainTab from './MainTab';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import {useUser} from '../hooks/useUser';

const Stack = createNativeStackNavigator<RootStackparamList>();

const RootStack = () => {
  const authData = useUser();
  const isLogIn: boolean = authData.isLoggedIn;
  useAuthLoadEffect();
  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  return (
    <Stack.Navigator
      initialRouteName={isLogIn ? 'MainTab' : 'AuthStack'}
      screenOptions={navigationOptions}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Message" component={MessageView} />
      <Stack.Screen name="EditProfile" component={editProfileView} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Upload" component={UploadModal} />
      <Stack.Screen name="Article" component={ArticleView} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
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
