import React from 'react';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';

// const Width = Dimensions.get('window').width;

const Card = styled.View`
  background-color: #ebebeb; //#f8f8f8;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
  /* width: 100%; */
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

const PostCard = ({item}) => {
  // likeIcon = item.liked ? 'heart' : 'heart-outline';
  // like 에 대한 control : https://www.youtube.com/watch?v=iyNmGXt4vNA (28min ~ )
  return (
    <Card>
      <UserInfo>
        <UserImg
          source={{
            uri: item.thumbnailUrl,
          }}
        />
        <UserInfoText>
          <UserName>{item.id}</UserName>
          <PostTime>{item.id}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostImg
        source={{
          uri: item.url,
        }}
      />
      {/* {item.urlToImage == '' ? <Divider /> : <PostImg source={item.urlToImage} />} */}
      <PostText>{item.title}</PostText>
      <InteractionWrapper>
        <Interaction active>
          <IonIcon name="heart" size={22} color="#2e64e5" />
          <InteractionText active>Like</InteractionText>
        </Interaction>
        <Interaction>
          <IonIcon name="md-chatbubble-outline" size={20} />
          <InteractionText>Comment</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
