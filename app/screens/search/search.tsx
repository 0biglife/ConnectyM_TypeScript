import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {MainTabParamList} from '../../navigations/Types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Dimensions, Image, View} from 'react-native';
import {Config} from 'react-native-config';
import axios from 'axios';

export interface SearchProps {
  navigation: StackNavigationProp<MainTabParamList, 'Search'>;
  route: RouteProp<MainTabParamList, 'Search'>;
}

const searchView: React.FC<SearchProps> = ({navigation}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [dataList, setDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  //
  // const [unsplashData, setUnsplashData] = useState('');

  const DefaultData = async () => {
    try {
      const response = await axios.get(
        `${Config.UNSPLASH_URL}/photos`,
        {
          params: {
            client_id: `${Config.UNSPLASH_ACCESSTOKEN}`,
          },
        }, //https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
      );
      setDataList(response.data);
      setFilteredData(response.data);
      console.log('test data : ', response.data);
    } catch (e) {
      console.log('search test error : ', e);
    } finally {
      console.log('search data test finally ! ');
    }
  };

  const SearchData = async () => {
    try {
      const response = await axios.get();
    } catch (e) {
    } finally {
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    DefaultData();
  }, [navigation]);

  const onSubmit = () => {
    searchData(searchValue);
  };

  const ItemSeperatorView = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: 'white'}} />
    );
  };

  const searchFilter = text => {
    if (text) {
      //const newData = filteredData.filter( // ...필처 처리 // )
      // setDataList(newData);
      console.log('search Value : ', text);
      setSearchValue(text);
    } else {
      setDataList(filteredData);
      setSearchValue(text);
    }
  };

  return (
    <SafeContainer>
      <MainContainer>
        <SearchTextInput
          value={searchValue}
          returnKeyType="done"
          placeholder="검색"
          placeholderTextColor="darkgray"
          onSubmitEditing={() => onSubmit()}
          underlineColorAndroid="transparent"
          onChangeText={(text: string) => searchFilter(text)}
        />
        <FlatList
          data={dataList}
          keyExtractor={item => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CellContainer>
              <CellImage source={{uri: item.urls.raw}} />
            </CellContainer>
          )}
          ItemSeparatorComponent={ItemSeperatorView}
        />
      </MainContainer>
    </SafeContainer>
  );
};

const CellWidth = Dimensions.get('window').width / 3;

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${prop => prop.theme.color.bg};
`;

const MainContainer = styled.View`
  flex: 1;
`;

const SearchTextInput = styled.TextInput`
  align-self: center;
  justify-content: center;
  width: 96%;
  height: 40px;
  border-width: 1px;
  border-radius: 8px;
  padding-left: 20px;
  margin-bottom: 6px;
  border-color: gray;
  background-color: white;
`;

const CellContainer = styled.View`
  width: ${CellWidth}px;
  height: ${CellWidth}px;
  margin-right: 1px;
`;

const CellImage = styled.Image`
  flex: 1;
`;

export default searchView;
