import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import PostCard from '../../components/PostCard';
import {Photo} from '../../apis/model/data';
import {AxiosResponse} from 'axios';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamsList} from '../../navigations/Types';
//HTTP
import apiClient from '../../apis/service/client';
import {ResponseFeed} from '../../apis/model/data';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.bg};
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: lightcoral;
`;

const HeaderWrapper = styled.View`
  height: 100px;
`;

const HeaderRowList = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  background-color: white;
`;

const UserImage = styled.Image`
  width: 74px;
  height: 74px;
  border-radius: 37px;
  background-color: lightgray;
  align-self: center;
  margin-left: 14px;
  border-width: 1px;
  border-color: lightgray;
`;

export interface HomeProps {
  navigation: StackNavigationProp<HomeParamsList, 'HomeView'>;
}

const SecondCat: React.FC<HomeProps> = () => {
  const [posts, setPosts] = useState<Photo[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    apiClient.get<ResponseFeed>('/feeds').then((response: AxiosResponse) => {
      console.log('!!!!!!! : ', response.data);
      setPosts(response.data);
    });
  };

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const refreshing = () => {
    setRefresh(true);
    wait(1400).then(() => setRefresh(false));
    fetchData();
  };

  return (
    <SafeContainer>
      <Wrapper>
        <HeaderWrapper>
          <HeaderRowList>
            <FlatList
              data={posts}
              horizontal={true}
              renderItem={({item}) => (
                <UserImage source={{uri: item.thumbnailUrl}} />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </HeaderRowList>
        </HeaderWrapper>
        <FlatList
          data={posts}
          renderItem={({item}) => <PostCard item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          onRefresh={() => refreshing()}
          refreshing={refresh}
        />
      </Wrapper>
    </SafeContainer>
  );
};

export default SecondCat;
