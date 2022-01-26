import React, {useState} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Alert, TouchableOpacity} from 'react-native';

import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//screens
import {mymusicView, boardView} from '../screens';
//Navigations
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
//components
import {ModalView} from '../components';
import {HomeParamsList, TabNavigatorParamsList} from './Types';
import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';

//create Navigator
const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

export interface MainTabProps {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorParamsList, 'Home'>,
    StackNavigationProp<HomeParamsList, 'HomeView'>
  >;
}

const MainTab: React.FC<MainTabProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const posting = () => {
    navigation.navigate('UploadView');
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'SearchStack') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'MyMusician') {
              iconName = focused
                ? 'ios-musical-notes'
                : 'ios-musical-notes-outline';
            } else if (route.name === 'Board') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'ProfileStack') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <IonIcon name={iconName} size={size} color={color} />;
          },
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <IonIcon
                    name="add"
                    size={24}
                    color="black"
                    style={{marginRight: 8}}
                  />
                  <ModalView
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    firstFunction={() => posting()}
                    secondFunction={() => posting()}
                    thirdFunction={() => posting()}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Tab.Screen
          name="SearchStack"
          component={SearchStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="MyMusician" component={mymusicView} />
        <Tab.Screen name="Board" component={boardView} />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainTab;
