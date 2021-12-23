import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Button } from '../../components';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
`;

const openLibrary = () => {
  //
};

const profileView = () => {
  // const [imageCamera, setImageCamera] = useState(
  //   'https://image.bugsm.co.kr/artist/images/original/801144/80114466.jpg?version=222555&d=20211013174809?version=undefined',
  // );

  // const openCamera = () => {
  //   const option = {
  //     mediaType: 'photo',
  //     quality: 1,
  //   };

  //   launchCamera(option, res => {
  //     if (res.didCancel) {
  //       console.log('User Cancelled Image Picker');
  //     } else if (res.errorCode) {
  //       console.log(res.errorMessage);
  //     } else {
  //       const data = res.assets;
  //       setImageCamera(data);
  //       console.log(data);
  //     }
  //   });
  // };
  return (
    <SafeAreaContainer>
      <Title> Profile View </Title>
      <Image source={{url: null}} style={{height: 100, width: 100}} />
      {/* <Button title='test' onPress={openCamera} /> */}
    </SafeAreaContainer>
  );
};

export default profileView;
