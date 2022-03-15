import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: lightgray;
  /* height: 300px; */
  margin-bottom: 10px;
`;

const UserProfile = styled.Image`
  width: 205px;
  height: 205px;
  border-radius: 6px;
  margin-top: 4px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const PopularList = () => {
  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <UserProfile source={require('../../assets/artwork/cover3.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover2.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover1.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover3.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover2.jpeg')} />
        <UserProfile source={require('../../assets/artwork/cover1.jpeg')} />
      </ScrollView>
    </Container>
  );
};

export default PopularList;
