import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import PostCard from '../../components/PostCard';

import axios, {AxiosResponse} from 'axios';
import {Photo} from '../../utils/axios/interfaces';

const homeViewDataTest = () => {
  const [posts, setPosts] = useState<Photo[]>([]);
  console.clear();

  useEffect(() => {
    axios
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .then((response: AxiosResponse) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default homeViewDataTest;
