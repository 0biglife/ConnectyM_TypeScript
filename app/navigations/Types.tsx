export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MainTab: undefined;
};

export type ProfileParamsList = {
  Profile: undefined;
  EditProfile: undefined;
};

export type TabNavigatorParamsList = {
  Home: undefined;
  Search: undefined;
  MyMusician: undefined;
  Board: undefined;
  Profile: undefined;
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
