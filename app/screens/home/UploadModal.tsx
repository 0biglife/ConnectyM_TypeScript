import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MenuModal} from '../../components';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';
import SimpleModal from '../../components/SimpleModal';
import {RootStackparamList} from '../../navigations/Types';
import {useMutation, useQueryClient} from 'react-query';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {writeArticles} from '../../apis/service/articles';

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
  navigation: NativeStackNavigationProp<RootStackparamList, 'MainTab'>;
}

const UploadModal: React.FC<UploadParams> = ({navigation}) => {
  //Modal Control
  const [cancelModal, setCancelModal] = useState<boolean>(false);
  const [postModal, setPostModal] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const close = () => setModalVisible(false);
  //Parameter
  const [body, setBody] = useState<string>('');
  const [uri, setUri] = useState('');
  //API
  const queryClient = useQueryClient();
  const {mutate: write} = useMutation(writeArticles, {
    onSuccess: () => {
      //invalidation을 통해 query가 stale(신선하지 않다: 상했다)되는 지점을 집어줄 수 있다
      //즉, 기존의 것을 지우고 새로 캐싱하는 과정
      queryClient.invalidateQueries('articles');
      navigation.goBack();
    },
  });

  //useCallback이라는 Hook은 불필요한 렌더링과 연산을 제어하며, 이는 성능 최적화에 기여한다
  //첫 번째 인자 : 함수
  //두 번째 인자 : Dependencies 전달 // 즉, 두 번째 인자가 변경되지 않으면 함수는 발동되지 않아 리렌더링을 방지할 수 있다
  const onSubmit = useCallback(() => {
    write({body, uri});
  }, [write, body, uri]);

  const cameraAccess = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      // compressImageQuality: 0.7,
    })
      .then(imageFromDevice => {
        console.log('ImgaeSource : ', imageFromDevice);
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
      .then(imageFromDevice => {
        // console.log('ImgaeSource : ', image);
        setUri(imageFromDevice.path);
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
    if (body || uri) {
      setCancelModal(true);
    } else {
      setCancelModal(false);
      navigation.goBack();
    }
  };

  const PostingDone = () => {
    if (uri) {
      onSubmit();
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
              <MenuModal
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
              value={body}
              onChangeText={text => setBody(text)}
            />
          </InputContainer>
        </ImageContainer>
      </MainContainer>
    </SafeAreaContainer>
  );
};

export default UploadModal;
