import {useMutation} from 'react-query';
import {register} from '../apis/auth';
import {AuthError} from '../../model/data';
import {applyToken} from '../client';
import authStorage from '../storages/authStorage';

const useRegister = () => {
  // const [, setUser] = useUserState(); //반환값 무시 문법
  //(물음표) : 사용자 전역으로 저장하는게 로그인에만 필요한거 아닌가?

  //첫 번째 인자는 API 함수에 사용할 인자
  //두 번째 인자는 onSuccess, onSettled, onError 를 넣는다
  const mutation = useMutation(register, {
    onSuccess: data => {
      console.log('useRegister Success + data : ', data);
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
