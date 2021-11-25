import React from 'react';
// import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex: 1;
`;

const ButtonText = styled.TextInput`
  
`;

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <Container>
      <ButtonText>{props.title}</ButtonText>
    </Container>
  )
}

export default Button;
