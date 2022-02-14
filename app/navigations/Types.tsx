import {ImageSourcePropType} from 'react-native';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MainTab: undefined;
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
  OtherProfile: undefined;
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
/*
RootNavigator
-> Splash

-> TabNavigator
    -> HomeNavigator
    -> BoatNavigator
    -> TermsNavigator
    -> Settings
-----------------------------------------------------------------------------
RootNavigator ( : createStackNavigator<RootNavigatorParamsList> )

 -> MainNavigator ( : createStackNavigator<TopNavigatorParamsList> )

     -> Splash
     export type SplashProps { navigation: StackNavigationProp<TopNavigatorParamsList>,'Splash}
     const Splash: React.FC<SplashProps> = ({navigation}) ~

     -> TabNavigator
     const TabStack = createBottomTabNavigator<TabNavigatorParamsList>()
     //
        Home: undefined
        Profile: undefined
        Terminology: undefined
        Boats: undefined
        Settings: undefined
     //
        -> HomeNavigator
          -> Home
          export type HomeProps { navigation: ~<TabNavigatorParamsList>, 'Home' }
          const Home: React.FC<HomeProps> = ({navigation})
          -> Profile
          type ProfileProps { navigation: ~<Tab~, 'Profile' }
        -> Boats
        -> Terminology
        -> Settings

 -> ModalNavigator ( : createStackNavigator<ModalNavigatorParamsList> )
     -> BoatInfromation
     -> Definition



*/
