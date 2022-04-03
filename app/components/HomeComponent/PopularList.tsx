import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {examples} from '../../model/example';

const Container = styled.View`
  /* background-color: lightgray; */
  /* height: 300px; */
  margin-bottom: 0px;
  /* flex: 1; */
`;

const UserProfile = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 6px;
  margin-top: 6px;
  margin-left: 6px;
  margin-bottom: 6px;
`;

const PopularList = () => {
  return (
    <Container>
      <Container>
        <FlatList
          data={examples}
          renderItem={({item}) => (
            <Container>
              <UserProfile source={{uri: item.url}} />
            </Container>
          )}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </Container>
  );
};

export default PopularList;
