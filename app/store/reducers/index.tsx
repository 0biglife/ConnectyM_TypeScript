//여러 리듀서를 묶어주는 역할 : combineReducers

import {combineReducers} from 'redux';
import User from './user_reducer';

const rootReducer = combineReducers({
  User,
});

export default rootReducer;
