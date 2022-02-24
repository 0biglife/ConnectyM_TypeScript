import {useMutation} from 'react-query';
import {register} from '../apis/auth';
import {AuthError} from '../../model/data';
import {useUserState} from '../contexts/UserContext';
import {applyToken} from '../client';
import authStorage from '../storages/authStorage';

const useRegister = () => {
  const [, setUser] = useUserState(); //반환값 무시 문법

  //첫 번째 인자는 API 함수에 사용할 인자
  //두 번째 인자는 onSuccess, onSettled, onError 를 넣는다
  const mutation = useMutation(register, {
    onSuccess: data => {
      console.log('useRegister Success + data : ', data);
      setUser(data.user);
      applyToken(data.jwt);
      authStorage.set(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
      console.log(error.response?.data);
    },
  });

  return mutation;
};

export default useRegister;
