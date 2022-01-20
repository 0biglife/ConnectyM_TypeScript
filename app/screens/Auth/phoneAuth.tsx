import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {AuthStackParamList} from '../../navigations/Types';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.color.bg};
`;

const TitleContainer = styled.View`
  /* background-color: lightblue; */
  margin-top: 120px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  padding-top: 10px;
  color: gray;
`;

const PhoneNumberInput = styled.TextInput`
  height: 40px;
  font-size: 20px;
  /* background-color: greenyellow; */
  background-color: ${prop => prop.theme.color.bg};
  border-color: lightblue;
  border-bottom-width: 2px;
  margin-top: 12px;
`;

export interface PhoneAuthProps {
  navigation: StackNavigationProp<AuthStackParamList, 'PhoneAuth'>;
}

const phoneAuth: React.FC<PhoneAuthProps> = ({ navigation }) => {

  // useEffect(() => {
  //   if()
  // },[])

  return (
    <Container>
      <TitleContainer>
        <Title>휴대폰 번호를 입력해주세요.</Title>
        <SubTitle>본인 인증을 위해 필요합니다.</SubTitle>
        <PhoneNumberInput
          keyboardType="number-pad"
          maxLength={11}
          dataDetectorTypes="phoneNumber"
        />
      </TitleContainer>
    </Container>
  );
};

export default phoneAuth;
