import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: blue;
  padding: 10px;
`;

const postView = () => {
  return (
    <Container>
      <Text>post View</Text>
    </Container>
  );
};

export default postView;
