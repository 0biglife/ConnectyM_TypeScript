import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import React, {useState} from 'react';
// import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {Input, Button} from '../../components';
import {AuthStackParamList} from '../../navigations/Types';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export interface SignUpProps {
  navigation: StackNavigationProp<AuthStackParamList, 'SignUp'>;
}

const signupView: React.FC<SignUpProps> = ({navigation}) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const ButtonTapped = () => {
    axios
      .post('http://localhost:3000/api/users/add', {
        id: 4,
        name: name,
      })
      .then(response => {
        console.log(response.data);
      });
    navigation.navigate('MainTab');
  };

  return (
    <Container>
      <Input placeholder="Name" onChangeText={text => setName(text)} />
      <Button title="Sign Up" onPress={() => ButtonTapped()} />
    </Container>
  );
};

export default signupView;
