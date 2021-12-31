import React, {useState} from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import * as ImagePicker from 'react-native-image-picker';

interface Props {
  navigation: any;
  modalVisible: boolean;
  setModalVisible: any;
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 220px;
  max-height: 200px;
  background-color: white;
  border-radius: 10px;
`;

const ModalTitle = styled.View`
  flex: 1;
  width: 70%;
  justify-content: center;
`;

const ModalTitleText = styled.Text`
  align-self: center;
  font-size: 15px;
  font-weight: 800;
`;

const ModalButton = styled.TouchableOpacity`
  flex: 1;
  width: 70%;
  justify-content: center;
`;

const ModalButtonText = styled.Text`
  align-self: center;
  font-size: 16px;
`;

const ModalView = (props: Props) => {
  const [pickerResponse, setPickerResponse] = useState(null);

  const onCameraPress = () => {
    const options: ImagePicker.CameraOptions = {
      saveToPhotos: true,
      mediaType: 'photo',
      cameraType: 'front',
    };
    ImagePicker.launchCamera(options, response => {
      if (response.assets) {
        console.log('due____camera_____:', response.assets);
        // setPickerResponse(response.assets);
      } else {
        console.log('rn-image-picker camera error');
      }
    });
  };

  const onImageLibraryPress = () => {
    const options: ImagePicker.ImageLibraryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.assets) {
        console.log('due____library____:', response.assets);
        // setPickerResponse(response.assets);
      } else {
        console.log('rn-image-picker library error');
      }
    });
  };

  // const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <SafeAreaView>
      <Modal
        isVisible={props.modalVisible}
        hideModalContentWhileAnimating={true}
        onBackdropPress={() => props.setModalVisible(false)}>
        <ModalContainer>
          <ModalTitle>
            <ModalTitleText>게시글 추가</ModalTitleText>
          </ModalTitle>
          <ModalButton onPress={onCameraPress}>
            <ModalButtonText>카메라</ModalButtonText>
          </ModalButton>
          <ModalButton onPress={onImageLibraryPress}>
            <ModalButtonText>앨범</ModalButtonText>
          </ModalButton>
          <ModalButton>
            <ModalButtonText>음악</ModalButtonText>
          </ModalButton>
        </ModalContainer>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalView;
