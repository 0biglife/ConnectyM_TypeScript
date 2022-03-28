import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: lightblue;
  min-width: 100px;
`;

const UserProfile = styled.Image`
  min-width: 200px;
  height: 220px;
  min-width: 100%;
  margin-top: 10px;
  margin-bottom: 4px;
`;

const PopularTrack = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
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

export default PopularTrack;
