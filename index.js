/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import App1 from './js/App1';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler'



// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => App1);
