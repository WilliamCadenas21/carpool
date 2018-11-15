import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchbleWithoutFeedback, StatusBar, SafeAreaView, 
  Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

const urlMainLogo = require('../assets/images/main_logo.jpg');

export default class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Home', header: null};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar barStyle='dark-content' backgroundColor='white'/>

          <View style={styles.logoContainer}>
            <Image source={urlMainLogo} style={styles.logo} />
          </View>

          <TouchableOpacity style={styles.button1}
            onPress={() => this.props.navigation.navigate('Log_in')}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.button2}
            onPress={() => this.props.navigation.navigate('Sign_in')}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>   

        </View>
      </SafeAreaView>  
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white', 
    flexDirection: 'column',
    justifyContent:'center',
    paddingLeft:10,
    paddingRight:10,
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:60,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom:0,
  },
  button1:{
    backgroundColor:"#ECA228",//naranja
    paddingVertical: 15,
    marginBottom:10,
  },
  button2:{
    backgroundColor:"#237EE7",//azul
    paddingVertical: 15,
    marginBottom:10,
  },
  buttonText:{
    textAlign: 'center',
    color:'white',
    fontSize:15
  },
});


