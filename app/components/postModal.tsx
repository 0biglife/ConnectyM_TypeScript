import React, {useState} from 'react';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Alert, Modal, TouchableOpacity} from 'react-native';

const ModalWrapper = styled.TouchableOpacity`
  flex: 1;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'rgba(0,0,0,0.2)';
`;

const ModalBox = styled.View`
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 200px;
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

const postModal = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <IonIcon name="add" size={24} color="black" style={{marginRight: 8}} />
      <Modal
        visible={open}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setOpen(false);
        }}>
        <ModalWrapper>
          <ModalContainer>
            <ModalBox>
              <ModalTitle>
                <ModalTitleText>게시글 업로드</ModalTitleText>
              </ModalTitle>
              <ModalButton
                onPress={() => {
                  setOpen(false);
                  props.navigation.navigate('postView');
                }}>
                <ModalButtonText>Post</ModalButtonText>
              </ModalButton>
              <ModalButton
                onPress={() => {
                  setOpen(false);
                  // openCamera();
                }}>
                <ModalButtonText>Camera</ModalButtonText>
              </ModalButton>
              <ModalButton
                onPress={() => {
                  setOpen(false);
                  // openLibrary();
                }}>
                <ModalButtonText>Album</ModalButtonText>
              </ModalButton>
              <ModalButton
                onPress={() => {
                  Alert.alert('Music');
                  setOpen(false);
                }}>
                <ModalButtonText>Music</ModalButtonText>
              </ModalButton>
            </ModalBox>
          </ModalContainer>
        </ModalWrapper>
      </Modal>
    </TouchableOpacity>
  );
};

export default postModal;
