import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchbleWithoutFeedback, StatusBar, SafeAreaView, 
  Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import SignIn from './src/components/SignIn';
import Login from './src/components/Login';
import Terms from './src/components/Terms';
import Test from './src/components/Test';
import Profile from './src/components/Profile';

const urlMainLogo = require('./src/assets/images/main-logo.png');

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Home', header: null};

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle='dark-content' backgroundColor='white'/>
        <View style={styles.titleWrapper}>
          <Image source={urlMainLogo} style={styles.logo} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleWrapperRow}>
              <TouchableOpacity style={styles.button1}
                onPress={() => this.props.navigation.navigate('Log_in')}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.button2}
                onPress={() => this.props.navigation.navigate('Sign_in')}>
                <Text style={styles.buttonText}>Registrarse</Text>
              </TouchableOpacity> 
          </View>      
        </View>
      </View>
    );
  }
}


export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Sign_in: {
      screen: SignIn,
    },
    Log_in:{
      screen: Login,
    },
    Terms:{
      screen: Terms,
    },
    Test:{
      screen: Test,
    },
    Profile:{
      screen: Profile,
    }
  },
  {
    initialRouteName: 'Home',
  },
);
  
const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'white', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitle:{
    color:'black',
    fontSize: 20,
    paddingBottom: 20,

  },
  titleWrapper:{
    justifyContent: 'center',
    flex:1
  },
  titleWrapperRow:{
    flexDirection: 'row',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  button1:{
    backgroundColor:"#ECA228", //naranja
    paddingVertical: 15
  },
  button2:{
    backgroundColor:"#237EE7",//azul
    paddingVertical: 15
  },
  buttonText:{
    height: 20,
    width: 190,
    textAlign: 'center',
    color:'white',
    fontSize:15
  },
  infoContainer:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    padding:20,
  },
});


