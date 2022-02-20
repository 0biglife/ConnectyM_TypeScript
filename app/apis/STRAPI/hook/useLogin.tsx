import {useMutation} from 'react-query';
import {login} from '../auth';
import {AuthError} from '../../model/data';

const useLogin = () => {
  const mutation = useMutation(login, {
    onSuccess: data => {
      console.log(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });

  return mutation;
};

export default useLogin;
