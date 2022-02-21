import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Input, Button} from '../../components';
import {RootStackparamList} from '../../navigations/Types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useRegister from '../../apis/STRAPI/hook/useRegister';

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export interface SignUpProps {
  navigation: NativeStackNavigationProp<RootStackparamList, 'AuthStack'>;
}

const signupView: React.FC<SignUpProps> = ({navigation}) => {
  const {mutate: register, isLoading: isLoading} = useRegister();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onPress = () => {
    if (isLoading) {
      return;
    }

    register({
      username,
      email,
      password,
    });

    console.log('SignUp View Navigation');
    navigation.navigate('MainTab');
  };

  return (
    <Container>
      <Input placeholder="username" onChangeText={text => setUsername(text)} />
      <Input placeholder="email" onChangeText={text => setEmail(text)} />
      <Input placeholder="password" onChangeText={text => setPassword(text)} />
      <Button title="Sign Up" onPress={() => onPress()} />
    </Container>
  );
};

export default signupView;
