import {useCallback} from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';

interface InformParams {
  title?: string;
  message: string;
}

const useInform = () => {
  const inform = useCallback(({title, message}: InformParams) => {
    if (Platform.OS === 'ios') {
      Alert.alert(title ?? '알림', message);
    } else if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  }, []);
  return inform;
};

export default useInform;
