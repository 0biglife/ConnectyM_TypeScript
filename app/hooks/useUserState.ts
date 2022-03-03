import {useSelector} from 'react-redux';

export const useLoggedIn = () => {
  return useSelector(state => state.authState);
};
