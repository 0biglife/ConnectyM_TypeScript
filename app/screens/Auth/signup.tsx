import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, {useState} from 'react';
// import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {Input, Button} from '../../components';
import MainTab from '../../navigations/MainTab';
import { AuthStackParamList } from '../../navigations/Types';

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

export interface SignUpProps {
  navigation: StackNavigationProp<AuthStackParamList, 'SignUp'>;
}

const signupView: React.FC<SignUpProps> = ({navigation}) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <Container>
      <Title>Signup View</Title>
      <Input placeholder="Name" onChangeText={text => setName(text)} />
      <Input placeholder="Email" onChangeText={text => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button title="Sign Up" onPress={() => navigation.navigate('MainTab')} />
    </Container>
  );
};

export default signupView;
