import React, {useState} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//screens
import {searchView, mymusicView, boardView} from '../screens';
//Navigations
import ProfileStack from './ProfileStack';
import HomeStack from './HomeStack';
//components
import {ModalView} from '../components';
import {TabNavigatorParamsList} from './Types';

//create Navigator
const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

const MainTab = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Tab.Navigator
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
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Tab.Screen name="Search" component={searchView} />
        <Tab.Screen name="MyMusician" component={mymusicView} />
        <Tab.Screen name="Board" component={boardView} />
        <Tab.Screen
          name="Profile"
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
