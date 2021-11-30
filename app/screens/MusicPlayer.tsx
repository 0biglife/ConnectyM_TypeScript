import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
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

import songs from '../model/data';

const { width, height } = Dimensions.get('window');

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #222831;
`;

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
  // const playbackState = usePlaybackState();
  return (
    <SafeAreaViewContainer>
      <MainContainer>

      </MainContainer>
      <BottomContainer>
        <BottomControls>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
        </BottomControls>
      </BottomContainer>
    </SafeAreaViewContainer>
  );
};

export default MusicPlayer;
