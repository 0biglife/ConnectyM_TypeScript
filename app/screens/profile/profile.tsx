import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import PostInfo from './PostInfo';
import PostPhoto from './PostPhoto';
import PostMusic from './PostMusic';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.color.bg};
`;

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`;

const PaddingView = styled.View`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 75px;
  align-self: flex-start;
  border-width: 0.5px;
  border-color: lightgray;
`;
const UserTopInfoContainer = styled.View`
  flex-direction: row;
`;
const UserInfoWrapper = styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
`;

const UserInfoItem = styled.View`
  align-items: center;
  /* justify-content: center; */
`;

const UserInfoTitle = styled.Text`
  font-size: 14px;
  padding-top: 2px;
  color: darkgray;
`;

const UserInfoSubTitle = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const InfoContainer = styled.View`
  padding: 4px;
`;

const UserName = styled.Text`
  font-size: 16px;
  padding-top: 10px;
  font-weight: 500;
`;

const UserDescription = styled.Text`
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

const profileView = ({navigation}) => {
  return (
    <SafeAreaContainer>
      <ScrollViewContainer
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // justifyContent: 'center',
          // alignItems: 'center',
          }
        }>
        <PaddingView>
          <UserTopInfoContainer>
          <ProfileImage source={require('../../assets/artwork/cover1.jpeg')} />
          <UserInfoWrapper>
            <UserInfoItem>
              <UserInfoSubTitle>273</UserInfoSubTitle>
              <UserInfoTitle>Post</UserInfoTitle>
            </UserInfoItem>
            <UserInfoItem>
              <UserInfoSubTitle>10.2M</UserInfoSubTitle>
              <UserInfoTitle>Follower</UserInfoTitle>
            </UserInfoItem>
            <UserInfoItem>
              <UserInfoSubTitle>821</UserInfoSubTitle>
              <UserInfoTitle>Following</UserInfoTitle>
            </UserInfoItem>
          </UserInfoWrapper>
        </UserTopInfoContainer>
          <InfoContainer>
            <UserName>GiriBoy</UserName>
            <UserDescription>JustMusic Company, WYBH</UserDescription>
          </InfoContainer>
          <UserButtonWrapper>
            <UserButton onPress={() => navigation.navigate('EditProfile')}>
              <UserButtonText>Edit Profile</UserButtonText>
            </UserButton>
            <UserButton>
              <UserButtonText>Message</UserButtonText>
            </UserButton>
            <UserButton>
              <UserButtonText>Boost</UserButtonText>
            </UserButton>
          </UserButtonWrapper>
        </PaddingView>
        <View style={{backgroundColor: 'red', height: 60, marginTop: 10}} />
        <View style={{backgroundColor: 'blue', height: 800, marginTop: 10}} />
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
};

export default profileView;
