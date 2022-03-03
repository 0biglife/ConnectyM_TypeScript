import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '../model/data';

const key = 'authState';
const authState: AuthState = {
  isLoggedIn: false,
};

const authStateStorage = {
  async get() {
    const rawData = await AsyncStorage.getItem(key);
    if (!rawData) {
      return console.log('AuthState Storage has no Data!');
    }
    try {
      const data: AuthState = JSON.parse(rawData);
      return data;
    } catch (e) {
      return console.log('AuthState Storage Error: ', e);
    }
  },
  setTrue() {
    authState.isLoggedIn = true;
    console.log('setTrue');
    return AsyncStorage.setItem(key, JSON.stringify(authState));
  },
  setFalse() {
    authState.isLoggedIn = false;
    console.log('setFalse');
    return AsyncStorage.setItem(key, JSON.stringify(authState));
  },
};

export default authStateStorage;
