import {SIGN_UP} from '../types';

export default function userReducer(
  state = {},
  action: {type: string; payload: {email: string; token: string}},
) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        auth: {
          email: action.payload.email || false,
          token: action.payload.token || false,
        },
      };
    default:
      return state;
  }
}
