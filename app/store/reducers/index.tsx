//여러 리듀서를 묶어주는 역할 : combineReducers
//여러 리뷰서를 합친 리듀서를 루트 리듀서라고 한다.
import {combineReducers} from 'redux';
import User from './userReducer';

const rootReducer = combineReducers({
  User,
});

export default rootReducer;
