import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {AxiosResponse} from 'axios';
import apiClient from '../../apis/service/client';
import {Photo} from '../../apis/model/data';
import {SearchParamsList} from '../../navigations/Types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {profileView} from '../../screens';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: ${prop => prop.theme.color.bg};
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const SearchTextInput = styled.TextInput`
  align-self: center;
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-radius: 8px;
  padding-left: 20px;
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
  height: 8px;
  width: 100%;
  /* background-color: ${prop => prop.theme.color.bg}; */
  background-color: white;
`;

const CellContainer = styled.View`
  /* flex-direction: row; */
  /* align-items: center; */
  width: 100%;
  height: 120px;
  border-radius: 8px;
  margin-top: 8px;
  padding: 8px;
  background-color: lightgray;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-width: 1px;
  border-color: gray;
  border-radius: 25px;
`;

export interface SearchProps {
  navigation: StackNavigationProp<SearchParamsList, 'Search'>;
  route: RouteProp<SearchParamsList, 'Search'>;
}

const searchView: React.FC<SearchProps> = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterdData] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    apiClient.get<Photo[]>('/photos').then((response: AxiosResponse) => {
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
      <CellContainer>
        <TouchableOpacity onPress={() => navigation.navigate(profileView)}>
          <ProfileImage source={{uri: item.url}} />
        </TouchableOpacity>
        <Title>{item.title}</Title>
      </CellContainer>
    )
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
          keyExtractor={(item, index) => index}
          // ItemSeparatorComponent={ItemSeperatorView}
          renderItem={ItemView}
        />
      </MainContainer>
    </SafeContainer>
  );
};

export default searchView;
