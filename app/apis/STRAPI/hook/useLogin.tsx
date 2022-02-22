import {useMutation} from 'react-query';
import {login} from '../auth';
import {AuthError} from '../../model/data';
import {useUserState} from '../contexts/UserContext';
import {applyToken} from '../client';
import authStorage from '../storages/authStorage';

const useLogin = () => {
  const [, setUser] = useUserState(); //반환값 무시 문법
  const mutation = useMutation(login, {
    onSuccess: data => {
      console.log(data);
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

export default useLogin;
