import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import PostCard from '../../components/PostCard';

import apiClient from '../../apis/service/client';
import {Photo} from '../../apis/model/data';
import {AxiosResponse} from 'axios';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.bg};
`;

const homeViewDataTest = () => {
  const [posts, setPosts] = useState<Photo[]>([]);
  console.clear();
  useEffect(() => {
    apiClient.get<Photo[]>('/photos').then((response: AxiosResponse) => {
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
