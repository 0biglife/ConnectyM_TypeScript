import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import PostCard from '../../components/PostCard';

import axios, {AxiosResponse} from 'axios';
import {Photo} from '../../utils/axios/model/data';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const homeViewDataTest = () => {
  const [posts, setPosts] = useState<Photo[]>([]);
  console.clear();

  useEffect(() => {
    axios
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .then((response: AxiosResponse) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <SafeContainer>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeContainer>
  );
};

export default homeViewDataTest;