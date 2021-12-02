import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const songs = [
  {
    title: '그땐 어렸으니까',
    artist: '기리보이',
    artwork: require('../assets/artwork/cover1.jpeg'),
    url: require('../assets/songs/song1.mp3'),
    id: 1,
    // duration: 311,
  },
  {
    title: 'Home',
    artist: 'Kid Milli',
    artwork: require('../assets/artwork/cover2.jpeg'),
    url: require('../assets/songs/song2.mp3'),
    id: 2,
    // duration: 311,
  },
  {
    title: '라식',
    artist: '기리보이',
    artwork: require('../assets/artwork/cover3.jpeg'),
    url: require('../assets/songs/song3.mp3'),
    id: 3,
    // duration: 311,
  },
];

const MainContainer = styled.View`
  position: absolute;
  bottom: 65px;
  background-color: red;
  flex-direction: row;
  margin: 15px;
  width: 100%;
`;

const RightContainer = styled.View`
  justify-content: space-around;
  margin-left: 15px;
`;

const ArtworkImage = styled.Image`
  width: 75px;
  height: 75px;
`;

const TitleText = styled.Text`
  color: black;
  font-size: 24px;
`;

const ArtistText = styled.Text`
  color: lightgray;
  font-size: 20px;
`;

const PlayerWidget = () => {
  return (
    <MainContainer>
      <ArtworkImage source={{uri: require('../assets/artwork/cover1.jpeg')}} />
      <RightContainer>
        <TitleText />
        <ArtistText />
      </RightContainer>
    </MainContainer>
  );
};

export default PlayerWidget;
