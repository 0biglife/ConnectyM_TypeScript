import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {SearchParamsList} from '../../navigations/Types';
import apiClient from '../../apis/service/client';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation} from '@react-navigation/native';
import { Alert } from 'react-native';
import axios from 'axios';
import naverAPI from '../../apis/spotify/client';
import Unsplash from '../../apis/unsplash/client';

const headerHeight = 62;
const BodyHeight = 150;

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.color.bg};
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
  /* background-color: ${prop => prop.theme.color.bg}; */
  background-color: lightgray;
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
  const [value, setValue] = useState<string>('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterdData] = useState([]);

  useEffect(() => {
    // apiClient.get<Response>('/users').then(response => {
    //   const jsonData = response.data;
    //   console.log('SEARCHVIEW : ', jsonData);
    // });
    // apiClient
    //   .get<Photo[]>(
    //     `/search/photos?page=1&query=${query}/client_id=${accessKey}`,
    //   )
    //   .then((response: AxiosResponse) => {
    //     try {
    //       const res = response.data;
    //       console.log(res);
    //       const jsonData = res.result;
    //       setFilteredData(jsonData);
    //       setMasterdData(jsonData);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   });
  }, []);

  const ItemView = ({item}) => {
    return (
      <CellContainer>
        <HeaderSection>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => Alert.alert('test')}>
            <ProfileImage source={{uri: item.user.profile_image.small}} />
            <ProfileName>{item.user.name}</ProfileName>
          </TouchableOpacity>
        </HeaderSection>
        <BodySection>
          <BodyImage source={{uri: item.urls.self}} />
        </BodySection>
      </CellContainer>
    );
  };

  const searchFilter = (text: string) => {
    setValue(text);
    console.log('searchFilter : ', value);
  };

  const searchData = async () => {
    try {
      // apiClient.get(`/search/${text}`).then(response => {
      //   console.log('!!@@#!@!@: ', response.data);
      // });
      naverAPI
        .get(`/v1/search/blog.xml?query=${value}&display=10&start=1&sort=sim`)
        .then(response => {
          console.log('UNSPLASH DATA : ', response.data);
        });
    } catch (error) {
      console.log('UNSPLASH ERROR : ', error);
    }
  };

  const onSubmit = () => {
    Alert.alert('onSubmit');
    searchData();
  };

  return (
    <SafeContainer>
      <MainContainer>
        <SearchTextInput
          value={value}
          returnKeyType="done"
          placeholder="검색"
          placeholderTextColor="darkgray"
          // underlineColorAndroid="transparent"
          onSubmitEditing={() => onSubmit()}
          onChangeText={(text: string) => searchFilter(text)}
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
