import {NavigationRouteContext, RouteProp} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { BlockScopeAwareRuleWalker } from 'tslint';
import { getJSDocOverrideTagNoCache } from 'typescript';
import {RootStackparamList} from '../../navigations/Types';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const TestText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  padding-top: 20px;
`;

const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

interface UserProfileProp {
  navigation: NativeStackNavigationProp<RootStackparamList>;
  route: RouteProp<RootStackparamList, 'UserProfile'>;
}

const UserProfile: React.FC<UserProfileProp> = ({navigation, route}) => {
  const {params} = route;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: params.name,
      headerBackTitleVisible: false,
      headerTintColor: 'black',
    });
  }, [navigation, params.name]);

  console.log('CONSOLE LOG FOR INDEX : ', params.user_id);
  return (
    <SafeContainer>
      <MainContainer>
        <ProfileImage source={{uri: params.imageSource}} />
        {/* <TestText>User_ID: {params.user_id}</TestText> */}
      </MainContainer>
    </SafeContainer>
  );
};

export default UserProfile;
