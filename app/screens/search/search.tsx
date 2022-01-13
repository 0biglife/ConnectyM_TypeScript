import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {AxiosResponse} from 'axios';
import apiClient from '../../apis/service/client';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: ${prop => prop.theme.color.bg};
  /* align-items: center;
  justify-content: center; */
`;

const SearchTextInput = styled.TextInput`
  align-self: center;
  width: 94%;
  height: 40px;
  border-width: 1px;
  border-radius: 8px;
  padding-left: 20px;
  margin: 10px;
  border-color: lightgray;
  background-color: ${prop => prop.theme.color.bg};
`;

const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
`;

const ListView = styled.View`
  height: 20;
  width: 100%;
  background-color: lightgray;
`;

const searchView = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterdData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    apiClient.get('/posts').then((response: AxiosResponse) => {
      try {
        setFilteredData(response.data);
        setMasterdData(response.data);
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  const ItemView = ({item}) => {
    return (
      <Title>
        {item.id}
        {': '}
        {item.title}
      </Title>
    );
  };

  const ItemSeperatorView = () => {
    return <ListView />;
  };

  const searchFilter = (text: string) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ? item.title : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  return (
    <SafeContainer>
      <MainContainer>
        <SearchTextInput
          value={search}
          placeholder="검색"
          underlineColorAndroid="transparent"
          onChangeText={text => searchFilter(text)}
        />
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeperatorView}
          renderItem={ItemView}
        />
      </MainContainer>
    </SafeContainer>
  );
};

export default searchView;
