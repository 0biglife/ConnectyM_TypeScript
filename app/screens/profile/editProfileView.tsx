import React from 'react';
import styled from 'styled-components/native';

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

const editProfileView = (route, navigation) => {
  return (
    <SafeAreaContainer>
      <Title> editProfile View </Title>
    </SafeAreaContainer>
  );
};

export default editProfileView;
