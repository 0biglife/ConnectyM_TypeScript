import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Container = styled.View`
  /* background-color: lightgray; */
  height: 82px;
  margin-bottom: 0px;
`;

const UserProfile = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-top: 4px;
  margin-left: 10px;
  margin-right: 4px;
`;

const HeaderList = () => {
  return (
    <Container>
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
