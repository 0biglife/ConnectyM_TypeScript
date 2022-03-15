import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {useQuery} from 'react-query';
import {getUserInfo} from '../apis/service/testGet';

const Container = styled.View`
  background-color: lightgray;
  height: 112px;
  /* padding: 6px; */
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 10px;
`;

const UserProfile = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-top: 4px;
  margin-left: 6px;
  margin-right: 4px;
`;

const HeaderList = () => {
  return (
    <Container>
      <Title>추천 인물</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <UserProfile source={require('../../assets/artwork/cover2.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover2.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover2.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover2.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover2.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover2.jpeg')} />
      </ScrollView>
    </Container>
  );
};

export default HeaderList;
