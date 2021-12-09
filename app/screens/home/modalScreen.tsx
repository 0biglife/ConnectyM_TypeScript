import React from 'react';
import styled from 'styled-components/native';
import {Modal, Text} from 'react-native';

interface Props {
  oepn: boolean;
  setOpen: any;
  // body: any;
}

const MainContainer = styled.View`
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

const modalScreen = (props: Props) => {
  return (
    <MainContainer>
      <Modal
        visible={props.oepn}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          props.setOpen(false);
        }}>
        <StyledModalContainer>
          <Text>test</Text>
        </StyledModalContainer>
      </Modal>
    </MainContainer>
  );
};

export default modalScreen;
