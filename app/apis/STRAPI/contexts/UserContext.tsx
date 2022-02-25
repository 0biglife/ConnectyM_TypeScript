import React, {useState, useContext, createContext} from 'react';
import {User} from '../../../apis/model/data';

//사용자 인증 상태를 전역 상태로 관리하려고 한다.
//전역 상태 관리 방법은 Context, Redux, Recoil 등이 있지만 현재 전역 상태를
//관리할 대상이 사용자만 있기 때문에 가장 기본적인 Context를 먼저 적용해보려고 한다.
//추후 필요에 의해 Redux도 공부하려고 한다.

//우선 아래 코드를 이해하기 위해서는 context API의 존재 이유부터 알아야 한다.
//우리는 state와 props에 대해 무수히 많이 들어왔다. 딱 그거에 대한 얘기다.
//Redux처럼 최하위 뷰에서 최상위 뷰의 값을 가져오려면 소모적인 계단 수를 모두 거쳐서
//값을 가져와야하기 때문에 그걸 해결해줄 = 전역 상태 관리 API 이다. okay?
// blog link : https://velog.io/@i_thank/React-Context-API

//Provider : state를 모두 모아둔 것 ( Redux에서의 스토어와 같은 개념인가? )

//Provider
type UserContextState = [User | null, (user: User | null) => void];

const UserContext = createContext<UserContextState | null>(null);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userState = useState<User | null>(null);
  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};

//createContext
export const useUserState = () => {
  const userState = useContext(UserContext);
  if (!userState) {
    throw new Error('UserContext is not used');
  }
  return userState;
};

// export default {UserContextProvider, useUserState};

//세팅이 완료되었으므로, 다음과 같이 사용할 수 있다
// const [user, setUser] = useUserState();
// + App 전체를 Provider로 감싸줄 것 !
