import {useSelector} from 'react-redux';

export const useUser = () => {
  return useSelector(state => state.auth);
};

export const useLoggedIn = () => {
  return useSelector(state => state.auth.isLoggedIn);
};