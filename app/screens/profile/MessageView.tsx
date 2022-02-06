import React from 'react';
import styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileParamsList} from '../../navigations/Types';
import {WebView} from 'react-native-webview';

//PG
import IMP from 'iamport-react-native';
import Payment from 'iamport-react-native/lib/typescript/components/Payment';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export interface MessageProps {
  navigation: StackNavigationProp<ProfileParamsList, 'EditProfile'>;
  route: RouteProp<ProfileParamsList, 'EditProfile'>;
}

const MessageView: React.FC<MessageProps> = () => {
  // function callback(response) {
  //   navigation.replace('PaymentResult', response);
  // }

  return (
    <SafeAreaContainer>
      <MainContainer>
        {/* <WebView source={{uri: 'https://www.naver.com/'}} /> */}
      </MainContainer>
    </SafeAreaContainer>
  );
};

export default MessageView;
