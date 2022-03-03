import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState} from '../../apis/model/data';

const initialState: AuthState = {
  isLoggedIn: false,
};

const authStateSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    isLogin(state: AuthState, action: PayloadAction<AuthState>) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const {isLogin} = authStateSlice.actions;
export default authStateSlice.reducer;
