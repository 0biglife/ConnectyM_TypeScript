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
  const [value, setValue] = useState<string>('');
  const [dataList, setDataList] = useState([]);
  //
  // const [unsplashData, setUnsplashData] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
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
        console.log('test data : ', response.data);
      } catch (e) {
        console.log('search test error : ', e);
      } finally {
        console.log('search data test finally ! ');
      }
    };
    DefaultData();
  }, [navigation]);

  const onSubmit = () => {
    // console.log('Submit!');
    searchData(value);
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
          // onChangeText={(text: string) => searchFilter(text)}
        />
        <FlatList
          data={dataList}
          keyExtractor={item => item.id}
          numColumns={3}
          // ItemSeparatorComponent={ItemSeperatorView}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CellContainer>
              <CellImage source={{uri: item.urls.raw}} />
            </CellContainer>
          )}
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
  margin-top: 1px;
  margin-right: 1px;
`;

const CellImage = styled.Image`
  flex: 1;
`;

export default searchView;
