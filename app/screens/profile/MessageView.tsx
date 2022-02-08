import React from 'react';
import styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProfileParamsList} from '../../navigations/Types';
import {WebView} from 'react-native-webview';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

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
  const onClickPayment = () => {
    const userCode = 'imp0000000';
    const data = {
      pg: 'html5_inicis', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: '아임포트 결제 데이터 분석', // 주문명
      buyer_name: '홍길동', // 구매자 이름
      buyer_tel: '01012341234', // 구매자 전화번호
      buyer_email: 'example@example', // 구매자 이메일
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018',
    };

    if (isReactNative()) {
      /* 리액트 네이티브 환경에 대응하기 */
      const params = {
        userCode, // 가맹점 식별코드
        data, // 결제 데이터
        type: 'payment', // 결제와 본인인증 구분을 위한 필드
      };
      const paramsToString = JSON.stringify(params);
      window.ReactNativeWebView.postMessage(paramsToString);
    } else {
      /* 그 외 환경의 경우 */
      /* 가맹점 식별하기 */
      const { IMP } = window;
      IMP.init(userCode);
      /* 결제 창 호출하기 */
      IMP.request_pay(data, callback);
    }
  };

  const callBack = (response) => {
    //
  };

  const isReactNative = () => {
    if (ua.mobile) return true;
    return false;
  };

  return (
    <SafeAreaContainer>
      <MainContainer>
        <WebView source={{uri: 'https://www.naver.com/'}} />
      </MainContainer>
    </SafeAreaContainer>
  );
};

export default MessageView;
