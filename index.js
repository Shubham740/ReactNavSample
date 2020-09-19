/**
 * @format
 */

import {AppRegistry,LogBox} from 'react-native';
import App from './App';
import FirstScreen from './app/src/layout/firstScreen/FirstScreen'
import {name as appName} from './app.json';
LogBox.ignoreAllLogs()
AppRegistry.registerComponent(appName, () => FirstScreen);
