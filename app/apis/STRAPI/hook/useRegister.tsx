import {useMutation} from 'react-query';
import {register} from '../auth';
import {AuthError} from '../../model/data';

const useRegister = () => {
  const mutation = useMutation(register, {
    onSuccess: data => {
      console.log(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });

  return mutation;
};

export default useRegister;
