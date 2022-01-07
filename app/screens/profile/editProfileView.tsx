import React, {useState} from 'react';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Modal, View } from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {ProfileParam} from '../../navigations/ProfileStack';
import { Props } from 'react-native-tab-view/lib/typescript/TabBarItem';
import { StackNavigationProp } from '@react-navigation/stack';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const TopButtonView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const ImageContainer = styled.View`
  /* flex: 1; */
  padding: 20px;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 75px;
  border-width: 0.5px;
  border-color: lightgray;
  justify-content: center;
  align-self: center;
`;

const ProfileChangeText = styled.Text`
  color: #3493d9;
  padding-top: 10px;
`;

const InputConWrapper = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  padding-left: 30px;
  padding-top: 10px;
  flex-direction: column;
`;

const EditTitle = styled.Text`
  font-size: 16px;
  padding-top: 10px;
`;

const EditInput = styled.TextInput`
  font-size: 16px;
  border-bottom-width: 1px;
  border-color: lightgray;
  padding-top: 10px;
`;
type ProfileScreenRouteProp = StackNavigationProp<ProfileParam, 'Profile'>;
type ProfileScreenNavigationProp = StackNavigationProp<ProfileParam, 'Profile'>;
type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const editProfileView = ({route, navigation}: Props) => {
  // const {name, image} = route;
  return (
    <SafeAreaContainer>
      <MainContainer>
        <TopButtonView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcon name="close-outline" style={{fontSize: 35}} />
          </TouchableOpacity>
          <Title>Edit Profile</Title>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcon name="checkmark" style={{fontSize: 35}} color="#3493D9" />
          </TouchableOpacity>
        </TopButtonView>
        <ImageContainer>
          <ProfileImage source={route} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <ProfileChangeText>Change profile photo</ProfileChangeText>
          </TouchableOpacity>
        </ImageContainer>
        <View style={{alignSelf: 'flex-start'}}>
          <InputConWrapper>
            <InputContainer>
              <EditTitle>Name</EditTitle>
              <EditTitle>User Name</EditTitle>
              <EditTitle>Info</EditTitle>
            </InputContainer>
            <InputContainer>
              <EditInput
                placeholder="Name"
                defaultValue={route.setParams.name}
                placeholderTextColor="black"
              />
              <EditInput
                placeholder="Name"
                defaultValue="giriboy"
                placeholderTextColor="black"
              />
              <EditInput
                placeholder="UserInfo"
                defaultValue="sjdfkdsjfldldfl"
                placeholderTextColor="black"
              />
            </InputContainer>
          </InputConWrapper>
        </View>
      </MainContainer>
    </SafeAreaContainer>
  );
};

export default editProfileView;
