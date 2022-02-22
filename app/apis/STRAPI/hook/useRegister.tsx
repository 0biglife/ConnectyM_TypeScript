import {useMutation} from 'react-query';
import {register} from '../auth';
import {AuthError} from '../../model/data';
import {useUserState} from '../contexts/UserContext';
import {applyToken} from '../client';
import authStorage from '../storages/authStorage';

const useRegister = () => {
  const [, setUser] = useUserState(); //반환값 무시 문법

  const mutation = useMutation(register, {
    onSuccess: data => {
      console.log(data);
      setUser(data.user);
      applyToken(data.jwt);
      authStorage.set(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });

  return mutation;
};

export default useRegister;
