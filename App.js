import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchbleWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, ToachbleOpacity, KeyboardAvoidingView} from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import SignIn from './src/components/SignIn';
import Login from './src/components/Login';

const urlMainLogo = require('./src/assets/images/main-logo.png');

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Welcome', header: null};
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Image source={urlMainLogo} style={styles.logo} />
        </View>

        <View style={styles.subtitle}>
          <View style={styles.titleWrapperRow}>
              <Button
              color="#ECA228"
              title="Iniciar Sesión"
              onPress={() => this.props.navigation.navigate('Log_in')}
              />
              <Button
              color="#237EE7"
              title="Registrase"
              onPress={() => this.props.navigation.navigate('Sign_in')}
              />
          </View>
        </View> 
        
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'white', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleCar:{
    color: '#ECA228', //orange
    fontSize: 35,
    fontWeight: 'bold'
  },
  titlePool:{
    color: '#237EE7', // blue
    fontSize: 35,
    fontWeight: 'bold'
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
   container:{
    flex: 1,
    backgroundColor: 'white', 
    flexDirection: 'column'
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  infoContainer:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding:20,
  },
  input:{
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'gray', 
    borderWidth:1
  },
  infoPosition:{
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex:1
  }
});

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Sign_in: {
      screen: SignIn,
    },
    Log_in:{
      screen: Login,
    }
  },
  {
    initialRouteName: 'Home',
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}