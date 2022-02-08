import React from 'react';
// import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: lightgray;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  height: 100%;
  /* background-color: lightcoral; */
`;

const ButtonRowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
`;

const ButtonView = styled.TouchableOpacity`
  width: 184px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
`;

const ButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const boardView = () => {
  return (
    <Container>
      <ButtonWrapper>
        <ButtonRowWrapper>
          <ButtonView>
            <ButtonTitle>카테고리01</ButtonTitle>
          </ButtonView>
          <ButtonView>
            <ButtonTitle>카테고리01</ButtonTitle>
          </ButtonView>
        </ButtonRowWrapper>
        <ButtonRowWrapper>
          <ButtonView>
            <ButtonTitle>카테고리01</ButtonTitle>
          </ButtonView>
          <ButtonView>
            <ButtonTitle>카테고리01</ButtonTitle>
          </ButtonView>
        </ButtonRowWrapper>
        <ButtonRowWrapper>
          <ButtonView>
            <ButtonTitle>카테고리01</ButtonTitle>
          </ButtonView>
          <ButtonView>
            <ButtonTitle>카테고리01</ButtonTitle>
          </ButtonView>
        </ButtonRowWrapper>
      </ButtonWrapper>
    </Container>
  );
};

export default boardView;
