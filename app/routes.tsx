import React from 'react';
import styled from 'styled-components/native';

//Navigator
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//screens
import {
  homeViewDataTest,
  // homeView,
  SecondCatView,
  ThirdCatView,
  searchView,
  mymusicView,
  boardView,
  profileView,
  loginView,
  PlayerBar,
} from './screens';

// import MusicPlayer from './screens/MusicPlayer';
import IonIcon from 'react-native-vector-icons/Ionicons';

const PlayerContainer = styled.View`
  /* width: 100%;
  position: absolute;
  bottom: 79px;
  flex-direction: row;
  justify-content: center;
  background-color: red;
  height: 50; */
`;

const MainTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeTopTab = createMaterialTopTabNavigator();

const isLoggedIn = true;

const HomeTabNavigation = () => {
  return (
    <HomeTopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 40,
        },
        tabBarIndicatorStyle: {
          borderBottomWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          margin: -10,
        },
      }}>
      <HomeTopTab.Screen name="팔로잉" component={homeViewDataTest} />
      <HomeTopTab.Screen name="인기아티스트" component={SecondCatView} />
      <HomeTopTab.Screen name="게시판" component={ThirdCatView} />
    </HomeTopTab.Navigator>
  );
};

const BottomTabNavigation = () => {
  return (
    <>
      <MainTab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'MyMusician') {
              iconName = focused
                ? 'ios-musical-notes'
                : 'ios-musical-notes-outline';
            } else if (route.name === 'Board') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <IonIcon name={iconName} size={size} color={color} />;
          },
          headerTitleAlign: 'center',
        })}>
        <MainTab.Screen name="Home" component={HomeTabNavigation} />
        <MainTab.Screen name="Search" component={searchView} />
        <MainTab.Screen name="MyMusician" component={mymusicView} />
        <MainTab.Screen name="Board" component={boardView} />
        <MainTab.Screen name="Profile" component={profileView} />
      </MainTab.Navigator>
      <PlayerContainer>
        <PlayerBar />
      </PlayerContainer>
    </>
  );
};

export const RootNavigator = () => {
  // return <HomeNavigator />;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={BottomTabNavigation} />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={loginView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
            options={{gestureEnabled: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
