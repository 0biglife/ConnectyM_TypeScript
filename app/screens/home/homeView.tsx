import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator, FlatList} from 'react-native';
import PostCard from '../../components/PostCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamsList} from '../../navigations/Types';
//HTTP
import {useQuery} from 'react-query';
import apiClient from '../../apis/service/client';
import {Feed} from '../../apis/model/data';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.bg};
`;

export interface HomeProps {
  navigation: StackNavigationProp<HomeParamsList, 'HomeView'>;
}

const getArticles = async () => {
  const response = await apiClient.get<Feed[]>('/feeds');
  return response.data;
};

const HomeView: React.FC<HomeProps> = () => {
  const {data, isLoading} = useQuery('articles', getArticles);

  console.log({data, isLoading});

  if (!data) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeContainer>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PostCard
            id={item.id}
            name={item.name}
            title={item.title}
            postTime={item.postTime}
            url={item.url}
            thumbnailUrl={item.thumbnailUrl}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        // onRefresh={() => refreshing()}
        // refreshing={refresh}
      />
    </SafeContainer>
  );
};

export default HomeView;
