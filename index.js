/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import homeView from './app/screens/home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => homeView);

// AppRegistry.registerComponent(appName, () => App);
