import {useMutation} from 'react-query';
import {login} from '../auth';
import {AuthError} from '../../model/data';
import {useUserState} from '../contexts/UserContext';
import {applyToken} from '../client';
import authStorage from '../storages/authStorage';
import {Alert} from 'react-native';
import {RootStackparamList} from '../../../navigations/Types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const useLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackparamList>>();
  const [, setUser] = useUserState(); //반환값 무시 문법

  const mutation = useMutation(login, {
    onSuccess: data => {
      console.log('useLogin Success + data : ', data);
      setUser(data.user);
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
