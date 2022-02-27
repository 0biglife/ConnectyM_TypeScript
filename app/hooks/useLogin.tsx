import {useMutation} from 'react-query';
import {login} from '../apis/service/auth';
import {AuthError} from '../apis/model/data';
import {applyToken} from '../apis/service/client';
import authStorage from '../apis/storages/authStorage';
import {Alert} from 'react-native';
import {RootStackparamList} from '../navigations/Types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthActions} from './useAuthActions';

const useLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackparamList>>();
  const {authorize} = useAuthActions();

  const mutation = useMutation(login, {
    onSuccess: data => {
      console.log('useLogin Success + data : ', data);
      authorize(data.user);
      applyToken(data.jwt);
      authStorage.set(data);
      navigation.navigate('MainTab');
    },
    onError: (error: AuthError) => {
      console.log(error);
      console.log(error.response?.data);
      Alert.alert('로그인 실패');
    },
  });

  return mutation;
};

export default useLogin;
