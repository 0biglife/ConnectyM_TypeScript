import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Alert, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamsList, TabNavigatorParamsList} from '../../navigations/Types';
//HTTP
import apiClient from '../../apis/service/client';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.bg};
`;

const Wrapper = styled.View`
  background-color: lightblue;
`;

const Title = styled.Text`
  font-size: 20px;
  color: white;
`;

const ButtonView = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: green;
`;

export interface UploadParams {
  navigation: StackNavigationProp<HomeParamsList, 'Upload'>;
}

const uploadView: React.FC<UploadParams> = ({navigation}) => {
  return (
    <SafeContainer>
      <Wrapper>
        <Title>Upload View</Title>
        <ButtonView>
          <Title>Button</Title>
        </ButtonView>
      </Wrapper>
    </SafeContainer>
  );
};

export default uploadView;
