import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

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

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
  firstFunction: () => void;
  secondFunction: () => void;
  thirdFunction: () => void;
}

const MenuModal = (props: Props) => {
  return (
    <SafeAreaView>
      <Modal
        isVisible={props.modalVisible}
        // hideModalContentWhileAnimating={true}
        onBackdropPress={() => props.setModalVisible(false)}>
        <ModalContainer>
          <ModalTitle>
            <ModalTitleText>게시글 추가</ModalTitleText>
          </ModalTitle>
          <ModalButton onPress={props.firstFunction}>
            <ModalButtonText>추가</ModalButtonText>
          </ModalButton>
          <ModalButton onPress={props.secondFunction}>
            <ModalButtonText>추가</ModalButtonText>
          </ModalButton>
          <ModalButton onPress={props.thirdFunction}>
            <ModalButtonText>추가</ModalButtonText>
          </ModalButton>
        </ModalContainer>
      </Modal>
    </SafeAreaView>
  );
};

export default MenuModal;
