import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthResult, User} from '../../apis/model/data';

const initialState: AuthResult = {
  jwt: '',
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //Shorthand method name로 function 명시 생략 가능
    authorize(state: AuthResult, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      //이 리듀서 사용하는 과정에서 action이 필요없으므로 인자 생략 가능
      state.user = null;
    },
  },
});

export const {authorize, logout} = authSlice.actions;
export default authSlice.reducer;
