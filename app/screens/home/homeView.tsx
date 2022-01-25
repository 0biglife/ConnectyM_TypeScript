import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Alert, FlatList} from 'react-native';
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
  const [refresh, setRefresh] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    refreshData();
  }, []);

  useEffect(() => {
    refreshData();
  }, [refresh]);

  const refreshData = () => {
    apiClient.get<Feed>('/feeds').then((response: AxiosResponse) => {
      console.log('!!!!!!! : ', response.data);
      setPosts(response.data);
      setPage(page + 1);
    });
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const refreshing = () => {
    setPage(1);
    setRefresh(true);
    wait(1000).then(() => setRefresh(false));
  };

  return (
    <SafeContainer>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onRefresh={() => refreshing()}
        refreshing={refresh}
      />
    </SafeContainer>
  );
};

export default homeView;
