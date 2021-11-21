/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import signUp from './app/screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => signUp);

// AppRegistry.registerComponent(appName, () => App);
