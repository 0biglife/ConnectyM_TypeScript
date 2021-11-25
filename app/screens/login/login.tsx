import React from 'react';
// import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {Button} from '../../components';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
`;

const loginView = props => {
  return (
    <Container>
      <Title>Login View</Title>
      <Button
        title="Sign In"
        onPress={() => props.navigation.navigate('Signup')}
      />
      {/* <Button title="Log In" onPress={() => props.navigate('AppTabComponent')} /> */}
    </Container>
  );
};

export default loginView;
