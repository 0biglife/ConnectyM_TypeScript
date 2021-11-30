import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, TouchableOpacity, View, Animated} from 'react-native';
import styled from 'styled-components/native';

import IonIcon from 'react-native-vector-icons/Ionicons';

// import TrackPlayer, {
//   Capability,
//   Event,
//   RepeatMode,
//   State,
//   usePlaybackState,
//   useProgress,
//   useTrackPlayerEvents,
// } from 'react-native-track-player';
const songs = [
  {
    title: 'cover1',
    artist: 'giriboy',
    image: require('../assets/artwork/cover1.jpeg'),
    url: require('../assets/songs/song1.mp3'),
    id: 1,
    // duration: 311,
  },
  {
    title: 'cover2',
    artist: 'giriboy',
    image: require('../assets/artwork/cover2.jpeg'),
    url: require('../assets/songs/song2.mp3'),
    id: 2,
    // duration: 311,
  },
  {
    title: 'cover3',
    artist: 'giriboy',
    image: require('../assets/artwork/cover3.jpeg'),
    url: require('../assets/songs/song3.mp3'),
    id: 3,
    // duration: 311,
  },
];

const windowWidth = Dimensions.get('window').width;

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const FlatListTrackWrapper = styled.View`
  width: windowWidth;
  justify-content: center;
  align-items: center;
`;

const ArtworkWrapper = styled.View`
  width: 300px;
  height: 300px;
  margin-bottom: 25px;
`;

const ArtworkImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: black;
`;

const ArtistText = styled.Text`
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  color: black;
`;

const SliderContainer = styled.Slider`
  width: 350px;
  height: 40px;
  margin-top: 25px;
  flex-direction: row;
`;

const SliderLabelContainer = styled.View`
  width: 340px;
  flex-direction: row;
  justify-content: space-between;
`;

const SliderLabelText = styled.Text`
  color: black;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin-top: 15px;
`;

const BottomContainer = styled.View`
  border-top-color: #393e46;
  border-top-width: 1px;
  width: width;
  align-items: center;
  padding-top: 15px;
`;

const BottomControls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

// const setupPlayer = async () => {
//   await TrackPlayer.setupPlayer();

//   await TrackPlayer.add(songs);
// };

// const togglePlayback = async (playbackState) => {
//   const currentTrack = await TrackPlayer.getCurrentTrack();

//   if (currentTrack !== null) {
//     if (playbackState == State.Paused) {
//       await TrackPlayer.play();
//     } else {
//       await TrackPlayer.pause();
//     }
//   }
// };

const MusicPlayer = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const index = Math.round(value / windowWidth);
      console.log('Scroll x', scrollX);
      console.log('Device Width', windowWidth);
      setSongIndex(index);
      console.log('Index', index);
    });
  }, []);

  const renderSongs = ({index, item}) => {
    return (
      <Animated.View
        style={{
          width: windowWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ArtworkWrapper>
          <ArtworkImage source={item.image} />
        </ArtworkWrapper>
      </Animated.View>
    );
  };

  return (
    <SafeAreaViewContainer>
      <MainContainer>
        <Animated.FlatList
          data={songs}
          renderItem={renderSongs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />
        <View>
          <TitleText>{songs[songIndex].title}</TitleText>
          <ArtistText>{songs[songIndex].artist}</ArtistText>
        </View>
        <View>
          <SliderContainer
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="black"
            minimumTrackTintColor="black"
            maximumTrackTintColor="lightgray"
            onSlidingComplete={() => {}}
          />
          <SliderLabelContainer>
            <SliderLabelText>0:00</SliderLabelText>
            <SliderLabelText>3:45</SliderLabelText>
          </SliderLabelContainer>
        </View>

        <ButtonContainer>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon
              name="play-skip-back-outline"
              size={35}
              color="black"
              style={{marginTop: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="ios-pause-circle" size={75} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon
              name="play-skip-forward-outline"
              size={35}
              color="black"
              style={{marginTop: 25}}
            />
          </TouchableOpacity>
        </ButtonContainer>
      </MainContainer>
      <BottomContainer>
        <BottomControls>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </BottomControls>
      </BottomContainer>
    </SafeAreaViewContainer>
  );
};

export default MusicPlayer;
