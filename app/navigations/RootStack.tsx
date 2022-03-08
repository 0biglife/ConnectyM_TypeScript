import React from 'react';
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
import {useLoggedIn} from '../hooks/useUserState';

const Stack = createNativeStackNavigator<RootStackparamList>();

const RootStack = () => {
  useAuthLoadEffect();
  const authState = useLoggedIn();
  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  console.log('RootStack: ', authState.isLoggedIn);

  return (
    <Stack.Navigator
      // initialRouteName={authState.isLoggedIn ? 'MainTab' : 'AuthStack'}
      screenOptions={navigationOptions}>
      {authState.isLoggedIn ? (
        <>
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="Message" component={MessageView} />
          <Stack.Screen name="EditProfile" component={editProfileView} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Upload" component={UploadModal} />
          <Stack.Screen name="Article" component={ArticleView} />
        </>
      ) : (
        <>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="Message" component={MessageView} />
          <Stack.Screen name="EditProfile" component={editProfileView} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Upload" component={UploadModal} />
          <Stack.Screen name="Article" component={ArticleView} />
        </>
      )}
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
