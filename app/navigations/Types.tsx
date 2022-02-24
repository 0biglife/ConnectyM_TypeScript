import {ImageSourcePropType} from 'react-native';

//Type Checking for Navigator
export type RootStackparamList = {
  MainTab: MainTabParamList;
  AuthStack: AuthStackParamList;
  //
  UserProfile: {
    user_id: number;
    name: string;
    imageSource: string;
  };
  EditProfile: {
    name: string;
    imageSource: ImageSourcePropType;
  };
  Message: undefined;
  Upload: {
    articleId?: number;
  };
  Article: {
    user_id: number;
    name: string;
    thumbnailUrl: string;
    imageSource: string;
    postTime: string;
    title: string;
  };
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
