import {CompositeNavigationProp} from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';

//Type Checking for Navigator
export type RootStackparamList = {
  MainStack: MainStackParamList;
  AuthStack: AuthStackParamList;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  PhoneAuth: undefined;
  OtpAuth: undefined;
  PermissionAuth: undefined;
};

export type MainStackParamList = {
  MainTab: MainTabParmList;
  Post: undefined;
  Commnet: undefined;
  UserProfile: undefined;
  EditProfile: {
    name: string;
    imageSource: ImageSourcePropType;
  };
  Upload: undefined;
  Message: undefined;
};

export type MainTabParmList = {
  Home: undefined;
  SearchStack: undefined;
  MyMusician: undefined;
  Board: undefined;
  ProfileStack: undefined;
};

//Type Checking for Screens
