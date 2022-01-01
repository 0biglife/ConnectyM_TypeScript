import React from 'react';
import styled from 'styled-components/native';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.color.bg};
`;

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.color.bg};
  padding: 20px;
`;

const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const UserName = styled.Text`
  //
`;

const Instruction = styled.Text`
  //
`;

const UserButtonWrapper = styled.View`
  //
`;

const UserButton = styled.TouchableOpacity`
  //
`;

const UserButtonText = styled.Text`
  //
`;

const profileView = () => {
  return (
    <SafeAreaContainer>
      <ScrollViewContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ProfileImage source={require('../../assets/artwork/cover1.jpeg')} />
        <UserName>GiriBoy</UserName>
        <Instruction>dkddkdkdkddkkdkdk</Instruction>
        <UserButtonWrapper>
          <UserButton>
            <UserButtonText>Follow</UserButtonText>
          </UserButton>
          <UserButton>
            <UserButtonText>Message</UserButtonText>
          </UserButton>
          <UserButton>
            <UserButtonText>Store</UserButtonText>
          </UserButton>
        </UserButtonWrapper>
      </ScrollViewContainer>
    </SafeAreaContainer>
  );
};

export default profileView;
