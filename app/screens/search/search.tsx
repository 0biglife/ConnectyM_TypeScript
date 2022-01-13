import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {AxiosResponse} from 'axios';
import apiClient from '../../apis/unsplash/client';
import {Photo} from '../../apis/model/data';
import {SearchParamsList} from '../../navigations/Types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation} from '@react-navigation/native';

const headerHeight = 62;
const BodyHeight = 150;

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

const CellContainer = styled.View`
  /* flex-direction: row; */
  /* align-items: center; */
  min-width: 100%;
  height: ${headerHeight + BodyHeight}px;
  border-radius: 8px;
  margin-top: 6px;
  background-color: lightgray;
`;

const HeaderSection = styled.View`
  min-width: 100%;
  height: ${headerHeight}px;
  justify-content: center;
  /* background-color: lightcoral; */
`;

const ProfileImage = styled.Image`
  width: 44px;
  height: 44px;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 25px;
  margin-left: 10px;
`;

const ProfileName = styled.Text`
  align-self: center;
  font-size: 14px;
  font-weight: 600;
  margin: 10px;
`;

const BodySection = styled.View`
  min-width: 100%;
  height: ${BodyHeight}px;
  /* background-color: lightblue; */
`;

const BodyImage = styled.Image`
  width: ${BodyHeight - 20}px;
  height: ${BodyHeight - 20}px;
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
    apiClient.get<Photo[]>('').then((response: AxiosResponse) => {
      try {
        const res = response.data;
        console.log(res);
        const jsonData = res;
        setFilteredData(jsonData);
        setMasterdData(jsonData);
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  const ItemView = ({item}) => {
    return (
      <CellContainer>
        <HeaderSection>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('ProfileStack')}>
            <ProfileImage source={{uri: item.urls.thumb}} />
            <ProfileName>{item.user.name}</ProfileName>
          </TouchableOpacity>
        </HeaderSection>
        <BodySection>
          <BodyImage source={{uri: item.urls.full}} />
        </BodySection>
      </CellContainer>
    )
  };

  const searchFilter = (text: string) => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.id ? item.id : '';
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
