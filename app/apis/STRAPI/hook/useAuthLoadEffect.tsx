import { forNoAnimation } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import {useEffect} from 'react';
import {applyToken} from '../client';
import {useUserState} from '../contexts/UserContext';
import authStorage from '../storages/authStorage';

const useAuthLoadEffect = () => {
  const [, setUser] = useUserState();

  useEffect(() => {
    const fn = async () => {
      //useEffect 내부에는 콜백함수인 async 사용 불가기 떄문에 함수 형태로.
      const auth = await authStorage.get();
      if (!auth) {
        return;
      }
      setUser(auth.user); //auth가 존재한다면
      applyToken(auth.jwt);
    };
    fn();
  }, [setUser]);
};

export default useAuthLoadEffect;
