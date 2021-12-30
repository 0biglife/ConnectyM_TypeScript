import {SIGN_UP} from '../types';

export const signUp = () => {
  return {
    type: SIGN_UP,
    payload: {
      email: 'example.com',
      token: 'dsjkflsdfdsjdslfk',
    },
  };
};
