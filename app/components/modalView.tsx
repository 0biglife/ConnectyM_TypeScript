import React from 'react';
import styled from 'styled-components/native';
// import {TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

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
  /* flex-direction: column;
  align-items: center;
  width: 320px;
  height: 220px; */
  flex: 1;
  background-color: red;
  /* border-radius: 10px; */
`;

const ModalText = styled.Text`
  color: red;
`;

const ModalView = (props: Props) => {
  // const [modalVisible, setmodalVisible] = useState<boolean>(false);
  return (
    <SafeAreaView>
      <Modal
        isVisible={props.modalVisible}
        hideModalContentWhileAnimating={true}
        onBackdropPress={() => props.setModalVisible(false)}>
        <ModalContainer>
          <ModalText>modal view testing;</ModalText>
        </ModalContainer>
      </Modal>
    </SafeAreaView>
    // <SafeAreaView>
    //   <Modal
    //     isVisible={props.open}
    //     useNativeDriver={true}
    //     hideModalContentWhileAnimating={true}
    //     style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    //   >
    //     <ModalContainer>
    //       <ModalText>hi</ModalText>
    //     </ModalContainer>
    //   </Modal>
    // </SafeAreaView>
  );
};

export default ModalView;
