import {ImageSourcePropType} from 'react-native';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MainTab: TabNavigatorParamsList;
  PhoneAuth: undefined;
  OtpAuth: undefined;
  PermissionAuth: undefined;
};

export type HomeParamsList = {
  HomeView: {id: number};
  UploadView: undefined;
};

export type ProfileParamsList = {
  Profile: undefined;
  EditProfile: {
    name: string;
    imageSource: ImageSourcePropType;
  };
  Message: undefined;
};

export type SearchParamsList = {
  Search: undefined;
};

export type TabNavigatorParamsList = {
  Home: undefined;
  SearchStack: undefined;
  MyMusician: undefined;
  Board: undefined;
  ProfileStack: undefined;
};
