import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import PostCard from '../../components/PostCard';
import {Photo} from '../../apis/model/data';
import axios, {AxiosResponse} from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabNavigatorParamsList} from '../../navigations/Types';
//HTTP
import apiClient from '../../apis/service/client';
import {ResponseFeed, Feed} from '../../apis/model/data';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.bg};
`;

export interface HomeProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Home'>;
}

const homeView: React.FC<HomeProps> = () => {
  const [posts, setPosts] = useState<Photo[]>([]);
  console.clear();
  useEffect(() => {
    apiClient.get<Feed>('/feeds').then((response: AxiosResponse) => {
      console.log('!!!!!!! : ', response.data);
      setPosts(response.data);
    });
  }, []);
/*
useEffect(() => {
    axios
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .then((response: AxiosResponse) => {
        setPosts(response.data);
      });
  }, []);
*/
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

export default homeView;
