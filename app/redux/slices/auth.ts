import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../apis/model/data';

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //Shorthand method name로 function 명시 생략 가능
    authorize(state: AuthState, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      //이 리듀서 사용하는 과정에서 action이 필요없으므로 인자 생략 가능
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const {authorize, logout} = authSlice.actions;
export default authSlice.reducer;
