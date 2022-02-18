import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

//Type Checking for Navigator
export type RootStackparamList = {
  MainTab: MainTabParamList;
  AuthStack: AuthStackParamList;
  //
  UserProfile: {
    user_id: number;
  };
  EditProfile: {
    name: string;
    imageSource: ImageSourcePropType;
  };
  Message: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  PhoneAuth: undefined;
  OtpAuth: undefined;
  PermissionAuth: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  MyMusician: undefined;
  Board: undefined;
  Profile: undefined;
};

//Type Checking for Screens // Props : navigation
// export type RootStackNavigationProp =
//   NativeStackNavigationProp<RootStackparamList>;

// export type AuthStackNavigationProp = NativeStackNavigationProp<
//   RootStackparamList,
//   'AuthStack'
// >;

// export type MainTabNavigationProp = CompositeNavigationProp<
//   RootStackNavigationProp,
//   BottomTabNavigationProp<MainTabParamList>
// >;

// export type HomeNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<MainTabParamList, 'Home'>,
//   MainTabNavigationProp
// >;

// export type ProfileNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<MainTabParamList, 'Profile'>,
//   MainTabNavigationProp
// >;

//Type Checking for Screens // Props : route
