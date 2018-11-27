import React from 'react';
import { createSwitchNavigator, 
  createStackNavigator, 
  createDrawerNavigator, 
} from 'react-navigation'
import SignInScreen from './src/screens/SignInScreen';
import LogInScreen from './src/screens/LogInScreen';
import TermScreen from './src/screens/TermScreen';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import AuthLoadingScreen from "./src/screens/AuthLoadingScreen";
import FeedScreen from "./src/screens/FeedScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import {Icon} from 'native-base';

import { 
  View, 
  TouchableOpacity
} from 'react-native';

/*redmi 4x
cd C:\Users\will\AppData\Local\Android\Sdk\platform-tools && adb -s bccfda2c7d34 reverse tcp:8081 tcp:8081
&& cd C:\Users\will\Desktop\carpool
adb -s bccfda2c7d34 reverse tcp:8081 tcp:8081
react-native run-android --variant=release
*/
//API key Google 
//AIzaSyATDEQerU5jm_UjxvncQAdI0BXjTc7XoCs

//build on android
//gradlew assembleRelease
const AuthStackNavigator = createStackNavigator(
  {
    Home:  HomeScreen,
    Sign_in: SignInScreen,
    Log_in: LogInScreen,
    Terms: TermScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

// const AppOtherNavigator = createStackNavigator(
//   {
//     HomeScreen: {
//       screen: Main,
//     },
//     Settings: {
//       screen: SettingsScreen,
//     },
//     Profile: {
//       screen: ProfileScreen,
//     },
//     AppDrawerNavigator: AppDrawerNavigator,
//   }
// );

const AppStackNavigator = createStackNavigator(
  {
    Perfil: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerTransparent: true,
      }),
    },
    Map:{
      screen: MapScreen,
      navigationOptions: () => ({
        headerTransparent: true,
      }),
    },
    Terminos:{
      screen: TermScreen,
      navigationOptions: () => ({
        headerTransparent: false,
      }),
    },
    Setting:{
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: 'Cerrar Sesión',
        headerTransparent: true,
      })
    },
    Feed:{
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
  Perfil:ProfileScreen,
  Map:MapScreen,
  Terminos:TermScreen,
  Setting:SettingsScreen,
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
});