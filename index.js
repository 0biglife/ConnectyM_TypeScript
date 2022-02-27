import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';
//Redux/store생성/미들웨어생성을 위해 필요
//enhancer : 여러 미들웨어를 조합해서 스토어를 만드는데 스토어의 인터페이스르 바꿔서 새로운
//            스토어 생성자를 반환하는 함수
import {createStore, applyMiddleware, compose} from 'redux';
//store를 찾기 위함
import {Provider} from 'react-redux';
//비동기처리가 필요한 Actioin Creator위해 필요함
import promiseMiddleware from 'redux-promise';
//reducers
import rootReducer from './app/redux/slices';

//아래 줄은 리덕스 개발자 도구와 미들웨어를 같이 쓰기위함. 크롬확장프로그램에 작성된 자바스크립트 함수.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware)),
);

const appRedux = () => (
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);
