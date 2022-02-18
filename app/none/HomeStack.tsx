import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {HomeView, SecondCatView, ThirdCatView, UploadModal} from '../screens';
import {ModalView} from '../components';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {HomeParamsList} from './Types';
import {StackNavigationProp} from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeTopTab = createMaterialTopTabNavigator();

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
          // borderWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          margin: -10,
        },
      }}>
      <HomeTopTab.Screen name="Type-A" component={HomeView} />
      <HomeTopTab.Screen name="Type-B" component={SecondCatView} />
      <HomeTopTab.Screen name="Type-C" component={ThirdCatView} />
    </HomeTopTab.Navigator>
  );
};

export interface HomStackProps {
  navigation: StackNavigationProp<HomeParamsList, 'HomeView'>;
}

const HomeStack: React.FC<HomStackProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const posting = () => {
    navigation.navigate('UploadView');
    setModalVisible(false);
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Home',
        headerBackTitleVisible: false,
        headerLeft: () => null,
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <IonIcon
                name="add"
                size={24}
                color="black"
                style={{marginTop: 4, marginRight: 8}}
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
      }}>
      <Stack.Screen component={HomeTabNavigation} name="HomeTab" />
      <Stack.Screen
        component={UploadModal}
        name="UploadView"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
