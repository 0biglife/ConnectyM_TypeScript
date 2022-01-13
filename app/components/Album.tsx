import React from 'react';
import styled from 'styled-components/native';

export type AlbumProps = {
  id: string;
  imageUrl: string;
  artistHeadLine: string;
};

const MainContainer = styled.View`
  //
`;

const AlbumImage = styled.Image`
  //
`;

const Something = styled.Text`
  //
`;

const Album = (props: AlbumProps) => {
  return (
    <MainContainer>
      <AlbumImage source={{uri: props.imageUrl}} />
      <Something>{props.artistHeadLine}</Something>
    </MainContainer>
  );
};

export default Album;
