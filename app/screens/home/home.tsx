import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styled from 'styled-components/native';
import PostCard from '../../components/PostCard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
`;

const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
`;

const homeView = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=14940aa1b8064dd1826db04e061120b2',
    )
      .then(re => re.json())
      .then(re => {
        setFeed(re.articles);
      });
    // .catch(function (error) {
    //   console.log(error.message);
    //   throw error;
    // });
  }, []);

  return (
    <Container>
      <View>
        <FlatList
          data={feed}
          renderItem={({ item }) => <PostCard item={item} />}
          keyExtractor={item => item.articles}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};

export default homeView;
