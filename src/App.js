import React, { Component } from 'react';
import SwitchNavigator from './Navigator';

/*
git stash //for stash any change in your repository
*/
/*
API key Google
AIzaSyATDEQerU5jm_UjxvncQAdI0BXjTc7XoCs
*/
/*
Clear Bundle
watchman watch-del-allBundle Debug Build
react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
*/

export default class App extends Component {
  render() {
    return (
      <SwitchNavigator />
    );
  }
}
