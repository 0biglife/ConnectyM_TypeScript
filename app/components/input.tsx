import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 90%;
  align-self: center;
  background-color: #e3e3e3;
  border-radius: 6px;
  margin-top: 10px;
`;

const CustomInput = styled.TextInput`
  padding: 15px;
`;

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: React.FC<Props> = props => {
  return (
    <Container>
      <CustomInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry || false}
        onChangeText={props.onChangeText}
      />
    </Container>
  );
};

export default Input;
