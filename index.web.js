/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App.web';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
