import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {MainTabParamList} from '../../navigations/Types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Alert, Image} from 'react-native';

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
  }, [navigation]);

  const ItemView = ({item}) => {
    return (
      <CellContainer>
        <HeaderSection>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => Alert.alert('test')}>
            <ProfileImage
              source={{uri: item.results.user.profile_image.small}}
            />
            <ProfileName>{item.results.user.name}</ProfileName>
          </TouchableOpacity>
        </HeaderSection>
        <BodySection>
          <BodyImage source={{uri: item.results.user.profile_image.large}} />
        </BodySection>
      </CellContainer>
    );
  };

  const searchFilter = (text: string) => {
    setValue(text);
    console.log('searchFilter : ', value);
    // searchData(text);
  };

  const searchData = async text => {
    try {
      // apiClient.get<Response>('/feeds' + text.toLowerCase).then(response => {
      //   const jsonData = response.data;
      //   console.log('SEARCHVIEW : ', jsonData);
      // });
      // axios
      //   .get('https://api.unsplash.com/search/photos', {
      //     params: {query: text},
      //     headers: {
      //       Authorization:
      //         'Client-ID 3eVYYY9UEOTwk4CcDUgHt9uSSP_MJiAO3E1hcna-i1Q',
      //     },
      //   })
      //   .then(response => {
      //     console.log('UNSPLAH SERCH DATA : ', response);
      //     const jsonData = response.data;
      //     setDataList(jsonData);
      //   });
    } catch (error) {
      console.log('SEARCHVIEW ERROR : ', error);
    }
  };

  const onSubmit = () => {
    console.log('Submit!');
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
          onChangeText={(text: string) => searchFilter(text)}
        />
        <FlatList
          data={dataList}
          keyExtractor={item => item.id}
          // ItemSeparatorComponent={ItemSeperatorView}
          renderItem={({item, index}) => (
            <Image
              style={{
                width: 100,
                heigth: 100,
              }}
              source={item.results.user.profile_image.large}
            />
          )}
        />
      </MainContainer>
    </SafeContainer>
  );
};

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

export default searchView;
