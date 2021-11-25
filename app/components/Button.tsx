import React from 'react';
// import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background-color: #000;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 100px;
`;

const ButtonText = styled.Text`
  color: #fff;
`;

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = props => {
  return (
    <Container onPress={props.onPress}>
      <ButtonText>{props.title}</ButtonText>
    </Container>
  );
};

export default Button;
