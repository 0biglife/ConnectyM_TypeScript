import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {profileView, editProfileView} from '../screens';

export type ProfileParam = {
  Profile: undefined;
  EditProfile: undefined;
};

const Stack = createStackNavigator();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Profile"
        component={profileView}
        // initialParams={...}
      />
      <Stack.Screen name="EditProfile" component={editProfileView} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
