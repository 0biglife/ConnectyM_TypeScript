import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {RootStackparamList} from '../../navigations/Types';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {HeartButton} from '../../components';
import {Alert} from 'react-native';

const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

const HeaderSection = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
`;

const UserProfile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-left: 10px;
`;

const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-right: 40px;
  margin-left: 12px;
`;

const ImageSection = styled.Image`
  height: 250px;
`;

const ControlSection = styled.View`
  height: 50px;
  background-color: lightcoral;
  justify-content: center;
`;

const FooterSection = styled.View`
  height: 100%;
  background-color: lightblue;
  padding: 8px;
`;

const PostTime = styled.Text`
  font-size: 12px;
  color: #666;
  padding-top: 4px;
`;

const PostText = styled.Text`
  font-size: 14px;
`;

const InteractionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-left: 10px;
  width: 100px;
`;

const Interaction = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  /* background-color: white; */
  //${props => (props.active ? '#2e64e515' : 'transparent')};
`;

interface ArticleViewProps {
  navigation: NativeStackNavigationProp<RootStackparamList>;
  route: RouteProp<RootStackparamList, 'Article'>;
}

const ArticleView: React.FC<ArticleViewProps> = ({navigation, route}) => {
  const {params} = route;
  const [like, setLike] = useState<boolean>(false);

  const toggleLike = async () => {
    Alert.alert('like');
    setLike(!like);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '게시글 TITLE TEST ' + params.user_id,
      headerBackTitleVisible: false,
      headerTintColor: 'black',
    });
  }, [navigation, params.user_id]);

  return (
    <SafeContainer>
      <HeaderSection>
        {/* <UserProfile source={{uri: params.thumbnailUrl}} /> */}
        <UserName>{params.name}</UserName>
      </HeaderSection>
      {/* <ImageSection source={{uri: params.imageSource}} /> */}
      <ControlSection>
        <InteractionWrapper>
          <HeartButton like={like} onPress={toggleLike} />
          <Interaction>
            <IonIcon name="md-chatbubble-outline" size={22} />
          </Interaction>
          <Interaction>
            <IonIcon name="md-chatbubble-outline" size={22} />
          </Interaction>
        </InteractionWrapper>
      </ControlSection>
      <FooterSection>
        <PostText>{params.title}</PostText>
        <PostTime>{params.postTime}</PostTime>
      </FooterSection>
    </SafeContainer>
  );
};

export default ArticleView;
