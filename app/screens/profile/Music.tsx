import React from 'react';
import styled from 'styled-components/native';

const MainContainer = styled.View`
  flex: 1;
  background-color: lightcoral;
`;

const Title = styled.Text`
  background-color: lightcoral;
`;

const Music = () => {
  return (
    <MainContainer>
      <Title>postMusic View</Title>
    </MainContainer>
  );
};

export default Music;
