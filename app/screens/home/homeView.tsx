import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import PostCard from '../../components/PostCard';
import {MainTabParamList, RootStackparamList} from '../../navigations/Types';
import IonIcon from 'react-native-vector-icons/Ionicons';
//HTTP
import {useQuery} from 'react-query';
import {getArticles, getPosts} from '../../apis/service/client';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ModalView} from '../../components';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.bg};
`;

const HeaderIconView = styled.View`
  flex-direction: row;
  justify-items: center;
  margin-right: 8px;
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
  //Modal
  const [modalVisible, setModalVisible] = useState(false);

  console.log(articleQuery.data);

  useEffect(() => {
    const PostingModal = () => {
      navigation.navigate('Upload');
      setModalVisible(false);
    };

    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderIconView>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <IonIcon name="add" size={24} color="black" />
              <ModalView
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
              navigation.navigate('UserProfile', {
                user_id: item.id,
                name: item.name,
                imageSource: item.thumbnailUrl,
              })
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
