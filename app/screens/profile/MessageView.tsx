import React from 'react';
import styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileParamsList} from '../../navigations/Types';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export interface MessageProps {
  navigation: StackNavigationProp<ProfileParamsList, 'EditProfile'>;
  route: RouteProp<ProfileParamsList, 'EditProfile'>;
}

const MessageView: React.FC<MessageProps> = () => {
  return (
    <SafeAreaContainer>
      <MainContainer>
        <Title>Message View</Title>
      </MainContainer>
    </SafeAreaContainer>
  );
};

export default MessageView;
