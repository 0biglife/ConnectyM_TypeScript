import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {searchView} from '../screens';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {ModalView} from '../components';

export type Search = {
  Search: undefined;
};

const Stack = createStackNavigator();

const SearchStack: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Search"
        component={searchView}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
