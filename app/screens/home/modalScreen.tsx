import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Alert, Modal, Text} from 'react-native';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 220px;
  background-color: red;
  border-radius: 10px;
`;

const modalScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <SafeContainer>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          Alert.alert('Modal closed');
          setModalVisible(!modalVisible);
        }}>
        <StyledModalContainer>
          <Text>test</Text>
        </StyledModalContainer>
      </Modal>
    </SafeContainer>
  );
};

export default modalScreen;
