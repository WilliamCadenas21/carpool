import React from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import SignIn2 from './src/components/SignIn2';
import Login2 from './src/components/Login2';
import Terms from './src/components/Terms';
import Test from './src/components/Test';
import Profile from './src/components/Profile';
import HomeScreen from './src/components/HomeScreen';
import Main from './src/components/Main';
import AuthLoadingScreen from "./src/components/AuthLoadingScreen";
import SettingsScreen from "./src/components/SettingsScreen";
import {Icon} from 'native-base';
import { 
  View, 
  TouchableOpacity
} from 'react-native';


//API key Google 
//AIzaSyATDEQerU5jm_UjxvncQAdI0BXjTc7XoCs

//build on android
//gradlew assembleRelease
const AuthStackNavigator = createStackNavigator(
  {
    Home:  HomeScreen,
    Sign_in: SignIn2,
    Log_in: Login2,
    Terms:Terms,
  }
);

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: Main,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name="home" size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name="settings" size={24} />
      )
    }
  },
});

// AppTabNavigator.navigationOptions = ({ navigation }) => {
//   let { routeName } = navigation.state.routes[navigation.state.index];

//   // You can do whatever you like here to pick the title based on the route name
//   let headerTitle = routeName;

//   return {
//     headerTitle,
//   };
// };

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
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
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});