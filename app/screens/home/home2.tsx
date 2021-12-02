import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styled from 'styled-components/native';
import PostCard from '../../components/PostCard';

import {User} from '../../apis/interfaces';
import axios, {AxiosResponse} from 'axios';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
`;

const homeViewDataTest = () => {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse) => {
        console.log('Response: ', response.data);
        setUserData(response.data);
      });
  }, []);
  return (
    <Container>
      <View>
        <FlatList
          data={userData}
          renderItem={({item}) => <PostCard item={item} />}
          keyExtractor={item => item.articles}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default homeViewDataTest;
