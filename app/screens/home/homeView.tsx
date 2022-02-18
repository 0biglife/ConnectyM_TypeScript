import React, {useState} from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator, FlatList} from 'react-native';
import PostCard from '../../components/PostCard';
import {
  HomeNavigationProp,
  MainTabNavigationProp,
  MainTabParamList,
  RootStackparamList,
} from '../../navigations/Types';
//HTTP
import {useQuery} from 'react-query';
import {getArticles, getPosts} from '../../apis/service/client';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { number } from 'prop-types';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.bg};
`;

interface HomeViewProps {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'Home'>,
    NativeStackNavigationProp<RootStackparamList>
  >;
}

const HomeView: React.FC<HomeViewProps> = ({navigation}) => {
  const articleQuery = useQuery('articles', getArticles);
  const postQuery = useQuery('posts', getPosts);
  const [refresh, setRefresh] = useState<boolean>(false);

  console.log(articleQuery.data);

  if (!postQuery.data) {
    return <ActivityIndicator size="large" style={{flex: 1}} />;
  }

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const refreshing = () => {
    setRefresh(true);
    wait(1400).then(() => setRefresh(false));
    getArticles();
  };

  return (
    <SafeContainer>
      <FlatList
        data={postQuery.data}
        renderItem={({item}) => (
          <PostCard
            id={item.id}
            name={item.name}
            title={item.title}
            postTime={item.postTime}
            url={item.url}
            thumbnailUrl={item.thumbnailUrl}
            onPress={() =>
              navigation.navigate('UserProfile', {user_id: item.id})
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onRefresh={() => refreshing()}
        refreshing={refresh}
      />
    </SafeContainer>
  );
};

export default HomeView;

