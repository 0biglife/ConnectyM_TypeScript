// import React, {useState} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';

// import {profileView, editProfileView, MessageView} from '../screens';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import {ModalView} from '../components';

// const Stack = createStackNavigator();

// const ProfileStack: React.FC = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <Stack.Navigator
//       initialRouteName="Profile"
//       screenOptions={{
//         headerBackTitleVisible: false,
//         headerLeft: () => {
//           return null;
//         },
//       }}>
//       <Stack.Screen
//         name="Profile"
//         component={profileView}
//         options={{
//           headerRight: () => {
//             return (
//               <TouchableOpacity onPress={() => setModalVisible(true)}>
//                 <IonIcon
//                   name="add"
//                   size={24}
//                   color="black"
//                   style={{marginRight: 8}}
//                 />
//                 <ModalView
//                   modalVisible={modalVisible}
//                   setModalVisible={setModalVisible}
//                   //
//                 />
//               </TouchableOpacity>
//             );
//           },
//         }}
//       />
//       <Stack.Screen
//         name="EditProfile"
//         component={editProfileView}
//         options={{
//           headerShown: false,
//           cardStyleInterpolator: ({current, layouts}) => {
//             return {
//               cardStyle: {
//                 transform: [
//                   {
//                     translateY: current.progress.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [layouts.screen.height, 0],
//                     }),
//                   },
//                 ],
//               },
//             };
//           },
//         }}
//       />
//       <Stack.Screen name="Message" component={MessageView} />
//     </Stack.Navigator>
//   );
// };

// export default ProfileStack;
