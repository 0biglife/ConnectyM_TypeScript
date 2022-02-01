// //
// import React from 'react';
// import {Animated} from 'react-native';
// import styled from 'styled-components/native';
// //Paging - Photo / Music / Info
// import Photo from './Photo';
// import Music from './Music';
// import Info from './Info';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {ProfileParamsList} from '../../navigations/Types';
// // import Info from './Info';
// // import Photo from './Photo';
// // import Music from './Music';

// const ScrollViewContainer = styled.ScrollView`
//   flex: 1;
//   /* margin-top: 90; */
//   /* padding-top: 35; */
//   background-color: lightgray;
// `;

// const AnimatedScrollView = Animated.createAnimatedComponent(ScrollViewContainer);

// const PaddingView = styled.View`
//   padding-top: 10px;
//   padding-left: 10px;
//   padding-right: 10px;
// `;

// const ProfileImage = styled.Image`
//   width: 120px;
//   height: 120px;
//   border-radius: 75px;
//   align-self: flex-start;
//   border-width: 0.5px;
//   border-color: lightgray;
// `;

// const UserTopInfoContainer = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
// `;

// const UserInfoWrapper = styled.View`
//   flex: 3;
//   flex-direction: row;
//   justify-content: space-around;
//   align-self: center;
//   padding-left: 10px;
// `;

// const UserInfoItem = styled.View`
//   align-items: center;
//   /* justify-content: center; */
// `;

// const UserInfoTitle = styled.Text`
//   font-size: 14px;
//   padding-top: 2px;
//   color: darkgray;
// `;

// const UserInfoSubTitle = styled.Text`
//   font-weight: 600;
//   font-size: 16px;
// `;

// const InfoContainer = styled.View`
//   padding: 4px;
// `;

// const UserName = styled.Text`
//   font-size: 16px;
//   padding-top: 10px;
//   font-weight: 500;
// `;

// const UserDescription = styled.Text`
//   font-size: 14px;
//   padding-top: 4px;
// `;

// const UserButtonWrapper = styled.View`
//   flex-direction: row;
//   width: 100%;
//   justify-content: space-between;
//   padding-top: 4px;
// `;

// const UserButton = styled.TouchableOpacity`
//   width: 30%;
//   border-width: 1px;
//   border-color: lightgray;
//   border-radius: 6px;
// `;

// const UserButtonText = styled.Text`
//   padding: 6px;
//   font-size: 14px;
//   align-self: center;
// `;

// const ProfileTab = createMaterialTopTabNavigator();

// const TabComponent = () => {
//   return (
//     <ProfileTab.Navigator
//       screenOptions={{
//         // swipeEnabled: true,
//         tabBarActiveTintColor: 'black',
//         tabBarInactiveTintColor: 'gray',
//         tabBarIndicatorStyle: {
//           backgroundColor: 'red',
//         },
//         tabBarLabelStyle: {
//           fontSize: 14,
//           margin: -10,
//         },
//       }}>
//       <ProfileTab.Screen name="Photo" component={Photo} />
//       <ProfileTab.Screen name="Track" component={Music} />
//       <ProfileTab.Screen name="Info" component={Info} />
//     </ProfileTab.Navigator>
//   );
// };
// const imageSource = require('../../assets/images/profileDefault.jpeg');
// const profileName = 'Giriboy';

// export interface ProfileProps {
//   navigation: StackNavigationProp<ProfileParamsList, 'Profile'>;
// }

// const profileView: React.FC<ProfileProps> = ({navigation}) => {
//   return (
//     <SafeAreaProvider>
//       {/* <AnimatedScrollView
//         stickyHeaderIndices={[1]}
//         onScroll={Animated.event(
//           [
//             {
//               nativeEvent: {
//                 contentOffset: {
//                   y: scrollY,
//                 },
//               },
//             },
//           ],
//           {
//             useNativeDriver: true,
//           },
//         )}
//         showsVerticalScrollIndicator={false}> */}
//       <>
//         <PaddingView>
//           <UserTopInfoContainer>
//             <ProfileImage source={imageSource} />
//             <UserInfoWrapper>
//               <UserInfoItem>
//                 <UserInfoSubTitle>273</UserInfoSubTitle>
//                 <UserInfoTitle>Post</UserInfoTitle>
//               </UserInfoItem>
//               <UserInfoItem>
//                 <UserInfoSubTitle>10.2M</UserInfoSubTitle>
//                 <UserInfoTitle>Follower</UserInfoTitle>
//               </UserInfoItem>
//               <UserInfoItem>
//                 <UserInfoSubTitle>821</UserInfoSubTitle>
//                 <UserInfoTitle>Following</UserInfoTitle>
//               </UserInfoItem>
//             </UserInfoWrapper>
//           </UserTopInfoContainer>
//           <InfoContainer>
//             <UserName>{profileName}</UserName>
//             <UserDescription>JustMusic Company, WYBH</UserDescription>
//           </InfoContainer>
//           <UserButtonWrapper>
//             <UserButton
//               onPress={() =>
//                 navigation.navigate('EditProfile', {
//                   name: profileName,
//                   imageSource: imageSource,
//                 })
//               }>
//               <UserButtonText>Edit Profile</UserButtonText>
//             </UserButton>
//             <UserButton onPress={() => navigation.navigate('Message')}>
//               <UserButtonText>Message</UserButtonText>
//             </UserButton>
//             <UserButton>
//               <UserButtonText>Boost</UserButtonText>
//             </UserButton>
//           </UserButtonWrapper>
//         </PaddingView>
//         <TabComponent />
//         {/* <View style={{height: 900, backgroundColor: 'red', marginTop: 250}} /> */}
//         {/* </AnimatedScrollView> */}
//       </>
//     </SafeAreaProvider>
//   );
// };

// export default profileView;
