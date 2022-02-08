import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Alert, FlatList} from 'react-native';
import PostCard from '../../components/PostCard';
import {Photo} from '../../apis/model/data';
import axios, {AxiosResponse} from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamsList} from '../../navigations/Types';
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
  navigation: StackNavigationProp<HomeParamsList, 'HomeView'>;
}

const HomeView: React.FC<HomeProps> = () => {
  const [posts, setPosts] = useState<Photo[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [refresh]);

  const fetchData = () => {
    apiClient.get<ResponseFeed>('/feeds').then((response: AxiosResponse) => {
      console.log('!!!!!!! : ', response.data);
      setPosts(response.data);
      // setPage(page + 1);
    });
  };

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const refreshing = () => {
    // setPage(1);
    setRefresh(true);
    wait(1400).then(() => setRefresh(false));
    fetchData();
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

export default HomeView;
