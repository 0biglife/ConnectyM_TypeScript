import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {AuthStackParamList} from '../../navigations/Types';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Container = styled.SafeAreaView`
  /* flex: 1; */
  width: 100%;
  height: 100%;
  background-color: ${prop => prop.theme.color.bg};
`;

const TitleContainer = styled.View`
  /* flex: 1; */
  background-color: lightblue;
  margin-top: 140px;
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

const SubscriptionWrapper = styled.View`
  background-color: lightgoldenrodyellow;
  height: 300px;
  padding-top: 10px;
`;

const SubscriptionView = styled.View`
  background-color: lightcoral;
  height: 40px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* margin-bottom: 10px; */
`;

const SubScriptionText = styled.Text`
  font-size: 16px;
  color: gray;
`;

export interface PermissioinAuthProps {
  navigation: StackNavigationProp<AuthStackParamList, 'PermissionAuth'>;
}

const permissionAuth: React.FC<PermissioinAuthProps> = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <TitleContainer>
          <Title>접근 권한 승인</Title>
          <SubTitle>해당 서비스 이용을 위한 접근 권한을 허용합니다.</SubTitle>
          <SubscriptionWrapper>
            <SubscriptionView>
              <IonIcon name="camera" size={22} color="gray" />
              <SubScriptionText>
                카메라 접근 권한을 허용합니다.
              </SubScriptionText>
            </SubscriptionView>
            <SubscriptionView>
              <IonIcon name="mic" size={22} color="gray" />
              <SubScriptionText>
                마이크 접근 권한을 허용합니다.
              </SubScriptionText>
            </SubscriptionView>
            <SubscriptionView>
              <IonIcon name="phone" size={22} color="gray" />
              <SubScriptionText>
                마이크 접근 권한을 허용합니다.
              </SubScriptionText>
            </SubscriptionView>
            <SubscriptionView>
              <IonIcon name="mic" size={22} color="gray" />
              <SubScriptionText>
                마이크 접근 권한을 허용합니다.
              </SubScriptionText>
            </SubscriptionView>
          </SubscriptionWrapper>
        </TitleContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default permissionAuth;
