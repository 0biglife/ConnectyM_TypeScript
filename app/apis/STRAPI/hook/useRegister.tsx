import {useMutation} from 'react-query';
import {register} from '../auth';
import {AuthError} from '../../model/data';
import {useUserState} from '../contexts/UserContext';
import {applyToken} from '../client';

const useRegister = () => {
  const [, setUser] = useUserState(); //반환값 무시 문법

  const mutation = useMutation(register, {
    onSuccess: data => {
      console.log(data);
      setUser(data.user);
      applyToken(data.jwt);
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });

  return mutation;
};

export default useRegister;
