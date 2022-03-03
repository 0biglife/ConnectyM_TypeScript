import {useEffect} from 'react';
import {useAuthActions} from './useAuthActions';
import {applyToken} from '../apis/service/client';
import authStorage from '../apis/storages/authStorage';
import authStateStorage from '../apis/storages/authStateStorage';

const useAuthLoadEffect = () => {
  const {authorize, isLogin} = useAuthActions();

  useEffect(() => {
    const fn = async () => {
      //useEffect 내부에는 콜백함수인 async 사용 불가기 떄문에 함수 형태로.
      const auth = await authStorage.get();
      const authState = await authStateStorage.get();
      console.log('Auth Confirmed');
      console.log('auth: ', auth);
      console.log('authState: ', authState);
      if (authState) {
        if (auth) {
          console.log('Auth Confirmed');
          console.log('auth: ', auth);
          console.log('authState: ', authState.isLoggedIn);
          isLogin(authState);
          authorize(auth.user!);
          applyToken(auth.jwt);
        }
        return;
      } else {
        console.log('No User Data Exists');
        return;
      }
    };
    fn();
  }, [authorize, isLogin]);
};

export default useAuthLoadEffect;
