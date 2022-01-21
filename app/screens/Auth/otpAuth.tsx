import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {AuthStackParamList} from '../../navigations/Types';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Keyboard} from 'react-native';

const Container = styled.View`
  /* flex: 1; */
  width: 100%;
  height: 100%;
  background-color: ${prop => prop.theme.color.bg};
`;

const TitleContainer = styled.View`
  flex: 1;
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

const ButtonView = styled.TouchableOpacity`
  background-color: lightcoral;
  justify-content: center;
  margin-top: 20px;
  border-radius: 4px;
  width: 100%;
  height: 50px;
`;

const ButtonText = styled.Text`
  color: white;
  align-self: center;
  font-size: 18px;
  font-weight: 600;
`;

export interface OTPAuthProps {
  navigation: StackNavigationProp<AuthStackParamList, 'OtpAuth'>;
}

const otpAuth: React.FC<OTPAuthProps> = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <TitleContainer>
          <Title>전송된 인증번호를 입력하세요.</Title>
          <SubTitle>본인 인증을 위해 필요합니다.</SubTitle>
          <ButtonView>
            <ButtonText>확 인</ButtonText>
          </ButtonView>
        </TitleContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default otpAuth;
