import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

//model test
import {examples} from '../../model/example';

const Container = styled.View`
  /* background-color: lightblue; */
  height: 90px;
`;

const UserProfile = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 4px;
  background-color: lightcoral;
`;

const HeaderList = () => {
  return (
    <Container>
      <FlatList
        data={examples}
        renderItem={({item}) => (
          <Container>
            <UserProfile source={{uri: item.url}} />
          </Container>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default HeaderList;
