import {SIGN_UP} from '../types';

export const signUp = () => {
  return {
    type: SIGN_UP,
    payload: {
      //payload: 전송되는 데이터를 뜻함
      email: 'example.com',
      token: 'dsjkflsdfdsjdslfk',
    },
  };
};
