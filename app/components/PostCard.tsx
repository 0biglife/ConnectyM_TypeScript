import React, {useState} from 'react';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeartButton from './HeartButton';
import {Alert} from 'react-native';
import {User} from '../apis/model/data';

// const Width = Dimensions.get('window').width;

const Card = styled.View`
  background-color: #ebebeb;
  min-width: 100%;
  margin-bottom: 6px;
`;

const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
`;

const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-right: 40px;
  /* color: ${props => props.theme.color.white}; */
  /* font-family: ; */
`;

const UserInfoText = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const PostTime = styled.Text`
  font-size: 12px;
  color: #666;
  padding-top: 4px;
`;

const PostText = styled.Text`
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
`;

const PostImg = styled.Image`
  width: 100%;
  height: 250px;
  margin-top: 0px;
`;

const InteractionWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
`;

const Interaction = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  padding: 2px 5px;
  background-color: ${props => (props.active ? '#2e64e515' : 'transparent')};
`;

const InteractionText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.active ? '#2e64e5' : '#333')};
  margin-top: 5px;
  margin-left: 5px;
`;

interface ArticleItemProps {
  id: number;
  title: string;
  body: string;
  url: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
  ProfileTapped: () => void;
  ArticleTapped: () => void;
}

const PostCard = ({
  id,
  title,
  body,
  url,
  user,
  published_at,
  created_at,
  updated_at,
  ProfileTapped,
  ArticleTapped,
}: ArticleItemProps) => {
  // const formattedData = new Date(postTime).toLocaleString();
  const [like, setLike] = useState<boolean>(false);

  const toggleLike = async () => {
    Alert.alert('like');
    setLike(!like);
  };

  // likeIcon = item.liked ? 'heart' : 'heart-outline';
  // like 에 대한 control : https://www.youtube.com/watch?v=iyNmGXt4vNA (28min ~ )
  return (
    <Card>
      <UserInfo>
        <TouchableOpacity onPress={ProfileTapped}>
          <UserImg source={{uri: user?.thumbnailUrl}} />
        </TouchableOpacity>
        <UserInfoText>
          <TouchableOpacity onPress={ProfileTapped}>
            <UserName>{user?.username}</UserName>
          </TouchableOpacity>
          <PostTime>{created_at}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostImg source={{uri: url}} />
      <PostText>{body}</PostText>
      <InteractionWrapper>
        <HeartButton like={like} onPress={toggleLike} />
        <Interaction onPress={ArticleTapped}>
          <IonIcon name="md-chatbubble-outline" size={20} />
          <InteractionText>Comment</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
