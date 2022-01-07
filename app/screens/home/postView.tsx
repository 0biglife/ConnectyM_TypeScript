import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {Input, Button} from '../../components';

import axios, {AxiosResponse} from 'axios';
import {Photo} from '../../apis/model/data';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  padding: 10px;
`;

const postView = () => {
  const postData = () => {
    axios
      .post<Photo[]>(
        'https://dff60062-abae-46c2-8562-f30dd0e10b89.mock.pstmn.io/post',
        {
          albumId: one,
          id: two,
          title: three,
          url: four,
          thumbnailUrl: five,
        },
      )
      .then((response: AxiosResponse) => {
        console.log('Post Test!!', response);
      });
  };

  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);
  const [three, setThree] = useState(null);
  const [four, setFour] = useState(null);
  const [five, setFive] = useState(null);

  return (
    <Container>
      <Text>POST API TEST</Text>
      <Input placeholder="albumId" onChangeText={text => setOne(text)} />
      <Input placeholder="id" onChangeText={text => setTwo(text)} />
      <Input placeholder="title" onChangeText={text => setThree(text)} />
      <Input placeholder="url" onChangeText={text => setFour(text)} />
      <Input placeholder="thumbnailUrl" onChangeText={text => setFive(text)} />
      <Button title="test" onPress={postData} />
    </Container>
  );
};

export default postView;
