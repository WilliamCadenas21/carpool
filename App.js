import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignIn2 from './src/components/SignIn2';
import Login2 from './src/components/Login2';
import Terms from './src/components/Terms';
import Test from './src/components/Test';
import Profile from './src/components/Profile';
import HomeScreen from './src/components/HomeScreen';
import Main from './src/components/Main';

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}
//gradlew assembleRelease
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Sign_in: {
      screen: SignIn2,
    },
    Log_in:{
      screen: Login2,
    },
    Terms:{
      screen: Terms,
    },
    Test:{
      screen: Test,
    },
    Profile:{
      screen: Profile,
    },
    Main:{
      screen: Main,
    }
  },
  {
    initialRouteName: 'Home',
  },
);
  
