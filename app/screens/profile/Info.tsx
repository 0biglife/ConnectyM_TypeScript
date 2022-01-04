import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex: 1;
  background-color: lightgoldenrodyellow;
`;

const Title = styled.Text`
  //
`;

const Info = () => {
  return (
    <MainContainer>
      <Title>Info View</Title>
    </MainContainer>
  );
};

export default Info;
