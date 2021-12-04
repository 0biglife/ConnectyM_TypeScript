import React from 'react';
// import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
`;

const SecondCatView = () => {
  return (
    <Container>
      <Title>SecondCat View</Title>
    </Container>
  );
};

export default SecondCatView;
