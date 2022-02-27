import {combineReducers} from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

//RootReducer의 반환값 타입형은 RootState type alias로 지정 가능
export type RootState = ReturnType<typeof rootReducer>;
//ReturnType은 특정 함수의 반환값 타입을 가져오는 유틸 타입형
//이 유팁 타입이 Generic에 <typeof 함수명>을 쓰면 해당 함수의 반환값을 조회할 수 있다
//이렇게까지 반환값을 export 하는 이유는
//추후 useSelector를 사용할 때 이 타입을 참조해야하기 때문.
export default rootReducer;
