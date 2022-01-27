import React, {useState} from 'react';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ModalView} from '../../components';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamsList} from '../../navigations/Types';
import ImagePicker from 'react-native-image-crop-picker';
import apiClient from '../../apis/service/client';
import {ResponseFeed} from '../../apis/model/data';
import { Alert } from 'react-native';
import SimpleModal from '../../components/SimpleModal';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const TopButtonView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const ImageContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

const PostingImage = styled.Image`
  width: 100%;
  height: 300px;
  border-width: 0.5px;
  border-color: lightgray;
  justify-content: center;
  align-self: center;
`;

const ModalContainer = styled.View`
  width: 100%;
`;

const ProfileChangeText = styled.Text`
  color: #3493d9;
  padding-top: 10px;
`;

const InputContainer = styled.View`
  padding-top: 10px;
`;

const EditInput = styled.TextInput`
  min-width: 100%;
  height: 100px;
  font-size: 16px;
  background-color: white;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 8px;
  padding: 10px;
  line-height: 20px;
`;

export interface UploadParams {
  navigation: StackNavigationProp<HomeParamsList, 'UploadView'>;
}

const UploadModal: React.FC<UploadParams> = ({ navigation }) => {
  const [cancelModal, setCancelModal] = useState<boolean>(false);
  const [postModal, setPostModal] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState<string>('');
  const close = () => setModalVisible(false);
  const [uri, setUri] = useState('');

  const cameraAccess = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      // compressImageQuality: 0.7,
    })
      .then(image => {
        console.log('ImgaeSource : ', image);
      })
      .finally(close);
  };

  const libraryAccess = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      // compressImageQuality: 0.7,
    })
      .then(image => {
        // console.log('ImgaeSource : ', image);
        setUri(image.path);
      })
      .finally(close);
  };

  const imageSource = require('../../assets/images/profileDefault.jpeg');

  let today = new Date();
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  };
  let timeSet = `${time.year}-${time.month}-${time.date}`;

  const CancelLogic = () => {
    if (textInput || uri) {
      setCancelModal(true);
    } else {
      setCancelModal(false);
      navigation.goBack();
    }
  };

  const PostingDone = () => {
    if (uri) {
      apiClient
        .post<ResponseFeed>('/feeds/add', {
          title: textInput,
          url: uri,
          thumbnailUrl: uri,
          postTime: timeSet,
        })
        .then(response => {
          console.log(response.data);
        });
      navigation.goBack();
    } else {
      setPostModal(false);
      Alert.alert('사진이 있어야 게시 가능합니다.');
    }
  };

  return (
    <SafeAreaContainer>
      <MainContainer>
        <TopButtonView>
          <TouchableOpacity onPress={() => CancelLogic()}>
            <IonIcon name="close-outline" style={{fontSize: 35}} />
            <SimpleModal
              modalVisible={cancelModal}
              setModalVisible={setCancelModal}
              alertTitle="취소하시겠습니까?"
              leftTitle="돌아가기"
              rightTitle="확인"
              leftButton={() => setCancelModal(false)}
              rightButton={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Title>게시글 추가</Title>
          <TouchableOpacity onPress={() => setPostModal(true)}>
            <IonIcon name="checkmark" style={{fontSize: 35}} color="#3493D9" />
            <SimpleModal
              modalVisible={postModal}
              setModalVisible={setPostModal}
              alertTitle="업로드하시겠습니까?"
              leftTitle="취소"
              rightTitle="업로드"
              leftButton={() => setPostModal(false)}
              rightButton={() => PostingDone()}
            />
          </TouchableOpacity>
        </TopButtonView>
        <ImageContainer>
          <PostingImage source={uri ? {uri} : imageSource} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <ModalContainer>
              <ProfileChangeText>Posting your photo</ProfileChangeText>
              <ModalView
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                firstFunction={cameraAccess}
                secondFunction={libraryAccess}
                thirdFunction={cameraAccess}
              />
            </ModalContainer>
          </TouchableOpacity>
          <InputContainer>
            <EditInput
              placeholder="문구 입력"
              placeholderTextColor="gray"
              multiline={true}
              textAlignVertical="top"
              onChangeText={text => setTextInput(text)}
            />
          </InputContainer>
        </ImageContainer>
      </MainContainer>
    </SafeAreaContainer>
  );
};

export default UploadModal;
