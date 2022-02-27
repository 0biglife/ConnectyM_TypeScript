import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {authorize, logout, User} from '../redux/slices/auth';

export const useAuthActions = () => {
  const dispatch = useDispatch();
  return {
    authorize: (user: User) => dispatch(authorize(user)),
    logout: () => dispatch(logout()),
  };
};
