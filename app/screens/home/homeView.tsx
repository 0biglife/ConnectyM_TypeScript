import React, {useState} from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator, FlatList} from 'react-native';
import PostCard from '../../components/PostCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamsList} from '../../navigations/Types';
//HTTP
import {useQuery} from 'react-query';
import {getArticles, getPosts} from '../../apis/service/client';
import {RouteProp} from '@react-navigation/native';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.bg};
`;

export interface HomeProps {
  navigation: StackNavigationProp<HomeParamsList, 'HomeView'>;
  route: RouteProp<HomeParamsList, 'HomeView'>;
}

const HomeView: React.FC<HomeProps> = ({navigation, route}) => {
  // const {data, isLoading} = useQuery('articles', getPosts);
  const articleQuery = useQuery('articles', getArticles);
  const [refresh, setRefresh] = useState<boolean>(false);

  console.log(articleQuery.data);

  if (!articleQuery.data) {
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
        data={articleQuery.data}
        renderItem={({item}) => (
          <PostCard
            id={item.id}
            user={item.user}
            title={item.title}
            postTime={item.postTime}
            url={item.url}
            thumbnailUrl={item.thumbnailUrl}
            // navigation={navigation}
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

