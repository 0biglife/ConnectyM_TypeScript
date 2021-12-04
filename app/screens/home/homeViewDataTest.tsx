import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styled from 'styled-components/native';
import PostCard from '../../components/PostCard';

import axios, {AxiosResponse} from 'axios';
import {User, Photo} from '../../common/axios/interfaces';

const TText = styled.Text`
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: 400;
`;

const homeViewDataTest = () => {
  const [posts, setPosts] = useState<Photo[]>([]);
  console.clear();
  console.log('User Data:', posts);

  useEffect(() => {
    axios
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .then((response: AxiosResponse) => {
        console.log('Response Data: ', response.data);
        setPosts(response.data);
      });
    // const fetchPosts = async () => {
    //   try {
    //     const response = await axios.get(
    //       'top-headlines?country=us&apiKey=14940aa1b8064dd1826db04e061120b2',
    //     );
    //     console.log(response.data);
    //     setPosts(response.data);
    //   } catch (error) {
    //     if (error.response) {
    //       console.log(error.response.data);
    //     } else {
    //       console.log('Error: ${error.messgae}');
    //     }
    //   }
    // };
  }, []);

  return (
    <View>
      {/* <TText>{posts[3].name}</TText> */}
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
