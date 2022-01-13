import React, {useState} from 'react';
import { Text } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

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
  align-items: centerr;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  padding: 10;
`;

const ListView = styled.View`
  height: 20;
  width: 100%;
  background-color: lightgray;
`;

const searchView = () => {
  const [filteredData, setFilteredData] = useState([]);

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

  return (
    <SafeContainer>
      <MainContainer>
        <SearchTextInput />
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
