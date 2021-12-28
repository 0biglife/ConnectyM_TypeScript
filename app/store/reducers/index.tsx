//여러 리듀서를 묶어주는 역할 : combineReducers

import {combineReducers} from 'redux';
import Sample from './sample';

const rootReducer = combineReducers({
  Sample,
});

export default rootReducer;
