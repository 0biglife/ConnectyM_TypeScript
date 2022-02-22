import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthResult} from '../../model/data';

const key = 'auth';

const authStorage = {
  //AsyncStorage는 비동기적으로 작동하기 때문에 async 명시
  async get() {
    //불러오기
    const rawData = await AsyncStorage.getItem(key);
    if (!rawData) {
      return null;
    }
    try {
      const data: AuthResult = JSON.parse(rawData); //불러온 문자열을 JSON 으로 변환
      return data;
    } catch (e) {
      return null;
    }
  },
  set(authResult: AuthResult) {
    return AsyncStorage.setItem(key, JSON.stringify(authResult));
    //값을 저장할 때는 무조건! 문자열 타입으로, 따라서 stringfy 함수 사용
  },
  clear() {
    return AsyncStorage.removeItem(key);
  },
};

export default authStorage;
