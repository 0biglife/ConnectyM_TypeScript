import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styled from 'styled-components/native';
import PostCard from '../../components/PostCard';

import axios, {AxiosResponse} from 'axios';
import {User} from '../../common/axios/interfaces';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
`;

const TText = styled.Text`
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: 400;
`;

const homeViewDataTest = () => {
  const [posts, setPosts] = useState<User[]>([]);
  console.clear();
  console.log('User Data:', posts);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
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
    <Container>
      <View>
        {/* <TText>{posts[3].name}</TText> */}
        <FlatList
          data={posts}
          renderItem={({item}) => <PostCard item={item} />}
          keyExtractor={item => item.name}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default homeViewDataTest;
