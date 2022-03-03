import {useMutation} from 'react-query';
import {login} from '../apis/service/auth';
import {AuthError} from '../apis/model/data';
import {applyToken} from '../apis/service/client';
import authStorage from '../apis/storages/authStorage';
import {RootStackparamList} from '../navigations/Types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthActions} from './useAuthActions';
import useInform from './useInform';
import authStateStorage from '../apis/storages/authStateStorage';

const useLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackparamList>>();
  const {authorize} = useAuthActions();
  const inform = useInform();

  const mutation = useMutation(login, {
    onSuccess: data => {
      console.log('useLogin Success + data : ', data);
      authorize(data.user!);
      applyToken(data.jwt);
      authStorage.set(data);
      authStateStorage.setTrue();
      navigation.navigate('MainTab');
    },
    onError: (error: AuthError) => {
      const message =
        error.response?.data.data?.[0]?.messages[0].message ?? '로그인 실패';
      inform({
        title: '오류',
        message,
      });
    },
  });

  return mutation;
};

export default useLogin;
