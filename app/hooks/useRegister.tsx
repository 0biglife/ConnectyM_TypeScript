import {useMutation} from 'react-query';
import {register} from '../apis/service/auth';
import {AuthError} from '../apis/model/data';
import {applyToken} from '../apis/service/client';
import authStorage from '../apis/storages/authStorage';
import useInform from './useInform';

const useRegister = () => {
  const inform = useInform();
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
      const message =
        error.response?.data.data?.[0]?.messages[0].message ?? '회원가입 실패';
      inform({
        title: '오류',
        message,
      });
    },
  });

  return mutation;
};

export default useRegister;
