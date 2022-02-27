import React from 'react';
import styled from 'styled-components/native';
//Redux
import {RootState} from '../../redux/slices';
import {useSelector} from 'react-redux';

const MainContainer = styled.View`
  flex: 1;
  background-color: lightcoral;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const ReduxTest = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <MainContainer>
      <Title>{user ? user.displayName : '로그인 필요'}</Title>
    </MainContainer>
  );
};

export default ReduxTest;
