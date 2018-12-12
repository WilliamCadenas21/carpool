import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Icon
} from 'native-base';
//Screens
import SignInScreen from './src/screens/SignInScreen';
import LogInScreen from './src/screens/LogInScreen';
import TermScreen from './src/screens/TermScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import FeedScreen from './src/screens/FeedScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditScreen from './src/screens/EditScreen';
//components
import CustomDrawerContentComponent from './src/components/CustomDrawerContentComponent';


/*
git stash //for stash any change in your repository
*/
/*redmi 4x
cd C:\Users\will\AppData\Local\Android\Sdk\platform-tools && adb -s bccfda2c7d34 reverse tcp:8081 tcp:8081
cd C:\Users\will\Desktop\carpool && react-native run-android
adb -s bccfda2c7d34 reverse tcp:8081 tcp:8081
react-native run-android --variant=release
*/
/*
API key Google
AIzaSyATDEQerU5jm_UjxvncQAdI0BXjTc7XoCs
*/
/*
build on android
cd C:\Users\will\Desktop\carpool\android && gradlew assembleRelease

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

const AuthStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Sign_in: SignInScreen,
    Log_in: LogInScreen,
    Terms: TermScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppStackNavigator = createStackNavigator(
  {
    Perfil: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerTransparent: true,
      }),
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: () => ({
        headerTransparent: true,
      }),
    },
    Map: {
      screen: MapScreen,
      navigationOptions: () => ({
        headerTransparent: true,
      }),
    },
    Terminos: {
      screen: TermScreen,
      navigationOptions: () => ({
        headerTransparent: false,
      }),
    },
    Setting: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: 'Cerrar Sesión',
        headerTransparent: true,
      })
    },
    Feed: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{ paddingHorizontal: 10 }}>
              <Icon name="menu" />
            </View>
          </TouchableOpacity>
        ),
        headerTransparent: true,
      })
    }
  },
  {
    initialRouteName: 'Feed'
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Feed: AppStackNavigator,
  Perfil: ProfileScreen,
  Map: MapScreen,
  Terminos: TermScreen,
  Setting: SettingsScreen,
},
  {
    contentComponent: CustomDrawerContentComponent,
  });

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
});
