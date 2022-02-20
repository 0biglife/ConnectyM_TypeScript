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
  justify-content: flex-end;
  min-width: 100%;
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

const SettingModal = (props: Props) => {
  return (
    <SafeAreaView>
      <Modal
        useNativeDriver={true}
        isVisible={props.modalVisible}
        onBackdropPress={() => props.setModalVisible(false)}>
        <ModalContainer>
          <ModalButton onPress={props.firstFunction}>
            <ModalButtonText>test</ModalButtonText>
          </ModalButton>
        </ModalContainer>
      </Modal>
    </SafeAreaView>
  );
};

export default SettingModal;
