import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {AuthStackParamList} from '../../navigations/Types';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Alert, Keyboard} from 'react-native';

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

const PhoneNumberInput = styled.TextInput`
  height: 40px;
  font-size: 20px;
  background-color: ${prop => prop.theme.color.bg};
  border-color: lightgray;
  border-bottom-width: 1px;
  margin-top: 10px;
`;

const ButtonView = styled.TouchableOpacity`
  background-color: lightgray;
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

export interface PhoneAuthProps {
  navigation: StackNavigationProp<AuthStackParamList, 'PhoneAuth'>;
}

const phoneAuth: React.FC<PhoneAuthProps> = ({navigation}) => {
  // const [input, setInput] = useState<string>();
  const [buttonReady, setButtonReady] = useState<boolean>(false);
  const [input, setInput] = useState<string>();
  const [counter, setCounter] = useState<number>(0);

  const ButtonChange = (text: string) => {
    setInput(text);
    if (text.length < 11) {
      setButtonReady(false);
    } else if (text.length === 11) {
      setButtonReady(true);
    }
    console.log(input + ' / ' + buttonReady);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <TitleContainer>
          <Title>휴대폰 번호를 입력해주세요.</Title>
          <SubTitle>본인 인증을 위해 필요합니다.</SubTitle>
          <PhoneNumberInput
            keyboardType="number-pad"
            maxLength={11}
            dataDetectorTypes="phoneNumber"
            onChangeText={value => ButtonChange(value)}
          />
          <ButtonView
            style={{
              backgroundColor: buttonReady === true ? 'black' : 'lightgray',
            }}
            disabled={false}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={navigation.navigate('OtpAuth')}>
            <ButtonText>확 인</ButtonText>
          </ButtonView>
        </TitleContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default phoneAuth;
