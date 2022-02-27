import {useEffect} from 'react';
import {useAuthActions} from './useAuthActions';
import {applyToken} from '../apis/service/client';
import authStorage from '../apis/storages/authStorage';

interface Props {
  dataExist: string;
}

const useAuthLoadEffect = () => {
  const {authorize} = useAuthActions();

  useEffect(() => {
    const fn = async () => {
      //useEffect 내부에는 콜백함수인 async 사용 불가기 떄문에 함수 형태로.
      const auth = await authStorage.get();
      if (!auth) {
        console.log('No User Data Exists');
        return;
      }
      authorize(auth.user); //auth가 존재한다면
      applyToken(auth.jwt);
      console.log('UserAuthLoadEffect - User and Token already Existed');
      return;
    };
    fn();
  }, [authorize]);
};

export default useAuthLoadEffect;
