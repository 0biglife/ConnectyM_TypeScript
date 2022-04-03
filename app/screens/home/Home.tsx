import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import {MainTabParamList, RootStackparamList} from '../../navigations/Types';
import IonIcon from 'react-native-vector-icons/Ionicons';
//Components
import {HeaderList, PostCard, PopularList} from '../../components';
//HTTP
import {useQuery} from 'react-query';
import {getArticles} from '../../apis/service/articles';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MenuModal} from '../../components';
//Redux
import {useUser} from '../../hooks/useUser';
import PopularTrack from '../../components/HomeComponent/PopularTrack';
import {examples} from '../../model/example';

interface HomeViewProps {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'Home'>,
    NativeStackNavigationProp<RootStackparamList>
  >;
}

const HomeView: React.FC<HomeViewProps> = ({navigation}) => {
  //Redux
  const user = useUser();
  //API Calls
  const articles = useQuery('articles', getArticles);
  //Refresh Hook
  // const [refresh, setRefresh] = useState<boolean>(false);
  //Modal
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const PostingModal = () => {
      navigation.navigate('Upload', {});
      setModalVisible(false);
    };
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderIconView>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <IonIcon name="add" size={24} color="black" />
              <MenuModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                firstFunction={() => PostingModal()}
                secondFunction={() => PostingModal()}
                thirdFunction={() => PostingModal()}
              />
            </TouchableOpacity>
          </HeaderIconView>
        );
      },
    });
  }, [modalVisible, navigation]);

  if (!articles.data) {
    console.log('No ARTICLE Data');
    return <ActivityIndicator size="large" style={{flex: 1}} />;
  } else {
    console.log('STRAPI POST DATA : ', articles.data);
  }

  // const wait = (timeout: number) => {
  //   return new Promise(resolve => setTimeout(resolve, timeout));
  // };

  // const refreshing = () => {
  //   setRefresh(true);
  //   wait(1400).then(() => setRefresh(false));
  //   getPosts();
  //   console.log('refresh Data : ', postQuery.data);
  // };

  return (
    <SafeContainer>
      <FlatList
        data={articles.data}
        ListHeaderComponent={
          <>
            <TitleView>
              <TitleText>Section01</TitleText>
            </TitleView>
            <>
              <HeaderList />
            </>
            <TitleView>
              <TitleText>Section02</TitleText>
            </TitleView>
            <PopularList />
            <TitleView>
              <TitleText>Section03</TitleText>
            </TitleView>
          </>
        }
        ListFooterComponent={
          <TitleView>
            <TitleText>LastSection</TitleText>
          </TitleView>
        }
        renderItem={({item}) => (
          <PostCard
            id={item.id}
            title={item.title}
            body={item.body}
            // url={item.url}
            user={user!}
            published_at={item.published_at}
            created_at={item.created_at}
            updated_at={item.updated_at}
            ProfileTapped={() =>
              navigation.navigate('UserProfile', {
                user_id: item.id,
                name: item.user.username,
                imageSource: item.url,
              })
            }
            ArticleTapped={() =>
              navigation.navigate('Article', {
                user_id: item.id,
                name: item.user.username,
                thumbnailUrl: item.url,
                imageSource: item.url,
                postTime: item.created_at,
                title: item.body,
              })
            }
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      {/* <FlatList
        data={postQuery.data}
        renderItem={({item}) => (
          <PostCard
            id={item.id}
            name={item.name}
            title={item.title}
            postTime={item.postTime}
            url={item.url}
            thumbnailUrl={item.thumbnailUrl}
            ProfileTapped={() =>
              navigation.navigate('UserProfile', {
                user_id: item.id,
                name: item.name,
                imageSource: item.thumbnailUrl,
              })
            }
            ArticleTapped={() => navigation.navigate('Article', {
                user_id: item.id,
                name: item.name,
                thumbnailUrl: item.thumbnailUrl,
                imageSource: item.url,
                postTime: item.postTime,
                title: item.title,
              })
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onRefresh={() => refreshing()}
        refreshing={refresh}
      /> */}
    </SafeContainer>
  );
};

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  /* justify-content: center;
  align-items: center; */
  background-color: ${props => props.theme.color.bg};
`;

const TitleView = styled.View`
  background-color: lightgray;
`;

const TitleText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  margin-left: 12px;
  margin-top: 12px;
  margin-bottom: 8px;
`;

const HeaderIconView = styled.View`
  flex-direction: row;
  justify-items: center;
  margin-right: 8px;
`;

export default HomeView;
