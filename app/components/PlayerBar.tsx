// import React from 'react';
// import styled from 'styled-components/native';
// import IonIcon from 'react-native-vector-icons/Ionicons';

// const songs = [
//   {
//     title: '그땐 어렸으니까',
//     artist: '기리보이',
//     artwork: require('../assets/artwork/cover1.jpeg'),
//     url: require('../assets/songs/song1.mp3'),
//     id: 1,
//   },
//   {
//     title: 'Home',
//     artist: 'Kid Milli',
//     artwork: require('../assets/artwork/cover2.jpeg'),
//     url: require('../assets/songs/song2.mp3'),
//     id: 2,
//   },
//   {
//     title: '라식',
//     artist: '기리보이',
//     artwork: require('../assets/artwork/cover3.jpeg'),
//     url: require('../assets/songs/song3.mp3'),
//     id: 3,
//   },
// ];

// const MainContainer = styled.View`
//   width: 100%;
//   height: 54px;
//   bottom: 79px;
//   position: absolute;
//   background-color: lightgrey;
//   flex-direction: row;
//   border-width: 1;
//   border-color: #aaa9a9;
//   align-items: center;
// `;

// const ArtworkImage = styled.Image`
//   width: 50px;
//   height: 50px;
//   justify-content: center;
//   background-color: lightpink;
//   margin-left: 2px;
// `;

// const RightContainer = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: center;
// `;

// const NameContainer = styled.View`
//   flex-direction: column;
//   align-items: center;
//   margin-left: 30px;
//   /* justify-content: center; */
// `;

// const ButtonContainer = styled.View`
//   flex-direction: row;
//   align-items: center;
//   width: 90px;
//   justify-content: space-around;
// `;

// const TitleText = styled.Text`
//   color: black;
//   font-size: 14px;
//   font-weight: bold;
//   /* margin-left: 10px; */
// `;

// const ArtistText = styled.Text`
//   color: black;
//   font-size: 14px;
//   /* margin-left: 4px; */
//   margin-top: 4px;
// `;

// const PlayerBar = () => {
//   return (
//     <MainContainer>
//       {/* source 안에 uri: <- 이거 지우니까 사진이 뜨고 Android 에러 사라짐 */}
//       <ArtworkImage source={songs[0].artwork} />
//       <RightContainer>
//         <NameContainer>
//           <TitleText>{songs[0].title}</TitleText>
//           <ArtistText>{songs[0].artist}</ArtistText>
//         </NameContainer>
//       </RightContainer>
//       <ButtonContainer>
//         <IonIcon name="heart" size={28} color="black" />
//         <IonIcon name="ios-play-sharp" size={28} color="black" />
//       </ButtonContainer>
//     </MainContainer>
//   );
// };

// export default PlayerBar;
