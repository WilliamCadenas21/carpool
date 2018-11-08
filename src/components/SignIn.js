import React from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput,
  TouchbleWithoutFeedback,StatusBar,SafeAreaView, 
  Keyboard, ToachbleOpacity, KeyboardAvoidingView} from 'react-native';

const urlMainLogo = require('../assets/images/main-logo.png');

export default class SignIn extends React.Component {
  static navigationOptions = { title: 'Registro'};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding' 
        style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={urlMainLogo} 
            style={styles.logo}/>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoPosition}>
              <TextInput placeholder={'Nombre completo'} style={styles.input}/>
              <TextInput placeholder={'Email'} style={styles.input}/>
              <TextInput placeholder={'Contraseña'} style={styles.input}/>
              <TextInput placeholder={'Confirmar contraseña'} style={styles.input}/>
            </View>
          </View>
        </KeyboardAvoidingView>     
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
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