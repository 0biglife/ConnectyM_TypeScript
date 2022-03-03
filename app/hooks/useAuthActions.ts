import {bindActionCreators} from 'redux';
import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {authorize, logout} from '../redux/slices/auth';
import {isLogin} from '../redux/slices/authState';

export const useAuthActions = () => {
  const dispatch = useDispatch();
  //bindActionCreators: 액션 생성 함수들을 첫 번째 인자로 넣어준다
  //이를 통해 액션 생성 함수들의 파라미터 타입 생략 가능
  return useMemo(
    () => bindActionCreators({authorize, logout, isLogin}, dispatch),
    [dispatch],
  );
  //useMemo를 쓰는 이유 : 컴포넌트 랜더링될 때마다 bindActionCreator가 호출되어
  //각 함수들이 새로 선언되는데, 혹시나 useEffect에서 사용하게 되면 버그 발생 가능.
};
