import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

interface Props {
  like: boolean;
  onPress: () => void;
}

const EmptyHeart = <IonIcon name="heart-outline" size={24} color="black" />;
const Heart = <IonIcon name="heart" size={24} color="black" />;

const IconView = styled.TouchableOpacity`
  //
`;

const HeartButton = ({like, onPress}: Props) => {
  return <IconView onPress={onPress}>{like ? EmptyHeart : Heart}</IconView>;
};

export default HeartButton;
