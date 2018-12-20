import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
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

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}

export default App;
