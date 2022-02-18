import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Input, Button} from '../../components';
import {
  AuthStackNavigationProp,
  AuthStackParamList,
  RootStackparamList,
} from '../../navigations/Types';
// HTTP
import apiClient from '../../apis/service/client';
import {Response} from '../../apis/model/data';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CompositeNavigationProp} from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export interface SignUpProps {
  // navigation: CompositeNavigationProp<
  //   NativeStackNavigationProp<AuthStackParamList, 'SignUp'>,
  //   NativeStackNavigationProp<RootStackparamList, 'AuthStack'>
  // >;
  navigation: NativeStackNavigationProp<RootStackparamList, 'AuthStack'>;
}

const signupView: React.FC<SignUpProps> = ({navigation}) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const ButtonTapped = () => {
    apiClient
      .post<Response>('/users/add', {
        name: name,
      })
      .then(response => {
        console.log('SignUp View');
        console.log(response.data);
      });
    console.log('SignUp View Navigation');
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
