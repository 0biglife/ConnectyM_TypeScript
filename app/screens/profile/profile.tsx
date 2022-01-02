import React from 'react';
import styled from 'styled-components/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import Paging Views
import IonIcon from 'react-native-vector-icons/Ionicons';
import postInfo from './postInfo';
import postPhoto from './postPhoto';
import postMusic from './postMusic';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.color.bg};
`;

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.color.bg};
  padding: 20px;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 75px;
  align-self: flex-start;
  border-width: 0.5px;
  border-color: lightgray;
`;

// const NumInfoContainer = styled.View`
//   background-color: red;
// `;

const InfoContainer = styled.View`
  align-self: flex-start;
  padding: 4px;
`;

const UserName = styled.Text`
  font-size: 16px;
  padding-top: 10px;
  font-weight: 500;
`;

const Instruction = styled.Text`
  font-size: 14px;
  padding-top: 4px;
`;

const UserButtonWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-top: 4px;
`;

const UserButton = styled.TouchableOpacity`
  width: 30%;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 6px;
`;

const UserButtonText = styled.Text`
  padding: 6px;
  font-size: 14px;
  align-self: center;
`;

const Paging = createMaterialTopTabNavigator();

const profileView = () => {
  return (
    <SafeAreaContainer>
      <ScrollViewContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ProfileImage source={require('../../assets/artwork/cover1.jpeg')} />
        <InfoContainer>
          <UserName>GiriBoy</UserName>
          <Instruction>JustMusic Company, WYBH</Instruction>
        </InfoContainer>
        <UserButtonWrapper>
          <UserButton>
            <UserButtonText>Edit Profile</UserButtonText>
          </UserButton>
          <UserButton>
            <UserButtonText>Message</UserButtonText>
          </UserButton>
          <UserButton>
            <UserButtonText>Boost</UserButtonText>
          </UserButton>
        </UserButtonWrapper>
      </ScrollViewContainer>
      <Paging.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: 'clear',
      }}}>
        <Paging.Screen
          name="postPhoto"
          component={postPhoto}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return <IonIcon name="square" size={20} color="lightgray" />;
            },
          }}
        />
        <Paging.Screen
          name="postInfo"
          component={postInfo}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return <IonIcon name="square" size={20} color="lightgray" />;
            },
          }}/>
        <Paging.Screen
          name="postMusic"
          component={postMusic}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return <IonIcon name="square" size={20} color="lightgray" />;
            },
          }}
        />
      </Paging.Navigator>
    </SafeAreaContainer>
  );
};

export default profileView;
