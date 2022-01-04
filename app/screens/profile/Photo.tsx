import React from 'react';
import {Dimensions, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const Width = Dimensions.get('window').width / 3;

const MainContainer = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-top: 4px;
  color: white;
`;

const data = [
  {key: 'A'},
  {key: 'B'},
  {key: 'C'},
  {key: 'D'},
  {key: 'E'},
  {key: 'F'},
];

const renderItem = ({item, index}) => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Width,
        height: Width,
      }}>
      <Title>{item.key}</Title>
    </View>
  );
};

// const formatData = (data, numColumns) => {
//   const numberOffFullRows = Math.floor(data.length / numColumns);

//   let numberOfElementsLastRow = data.length - numberOffFullRows * numColumns;

//   while (
//     numberOfElementsLastRow !==
//     numColumns /* && numberOfElementsLastRow !== 0 */
//   ) {
//     data.push({key: 'blank - ${numberOfElementsLastRow}', empty: true});
//     numberOfElementsLastRow = numberOfElementsLastRow + 1;
//   }
//   return data;
// };

const numColumns = 3;

const Photo = () => {
  return (
    <MainContainer>
      {/* <FlatList data={data} style={{flex: 1}} renderItem={renderItem} /> */}
      <FlatList
        data={data}
        style={{flex: 1}}
        renderItem={renderItem}
        // numColumns={numColumns}
      />
    </MainContainer>
  );
};

export default Photo;
