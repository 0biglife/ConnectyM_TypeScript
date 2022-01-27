import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

interface Props {
  modalVisible: boolean;
  setModalVisible: any;
  alertTitle: string;
  leftTitle: string;
  rightTitle: string;
  leftButton: () => void;
  rightButton: () => void;
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
  justify-content: space-evenly;
  width: 220px;
  max-height: 120px;
  background-color: white;
  border-radius: 14px;
`;

const ModalTitle = styled.View`
  width: 70%;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
`;

const ModalTitleText = styled.Text`
  align-self: center;
  font-size: 15px;
  font-weight: 600;
`;

const ModalButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
`;

const ModalButtonText = styled.Text`
  align-self: center;
  font-size: 16px;
`;

const SimpleModal = (props: Props) => {
  return (
    <SafeAreaView>
      <Modal
        isVisible={props.modalVisible}
        animationInTiming={1}
        animationOutTiming={1}
        // hideModalContentWhileAnimating={true}
        onBackdropPress={() => props.setModalVisible(false)}>
        <ModalContainer>
          <ModalTitle>
            <ModalTitleText>{props.alertTitle}</ModalTitleText>
          </ModalTitle>
          <ButtonWrapper>
            <ModalButton onPress={props.leftButton}>
              <ModalButtonText>{props.leftTitle}</ModalButtonText>
            </ModalButton>
            <ModalButton onPress={props.rightButton}>
              <ModalButtonText>{props.rightTitle}</ModalButtonText>
            </ModalButton>
          </ButtonWrapper>
        </ModalContainer>
      </Modal>
    </SafeAreaView>
  );
};

export default SimpleModal;
