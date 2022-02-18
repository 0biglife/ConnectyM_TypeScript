import {RouteProp} from '@react-navigation/native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Feed } from '../../apis/model/data';
import apiClient from '../../apis/service/client';
import { RootStackparamList } from '../../navigations/Types';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: lightgray;
  justify-content: center;
  align-items: center;
`;

const TestText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

interface UserProfileProp {
  route: RouteProp<RootStackparamList, 'UserProfile'>;
}

const UserProfile: React.FC<UserProfileProp> = ({route}) => {
  const {params} = route;
  // const [data, setData] = useState<Feed>([]);

  // useEffect(() => {
  //   apiClient.get('/feeds').then(response => {
  //     setData(response.data);
  //     params.user_id = data.id;
  //   });
  // }, []);

  console.log('CONSOLE LOG FOR INDEX : ', params.user_id);
  return (
    <SafeContainer>
      <MainContainer>
        <TestText>UserProfile: {params.user_id}</TestText>
      </MainContainer>
    </SafeContainer>
  );
};

export default UserProfile;
